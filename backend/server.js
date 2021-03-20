// initialise Express
import express from "express";
import dotenv from "dotenv";
import colors from "colors";

// import DataBase
import connectDB from "./config/db.js";

// bring the data
import products from "./data/products.js";

dotenv.config();

connectDB();

// initialise app
const app = express();

//firest route: Get request
app.get("/", (req, res) => {
  res.send("API is running");
});

// fetch all data route
app.get("/api/products", (req, res) => {
  res.json(products);
});
// fetch single object by ID // req.params.id = :id from the link
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;
// listen to port
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
