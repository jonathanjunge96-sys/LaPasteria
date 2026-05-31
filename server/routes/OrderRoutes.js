const express = require("express");
const router = express.Router();
const { createOrder, getOrders } = require("../controllers/OrderController");
const validateToken = require("../middleware/ValidateTokenHandler");

// Alla order-routes kräver inloggning
router.use(validateToken);

router.route("/").get(getOrders).post(createOrder);

module.exports = router;
