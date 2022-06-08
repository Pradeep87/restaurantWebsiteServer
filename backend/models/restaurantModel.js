const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  restaurantName: {
    type: String,
    required: true,
  },
  shopMeta: {
    description:{
      type:String,
      required:true,
      default:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old"
    },
    address:{
      street: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      countryCode: {
        type: Number,
        required: true,
      },
    },
  },
  shopContact: {
    contactNumber: {
      type: Number,
      required: true,
    },
    emaild: {
      type: String,
      required: true,
    },
    mailingAddress: {
      type: String,
      required: true,
    },
  },
  shopTime: {
    timeslot: {
      type: String,
      required: true,
    },
  },
  isMultiLocation: {
    type: Boolean,
    required: true,
    default: false,
  },
  multiLocations: [
    {
      type: String,
      required: true,
    },
  ],
  avatar: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  isOpen:{
type:Boolean,
required:true,
default:true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
  },
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
