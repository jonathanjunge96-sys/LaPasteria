const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a product name"],
    },
    price: {
      type: Number,
      required: [true, "Please add a price"],
    },
    category: {
      type: String,
      required: [true, "Please add a category"],
      enum: ["lang", "kort"],
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Product", productSchema);
