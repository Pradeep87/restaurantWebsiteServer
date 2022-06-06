const SubCategory = require("../../models/categoryModal/subCategory");


exports.createSubCategory = async (req, res) => {
    try {
      const subCategory = await SubCategory.create(req.body);
      res.status(201).json({
        success: true,
        subCategory,
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  exports.updateSubCategory = async (req, res) => {
    try {
      let subcategory = await SubCategory.findById(req.params.id);
      if (subcategory) {
        subcategory = await SubCategory.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
            runValidators: true,
          }
        );
        res.status(200).json({ success: true, subcategory });
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  exports.deletSubCategory = async (req, res) => {
    try {
      const subcategory = await SubCategory.findById(req.params.id);
      if (subcategory) {
        await SubCategory.remove();
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
  exports.getAllSubCategory = async (req, res) => {
    try {
      const subcategory = await SubCategory.find();
      res.status(201).json({
        success: true,
        subcategory,
      });
    } catch (error) {
      console.log(error);
    }
  };
  