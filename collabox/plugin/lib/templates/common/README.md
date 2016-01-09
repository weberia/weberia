How to make your own tempalate
==============================

All references to static assets and images should be prefixed with "/collabox/", see [example](index.html). This one depends on the Hapi application which uses this plugin:

```javascript
server.register({ register: require('collabox') }, {
    routes: {
          prefix: '/collabox'
            }
}, (err) => {
    server.log(err);
});
```

