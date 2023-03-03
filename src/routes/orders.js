const express = require("express");
const { route } = require("../../app");
const router = express.Router();
const mongoose = require("mongoose");
const Order = require("../models/order");

// Handle incoming GET requests  to /orders
router.get("/", (req, res, next) => {
    Order.find()
    .exec()
    .then(docs => {
        res.status(200).json(docs);
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

router.post("/", (req, res, next) => {
  const order = new Order({
    _id: mongoose.Types.ObjectId(),
    quantity: req.body.quantity,
    product: req.body.productId,
  });
  order.save()
  .then(result => {
    console.log(result);
    res.status(201).json(result);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
  res.status(201).json({
    message: "Order was created!!",
    order: order,
  });
});

router.get("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "Order details: ",
    orderId: req.params.orderId,
  });
});

router.delete("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "Order deleted!",
    orderId: req.params.orderId,
  });
});

module.exports = router;
