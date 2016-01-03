'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({ port: 3000 });

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    var string 
    reply('Hello, this is "speax" show case.<br />' +
      'I live only to test the plugin');
  }
});

server.start(() => {
  console.log('Server running at:', server.info.uri);
});
