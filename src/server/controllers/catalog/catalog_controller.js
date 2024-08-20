const catalogModel = require('../../models/catalog_schema');

const catalogController = {};

catalogController.getAllProducts = async (req, res) => { // GET catalog/all
    const filters = req.query;
    try {
        const products = await catalogModel.findAllProducts(filters);
        return res.status(200).json({
            status: true,
            data: products
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error,
        })
    }
}
module.exports = catalogController;