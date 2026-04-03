const express = require('express');
const router = express.Router();

router.get('/users/:userId/cart', (req, res) => {
  res.status(200).json({
    userId: req.params.userId,
    items: []
  });
});

module.exports = router;