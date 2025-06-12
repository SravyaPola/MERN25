// routes/cartRoute.js

const express          = require("express");
const mongoose         = require("mongoose");
const router           = express.Router();
const CartDataModel    = require("../DataModel/cartDataModel");
// ← Make sure this path matches where you export your Product schema:
const ProductDataModel = require("../DataModel/productDataModel");

// -----------------------------------------------------------------
// 1) saveUserCart: untouched from your original implementation
// -----------------------------------------------------------------
router.post("/api/saveUserCart", (req, res) => {
  CartDataModel.findOne({ userid: req.body.userid })
    .then((cartDbObj) => {
      if (!cartDbObj) {
        console.log("No cart present — inserting new one");
        return new CartDataModel(req.body).save();
      } else {
        console.log("Cart present — updating existing one");
        cartDbObj.cart = req.body.cart;
        return cartDbObj.save();
      }
    })
    .then((saved) => res.json(saved))
    .catch((err) => {
      console.error("Error in saveUserCart:", err);
      res.status(500).send("Error saving cart");
    });
});

// -----------------------------------------------------------------
// 2) getUserCart: now bullet-proof against bad IDs & returns full data
// -----------------------------------------------------------------
router.post("/api/getUserCart", async (req, res) => {
  try {
    const { userid } = req.body;
    if (!userid) {
      return res.status(400).json({ error: "userid is required" });
    }

    // a) Fetch the raw CartDataModel document
    const cartDoc = await CartDataModel.findOne({ userid }).lean();
    const rawItems = Array.isArray(cartDoc?.cart) ? cartDoc.cart : [];

    // b) Build the "fullCart" array by looking up each product
    const fullCart = [];
    for (const item of rawItems) {
      const id = item.productId?.toString();
      if (!id || !mongoose.Types.ObjectId.isValid(id)) {
        console.warn("Skipping invalid productId:", item.productId);
        continue;
      }
      try {
        const prod = await ProductDataModel.findById(id)
          .lean()
          .select("_id name price description rating");
        if (prod) {
          fullCart.push({ 
            _id:         prod._id, 
            name:        prod.name, 
            price:       prod.price, 
            description: prod.description, 
            rating:      prod.rating, 
            qty:         item.qty 
          });
        } else {
          console.warn("Product not found for ID:", id);
        }
      } catch (lookupErr) {
        console.error("Error looking up product", id, lookupErr);
      }
    }

    // c) Respond with the enriched cart
    return res.json({ cart: fullCart });
  } catch (err) {
    console.error("Unexpected error in getUserCart:", err);
    return res.status(500).json({ error: "Unable to load cart" });
  }
});

module.exports = router;
