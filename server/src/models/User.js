const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  location: {
    type: String,
  },
  likes: {
    type: Number,
    default: 0,
  },
  description: String,
  date: {
    type: String,
  },
  postimage: {
    url: String,
    filename: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
