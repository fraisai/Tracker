const router = require('express').Router();
const catalogController = require('./catalog_controller');

// GET catalog/all => catalogController.getAllProducts

router.get('/catalog/all', catalogController.getAllProducts);
router.get('/catalog/:catalog_id', catalogController.getSpecificProduct);

module.exports = router;