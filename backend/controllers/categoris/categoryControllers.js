const Category = require("../../models/categoryModal/categoryModal");
const catchAsyncErrors = require("../../middelwares/catchAsyncError");

exports.createCategory = catchAsyncErrors(async (req, res) => {
  const category = await Category.create(req.body);
  res.status(201).json({
    success: true,
    category,
  });
});
exports.deleteAllCategory = catchAsyncErrors(async (req, res) => {
  await Category.deleteMany();
  res.status(201).json({
    success: true,
    message: "Categoreis Deleted Successfully ",
  });
});

// / uupdate category -- admin
exports.updateCategory = catchAsyncErrors(async (req, res) => {
  let category = await Category.findById(req.params.id);
  if (category) {
    category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ success: true, category });
  } else {
    res.status(500).json({
      success: false,
      message: "Category Not Found",
    });
  }
});

exports.deletCategory = catchAsyncErrors(async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (category) {
    await category.remove();
    res.status(201).json({
      success: true,
      message: "Category Deleted Successfully ",
    });
  } else {
    return;
  }
});

exports.getAllCategory = catchAsyncErrors(async (req, res) => {
  const category = await Category.find();
  res.status(201).json({
    success: true,
    category,
  });
});
