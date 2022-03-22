const errors = require('./errors')
const { rawStream } = require('../db/clickhouse')
module.exports = async (req, res) => {
  const format = req.query.format
  let query = req.method === 'POST' ? req.body : req.query.query
  if (!query) {
    throw new errors.CLokiBadRequest('query is required')
  }
  if (!format) {
    throw new errors.CLokiBadRequest('format is required')
  }
  if (query.match(/FORMAT \w+\s*$/)) {
    throw new errors.CLokiBadRequest('FORMAT inside query is not supported')
  }
  query += ` FORMAT ${format}`
  try {
    const stream = await rawStream(query)
    stream.data.pipe(res.raw)
    await new Promise((resolve, reject) => {
      stream.data.once('end', resolve)
      stream.data.once('error', e => reject(e))
    })
    res.sent = true
    res.raw.end()
  } catch (e) {
    throw new errors.CLokiBadRequest(e)
  }
}
