const express = require('express');
const router = express.Router();


// 1. GET /users/:userId/cart: retrieve user's cart
// 2. POST : create a user cart
router.get('/users/:userId/cart');


module.exports = router;