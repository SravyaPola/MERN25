// src/State/RecentOrder/RecentOrderReducer.js

import * as actionTypes from "../actionTypes";

// Initial state: an empty array of orders
const Initial_State = [];

/**
 * RecentOrderReducer
 *
 * - state: [ { _id, userid, order, dateTime, status }, … ]
 * - When FETCH_RECENT_ORDERS arrives, replace state with payload.orders
 * - When CANCEL_RECENT_ORDER arrives, we could either:
 *     a) filter out the canceled order, or
 *     b) update its status in place (safer, so the user sees “CANCELLED”)
 */
const RecentOrderReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RECENT_ORDERS: {
      // payload.orders is an array of order‐objects
      return [...action.payload.orders];
    }

    case actionTypes.CANCEL_RECENT_ORDER: {
      const canceledOrderId = action.payload.orderId;
      return state.map((ord) => {
        if (ord._id === canceledOrderId) {
          return { ...ord, status: "CANCELLED" };
        }
        return ord;
      });
    }

    default:
      return state;
  }
};

export default RecentOrderReducer;
