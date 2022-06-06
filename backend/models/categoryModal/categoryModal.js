const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: [true, "Please Enter Category"],
  },
  subCategory: [
    {
      type: String,
    },
  ],
  productCount: {
    type: Number,
    required: [true, "Please Enter product Stock"],
    maxLength: [4, "Stock cannot exceed 4 characters"],
    default: 1,
  },
  available: {
    type:Boolean,
    required:true,
    default:true
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
updatetedAt:{
  type:Date,
  default:Date.now()
}

});

module.exports = mongoose.model("Category", categorySchema);
