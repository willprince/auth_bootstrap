import { Request, Response, ErrorRequestHandler, NextFunction} from "express";
import { AuthController } from "./controllers/AuthController";
import { UserController } from "./controllers/UserController";

const express = require('express');
let AuthCtrl = new AuthController
const app = express();

// USERS
app.post('/user/register', AuthCtrl.register);
//app.get('/user', AuthCtrl.authorize, )

app.listen(9001);
