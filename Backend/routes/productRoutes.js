import express from "express";
import Products from "../models/products.js";
import asycHandler from "../middleware/asycHandler.js";
const productRouter = express.Router();

productRouter.get("/", async (req, res, next) => {
  const products = await Products.find();
  res.send(products);
});
productRouter.get("/:id", async (req, res, next) => {
  const product = await Products.findById(req.params.id);
  if (product) return res.send(product);
  return res.status(404).json({ error: "Product not found" });
});
export default productRouter;
