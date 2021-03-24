// initialise Express
import express from "express"
import dotenv from "dotenv"
import colors from "colors"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"

// import DataBase
import connectDB from "./config/db.js"

// import routes
import productRoutes from "./routes/productRoutes.js"

dotenv.config()

connectDB()

// initialise app
const app = express()

//firest route: Get request
app.get("/", (req, res) => {
  res.send("API is running")
})

// link to route
app.use("/api/products", productRoutes)

// custom error middleware
app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000
// listen to port
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
)
