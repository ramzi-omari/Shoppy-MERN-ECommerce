import asyncHandler from "express-async-handler"
import Product from "../models/productModel.js"

// @desc   fetch all Products
// @route  GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  // asynchandler to handle exception without writing trycatch everytime
  const products = await Product.find({})

  res.json(products)
})

// @desc   fetch single Product by id
// @route  GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  // req.params.id === get the :id from the link
  const product = await Product.findById(req.params.id)

  // check if the product exists
  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error("Product not found")
  }
})

export { getProducts, getProductById }
