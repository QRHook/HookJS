"use strict";

// Author: Jarrett Cruger -> QR Hook

var filed = require('filed'),
    oppressor = require('oppressor'),
    routes = exports;

routes.root = function () {
    // Ensure there is a user agent
    filed(__dirname + '/views/index.html')
        .pipe(oppressor(this.req))
        .pipe(this.res);
};

