import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";

// @desc   fetch all Products
// @route  GET /api/products
// @access Public
router.get(
  "/", // asynchandler to handle exception without writing trycatch everytime
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.json(products);
  })
);

// @desc   fetch single Product by id
// @route  GET /api/products/:id
// @access Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    // req.params.id === get the :id from the link
    const product = await Product.findById(req.params.id);

    // check if the product exists
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  })
);

export default router;
