const mongoose = require("mongoose");
const reviewsSchema = new mongoose.Schema({
  rating: { type: Number, require: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Products",
  },
});
const Reviews = mongoose.model("Reviews", reviewsSchema);
module.exports = Reviews;
