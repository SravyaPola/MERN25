// src/State/Review/ReviewReducer.js
import * as actionTypes from "../actionTypes";

const Initial_State = {
  // keys: "product-<id>" or "order-<id>", values: { rating, comment }
  reviews: {}
};

let ReviewReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCT_REVIEW_SUCCESS:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          [`product-${action.payload.productId}`]: action.payload.review
        }
      };

    case actionTypes.SUBMIT_PRODUCT_REVIEW_SUCCESS:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          [`product-${action.payload.productId}`]: action.payload.review
        }
      };

    case actionTypes.FETCH_ORDER_REVIEW_SUCCESS:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          [`order-${action.payload.orderId}`]: action.payload.review
        }
      };

    case actionTypes.SUBMIT_ORDER_REVIEW_SUCCESS:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          [`order-${action.payload.orderId}`]: action.payload.review
        }
      };
      case actionTypes.FETCH_ALL_PRODUCT_REVIEWS_SUCCESS:
        return {
          ...state,
          allProductReviews: {
            ...state.allProductReviews,
            [action.payload.productId]: action.payload.reviews,
          },
        };


    default:
      return state;
  }
};

export default ReviewReducer;
