const Restaurant=require("../models/restaurantModel")
const catchAsyncError=require("../middelwares/catchAsyncError")

exports.createRestaurant=catchAsyncError(async(req,res)=>{
    const restaurant=await Restaurant.create(req.body)
    res.status(201).json({
        success:true,
        restaurant
    })
})

exports.getRestaurant=catchAsyncError(async(req,res)=>{

    const restaurant=await Restaurant.find()
    res.status(200).json({
        success:true,
        totlaResult:restaurant.length,
        restaurant
    })
})


exports.updateRestaurant=catchAsyncError(async(req,res)=>{
    let restaurant=await Restaurant.findById(req.params.id)
    if(restaurant){
        req.body.updatedAt=Date.now()
restaurant=await Restaurant.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({
            success:true,
            restaurant
        })
    }else{
        res.status(500).json({
            success: false,
            message: "Not Found",
          });
    }
})

exports.deleteRestaurant=catchAsyncError(async(req,res)=>{
    let restaurant=await Restaurant.findById(req.params.id)
    if(restaurant){
await restaurant.remove()
res.status(201).json({
    success: true,
    message: "Deleted Successfully "
  });
    }else{
        res.status(500).json({
            success: false,
            message: "Not Found",
          });
    }
})

exports.deleteAllRestaurant=catchAsyncError(async(req,res)=>{
    await Restaurant.deleteMany();
    res.status(201).json({
      success: true,
      message: "All Deleted Successfully "
    });
})

