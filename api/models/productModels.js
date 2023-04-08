const mongoose = require("mongoose");

// product Schema
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Inter Product Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Inter Product Description"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Please Inter Product Price"],
    maxLength: [8, "Price cannot exiceed 8 characters"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
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
  category: {
    type: String,
    required: [true, "Please Inter Product Category"],
  },
  Stock: {
    type: Number,
    required: [true, "Please Inter Product Stock"],
    maxLength: [4, "Stock cannot exiceed 4 characters"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    required: true,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        default: 0,
      },
      comment: {
        type: String,
        default: 0,
      },
    },
  ],
  createAt: {
    type: Date,
    default: Date.now,
  },
});

// module export
module.exports = mongoose.model("Product", productSchema);
