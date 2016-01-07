var routes = require('./routes');
var Vision = require('vision');

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

  server.route(routes(options));

  next();
};

exports.register.attributes = {
    pkg: require('../package.json')
};
