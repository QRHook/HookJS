"use strict";

var environment = require('./environment'),
    routes = require('./routes'),
    server = exports;

server.run = function () {
    environment.initialize(function (app) {
        environment.start(app, function () {
            // Routes
            app.get('/', routes.root);
        });
    });
};

if(require.main === module) {
    server.run();
}
