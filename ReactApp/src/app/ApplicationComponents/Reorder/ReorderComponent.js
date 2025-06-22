// src/app/ApplicationComponents/Reorder/ReorderComponent.js

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector }   from "react-redux";
import { fetchRecentOrders }           from "../../State/RecentOrder/RecentOrderAction";
import { mergeCart, fetchUserCart }    from "../../State/Cart/CartAction";
import { Tabs, Tab, Card, Button }     from "react-bootstrap";
import { addNotification }             from "../../State/Notification/NotificationAction";

const ReorderComponent = () => {
  const dispatch = useDispatch();
  const user     = useSelector((s) => s.userReducer.user);
  const orders   = useSelector((s) => s.recentOrderReducer) || [];
  const [openOrder, setOpenOrder] = useState(null);

    // ── NEW: static dedupe
  const notifications  = useSelector(s => s.notifications.items);
  const hasStatic      = notifications.some(
    n => n.message === "To Assist Them for cancel/reorder"
  );

  useEffect(() => {
    if (user?._id) {
      dispatch(fetchRecentOrders(user._id));
      if (!hasStatic) {
        dispatch(
          addNotification(
            "To Assist Them for cancel/reorder",
            "static"
          )
        );
      }
    }
  }, [dispatch, user, hasStatic]);

  // ── NEW: dynamic for newly‐cancelled
  useEffect(() => {
    const cancelledOrders = orders.filter(o => o.status === "CANCELLED");
    cancelledOrders.forEach(o => {
      const msg = `Your order ${o._id} has been cancelled`;
      if (!notifications.some(n => n.message === msg)) {
        dispatch(addNotification(msg, "dynamic"));
      }
    });
  }, [dispatch, orders, notifications]);

  if (!user?._id)    return <h3>Please log in to reorder.</h3>;
  if (!orders.length) return <h3>No orders available to reorder.</h3>;

  const recent    = orders.filter((o) => o.status !== "CANCELLED");
  const cancelled = orders.filter((o) => o.status === "CANCELLED");
  const sections  = { Recent: recent, Cancelled: cancelled };

  const handleMerge = async (orderId) => {
    await dispatch(mergeCart(orderId, "merge"));
    await dispatch(fetchUserCart(user._id));
    setOpenOrder(null);
  };

  const handleReplace = async (orderId) => {
    await dispatch(mergeCart(orderId, "replace"));
    await dispatch(fetchUserCart(user._id));
    setOpenOrder(null);
  };

  return (
    <div className="reorder-container">
      <h2>Reorder</h2>
      <Tabs defaultActiveKey="Recent" id="reorder-tabs" className="mb-3">
        {Object.entries(sections).map(([label, list]) => (
          <Tab eventKey={label} title={`${label} (${list.length})`} key={label}>
            {list.map((order) => (
              <Card key={order._id} className="my-3">
                <Card.Body>
                  <Card.Title>Order #{order._id}</Card.Title>

                  <Button
                    variant={openOrder === order._id ? "secondary" : "primary"}
                    onClick={() =>
                      setOpenOrder(openOrder === order._id ? null : order._id)
                    }
                  >
                    {openOrder === order._id ? "Cancel" : "Reorder"}
                  </Button>

                  {openOrder === order._id && (
                    <div className="mt-3">
                      <Button
                        variant="outline-primary"
                        onClick={() => handleMerge(order._id)}
                      >
                        Merge with existing cart
                      </Button>
                      <Button
                        variant="outline-danger"
                        className="ms-2"
                        onClick={() => handleReplace(order._id)}
                      >
                        Replace entire cart
                      </Button>
                    </div>
                  )}
                </Card.Body>
              </Card>
            ))}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default ReorderComponent;
