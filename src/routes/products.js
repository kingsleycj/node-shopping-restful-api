const  express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check.auth');
const productController = require("../controllers/products");

router. get('/', productController. getAllProducts);

router.post("/", productController.createProduct);

router.get('/:productId', checkAuth, productController.getProductById)

router.patch("/:productId", checkAuth, productController.updateProductById);

router.delete("/:productId", checkAuth, productController.deleteProductById);

module.exports = router;