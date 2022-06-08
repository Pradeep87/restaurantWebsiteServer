const express = require("express");
const router = express.Router();
const {
  createCategory,
  deletCategory,
  updateCategory,getAllCategory, deleteAllCategory,
} = require("../controllers/categoryControllers");

router.route("/").get(getAllCategory).delete(deleteAllCategory);
router.route("/new").post(createCategory)
router.route("/:id").put(updateCategory).delete(deletCategory);

module.exports = router;
