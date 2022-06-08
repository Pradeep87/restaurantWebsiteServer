const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter SubCategory Name"],
  },
  restaurant:{
    type:String,
    required:true,
    default:"restaurent_id"
  },
  parentCategory: {
    type: mongoose.Schema.ObjectId ,
    ref:"Category",
    required: [true, "Please Enter Parent Category"],
  },
  productCount: {
    type: Number,
    required: true,
    default: 0,
  },
  available: {
    type: Boolean,
    required: true,
    default: true,
  },
  meta: {
    description: {
      type: String,
      default:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    },
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
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
  },
});

module.exports = mongoose.model("SubCategory", subCategorySchema);
