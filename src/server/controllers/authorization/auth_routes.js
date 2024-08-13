const express = require('express');
const router = express.Router();
// CONTROLLERS
const { register, login } = require('./auth_controller.js');

// MIDDLEWARE - schema validator
const { verify } = require('../common/schema_validation.js');

// JSON SCHEMA FOR PAYLOAD VERIFICATION
const registerPayloadSchema = require("../../models/auth_schemas/auth_register_payload_schema.js");
const loginPayloadSchema = require("../../models/auth_schemas/auth_login_payload_schema.js");



// 1. POST /signup: register new user
// 2. POST /login: log in
router.post('/register', verify(registerPayloadSchema), register);
router.post('/login', verify(loginPayloadSchema), login);


module.exports = router;