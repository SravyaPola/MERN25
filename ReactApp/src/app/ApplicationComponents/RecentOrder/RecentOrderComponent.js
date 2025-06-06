// File: ReactApp/src/app/ApplicationComponents/RecentOrder/RecentOrderComponent.js

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecentOrders, cancelRecentOrder } from "../../State/RecentOrder/RecentOrderAction";

const isWithinTwoDays = (dateString) => {
  const orderDate = new Date(dateString);
  const now = new Date();
  const diffMs = now - orderDate;
  const twoDaysMs = 2 * 24 * 60 * 60 * 1000;
  return diffMs <= twoDaysMs;
};

const RecentOrderComponent = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer.user);
  const orders = useSelector((state) => state.recentOrderReducer);

  useEffect(() => {
    if (user && user._id) {
      dispatch(fetchRecentOrders(user._id));
    }
  }, [dispatch, user]);

  if (!user || !user._id) {
    return <h3>Please log in to see your recent orders.</h3>;
  }

  if (!orders || orders.length === 0) {
    return <h3>You have no past orders.</h3>;
  }

  const handleCancel = (orderId) => {
    if (!user || !user._id) {
      alert("You must be logged in to cancel orders.");
      return;
    }
    dispatch(cancelRecentOrder(orderId, user._id));
  };

  return (
    <div className="recent-orders-container">
      <h2>Your Recent Orders</h2>

      {orders.map((order) => {
        const { _id, dateTime, status, order: items } = order;
        const canCancel = status === "PLACED" && isWithinTwoDays(dateTime);

        return (
          <div
            key={_id}
            className="order-card"
            style={{
              border: "1px solid #ccc",
              borderRadius: "4px",
              margin: "1rem 0",
              padding: "1rem",
            }}
          >
            <h3>Order ID: {_id}</h3>
            <p>
              <strong>Placed On: </strong>
              {new Date(dateTime).toLocaleString()}
            </p>
            <p>
              <strong>Status: </strong>
              {status}
            </p>

            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "0.5rem",
              }}
            >
              <thead>
                <tr>
                  <th style={{ borderBottom: "1px solid #ddd", padding: "0.5rem" }}>
                    Name
                  </th>
                  <th style={{ borderBottom: "1px solid #ddd", padding: "0.5rem" }}>
                    Price
                  </th>
                  <th style={{ borderBottom: "1px solid #ddd", padding: "0.5rem" }}>
                    Qty
                  </th>
                  <th style={{ borderBottom: "1px solid #ddd", padding: "0.5rem" }}>
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item._id}>
                    <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>
                      {item.name}
                    </td>
                    <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>
                      ${item.price}
                    </td>
                    <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>
                      {item.qty}
                    </td>
                    <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>
                      ${(item.price * item.qty).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={{ marginTop: "0.75rem" }}>
              {canCancel ? (
                <button onClick={() => handleCancel(_id)}>Cancel Order</button>
              ) : status === "CANCELLED" ? (
                <span style={{ color: "red" }}>Order Canceled</span>
              ) : (
                <span>Cannot cancel (Delivered or expired)</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecentOrderComponent;
