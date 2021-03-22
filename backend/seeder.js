import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // clear data
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    // take the first item from the users array (isAdmin : true)
    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      // add to the data in product already there, and add to the user field the Admin
      return { ...product, user: adminUser };
      // we do that because product hase ref to User
    });

    await Product.insertMany(sampleProducts);

    console.log("Data Imported".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    // clear data
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

// script node backend/seeder -d  // to use seeder // -d: destroy
//  npm run data:import    to import data to mongodb
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
