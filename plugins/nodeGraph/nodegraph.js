var logfmt = require('logfmt');
const { PluginLoaderBase } = require('plugnplay')

/**
 * @class Plugin
 * @property {string} query
 * @property start {number} start in NS
 * @property end {string} end in NS
 * @property type {string} promql or logql
 * @property limit {number}
 * @property {{
 *   logql: (query: string, startNS: number, endNS: number, limit: number) => Promise<Object>
 * }} API
 *   promql: (query: string, startNS: number, endNS: number, limit: number) => Promise<Object> //not implemented
 */
class Plugin {
  /**
   * @method
   * @name check
   * @this {Plg}
   * @returns {boolean} if this plugin is usable for the query
   */
  check () {
    return this.query.match(/^toNodeGraph\(.+\)\s*$/)
  }

  /**
   * @method
   * @name process
   * @this {Plg}
   * @returns {Promise<{type: string, out: string}>} The raw output
   */
  async process () {
    // Parse logql query from toNodeGraph() and use to resolve a stream of events
    try { const match = this.query.match(/^toNodeGraph\((.+)\)/) } catch(e){ console.log(e) }
    // Parse logfmt parameters from params() and use them to resolve the node/edge mapping from labels
    try { const params = logfmt.parse( this.query.match(/params\((.+)\)/) ) || {} } catch(e){ const params = {} }
    const response = await this.API.logql(match[1], this.start, this.end, this.limit)
    let config = {
      "arc__1":{
        "displayName": "Node",
        "color":"green"
      }
    }
    let nodes = []
    let edges = []
    
    for (const stream of response.data.result) {
      const labels = JSON.stringify(stream.stream)
      for (const val of stream.values) {
        
        nodes.push({
          "id": labels[params.source],
          "title": labels[params.title] || "",
          "subTitle": labels[params.subtitle] || "",
          "mainStat": val[1].substring ? val[1] : "",
          "arc__1": val[1].toFixed ? val[1] || 0
        })
          
        if (labels[params.target] && labels[params.source]){
            edges.push({
              "id": labels[params.source],
              "source": labels[params.source],
              "target": labels[params.target],
              "mainStat": val[1] : "",
            })
        }
      }
    }
    return {
      type: 'application/javascript',
      out: { nodes, edges, config }
    }
  }
}
class Plg extends PluginLoaderBase {
  exportSync (api) {
    return new Plugin()
  }
}

module.exports = Plg


/*

Example Node Graph Object reference:

{
  "config":{
    "arc__1":{
      "displayName":"First factor",
      "color":"green"
    },
    "arc__2":{
      "displayName":"Second factor",
      "color":"red"
    },
    "arc__3":{
      "displayName":"Third factor",
      "color":"blue"
    },
    "mainStat": {
      "displayName": " ",
      "color": ""
    },
    "secondaryStat": {
      "displayName": " ",
      "color": ""
    },
    "links": [
      {
        "url": "",
        "title": "Request rate",
        "internal": {
          "query": {
            "expr": "rate(traces_service_graph_request_total{server=\"${__data.fields.id}\"}[$__interval])",
          },
          "datasourceUid": "prom",
          "datasourceName": "Prometheus",
        }
      },
      {
        "url": "",
        "title": "Failed request rate",
        "internal": {
          "query": {
            "expr": "rate(traces_service_graph_request_failed_total{server=\"${__data.fields.id}\"}[$__interval])",
          },
          "datasourceUid": "prom",
          "datasourceName": "Prometheus",
        }
      }
    ]
  },
  "nodes":[
    {
      "id":"id1",
      "title":"Title of element 1",
      "subTitle":"subtitle of element 1",
      "mainStat":"received: 50kB",
      "secondaryStat":"sent: 12kB",
      "arc__1":0.3,
      "arc__2":0.2,
      "arc__3":0.5
    },
    {
      "id":"id2",
      "title":"Title of element 2",
      "subTitle":"subtitle of element 2",
      "mainStat":"received: 230MB",
      "secondaryStat":"sent: 142kB",
      "arc__1":0.6,
      "arc__2":0.2,
      "arc__3":0.2
    }
  ],
  "edges":[
    {
      "id":"id1-id2",
      "source":"id1",
      "target":"id2",
      "mainStat":"conn: 3244, closed: 3235",
      "secondaryStat":"s: 3.25KB/s, r: 3.99KB/s"
    }
  ]
}


*/
