'use strict';

/*
const internals = {};

exports = module.exports = internals.Storix = function() {

}

internals.Storix.prototype.getProduct = function (id) {

  var product = products.filter(function(p) {
    return p.id == id;
  }).pop();

  return 'Product name: ' + product.name;

}

var products = [{
    id: 1,
    name: 'Guitar'
  },
  {
    id: 2,
    name: 'Banjo'
  }
];
*/

var arango = require('arangojs')();

exports.register = function (plugin, opts, next) {
  opts = opts || {}
  /*
  if (!opts.url) {
    opts.port = opts.port || 8529
    opts.host = opts.host || 'localhost'
    opts.db = opts.db || '_system'
  } else {
    var url = require('url').parse(opts.url)
    opts.port = parseInt(url.port, 10) || 8529
    opts.host = url.hostname || 'localhost'
    opts.db = url.pathname ? url.pathname.replace(/^\//, '') : '_system'

    if (url.auth)
      opts.authKey = url.auth.split(':')[1]
  }
  
  arango.useDatabase(opts, function (err, conn) {
    if (err) {
      plugin.log(['storix', 'error'], err.message)
      console.error(err)
      return next(err)
    }

    plugin.expose('connection', conn)
    plugin.expose('library', arango)
    plugin.expose('arango', arango)
    plugin.bind({
      arangodbConn: conn,
      arangodb: arango
    })
   */
/*
  arango.useDatabase(opts.dbName, function (err, conn) {
    if (err) {
      plugin.log(['storix', 'error'], err.message)
      console.error(err)
      return next(err)
    }
*/
    arango.useDatabase(opts.dbName);
    plugin.expose('connection', arango)

    plugin.log(['storix', 'info'], 'ArangoDB connection established')
    /*
  });
*/
  return next()

}

exports.register.attributes = {
  pkg: require('../package.json')
}

