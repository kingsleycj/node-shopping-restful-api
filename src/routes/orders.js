const express = require("express");
const router = express.Router();
const orderController = require('../controllers/orders');
// const checkAuth = require('../middleware/check.auth');

// Handle incoming GET requests  to /orders
router.get("/", orderController.getAllOrders);

// Handle incoming POST requests to /orders
router.post("/", orderController.createOrder);

// Handle incoming GET by ID requests 
router.get("/:orderId", orderController.getOrderById);

// Handle incoming DELETE requests
router.delete("/:orderId", orderController.deleteOrderById);

module.exports = router;
