const express = require("express");
const router = express.Router();
const {
  createCategory,
  deletCategory,
  updateCategory,getAllCategory,
} = require("../../controllers/categoris/categoryControllers");

router.route("/").get(getAllCategory);
router.route("/new").post(createCategory)
router.route("/:id").put(updateCategory).delete(deletCategory);




module.exports = router;
