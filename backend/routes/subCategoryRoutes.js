const express = require("express");
const router = express.Router();
const {
  createSubCategory,
  deletSubCategory,
  updateSubCategory,
  getAllSubCategory,
  deletAllSubCategory
} = require("../controllers/subCategory");



router.route("/").get(getAllSubCategory).delete(deletAllSubCategory);
router.route("/new").post(createSubCategory);
router.route("/:id").put(updateSubCategory).delete(deletSubCategory);


module.exports = router;
