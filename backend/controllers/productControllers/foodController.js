const Food = require("../../models/foodModal/addFoodModal");

exports.addFood = async (req, res) => {
  try {
    const food = await Food.create(req.body);
    res.status(201).json({
      success: true,
      food,
    });
  } catch (error) {
    console.log(error);
  }
};
exports.getAllFood = async (req, res) => {
  try {
    const food = await Food.find();
    res.status(201).json({
      success: true,
      food,
    });
  } catch (error) {
    console.log(error);
  }
};
exports.getFoodDetails = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (food) {
      res.status(201).json({
        success: true,
        food,
      });
    } else {
      return;
    }
  } catch (error) {
    console.log(error);
  }
};
exports.deletFood = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (food) {
      await food.remove();
      res.status(201).json({
        success: true,
        message: "Product Deleted Successfully ",
      });
    } else {
      return;
    }
  } catch (error) {
    console.log(error);
  }
};
exports.updateFood = async (req, res) => {
  try {
    let food = await Food.findById(req.params.id);
    if (food) {
      food = await Food.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      res.status(200).json({ success: true, food });
    } else {
      return;
    }
  } catch (error) {
    console.log(error);
  }
};
