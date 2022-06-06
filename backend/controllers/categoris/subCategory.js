const SubCategory = require("../../models/categoryModal/subCategory");
const catchAsyncErrors = require("../../middelwares/catchAsyncError");
const ErroHandler = require("../../utils/errorHandler");

exports.createSubCategory = catchAsyncErrors(async (req, res) => {
  const subCategory = await SubCategory.create(req.body);
  res.status(201).json({
    success: true,
    subCategory,
  });
});

exports.updateSubCategory = catchAsyncErrors(async (req, res) => {
  let subcategory = await SubCategory.findById(req.params.id);
  if (subcategory) {
    subcategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ success: true, subcategory });
  } else {
    res.status(500).json({
      success: false,
      message: "Subcategory Not Found",
    });
  }
});

exports.deletSubCategory = catchAsyncErrors(async (req, res, next) => {
  const subcategory = await SubCategory.findById(req.params.id);
  if (subcategory) {
    await SubCategory.remove();
    res.status(201).json({
      success: true,
      message: "Subcategory Deleted Successfully ",
    });
  } else {
    return next(new ErroHandler("product not found", 404));
  }
});

exports.getAllSubCategory = catchAsyncErrors(async (req, res) => {
  const subcategory = await SubCategory.find();
  res.status(201).json({
    success: true,
    subcategory,
  });
});

exports.deletAllSubCategory = catchAsyncErrors(async (req, res) => {
  await SubCategory.deleteMany();
  res.status(201).json({
    success: true,
    message: "Categoreis Deleted Successfully ",
  });
});
