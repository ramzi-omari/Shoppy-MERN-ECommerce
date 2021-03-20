// initialise Express
const express = require("express");
// bring the data
const products = require("./data/products");
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

// listen on port
app.listen(5000, console.log("Server running on port 5000"));
