// src/State/ReviewAction.js
import * as actionTypes from "../actionTypes";
import axios from "axios";

const API_BASE = "http://localhost:9000/reviews";
const getUserId = (getState) => getState().userReducer.user._id;

// FETCH PRODUCT REVIEW
export const fetchProductReview = (productId, orderId) => {
  return async (dispatch, getState) => {
    const userId = getUserId(getState);
    const res = await axios.get(
      `${API_BASE}/product/api/${productId}/review`,
      { params: { userId, orderId } }
    );
    dispatch({
      type: actionTypes.FETCH_PRODUCT_REVIEW_SUCCESS,
      payload: { productId, review: res.data.review }
    });
  };
};

// SUBMIT PRODUCT REVIEW
export const submitProductReview = (productId, orderId, rating, comment) => {
  return async (dispatch, getState) => {
    const userId = getUserId(getState);
    const res = await axios.post(
      `${API_BASE}/product/api/${productId}/review`,
      { userId, orderId, rating, comment }
    );
    dispatch({
      type: actionTypes.SUBMIT_PRODUCT_REVIEW_SUCCESS,
      payload: { productId, review: res.data.review }
    });
  };
};

// FETCH ORDER REVIEW
export const fetchOrderReview = (orderId) => {
  return async (dispatch, getState) => {
    const userId = getUserId(getState);
    const res = await axios.get(
      `${API_BASE}/orders/api/${orderId}/review`,
      { params: { userId } }
    );
    dispatch({
      type: actionTypes.FETCH_ORDER_REVIEW_SUCCESS,
      payload: {orderId, review: res.data.review }
    });
  };
};

// SUBMIT ORDER REVIEW
export const submitOrderReview = (orderId, rating, comment) => {
  return async (dispatch, getState) => {
    const userId = getUserId(getState);
    const res = await axios.post(
      `${API_BASE}/orders/api/${orderId}/review`,
      { userId, rating, comment }
    );
    dispatch({
      type: actionTypes.SUBMIT_ORDER_REVIEW_SUCCESS,
      payload: { orderId, review: res.data.review }
    });
  };
};
