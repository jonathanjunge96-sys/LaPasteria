const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/dbConnection");
const cors = require("cors");
const ProductRoutes = require("./routes/ProductRoutes");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", ProductRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servern körs på port ${PORT}`);
});
