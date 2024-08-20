const router = require('express').Router();
const catalogController = require('./catalog_controller');

router.get('catalog/all');
router.get('catalog');

module.exports = router;