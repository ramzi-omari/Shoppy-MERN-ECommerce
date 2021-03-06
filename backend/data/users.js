import bcrypt from "bcryptjs";
// encrypted password
const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Ramzi",
    email: "ramzi@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Mohammed",
    email: "mohammed@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
