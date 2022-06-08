const express = require("express");
const router = express.Router();
const {
  addFood,
  getAllFood,
  deletFood,
  getFoodDetails,
  updateFood,
} = require("../controllers/foodItem");

router.route("/new").post(addFood);
router.route("/").get(getAllFood);
router.route("/:id").put(updateFood).delete(deletFood).get(getFoodDetails);

module.exports = router;
