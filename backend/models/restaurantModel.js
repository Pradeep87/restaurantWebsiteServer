const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter the restaurant name"],
  },
  slug: {
    type: String,
    required: [true, "please enter the restaurant name"],
  },
  contactName: {
    type: String,
    required: [true, "please enter the contact name"],
  },
  contactPhone: {
    type: String,
    required: [true, "please enter the contact phone number"],
  },
  contactEmail: {
    type: String,
    required: [true, "please enter the contact  Email"],
  },
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
  meta: {
    description: {
      type: String,
      default:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    },
    about: {
      type: String,
      default:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    },
  },

  cuisin: {
    type: String,
  },
  services: {
    type: String,
  },
  featured: {
    type: String,
  },
  isOpen: {
    type: Boolean,
    default: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatetedAt: {
    type: Date,
  },
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
