import mongoose from "mongoose";

// Define a schema

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    title: { type: String, required: true },
    // Go to schema to look for the type of Id required and the reference is userSchema
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    reviews: [reviewSchema],
    rating: { type: Number, required: true, default: 0 },
    numberOfReviews: { type: Number, required: true },
    price: { type: Number, required: true, default: 0 },
    stock: { type: Number, required: true, default: 0 },
    productIsNew: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Pushing product Schema to Mongoose database
const Product = mongoose.model("Product", productSchema);

export default Product;
