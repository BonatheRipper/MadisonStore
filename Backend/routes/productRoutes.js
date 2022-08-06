import express from "express";
import Products from "../models/products.js";
import asycHandler from "../middleware/asycHandler.js";
const productRouter = express.Router();

productRouter.get("/", async (req, res, next) => {
  const PAGE_SIZE = Number(req.query.page);
  const productsQuery = req.query.productsQuery;
  const categories = await getCategories();
  const products = await Products.find(
    productsQuery ? { category: productsQuery } : {}
  ).limit(PAGE_SIZE);

  res.send({ products, categories });
});
productRouter.get("/allproducts", async (req, res, next) => {
  const PAGE_SIZE = 6;
  const page = Number(req.query.page || 0);
  const searchbyCategoryName = req.query.searchbyCategoryName;
  const categories = await getCategories();
  const products = await Products.find(
    searchbyCategoryName ? { category: searchbyCategoryName } : {}
  )
    .limit(PAGE_SIZE)
    .skip(PAGE_SIZE * page);

  let total = await Products.countDocuments({});
  if (searchbyCategoryName) {
    total = products.length;
  }
  return res.send({
    products,
    categories,
    totalPages: Math.ceil(Number(total) / Number(PAGE_SIZE)),
  });
});
productRouter.get("/category/:catType", async (req, res, next) => {
  const products = await Products.find({ category: req.params.catType });
  if (products) return res.send(products);
  return res.status(404).json({ error: "Product not found" });
});
productRouter.get("/:id", async (req, res, next) => {
  const product = await Products.findById(req.params.id);
  if (product) return res.send(product);
  return res.status(404).json({ error: "Product not found" });
});

const getCategories = () => {
  return Products.aggregate([
    {
      $unwind: "$category",
    },
    {
      $group: {
        _id: null,
        category: { $addToSet: "$category" },
      },
    },
  ]);
};
export default productRouter;
