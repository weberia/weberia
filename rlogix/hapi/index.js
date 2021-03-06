'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({ port: 3000 });

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    var string 
    reply('Hello, this is "rlogix" show case.<br />' +
      'I live only to test the plugin');
  }
});

server.register({ register: require('rlogix') }, {
  routes: {
    prefix: '/rlogix'
  }
}, (err) => {
  server.log(err);
});

server.start((err) => {
    if (err) {
        throw err;
    }
    server.log('Server running at:', server.info.uri);
});
