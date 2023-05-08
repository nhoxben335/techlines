import express from "express";
import Product from "../models/Product.js";
const productRoutes = express.Router();

const getProducts = async (req, res) => {
  // Get all products from Schema and pass it into object
  const products = await Product.find({});
  // Put into json and sent it to front-end
  res.json(products);
};

productRoutes.route("/").get(getProducts);

export default productRoutes;
