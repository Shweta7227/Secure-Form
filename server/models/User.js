const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // ===== Profile Photo (optional) =====
    profilePhoto: {
      type: Buffer, // multer memoryStorage
      required: false,
    },

    // ===== Name =====
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    middleName: {
      type: String,
      trim: true,
      default: "",
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },

    // ===== Contact =====
    countryCode: {
      type: String,
      required: true,
      default: "+91",
    },
    mobileNumber: {
      type: String,
      required: true,
    },

    // ===== Personal =====
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Other"],
    },
    dob: {
      type: Date,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },

    // ===== Email =====
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },

    // ===== Address (Primary) =====
    address: {
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      pinCode: {
        type: String,
        required: true,
      },
    },

    // ===== Address (Secondary – Optional) =====
    secondaryAddress: {
      street: {
        type: String,
        default: "",
      },
      city: {
        type: String,
        default: "",
      },
      state: {
        type: String,
        default: "",
      },
      pinCode: {
        type: String,
        default: "",
      },
    },

    // ===== Security =====
    password: {
      type: String,
      required: true, // hashed before save
    },

    // ===== Agreement =====
    agreement: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true, // createdAt & updatedAt
  }
);

module.exports = mongoose.model("users", userSchema);
