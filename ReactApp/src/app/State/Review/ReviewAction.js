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

export const fetchAllProductReviews = (userId) => async (dispatch) => {
  // You’ll need to know which orderIds to query. We’ll fetch recent orders first:
  const { data: { orders }} = await axios.get(
    `http://localhost:9000/recentOrder/api/${userId}/orders`
  );
  // For each order and each product in it, fetch its review
  for (const o of orders) {
    for (const item of o.order) {
      const { data: { review }} = await axios.get(
        `http://localhost:9000/product/api/${item._id}/review`,
        { params: { userId: userId, orderId: o._id } }
      );
      if (review) {
        dispatch({
          type: ActionTypes.FETCH_PRODUCT_REVIEW_SUCCESS,
          payload: {
            productId: item._id,
            review,
          },
        });
      }
    }
  }
};

// Fetch all order-level reviews for the current user
export const fetchAllOrderReviews = (userId) => async (dispatch) => {
  // Again, grab recent orders first
  const { data: { orders }} = await axios.get(
    `http://localhost:9000/recentOrder/api/${userId}/orders`
  );
  for (const o of orders) {
    const { data: { review }} = await axios.get(
      `http://localhost:9000/orders/api/${o._id}/review`,
      { params: { userId: userId } }
    );
    if (review) {
      dispatch({
        type: ActionTypes.FETCH_ORDER_REVIEW_SUCCESS,
        payload: {
          orderId: o._id,
          review,
        },
      });
    }
  }
};

export const fetchAllProductReviewsByProduct = (productId) => async (dispatch) => {
  const res = await fetch(`http://localhost:9000/reviews/product/api/${productId}/allreviews`);

  const data = await res.json();
  const reviews = data.reviews || []; // ← fix here
  dispatch({
    type: "FETCH_ALL_PRODUCT_REVIEWS_SUCCESS",
    payload: { productId, reviews: data.reviews || [] },
  });
};


