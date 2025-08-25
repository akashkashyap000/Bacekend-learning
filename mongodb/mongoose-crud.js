// MongoDB + Mongoose CRUD Example
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testdb")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("Error:", err));

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const User = mongoose.model("User", UserSchema);

async function createUser() {
  const user = new User({ name: "Amit", age: 22 });
  await user.save();
  console.log("User Created:", user);
}

createUser();
