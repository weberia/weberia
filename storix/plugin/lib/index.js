var rethink = require('rethinkdb')

exports.register = function (plugin, opts, next) {
  opts = opts || {}
  if (!opts.url) {
    opts.port = opts.port || 28015
    opts.host = opts.host || 'localhost'
    opts.db = opts.db || 'test'

    if (opts.password) {
      opts.authKey = opts.password
    }
  } else {
    var url = require('url').parse(opts.url)
    opts.port = parseInt(url.port, 10) || 28015
    opts.host = url.hostname || 'localhost'
    opts.db = url.pathname ? url.pathname.replace(/^\//, '') : 'test'

    if (url.auth)
      opts.authKey = url.auth.split(':')[1]
  }

  if (opts.url && (opts.host || opts.port || opts.db || opts.password)) {
    plugin.log(['storix', 'warn'], 'Define either an URL or host, port, db and password variables')
  }

  rethink.connect(opts, function (err, conn) {
    if (err) {
      plugin.log(['storix', 'error'], err.message)
      console.error(err)
      return next(err)
    }

    plugin.expose('connection', conn)
    plugin.expose('library', rethink)
    plugin.expose('rethinkdb', rethink)
    plugin.bind({
      rethinkdbConn: conn,
      rethinkdb: rethink
    })

    plugin.log(['storix', 'info'], 'RethinkDB connection established')
    return next()
  })
}

exports.register.attributes = {
  pkg: require('../package.json')
}
