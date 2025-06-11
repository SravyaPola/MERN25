import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRecentOrders,
  cancelRecentOrder,
} from '../../State/RecentOrder/RecentOrderAction';
import ReviewModal from '../Review/ReviewModal';
import { Table, Button, Badge } from 'react-bootstrap';

const RecentOrderComponent = () => {
  const dispatch = useDispatch();
  const user     = useSelector(s => s.userReducer?.user);
  const orders   = useSelector(s => s.recentOrderReducer ?? []);
  const reviews  = useSelector(s => s.reviewReducer?.reviews ?? {});

  const [modal, setModal] = useState({
    show: false,
    context: '',      // 'order' or 'product'
    orderId: null,
    productId: null,
  });

  useEffect(() => {
    if (user?._id) dispatch(fetchRecentOrders(user._id));
  }, [user, dispatch]);

  const openModal = (ctx, orderId, productId = null) =>
    setModal({ show: true, context: ctx, orderId, productId });
  const closeModal = () =>
    setModal(mod => ({ ...mod, show: false }));

  const canCancel = order =>
    order.status === 'PLACED' &&
    new Date() - new Date(order.dateTime) <= 2*24*60*60*1000;

  return (
    <div className="px-3">
      <h2>Your Recent Orders</h2>
      {orders.map(order => (
        <div key={order._id} className="mb-4">
          <h4>Order #{order._id}</h4>

          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Product</th>
                <th>Your Review</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {order.order.map(item => {
                const key = `product-${item._id}`;
                const rev = reviews[key];
                return (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{rev ? `⭐ ${rev.rating} — ${rev.comment}` : 'Not reviewed'}</td>
                    <td className="text-center">
                      <Button
                        size="sm"
                        variant={rev ? 'outline-secondary' : 'primary'}
                        disabled={!!rev}
                        onClick={() => openModal('product', order._id, item._id)}
                      >
                        {rev ? 'Reviewed' : 'Rate'}
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>

          <div className="d-flex align-items-center">
            <Button
              variant={reviews[`order-${order._id}`] ? 'outline-secondary' : 'primary'}
              disabled={!!reviews[`order-${order._id}`]}
              onClick={() => openModal('order', order._id)}
            >
              {reviews[`order-${order._id}`] ? 'Reviewed' : 'Rate Order'}
            </Button>

            {reviews[`order-${order._id}`] && (
              <Badge bg="success" className="ms-2">Order Reviewed</Badge>
            )}

            <div className="ms-auto">
              {canCancel(order) ? (
                <Button
                  size="sm"
                  variant="outline-danger"
                  onClick={() => dispatch(cancelRecentOrder(order._id))}
                >
                  Cancel
                </Button>
              ) : (
                <Badge bg={order.status === 'CANCELLED' ? 'danger' : 'secondary'}>
                  {order.status === 'CANCELLED' ? 'Canceled' : order.status}
                </Badge>
              )}
            </div>
          </div>
        </div>
      ))}

      <ReviewModal
        show={modal.show}
        onHide={closeModal}
        context={modal.context}
        userId={user?._id}
        orderId={modal.orderId}
        productId={modal.productId}
      />
    </div>
  );
};

export default RecentOrderComponent;
