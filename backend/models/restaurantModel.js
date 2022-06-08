const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  restaurantName: {
    type: String,
    required: true,
  },
  shopMeta: {
    address: {
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
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
