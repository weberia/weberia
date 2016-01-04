'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({ port: 3000 });

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    var string 
    reply('Hello, this is "semantix" show case.<br />' +
      'I live only to test the plugin');
  }
});

server.register({
  register: Semantix,
  options: {
    reporters: [{
      reporter: require('semantix'),
      events: {
        response: '*',
        log: '*'
      }
    }]
  }
}, (err) => {
  if (err) {
    throw err; // something bad happened loading the plugin
  }

  server.start(() => {
    server.log('info', 'Server running at: ' + server.info.uri);
  });
});

