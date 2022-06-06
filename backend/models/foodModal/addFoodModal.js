const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Food Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter Food Description"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter Food Price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please Enter Product Category"],
  },
  subCategory: {
    type: String,
    required: [true, "Please Enter Product Subcategory"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Food", FoodSchema);
