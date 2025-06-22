// src/app/ApplicationComponents/RecentOrderComponent.js

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchRecentOrders,
  cancelRecentOrder,
} from "../../State/RecentOrder/RecentOrderAction";
import {
  mergeCart,
  replaceCart,
  fetchUserCart,
} from "../../State/Cart/CartAction";
import ReviewModal from "../Review/ReviewModal";
import { Table, Button, Badge, Modal } from "react-bootstrap";
import { addNotification } from "../../State/Notification/NotificationAction";

export default function RecentOrderComponent() {
  const dispatch = useDispatch();
  const user = useSelector((s) => s.userReducer.user);
  const orders = useSelector((s) => s.recentOrderReducer) || [];
  const reviews = useSelector((s) => s.reviewReducer.reviews);

  // Review modal state (only for new ratings)
  const [reviewModal, setReviewModal] = useState({
    show: false,
    context: "", // "product" or "order"
    orderId: null,
    productId: null,
  });

  // Open modal ONLY if no review is present (but this is now guarded by the button itself)
  const openReview = (ctx, orderId, productId = null) => {
    setReviewModal({ show: true, context: ctx, orderId, productId });
  };
  const closeReview = () => setReviewModal((m) => ({ ...m, show: false }));

  // Reorder options modal state
  const [reorderOpt, setReorderOpt] = useState({ show: false, orderId: null });
  const [disabled, setDisabled] = useState({});
  const openReorder = (orderId) => setReorderOpt({ show: true, orderId });
  const closeReorder = () => setReorderOpt({ show: false, orderId: null });

const handleReorder = async (mode) => {
  const { orderId } = reorderOpt;
  setDisabled(d => ({ ...d, [orderId]: true }));

  if (mode === 'merge') {
    await dispatch(mergeCart(orderId));
    dispatch(addNotification(
      `Order ${orderId} merged into your cart`,
      'dynamic'
    ));
  } else {
    await dispatch(replaceCart(orderId));
    dispatch(addNotification(
      `Order ${orderId} replaced your cart`,
      'dynamic'
    ));
  }

  await dispatch(fetchUserCart(user._id));
  closeReorder();
};

  useEffect(() => {
    if (user?._id) {
      dispatch(fetchRecentOrders(user._id));
    }
  }, [user, dispatch]);

  const canCancel = (o) =>
    o.status === "PLACED" &&
    Date.now() - new Date(o.dateTime) <= 2 * 24 * 60 * 60 * 1000;

  return (
    <div className="px-3">
      <h2>Your Recent Orders</h2>
      {orders.map((o) => {
        const ordRev = reviews[`order-${o._id}`];
        console.log('order', o._id, 'ordRev', ordRev);
        const orderTotal = (o.order || [])
          .reduce((sum, item) => sum + item.qty * item.price, 0)
          .toFixed(2);

        return (
          <div key={o._id} className="mb-5 pb-3 border-bottom">
            <div className="d-flex align-items-center mb-2">
              <h4 className="mb-0">Order #{o._id}</h4>
              {ordRev && (
                <Badge bg="success" className="ms-3">
                  ⭐ {ordRev.rating} — {ordRev.comment}
                </Badge>
              )}
              {!ordRev && (
                <Button
                  variant="primary"
                  className="ms-3"
                  onClick={() => openReview("order", o._id)}
                >
                  Rate Order
                </Button>
              )}
            </div>
            <Table striped bordered hover size="sm" className="mb-2">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Total</th>
                  <th>Your Review</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {(o.order || []).map((item) => {
                  const prodRev = reviews[`product-${item._id}`];
                  console.log('item', item._id, 'prodRev', prodRev);
                  return (
                    <tr key={item._id}>
                      <td>{item.name}</td>
                      <td>{item.qty}</td>
                      <td>${item.price.toFixed(2)}</td>
                      <td>${(item.qty * item.price).toFixed(2)}</td>
                      <td>
                        {prodRev && (
                          <Badge bg="info">
                            ⭐ {prodRev.rating} — {prodRev.comment}
                          </Badge>
                        )}
                      </td>
                      <td className="text-center">
                        {!prodRev && (
                          <Button
                            size="sm"
                            onClick={() =>
                              openReview("product", o._id, item._id)
                            }
                          >
                            Rate
                          </Button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <div className="d-flex justify-content-between align-items-center">
              <strong>Order Total: ${orderTotal}</strong>
              <div>
                {canCancel(o) ? (
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="me-2"
                    onClick={() => {
                      dispatch(cancelRecentOrder(o._id));
                      dispatch(addNotification(
                        `Your order ${o._id} has been cancelled`,
                        'dynamic'
                      ));
                    }}
                  >
                    Cancel
                  </Button>
                ) : (
                  <Badge
                    bg={o.status === "CANCELLED" ? "danger" : "secondary"}
                    className="me-2"
                  >
                    {o.status === "CANCELLED" ? "Canceled" : o.status}
                  </Badge>
                )}
                <Button
                  size="sm"
                  variant="primary"
                  disabled={!!disabled[o._id]}
                  onClick={() => openReorder(o._id)}
                >
                  {disabled[o._id] ? "Reordered" : "Reorder"}
                </Button>
              </div>
            </div>
          </div>
        );
      })}

      {/* Review Modal */}
      {user && (
        <ReviewModal
          show={reviewModal.show}
          onHide={closeReview}
          context={reviewModal.context}
          userId={user._id}
          orderId={reviewModal.orderId}
          productId={reviewModal.productId}
        />
      )}

      {/* Reorder Options Modal */}
      <Modal show={reorderOpt.show} onHide={closeReorder} centered>
        <Modal.Header closeButton>
          <Modal.Title>Reorder Options</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <Button
            variant="outline-primary"
            className="me-2"
            onClick={() => handleReorder("merge")}
          >
            Merge with existing cart
          </Button>
          <Button
            variant="outline-danger"
            onClick={() => handleReorder("replace")}
          >
            Replace entire cart
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}
