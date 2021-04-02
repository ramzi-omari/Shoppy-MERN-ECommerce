import asyncHandler from "express-async-handler"
import generateToken from "../utils/generateToken.js"
import User from "../models/userModel.js"

// @desc   authenticate the user & get token
// @route  POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  // asynchandler to handle exception without writing trycatch everytime
  const { email, password } = req.body

  // take the user that matchs the email submited in logIn form
  const user = await User.findOne({ email: email })

  if (user && (await user.matchPassword(password))) {
    // if user exists & the password matchs the password encrypted & stored in data
    // password check method is defined with the userModel

    // then return the user informations
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      idAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error("Invalid email or password")
  }
})

// @desc   Register a new user
// @route  POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  // take the user that matchs the email submited in Register form
  const userExists = await User.findOne({ email: email })

  if (userExists) {
    res.status(400)
    throw new Error("User already exists")
  }

  const user = await User.create({
    name,
    email,
    password,
    // password encrypted before saving (method in userModel)
  })

  if (user) {
    // if user is created we send the data from form to DB
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      idAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error("Invalid user data")
  }
})

// @desc   Get user profile
// @route  Get /api/users/profile
// @access Private  // protected access
const getUserProfile = asyncHandler(async (req, res) => {
  // get the user
  // req.user can be used to get the data from any PROTECTED Route
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      idAdmin: user.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error("User not found")
  }
})

export { authUser, registerUser, getUserProfile }
