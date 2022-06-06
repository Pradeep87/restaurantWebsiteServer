const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Food Name"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Please Enter Food Price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  meta: {
    description: {
      type: String,
      default:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old"
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
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required:true,
  },
  minOrder:{
type:Number,
required:true,
default:0
  },
  available:{
    type:Boolean,
    default:true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Food", FoodSchema);

// categoryId:
// subCatID:
// lastAdded:
// lastModified:
// minOrder:
// available: