const  express = require('express');
const router = express.Router();
// const checkAuth = require('../middleware/check.auth');
const productController = require("../controllers/products");

router. get('/', productController. getAllProducts);

router.post("/", productController.createProduct);

router.get('/:productId', productController.getProductById)

router.patch("/:productId", productController.updateProductById);

router.delete("/:productId", productController.deleteProductById);

module.exports = router;