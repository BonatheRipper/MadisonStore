import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    gallery: [
      {
        type: String,
        required: true,
      },
    ],
    material: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    sold: {
      type: Number,
    },
    rating: {
      type: Number,
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Reviews",
      },
    ],
    numReviews: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    countInStock: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Products = mongoose.model("Products", productsSchema);
export default Products;
