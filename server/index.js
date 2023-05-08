import dotenv from "dotenv";
import connectToDatabase from "./database.js";
import express from "express";

// Our Routes
import productRoutes from "./routes/productRoutes.js";

// Must be called before do anything else
dotenv.config();
connectToDatabase();
const app = express();

// Use the express
app.use(express.json());

// Add port listener
const port = process.env.PORT || 5000;

// if it hit => productRoutes
app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
