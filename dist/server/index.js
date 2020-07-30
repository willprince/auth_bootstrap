"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const db = require('../database/db-config.js');
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
//# sourceMappingURL=index.js.map