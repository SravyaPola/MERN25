import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProductReview,
  submitProductReview,
  fetchOrderReview,
  submitOrderReview,
} from "../../State/Review/ReviewAction";

export default function ReviewModal({
  show,
  onHide,
  context,    // "product" or "order"
  orderId,
  productId,  // only for product reviews
}) {
  const dispatch = useDispatch();
  const reviews = useSelector((s) => s.reviewReducer.reviews || {});
  const key = context === "product"
    ? `product-${productId}`
    : `order-${orderId}`;
  const stored = reviews[key];

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const isPosted = stored && typeof stored.rating === "number";

  // 1️⃣ Fetch existing review when opened
  useEffect(() => {
    if (!show) return;
    if (context === "product") {
      dispatch(fetchProductReview(productId, orderId));
    } else {
      dispatch(fetchOrderReview(orderId));
    }
  }, [show, context, productId, orderId, dispatch]);

  // 2️⃣ Seed form from Redux once `stored` arrives
  useEffect(() => {
    if (!show) return;
    if (stored) {
      setRating(stored.rating);
      setComment(stored.comment);
    } else {
      setRating(0);
      setComment("");
    }
  }, [show, stored]);

  const handleSubmit = async () => {

  if (context === "product") {
    // 1) submit
    await dispatch(
      submitProductReview(productId, orderId, rating, comment)
    );
    // 2) re-fetch so Redux state is up to date
    dispatch(fetchProductReview(productId, orderId));
  } else {

    await dispatch(submitOrderReview(orderId, rating, comment));
    dispatch(fetchOrderReview(orderId));
  }
  onHide();
};

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {isPosted
            ? context === "product"
              ? "Your Product Review"
              : "Your Order Review"
            : context === "product"
            ? "Review Product"
            : "Review Order"}
        </Modal.Title>
      </Modal.Header>

      {isPosted ? (
        <Modal.Body>
          <p><strong>Rating:</strong> {stored.rating} / 5</p>
          <p>
            <strong>Comment:</strong>{" "}
            {stored.comment || <em>(no comment)</em>}
          </p>
        </Modal.Body>
      ) : (
        <Modal.Body>
          <Form>
            <Form.Group controlId="reviewRating">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                as="select"
                value={rating}
                onChange={(e) => setRating(+e.target.value)}
              >
                <option value={0}>Select…</option>
                {[1,2,3,4,5].map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="reviewComment" className="mt-3">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
      )}

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          {isPosted ? "Close" : "Cancel"}
        </Button>
        {!isPosted && (
          <Button
            variant="primary"
            disabled={rating === 0}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        )}
      </Modal.Footer>
    </Modal>
);
}
