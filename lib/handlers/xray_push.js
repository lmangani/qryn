/* 
  X-Ray Push Handler
  
  Segment Documentation: https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html
  Example Segment:
  
  {
    "trace_id"   : "1-5759e988-bd862e3fe1be46a994272793",
    "id"         : "defdfd9912dc5a56",
    "start_time" : 1461096053.37518,
    "end_time"   : 1461096053.4042,
    "name"       : "www.example.com",
    "http"       : {
      "request"  : {
        "url"        : "https://www.example.com/health",
        "method"     : "GET",
        "user_agent" : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/601.7.7",
        "client_ip"  : "11.0.3.111"
      },
      "response" : {
        "status"         : 200,
        "content_length" : 86
      }
    }
  }
  
*/

*/

  TODO:

  - time start/end handlers
  - optional tag extraction

*/


const stringify = require('../utils').stringify

function handler (req, res) {
  const self = this
  req.log.debug('POST /xray/api/push')
  if (!req.body) {
    req.log.error('No Request Body!')
    res.code(500).send()
    return
  }
  if (this.readonly) {
    req.log.error('Readonly! No push support.')
    res.code(500).send()
    return
  }
  let streams
  if (
    req.headers['content-type'] &&
                req.headers['content-type'].indexOf('application/json') > -1
  ) {
    streams = req.body
  }
  req.log.info({ streams }, 'streams')
  if (streams) {
    streams.forEach(function (stream) {
      req.log.debug({ stream }, 'ingesting xray stream')
      let finger = null
      let JSONLabels = {}
      try {
        try {
          JSONLabels.type = 'xray'
          if (stream.trace_id) JSONLabels.trace_id = stream.trace_id
          if (stream.parent_id) JSONLabels.parent_id = stream.parent_id
          JSONLabels = Object.fromEntries(Object.entries(JSONLabels).sort())
        } catch (err) {
          req.log.error({ err })
          return
        }
        // Calculate Fingerprint
        const strJson = stringify(JSONLabels)
        finger = self.fingerPrint(strJson)
        req.log.debug({ JSONLabels, finger }, 'LABELS FINGERPRINT')
        // Store Fingerprint
        self.bulk_labels.add([[
          new Date().toISOString().split('T')[0],
          finger,
          strJson,
          JSONLabels.traceId || ''
        ]])
        self.labels.add(finger.toString(), stream.labels)
        for (const key in JSONLabels) {
          req.log.debug({ key, data: JSONLabels[key] }, 'Storing label')
          self.labels.add('_LABELS_', key)
          self.labels.add(key, JSONLabels[key])
        }
      } catch (err) {
        req.log.error({ err }, 'failed ingesting xray stream')
      }
     
      // Store xray Object
      const values = [
        finger,
        BigInt((stream.timestamp || new Date().getTime() * 1000) + '000'),
        null, // no metrics for now
        JSON.stringify(xray) || ''
      ]
      req.log.debug({ finger, values }, 'store')
      self.bulk.add([values])
    })
  }
  res.code(200).send()
}

module.exports = handler
