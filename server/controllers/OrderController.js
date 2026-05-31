const asyncHandler = require("express-async-handler");
const Order = require("../models/OrderModel");

// @desc CREATE order
// @route POST /api/orders
// @access private
const createOrder = asyncHandler(async (req, res) => {
  const { items, totalPrice, shippingInfo, paymentMethod } = req.body;

  if (!items || !totalPrice || !shippingInfo || !paymentMethod) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  const order = await Order.create({
    user_id: req.user.id,
    items,
    totalPrice,
    shippingInfo,
    paymentMethod,
  });

  res.status(201).json(order);
});

// @desc GET all orders for logged in user
// @route GET /api/orders
// @access private
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user_id: req.user.id });
  res.status(200).json(orders);
});

module.exports = { createOrder, getOrders };
