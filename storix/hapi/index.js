'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
/*
var Storix = require('storix');
const storix = new Storix();

console.log(storix.getProduct(1));
*/

server.register({
  register: require('storix'),
  opts: { dbName: '_system' }
//  register: require('storix'),
//  opts: { url: 'rethinkdb://:password@domain.tld:port/dbname' }
}, function (err) {
  if (err) console.error(err);
});

server.connection({ port: 3000 });

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    //var string 
    // reply('Hello, this is "storix" show case.<br />' +
    //  'I live only to test the plugin');

    var conn = request.server.plugins['storix'].connection;
    reply(conn);
  }
});



server.start((err) => {
    if (err) {
        throw err;
    }
    server.log('Server running at:', server.info.uri);
});
