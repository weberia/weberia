var routes = require('./routes');
var Vision = require('vision');
var Inert = require('inert');
var Path = require('path');

exports.register = function (server, options, next) {

  server.register(Vision, (err) => {
    server.views({
      engines: {
        html: require('handlebars')
      },
      relativeTo: __dirname,
      path: 'templates'
    });
  });

  server.register(Inert, (err) => {

    if (err) {
        throw err;
    }

    server.route({

      method: 'GET',
      path: '/{param*}',
      handler: {
        directory: {
          path: Path.join(__dirname, 'templates/common')
        }
      }

    });

  });

  server.route(routes(options));

  next();
};

exports.register.attributes = {
    pkg: require('../package.json')
};
