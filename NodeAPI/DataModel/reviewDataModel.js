// src/DataModel/reviewDataModel.js
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

// connect to same DB
mongoose.connect("mongodb://127.0.0.1:27017/data25");

const ReviewSchema = new Schema({
  userId:    { type: String, required: true },
  orderId:   { type: String, required: true },
  productId: { type: String },           // omit for order-level
  rating:    { type: Number, required: true },
  comment:   { type: String, default: "" },
  dateTime:  { type: Date, default: Date.now }
}, { versionKey: false });

module.exports = mongoose.model("reviews", ReviewSchema);
