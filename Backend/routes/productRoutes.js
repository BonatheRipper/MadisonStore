const express = require("express");
const { CloudinaryUploader } = require("../cloudinary/cloudinary");
const { CloudinaryDeleter } = require("../cloudinary/cloudinary");
const upload = require("../cloudinary/multerUploader");
const Products = require("../models/products");
const asycHandler = require("../middleware/asycHandler");
const Reviews = require("../models/productReview");
const isAuth = require("../middleware/isAuth");
const isAdmin = require("../middleware/isAdmin");
const productRouter = express.Router();

productRouter.get("/", async (req, res, next) => {
  const PAGE_SIZE = Number(req.query.page);
  const productsQuery = req.query.productsQuery;
  const categories = await getCategories();
  const products = await Products.find(
    productsQuery ? { category: productsQuery } : {}
  )

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
  isAuth,
  isAdmin,
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
      let images =
        imageGallery && imageGallery.length
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
productRouter.patch(
  "/imagedestroy/:id",
  isAuth,
  isAdmin,
  async (req, res, next) => {
    const product = await Products.findById(req.params.id)
      .populate("reviews")
      .exec();
    if (product) {
      if (req.body.imageType === "productImage") {
        const ImageToDeleteId = product.image.public_id;
        if (ImageToDeleteId !== "NONE") {
          product.image.url = "NONE";
          product.image.public_id = "NONE";
          await product.save();
          return res.send({ message: "Image deleted", product });
        } else {
          return res.status(404).json({ error: "Image not found" });
        }
      } else if (req.body.imageType === "imageGallery") {
        const imageExist = product.gallery.find(
          (image) => image.public_id === req.body.public_id
        );
        if (imageExist !== undefined) {
          await CloudinaryDeleter(req.body.public_id);
          const newGallery = product.gallery.filter(function (obj) {
            return obj.public_id !== req.body.public_id;
          });
          product.gallery = newGallery;
          await product.save();
          return res.send({ message: "Image deleted", product });
        } else {
          return res.status(404).json({ error: "Image not found" });
        }
      }
    }
    return res.status(404).json({ error: "Product not found" });
  }
);
productRouter.patch(
  "/:id",
  isAuth,
  isAdmin,
  upload.fields([
    { name: "imageGallery", maxCount: 20 },
    { name: "productImage", maxCount: 1 },
  ]),
  async (req, res, next) => {
    const {
      slug,
      description,
      price,
      category,
      material,
      title,
      itemInStock,
      serverImage,
    } = req.body;
    const { imageGallery, productImage } = req.files;

    if (
      !slug ||
      !description ||
      !price ||
      !category ||
      !material ||
      !title ||
      !itemInStock ||
      (!productImage && serverImage === "NONE")
    ) {
      return res
        .status(404)
        .json({ error: "One or more fiels missing server" });
    } else {
      const product = await Products.findById(req.params.id)
        .populate("reviews")
        .exec();
      if (product) {
        product.slug = slug;
        product.description = description;
        product.price = price;
        product.category = category;
        product.material = material;
        product.name = title;
        product.countInStock = itemInStock;
        if (productImage) {
          try {
            let image = await CloudinaryUploader(productImage);
            product.image = image[0];
          } catch (e) {
            console.log(e);
          }
        }
        if (imageGallery && imageGallery.length) {
          try {
            let gallery = await CloudinaryUploader(imageGallery);
            if (gallery) {
              for (let images of gallery) {
                product.gallery.push(images);
              }
            }
          } catch (e) {
            console.log(e);
          }
        }
        await product.save();
        return res.send({ message: "Product updated", product });
      } else {
        return res.status(404).json({ error: "Product not found" });
      }
    }
  }
);
productRouter.delete("/:id", isAuth, isAdmin, async (req, res, next) => {
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
module.exports = productRouter;
