const Category = require("../../models/categoryModal/categoryModal");

exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json({
      success: true,
      category,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.updateCategory = async (req, res) => {
  try {
    let category = await Category.findById(req.params.id);
    if (category) {
      category = await Category.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      res.status(200).json({ success: true, category });
    } else {
      return;
    }
  } catch (error) {
    console.log(error);
  }
};

exports.deletCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (category) {
      await category.remove();
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
exports.getAllCategory = async (req, res) => {
  try {
    const category = await Category.find();
    res.status(201).json({
      success: true,
      category,
    });
  } catch (error) {
    console.log(error);
  }
};
