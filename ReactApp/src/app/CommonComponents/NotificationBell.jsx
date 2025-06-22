import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch }            from "react-redux";
import { FaBell }                              from "react-icons/fa";
import { removeNotification }                  from "../State/Notification/NotificationAction";
import "./NotificationBell.css";

const NotificationBell = () => {
  const dispatch       = useDispatch();
  const notifications  = useSelector(s => s.notifications.items || []);
  const [open, setOpen] = useState(false);
  const containerRef   = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const onClickOutside = e => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div className="notification-container" ref={containerRef}>
      <div className="notification-icon" onClick={() => setOpen(o => !o)}>
        <FaBell size={20} />{/* ← this is the bell icon */}
        {notifications.length > 0 && (
          <span className="notification-count">
            {notifications.length}
          </span>
        )}
      </div>

      {open && (
        <div className="notification-dropdown">
          {notifications.length === 0 ? (
            <div className="no-notifications">No notifications</div>
          ) : (
            notifications.map(n => (
              <div
                key={n.id}
                className={`notification-item ${n.notifType}`}
                onClick={() => dispatch(removeNotification(n.id))}
              >
                {n.message}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
