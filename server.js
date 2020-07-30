"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuthController_1 = require("./controllers/AuthController");
var express = require('express');
var AuthCtrl = new AuthController_1.AuthController;
var app = express();
// USERS
app.post('/user/register', AuthCtrl.register);
//app.get('/user', AuthCtrl.authorize, )
app.listen(9001);
