// src/route/reviewRoute.js
const express     = require("express");
const router      = express.Router();
const ReviewModel = require("../DataModel/reviewDataModel");

// --- PRODUCT REVIEW ---
router.get("/product/api/:productId/review", async (req, res) => {
  const { productId } = req.params;
  const { userId, orderId } = req.query;
  const filter = { productId, orderId };
  if (userId) filter.userId = userId;
  const review = await ReviewModel.findOne(filter);
  return res.json({ review });
});

router.post("/product/api/:productId/review", async (req, res) => {
  const { productId } = req.params;
  const { userId, orderId, rating, comment } = req.body;
  const filter = { userId, orderId, productId };
  const update = { rating, comment, dateTime: new Date() };
  const opts   = { upsert: true, new: true };
  const review = await ReviewModel.findOneAndUpdate(filter, update, opts);
  return res.json({ review });
});

// --- ORDER REVIEW ---
router.get("/orders/api/:orderId/review", async (req, res) => {
  const { orderId } = req.params;
  const { userId }  = req.query;
  const filter = { orderId, userId, productId: { $exists: false } };
  const review = await ReviewModel.findOne(filter);
  return res.json({ review });
});

router.post("/orders/api/:orderId/review", async (req, res) => {
  const { orderId } = req.params;
  const { userId, rating, comment } = req.body;
  const filter = { userId, orderId, productId: { $exists: false } };
  const update = { rating, comment, dateTime: new Date() };
  const opts   = { upsert: true, new: true };
  const review = await ReviewModel.findOneAndUpdate(filter, update, opts);
  return res.json({ review });
});

module.exports = router;

router.get("/product/api/:productId/allreviews", async (req, res) => {
  const { productId } = req.params;
  const reviews = await ReviewModel.find(
    { productId },
    { userId: 1, rating: 1, comment: 1, dateTime: 1, _id: 0 }
  ).lean();
  return res.json({ reviews }); // Make SURE this is an array, never undefined
});


