'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

server.register({
  //register: require('storix'),
  register: require('storix'),
  options: {
    host: 'archera',
    port: 28015,
    db: 'bookstera'
  }
  //opts: { url: 'rethinkdb://localhost:28015/bookstera' }
  //options: { dbName: 'storix' }
}, function (err) {
  if (err) console.error(err);
});

server.connection({ port: 3000 });

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    // could be these:
    //var r = request.server.plugins['storix'].rethinkdb;
    //var conn = request.server.plugins['storix'].connection;
    // or these:
    var r = server.plugins['storix'].rethinkdb;
    var conn = server.plugins['storix'].connection;
    //

    //reply(r.dbList().run(conn))
    //reply(r.db('rethinkdb').table('server_config').run(conn))

    r.db('rethinkdb').table('server_config').run(conn, function(err, result) {
        if (err) {
          reply('error');
        } else {
          reply(result.toArray());
        }
    })


  }
});

server.start((err) => {
  if (err) {
    throw err;
  }
  server.log('Server running at:', server.info.uri);
});
