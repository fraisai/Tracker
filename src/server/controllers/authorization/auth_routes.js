const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  res.status(200).json({ message: 'register route working' });
});

router.post('/login', (req, res) => {
  res.status(200).json({ message: 'login route working' });
});

module.exports = router;