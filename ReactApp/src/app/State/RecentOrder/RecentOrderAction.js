// src/State/RecentOrder/RecentOrderAction.js

import * as actionTypes from "../actionTypes";
import axios from "axios";

/**
 * saveRecentOrder(cart, userid, dateTime)
 *
 * - Called when the user clicks “Make Payment”.
 * - Sends { userid, cart, dateTime } to the backend.
 * - After a successful save, we dispatch FETCH_RECENT_ORDERS to refresh the list.
 */
export const saveRecentOrder = (cart, userid, dateTime) => {
  console.log("Saving new RecentOrder—cart:", cart, "user:", userid, "at:", dateTime);

  return function (dispatch) {
    axios
      .post("http://localhost:9000/recentorders/api/saveOrder", {
        userid,
        order: cart,     // the cart array
        dateTime,        // ISO string or timestamp
      })
      .then((response) => {
        const savedOrder = response.data; // assume backend returns the saved order object or a status
        console.log("RecentOrder save response:", savedOrder);
        // After saving one order, fetch the full list again
        dispatch(fetchRecentOrders(userid));
      })
      .catch((err) => {
        console.error("Error while saving RecentOrder:", err);
      });
  };
};

/**
 * fetchRecentOrders(userid)
 *
 * - Retrieves all past orders for a given user from the backend.
 * - Expects { userid } in request body and response { orders: [...] }.
 * - Dispatches an action of type FETCH_RECENT_ORDERS with payload = orders array.
 */
export const fetchRecentOrders = (userid) => {
  console.log("Fetching RecentOrders for user:", userid);

  return function (dispatch) {
    axios
      .post("http://localhost:9000/recentorders/api/getUserOrders", { userid })
      .then((response) => {
        const ordersList = response.data.orders; // assume { orders: [ … ] }
        console.log("Received RecentOrders:", ordersList);
        dispatch({
          type: actionTypes.FETCH_RECENT_ORDERS,
          payload: { orders: ordersList },
        });
      })
      .catch((err) => {
        console.error("Error while fetching RecentOrders:", err);
      });
  };
};

/**
 * cancelRecentOrder(orderId)
 *
 * - Attempts to cancel an order by ID.
 * - If the backend confirms cancellation (only possible within 2 days),
 *   it returns the updated order or a success flag.
 * - After cancellation, we dispatch fetchRecentOrders to refresh state.
 */
export const cancelRecentOrder = (orderId, userid) => {
  console.log("Attempting to cancel RecentOrder ID:", orderId);

  return function (dispatch) {
    axios
      .post("http://localhost:9000/recentorders/api/cancelOrder", { orderId })
      .then((response) => {
        const result = response.data; // assume e.g. { success: true, updatedOrder: { … } }
        console.log("Cancel RecentOrder response:", result);
        // After cancellation, refetch all orders
        dispatch(fetchRecentOrders(userid));
      })
      .catch((err) => {
        console.error("Error while canceling RecentOrder:", err);
      });
  };
};
