const express = require("express");
const router = express.Router();
const {
  addFood,
  getAllFood,
  deletFood,
  getFoodDetails,
  updateFood,
} = require("../../controllers/productControllers/foodController");

router.route("/addfood").post(addFood);
router.route("/allfood").get(getAllFood);
router.route("/food/:id").put(updateFood).delete(deletFood);
router.route("/food/:id").get(getFoodDetails);

module.exports = router;
