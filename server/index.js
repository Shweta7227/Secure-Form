console.log("Backend file loaded");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");      
const bcrypt = require("bcryptjs");    
const UserModel = require("./models/User");

const app = express();

// ===== Multer setup for file upload =====
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// ===== Middleware =====
app.use(cors());
app.use(express.json());

// ===== MongoDB Connection =====
mongoose
  .connect("mongodb://127.0.0.1:27017/secure_form")
  .then(() => console.log("MongoDB Connected to secure_form"))
  .catch((err) => console.error("MongoDB error:", err));

// ===== Health Check =====
app.get("/ping", (req, res) => {
  res.json({ message: "Server is alive 🚀" });
});

// ===== CREATE USER =====
app.post("/createUser", upload.single("profilePhoto"), async (req, res) => {
  try {
    console.log("Received body:", req.body); 
    console.log("Received file:", req.file?.originalname);

    const data = req.body;

    const newUser = new UserModel({
      profilePhoto: req.file ? req.file.buffer : null,
      firstName: data.firstName,
      middleName: data.middleName || "",
      lastName: data.lastName,
      countryCode: data.countryCode,
      mobileNumber: data.mobileNumber,
      gender: data.gender,
      dob: new Date(data.dob),
      age: Number(data.age),
      email: data.email,
      address: {
        street: data.street,
        city: data.city,
        state: data.state,
        pinCode: data.pinCode,
      },
      secondaryAddress: {
        street: data.nstreet || "",
        city: data.ncity || "",
        state: data.nstate || "",
        pinCode: data.npinCode || "",
      },
      password: await bcrypt.hash(data.password, 10),
      agreement: data.agreement === "true",
    });

    await newUser.save();
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// ===== Server =====
app.listen(3001, () => {
  console.log("Server running on port 3001");
});
