// src/DataModel/recentOrderDataModel.js

let mongooseObj = require("mongoose");
let schemaObj = mongooseObj.Schema;

// Make sure you connect to the same database as Cart:
mongooseObj.connect("mongodb://127.0.0.1:27017/data25");

// Define a schema for RecentOrders:
//   • userid: String (required)
//   • order: Object  (you can revise this to Array if you prefer an array of items)
//   • dateTime: Date
//   • status:  String (e.g. "PLACED", "CANCELLED", "DELIVERED")
// versionKey: false (so “__v” won’t be created)
let RecentOrderSchema = new schemaObj(
  {
    userid:   { type: String, required: true },
    order:    Object,
    dateTime: Date,
    status:   { type: String, default: "PLACED" },
  },
  {
    versionKey: false,
  }
);

// Create (or reuse) a model named "recentorders".
// This will use the “recentorders” collection in MongoDB.
let RecentOrderModel = mongooseObj.model("recentorders", RecentOrderSchema);

module.exports = RecentOrderModel;
