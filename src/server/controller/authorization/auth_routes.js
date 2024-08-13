const express = require('express');
const router = express.Router();
// CONTROLLERS
const { register, login } = require('./auth_controller.js');

// MIDDLEWARE - schema validator
const { verify } = require('../schema_validation.js');

// JSON SCHEMA FOR PAYLOAD VERIFICATION
const registerPayloadSchema = require("./model/registerPayload");
const loginPayloadSchema = require("./model/loginPayload");



// 1. POST /signup: register new user
// 2. POST /login: log in
router.post('/register', verify(registerPayloadSchema), register);
router.post('/login', verify(loginPayloadSchema), login);


module.exports = router;