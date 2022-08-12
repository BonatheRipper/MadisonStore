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
    image: { url: String, public_id: String },
    gallery: [{ url: String, public_id: String }],
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
      required: true,
    },
    rating: {
      type: Number,
      required: true,
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
