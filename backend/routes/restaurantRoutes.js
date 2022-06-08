const express=require("express");
const { createRestaurant,getRestaurant, updateRestaurant, deleteRestaurant, deleteAllRestaurant } = require("../controllers/restaurantController");
const router=express.Router();


router.route("/").get(getRestaurant).delete(deleteAllRestaurant)
router.route("/new").post(createRestaurant)
router.route("/:id").put(updateRestaurant).delete(deleteRestaurant)
module.exports=router