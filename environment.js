"use strict";

var flatiron = require('flatiron'),
    app = flatiron.app,
    environment = exports;

environment.initialize = function (callback) {
    app.use(flatiron.plugins.http, {
        before: [],
        onError: function onError (err) {
            console.log(err);
            this.res.writeHead(404, {'Content-Type': 'application/json'});
            this.res.json({
                error: "app:route:notfound",
                status: 404
            });
        }
    });

    app.use(flatiron.plugins.static, {dir: __dirname + '/public', url: '/'})

    app.get = app.router.get;
    app.put = app.router.put;
    app.post = app.router.post;
    app['delete'] = app.router['delete'];

    callback(app);

};

environment.start = function (app, cb) {
    app.start(3000, function () {
        console.log('App Started mother fucker');

        if(cb){
            cb();
        }
    });
};
