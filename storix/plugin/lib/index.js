'use strict';

const internals = {};

exports = module.exports = internals.Storix = function() {

}

internals.Storix.prototype.getProduct = function (id) {

  var product = products.filter(function(p) {
    return p.id == id;
  }).pop();

  return 'Product name: ' + product.name;

}

var products = [{
    id: 1,
    name: 'Guitar'
  },
  {
    id: 2,
    name: 'Banjo'
  }
];
