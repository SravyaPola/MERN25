import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddItemToCart } from "../../State/Cart/CartAction";
import ReviewModal from "../Review/ReviewModal";
import { Button, Modal, ListGroup } from "react-bootstrap";
import { fetchProductReview, fetchAllProductReviewsByProduct } from "../../State/Review/ReviewAction";

export default function ProductItemComponent({ product, orderId }) {
  const [expanded, setExpanded] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showAllReviewsModal, setShowAllReviewsModal] = useState(false);
  const dispatch = useDispatch();
  const reviews = useSelector((s) => s.reviewReducer.reviews || {});
  const allProductReviews = useSelector((s) => s.reviewReducer.allProductReviews || {});
  const key = `product-${product._id}`;
  const hasReview = Boolean(reviews[key]);

  useEffect(() => {
    if (orderId) {
      dispatch(fetchProductReview(product._id, orderId));
    }
  }, [dispatch, product._id, orderId]);

  // Fetch all reviews for the product when the all reviews modal opens (if not already loaded)
  useEffect(() => {
    if (showAllReviewsModal && !allProductReviews[product._id]) {
      dispatch(fetchAllProductReviewsByProduct(product._id));
    }
  }, [showAllReviewsModal, product._id, allProductReviews, dispatch]);

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

            {hasReview ? (
              <Button
                size="sm"
                variant="info"
                className="ms-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowReviewModal(true);
                }}
              >
                View Your Review
              </Button>
            ) : (
              <Button
                size="sm"
                variant="primary"
                className="ms-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowReviewModal(true);
                }}
              >
                Review This Product
              </Button>
            )}

            {/* View All Reviews button */}
            <Button
              size="sm"
              variant="secondary"
              className="ms-2"
              onClick={e => {
                e.stopPropagation();
                setShowAllReviewsModal(true);
              }}
            >
              View All Reviews
            </Button>
          </div>
        )}
      </div>

      <ReviewModal
        show={showReviewModal}
        onHide={() => setShowReviewModal(false)}
        context="product"
        orderId={orderId}
        productId={product._id}
      />

      {/* Modal for all reviews */}
      <Modal show={showAllReviewsModal} onHide={() => setShowAllReviewsModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>All Reviews for {product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {allProductReviews[product._id] ? (
            allProductReviews[product._id].length === 0 ? (
              <div>No reviews yet.</div>
            ) : (
              <ListGroup>
                {allProductReviews[product._id].map((r, idx) => (
                  <ListGroup.Item key={idx}>
                    <strong>Anonymous User</strong>:&nbsp;
                    <span>⭐ {r.rating} — {r.comment}</span>
                  </ListGroup.Item>
                ))}
              </ListGroup>

            )
          ) : (
            <div>Loading reviews...</div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
