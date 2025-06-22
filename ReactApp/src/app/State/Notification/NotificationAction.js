import * as actionTypes from "../actionTypes";

// simple incremental ID
let nextNotificationId = 1;

/**
 * @param {string} message    – the notification text
 * @param {"static"|"dynamic"} notifType  – defaults to "dynamic"
 */
export const addNotification = (message, notifType = "dynamic") => ({
  type: actionTypes.ADD_NOTIFICATION,
  payload: {
    id: nextNotificationId++,
    message,
    notifType
  }
});

/**
 * @param {number} id  – the notification’s id
 */
export const removeNotification = (id) => ({
  type: actionTypes.REMOVE_NOTIFICATION,
  payload: { id }
});
