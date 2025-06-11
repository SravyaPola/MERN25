import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecentOrders } from "../../State/RecentOrder/RecentOrderAction";
import {
  fetchProductReview,
  submitProductReview,
  fetchOrderReview,
  submitOrderReview,
} from "../../State/Review/ReviewAction";
const ReviewComponent = () => {
  const dispatch = useDispatch();
  const user = useSelector((s) => s.userReducer.user);
  const orders = useSelector((s) => s.recentOrderReducer) || [];
  const reviews = useSelector((s) => s.reviewReducer.reviews || {});

  const [openForms, setOpenForms] = useState({});

  // 1️⃣ Load orders
  useEffect(() => {
    if (user?._id) {
      dispatch(fetchRecentOrders(user._id));
    }
  }, [user, dispatch]);

 // 2️⃣ once orders arrive, fetch every saved review
  useEffect(() => {
    if (!orders.length) return;
    orders.forEach((ord) => {
      dispatch(fetchOrderReview(ord._id));             // order-level
      ord.order.forEach((item) =>
        dispatch(fetchProductReview(item._id, ord._id)) // product-level
      );
    });
  }, [orders, dispatch]);

  const toggleForm = (key, context, id, orderId) => {
    if (!openForms[key]) {
      if (context === "product") dispatch(fetchProductReview(id, orderId));
      else dispatch(fetchOrderReview(id));
    }
    setOpenForms((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = async (key, context, id, orderId, rating, comment) => {
  if (context === "product") {

    await dispatch(submitProductReview(id, orderId, rating, comment));
        dispatch(fetchProductReview(id, orderId));
  } else {

 await dispatch(submitOrderReview(id, rating, comment));
    dispatch(fetchOrderReview(id));
  }
  setOpenForms((prev) => ({ ...prev, [key]: false }));
};

  if (!user?._id) return <h3>Please log in to leave reviews.</h3>;
  if (!orders.length) return <h3>No recent orders to review.</h3>;

  return (
    <div className="recent-orders-container">
      <h2>Review Your Recent Orders</h2>

      {orders.map((ord) => (
        <div key={ord._id} className="order-card mb-4">
          <h4>Order #{ord._id}</h4>

          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ borderBottom: "1px solid #ddd", padding: "0.5rem" }}>
                  Product
                </th>
                <th style={{ borderBottom: "1px solid #ddd", padding: "0.5rem" }}>
                  Your Review
                </th>
                <th style={{ borderBottom: "1px solid #ddd", padding: "0.5rem" }}>
                  —
                </th>
              </tr>
            </thead>
            <tbody>
              {ord.order.map((item) => {
                const key = `product-${item._id}`;
                const rev = reviews[key];
                return (
                  <tr key={item._id}>
                    <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>
                      {item.name}
                    </td>
                    <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>
                      {rev ? `⭐ ${rev.rating} — ${rev.comment}` : "Not reviewed"}
                    </td>
                    <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>
                      {rev ? (
                        <button disabled>Reviewed</button>
                      ) : (
                        <button
                          onClick={() =>
                            toggleForm(
                              key,
                              "product",
                              item._id,
                              ord._id
                            )
                          }
                        >
                          {openForms[key] ? "Cancel" : "Rate"}
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div style={{ marginTop: "0.75rem" }}>
            {(() => {
              const key = `order-${ord._id}`;
              const rev = reviews[key];
              return rev ? (
                <span>Order reviewed ⭐ {rev.rating}</span>
              ) : (
                <button onClick={() => toggleForm(key, "order", ord._id, null)}>
                  {openForms[key] ? "Cancel Order Review" : "Rate Order"}
                </button>
              );
            })()}
          </div>

          {Object.entries(openForms).map(
            ([key, isOpen]) =>
              isOpen &&
              ((key.startsWith("product-") &&
                key === `product-${ord.order.find((i) => `product-${i._id}` === key)?._id}`) ||
                key === `order-${ord._id}`) && (
                <ReviewForm
                  key={key}
                  context={key.startsWith("product-") ? "product" : "order"}
                  id={key.split("-")[1]}
                  existing={reviews[key]}
                  onSubmit={(rating, comment) =>
                    handleSubmit(
                      key,
                      key.split("-")[0],
                      key.split("-")[1],
                      key.startsWith("product-") ? ord._id : null,
                      rating,
                      comment
                    )
                  }
                />
              )
          )}
        </div>
      ))}
    </div>
  );
};

// Inline subform for ReviewComponent
const ReviewForm = ({ context, id, existing, onSubmit }) => {
  const [rating, setRating] = useState(existing?.rating || 0);
  const [comment, setComment] = useState(existing?.comment || "");

  return (
    <div
      className="review-form"
      style={{ marginTop: "1rem", padding: "1rem", border: "1px solid #ccc" }}
    >
      <label>
        Rating:
        <select value={rating} onChange={(e) => setRating(+e.target.value)}>
          <option value={0}>Select…</option>
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Comment:
        <br />
        <textarea
          rows={2}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>
      <br />
      <button disabled={rating === 0} onClick={() => onSubmit(rating, comment)}>
        Submit
      </button>
    </div>
  );
};

export default ReviewComponent;
