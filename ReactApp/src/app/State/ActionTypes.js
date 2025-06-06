//this is the container of all action types to be used in our applications - readucer switch case and actions action types

export const AddUserToStore = "USER.ADDUSERTOSTORE";//
export const ADD_PRODUCTS_TOSTORE = "STORE.ADDPRODUCT";
export const AddStudentToStore = "STUDENT.ADDSTUDENTTOSTORE";

export const ADD_ITEM = "CART.ADD_ITEM";
export const REMOVE_ITEM = "CART.REMOVE_ITEM";
export const UPDATE_ITEM = "CART.UPDATE_ITEM";
export const EMPTY_CART = "CART.EMPTY_CART";
export const ADD_COUPON = "ADD_COUPON";


export const SAVE_RECENT_ORDER   = "RECENTORDER.SAVE_ORDER";
export const FETCH_RECENT_ORDERS = "RECENTORDER.FETCH_ORDERS";
export const CANCEL_RECENT_ORDER = "RECENTORDER.CANCEL_ORDER";