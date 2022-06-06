const express = require("express");
const router = express.Router();
const {
  createSubCategory,
  deletSubCategory,
  updateSubCategory,
  getAllSubCategory
} = require("../../controllers/categoris/subCategory");



router.route("/subcategory").get(getAllSubCategory);
router.route("/subcategory").post(createSubCategory);
router.route("/subcategory/:id").put(updateSubCategory).delete(deletSubCategory);


module.exports = router;
