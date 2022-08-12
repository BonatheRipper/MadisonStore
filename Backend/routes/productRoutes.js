import express from "express";
import CloudinaryUploader from "../cloudinary/cloudinary.js";
import upload from "../cloudinary/multerUploader.js";
import Products from "../models/products.js";
import asycHandler from "../middleware/asycHandler.js";
import Reviews from "../models/productReview.js";

const productRouter = express.Router();

productRouter.get("/", async (req, res, next) => {
  const PAGE_SIZE = Number(req.query.page);
  const productsQuery = req.query.productsQuery;
  const categories = await getCategories();
  const products = await Products.find(
    productsQuery ? { category: productsQuery } : {}
  )
    .limit(PAGE_SIZE)
    .populate("reviews")
    .exec();

  res.send({ products, categories });
});
productRouter.get("/allproducts", async (req, res, next) => {
  // const PAGE_SIZE = 6;
  // const page = Number(req.query.page || 0);
  const searchbyCategoryName = req.query.searchbyCategoryName;
  const categories = await getCategories();
  const products = await Products.find(
    searchbyCategoryName ? { category: searchbyCategoryName } : {}
  );

  return res.send({
    products,
    categories,
  });
});
productRouter.post(
  "/addNew",
  upload.fields([
    { name: "imageGallery", maxCount: 20 },
    { name: "productImage", maxCount: 1 },
  ]),
  async (req, res, next) => {
    const { slug, description, price, category, material, title, itemInStock } =
      req.body;
    const { imageGallery, productImage } = req.files;

    if (
      !slug ||
      !description ||
      !price ||
      !category ||
      !material ||
      !title ||
      !itemInStock ||
      !productImage
    ) {
      return res.status(404).json({ error: "One or more fiels missing" });
    } else {
      let images = imageGallery.length
        ? await CloudinaryUploader(imageGallery)
        : [];
      let image;
      if (images) {
        image = await CloudinaryUploader(productImage);
      }
      const newProduct = await Products.create({
        name: title.toLowerCase(),
        price: Number(price),
        material: material.toLowerCase(),
        slug: slug.toLowerCase(),
        category: category.toLowerCase(),
        description: description,
        sold: 0,
        rating: 0,
        reviews: [],
        numReviews: 0,
        countInStock: Number(itemInStock),
        image: image[0],
        gallery: images,
      });
      if (newProduct) {
        console.log(newProduct);
        return res.send({ message: "Product created successfully" });
      }
    }
  }
);
productRouter.get("/category/:catType", async (req, res, next) => {
  const products = await Products.find({ category: req.params.catType });
  if (products) return res.send(products);
  return res.status(404).json({ error: "Product not found" });
});
productRouter.get("/:id", async (req, res, next) => {
  const product = await Products.findById(req.params.id)
    .populate("reviews")
    .exec();
  if (product) return res.send(product);
  return res.status(404).json({ error: "Product not found" });
});
productRouter.delete("/:id", async (req, res, next) => {
  const productToDelete = await Products.findById(req.params.id);
  if (productToDelete) {
    if (productToDelete.reviews.length) {
      for (let reviews of productToDelete.reviews) {
        await Reviews.findByIdAndRemove(reviews);
      }
    }
    Products.findByIdAndRemove(req.params.id, function (err) {
      if (err) {
        return res.status(404).send({ error: "There was an error" });
      }
    });

    const updatedProductsList = await Products.find({})
      .populate("reviews")
      .exec();
    return res.send({
      message: "Product removed successfully",
      updatedProductsList,
    });
  }
  return res.status(404).send({ error: "There was an error" });
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
