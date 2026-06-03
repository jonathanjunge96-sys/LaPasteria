const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

// @desc GET all products
// @route GET /api/products
// @access public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});

// @desc GET single product
// @route GET /api/products/:id
// @access public
const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }
  res.status(200).json(product);
});

// @desc CREATE product
// @route POST /api/products
// @access private (admin)
const createProduct = asyncHandler(async (req, res) => {
  const { name, price, category, description, image } = req.body;
  if (!name || !price || !category || !description) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }
  const product = await Product.create({
    name,
    price,
    category,
    description,
    image,
  });
  res.status(201).json(product);
});

// @desc UPDATE product
// @route PUT /api/products/:id
// @access public
const updateProduct = asyncHandler(async (req, res) => {
    const product = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    if (!product) {
        res.status(404);
        throw new Error("Product not found");
    }
    res.status(200).json(product);
}); //La till när jag uppdaterade med bilder per product



module.exports = { getProducts, getProduct, createProduct, updateProduct };
