require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const mongoose = require("mongoose");
const User = require("./models/User");
const cors = require("cors");
const multer = require("multer");
const { storage } = require("./cloudinary");
const upload = multer({ storage });

//Connecting Datbase Online
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://lokeshlaxkar9:NC4yVhUgsBgdMX8A@cluster0.el3mzea.mongodb.net/InstaClone?retryWrites=true&w=majority"
  );
  console.log("Database Connected");
}

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//Seting Up Routes

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.post("/create", upload.single("file"), async (req, res) => {
  try {
    const { name, description, location, date } = req.body;
    const { path, filename } = req.file;

    const user = await User.create({
      name,
      description,
      location,
      date,
      postimage: { url: path, filename: filename },
    });
    res.send(user);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/all", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    console.log(e.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is Up at port ${PORT}`);
});
