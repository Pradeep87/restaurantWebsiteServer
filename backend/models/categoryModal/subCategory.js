const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
  subCategoryName: {
    type: String,
    required: [true, "Please Enter Category Name"],
  },
  parentCategory: {
    type: String,
    required: [true, "Please Enter Parent Category"],
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
});

module.exports = mongoose.model("SubCategory", subCategorySchema);
