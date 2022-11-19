const express = require("express");
const Products = require("../models/products");
const Reviews = require("../models/productReview");
const isAuth = require("../middleware/isAuth");
const reviewRouter = express.Router();
reviewRouter.post("/", isAuth, async (req, res) => {
  const { ratingVal, userId, productId } = req.body;
  const product = await Products.findById(productId).populate("reviews").exec();

  let userAlreadyReviewed = product.reviews.filter((review) => {
    return review.author.equals(userId);
  }).length;
  if (userAlreadyReviewed) {
    return res
      .status(401)
      .send({ message: "You already reviewed this product" });
  }
  let newReview = await Reviews.create({
    rating: ratingVal,
    author: userId,
    product: productId,
  });
  if (newReview) {
    const product = await Products.findById(productId);
    product.reviews.push(newReview._id);
    await product.save();
    return res.send("Your review was successful");
  }
});
reviewRouter.get("/", async (req, res) => {
  // await Reviews.deleteMany({});
  const reviews = await Reviews.find({})
    .populate([{ path: "product" }, { path: "author" }])
    .exec();

  if (reviews) {
    return res.send(reviews);
  }
  return res.status(401).send({ message: "Reviews failed or not found" });
});

module.exports = reviewRouter;
