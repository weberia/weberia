'use strict';

var arangojs = require('arangojs')()

exports.register = function (plugin, options, next) {

  console.log('connecting to ' + options.dbName)
  arangojs.useDatabase(options.dbName);
  plugin.expose('connection', arangojs)

  /* possible arango json result from above:
   
  {
    "_connection":{
      "config":{
        "url":"http://localhost:8529",
        "arangoVersion":20300,
        "agentOptions":{
          "maxSockets":3,
          "keepAlive":true,
          "keepAliveMsecs":1000
        },
        "headers":{
          "x-arango-version":20300
        }
      }
    },
    "_api":{
      "_connection":{
        "config":{
          "url":"http://localhost:8529",
          "arangoVersion":20300,
          "agentOptions":{
            "maxSockets":3,
            "keepAlive":true,
            "keepAliveMsecs":1000
          },
          "headers":{
            "x-arango-version":20300
          }
        }
      },
      "_path":"_api"
    }
   "name":"_system"
  }

  */

  plugin.log(['storix', 'info'], 'ArangoDB connection established')
  return next()

}

exports.register.attributes = {
  pkg: require('../package.json')
}

