"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var db = require('../database/db-config.js');
app.get('/', function (req, res) {
    // knew exemple
    db.select().table('users')
        .then(function (rows) {
        console.log(rows);
    });
    res.send('Hello World!');
});
app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});
