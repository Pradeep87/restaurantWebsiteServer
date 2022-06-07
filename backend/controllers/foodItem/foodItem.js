const FoodItem = require("../../models/foodItem/foodItemModal");
const catchAsyncError = require("../../middelwares/catchAsyncError");

exports.addFood = catchAsyncError(async (req, res) => {
  const food = await FoodItem.create(req.body);
  if (food) {
    res.status(201).json({
      success: true,
      food,
    });
  } else {
    res.status(500).json({
      success: false,
      message: " not found",
    });
  }
});

exports.getAllFood = catchAsyncError(async (req, res) => {
  const food = await FoodItem.find();
  if (food) {
    res.status(201).json({
      success: true,
      food,
    });
  } else {
    res.status(500).json({
      success: false,
      message: " not found",
    });
  }
});

exports.getFoodDetails = catchAsyncError(async (req, res) => {
  const food = await FoodItem.findById(req.params.id);
  if (food) {
    res.status(201).json({
      success: true,
      food,
    });
  } else {
    res.status(500).json({
      success: false,
      message: " not found",
    });
  }
});

exports.deletFood = catchAsyncError(async (req, res) => {
  const food = await FoodItem.findById(req.params.id);
  if (food) {
    await food.remove();
    res.status(201).json({
      success: true,
      message: "Product Deleted Successfully ",
    });
  } else {
    res.status(500).json({
      success: false,
      message: "not found",
    });
  }
});

exports.updateFood = catchAsyncError(async (req, res) => {
  let food = await FoodItem.findById(req.params.id);
  if (food) {
    req.body.updatedAt = Date.now();
    food = await FoodItem.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ success: true, food });
  } else {
    res.status(500).json({
      success: false,
      message: "food not found",
    });
  }
});
