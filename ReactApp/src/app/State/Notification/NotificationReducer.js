import * as actionTypes from "../actionTypes";

const initialState = {
  items: []  // each notification: { id, message, notifType }
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NOTIFICATION:
      return {
        ...state,
        items: [...state.items, action.payload]
      };

    case actionTypes.REMOVE_NOTIFICATION:
      return {
        ...state,
        items: state.items.filter(n => n.id !== action.payload.id)
      };

    default:
      return state;
  }
};

export default notificationReducer;
