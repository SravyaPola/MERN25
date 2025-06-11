import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddItemToCart } from "../../State/Cart/CartAction";
import ReviewModal from "../Review/ReviewModal";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import { fetchProductReview, submitProductReview } from "../../State/Review/ReviewAction";
export default function ProductItemComponent({ product, orderId }) {
  const [expanded, setExpanded] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const dispatch = useDispatch();
  const reviews = useSelector((s) => s.reviewReducer.reviews || {});
  const key = `product-${product._id}`;
  const hasReview = Boolean(reviews[key]);
  useEffect(() => {
    if (orderId) {
      dispatch(fetchProductReview(product._id, orderId));
    }
  }, [dispatch, product._id, orderId]);
  return (
    <>
      <div
        className="p-3 mb-2 border rounded"
        onClick={() => setExpanded((e) => !e)}
        style={{ cursor: "pointer" }}
      >
        <strong>{product.name}</strong>
        {expanded && (
          <div className="mt-2">
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Description:</strong> {product.desc}</p>
            <p><strong>Avg. Rating:</strong> {product.rating ?? "N/A"}</p>

            <Button
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(AddItemToCart(product));
              }}
            >
              Add to Cart
            </Button>

            <Button
              size="sm"
              variant="link"
              className="ms-2"
              onClick={(e) => {
                e.stopPropagation();
                setShowReviewModal(true);
              }}
            >
              {hasReview ? "View Your Review" : "Review This Product"}
            </Button>
          </div>
        )}
      </div>

      <ReviewModal
        show={showReviewModal}
        onHide={() => setShowReviewModal(false)}
        context="product"
        orderId={orderId}              // ← now correctly passed
        productId={product._id}
      />
    </>
  );
}
