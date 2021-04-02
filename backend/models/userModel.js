import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

// this method is here to check the password of this user
// this method 'll be called in userController when the user try to Log In
userSchema.methods.matchPassword = async function (enteredPassword) {
  // check if the entered password matchs the password of this User
  return await bcrypt.compare(enteredPassword, this.password)
}

// encrypt the password before saving it in MongoDB
userSchema.pre("save", async function (next) {
  // we do this only when password field is modified
  if (!this.isModified("password")) {
    next()
  }

  // hash password
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model("User", userSchema)

export default User
