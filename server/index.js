import dotenv from "dotenv";
import connectToDatabase from "./database.js";
import express from "express";

// Must be called before do anything else
dotenv.config();
connectToDatabase();
const app = express();

// Use the express middleware
app.use(express.json());

// Add port listener
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
