var Storix = require('rethinkdb')

exports.register = function (plugin, opts, next) {
  opts = opts || {}
  if (!opts.url) {
    opts.port = opts.port || 28015
    opts.host = opts.host || 'localhost'
    opts.db = opts.db || 'test'
  } else {
    var url = require('url').parse(opts.url)
    opts.port = parseInt(url.port, 10) || 28015
    opts.host = url.hostname || 'localhost'
    opts.db = url.pathname ? url.pathname.replace(/^\//, '') : 'test'

    if (url.auth)
      opts.authKey = url.auth.split(':')[1]
  }

  Storix.connect(opts, function (err, conn) {
    if (err) {
      plugin.log(['storix', 'error'], err.message)
      console.error(err)
      return next(err)
    }

    plugin.expose('connection', conn)
    plugin.expose('library', Storix)
    plugin.expose('rethinkdb', Storix)
    plugin.bind({
      rethinkdbConn: conn,
      rethinkdb: Storix
    });

    plugin.log(['storix', 'info'], 'RethinkDB connection established');
    //return next();
  })
  return next();
}

exports.register.attributes = {
  pkg: require('../package.json')
}

