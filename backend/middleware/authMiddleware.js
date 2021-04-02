// validate the token
// we can add protet everywhere we want to protect the route
import jwt from "jsonwebtoken"
import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"

const protect = asyncHandler(async (req, res, next) => {
  // to test it with Postman, we set the API & then route in postman,
  // in Headers tab: key= Authorization, value: "Bearer 'token example' then send it"
  // we should get 'token example' logged in the console >>
  //   let token
  //   console.log(req.headers.authorization)
  //   next()

  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1]
      // verify Token validation with JWT
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // return all user data without password to get the access to this data in all of our protected route
      // we used req.user to get the data fetched from protected route
      req.user = await User.findById(decoded.id).select("-password")

      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error("Not athorized, token failed")
    }
  }

  if (!token) {
    res.status(401)
    throw new Error("Not authorized, no token")
  }
})

export { protect }
