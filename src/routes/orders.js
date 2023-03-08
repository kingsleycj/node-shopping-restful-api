const express = require("express");
const router = express.Router();
const orderController = require('../controllers/orders');
const checkAuth = require('../middleware/check.auth');

// Handle incoming GET requests  to /orders
router.get("/", checkAuth, orderController.getAllOrders);

// Handle incoming POST requests to /orders
router.post("/", checkAuth, orderController.createOrder);

// Handle incoming GET by ID requests 
router.get("/:orderId", checkAuth, orderController.getOrderById);

// Handle incoming DELETE requests
router.delete("/:orderId", checkAuth, orderController.deleteOrderById);

module.exports = router;
