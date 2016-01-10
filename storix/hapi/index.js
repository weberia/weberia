'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

server.register({
  register: require('storix'),
  options: { dbName: 'storix' }
}, function (err) {
  if (err) console.error(err);
});

server.connection({ port: 3000 });

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    var conn = request.server.plugins['storix'].connection;
    var collection = conn.collection('asemiks');
    reply(conn._connection.config.url);
  }
});

server.start((err) => {
    if (err) {
        throw err;
    }
    server.log('Server running at:', server.info.uri);
});
