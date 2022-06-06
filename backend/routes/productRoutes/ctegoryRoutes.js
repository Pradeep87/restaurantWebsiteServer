const express = require("express");
const router = express.Router();
const {
  createCategory,
  createSubCategory,
  deletCategory,
  updateCategory,getAllCategory,
  deletSubCategory,
  updateSubCategory,
  getAllSubCategory
} = require("../../controllers/productControllers/categoryControllers");

router.route("/category").get(getAllCategory);
router.route("/category").post(createCategory)
router.route("/category/:id").put(updateCategory).delete(deletCategory);

router.route("/subcategory").get(getAllSubCategory);
router.route("/subcategory").post(createSubCategory);
router.route("/subcategory/:id").put(updateSubCategory).delete(deletSubCategory);


module.exports = router;
