// src/route/recentOrderRoute.js

let express = require("express");
let router  = express.Router();
let RecentOrderModel = require("../DataModel/recentOrderDataModel");


/**
 * POST /recentorders/api/saveOrder
 *  - Expects body: { userid, order, dateTime }
 *  - Creates a new RecentOrder document.
 *  - Returns the saved document as JSON.
 */
router.post("/api/saveOrder", (req, res) => {
  const { userid, order, dateTime } = req.body;

  // Create a new RecentOrderModel instance
  let newOrder = new RecentOrderModel({
    userid,
    order,
    dateTime: dateTime ? new Date(dateTime) : new Date(),
    status: "PLACED", // default; you could omit since schema defaults to "PLACED"
  });

  newOrder
    .save()
    .then((savedDoc) => {
      res.json(savedDoc);
    })
    .catch((err) => {
      console.error("Error saving RecentOrder:", err);
      res.status(500).send("Error occurred while saving order: " + err);
    });
});

/**
 * POST /recentorders/api/getUserOrders
 *  - Expects body: { userid }
 *  - Finds all orders for that user (sorted by newest first).
 *  - Returns { orders: [ … ] } as JSON.
 */
router.post("/api/getUserOrders", (req, res) => {
  const { userid } = req.body;

  RecentOrderModel.find({ userid })
    .sort({ dateTime: -1 })
    .then((orders) => {
      res.json({ orders });
    })
    .catch((err) => {
      console.error("Error fetching RecentOrders:", err);
      res.status(500).send("Error occurred while fetching orders: " + err);
    });
});

/**
 * POST /recentorders/api/cancelOrder
 *  - Expects body: { orderId }
 *  - Finds that order, checks if it’s within 48 hours.
 *    • If yes, updates status → "CANCELLED" and returns the updated doc.
 *    • If no, responds with 400 and an error message.
 */
router.post("/api/cancelOrder", (req, res) => {
  const { orderId } = req.body;

  RecentOrderModel.findOne({ _id: orderId })
    .then((orderDoc) => {
      if (!orderDoc) {
        return res.status(404).send("Order not found.");
      }

      // Calculate difference between now and order.dateTime
      let orderDate = new Date(orderDoc.dateTime);
      let now = new Date();
      let diffMs = now - orderDate; // ms since order was placed
      const twoDaysMs = 2 * 24 * 60 * 60 * 1000;

      if (diffMs <= twoDaysMs && orderDoc.status === "PLACED") {
        // It’s within 48 hours and still placed: allow cancellation
        orderDoc.status = "CANCELLED";
        orderDoc
          .save()
          .then((updatedDoc) => {
            res.json(updatedDoc);
          })
          .catch((err) => {
            console.error("Error updating order status:", err);
            res.status(500).send("Error occurred while canceling order: " + err);
          });
      } else {
        // Either more than 48 hours have passed or it’s already cancelled/delivered
        return res
          .status(400)
          .send("Cannot cancel this order (either too late or already cancelled).");
      }
    })
    .catch((err) => {
      console.error("Error looking up order to cancel:", err);
      res.status(500).send("Error occurred while retrieving order: " + err);
    });
});

module.exports = router;
