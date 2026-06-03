const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
} = require("../controllers/ProductController");

router.route("/").get(getProducts).post(createProduct);
router.route("/:id").get(getProduct).put(updateProduct);

module.exports = router;
