import * as actionTypes from "../actionTypes";
import axios from "axios";


export const saveCartForCheckout = (cart, userid)=>{
    console.log("cart List ", cart);

    return function (dispatch) {
        //dispatch(loading(true));

        axios.post("http://localhost:9000/cart/api/saveUserCart",
            {cart, userid}
        )
        .then((allData)=>{
            let productresp = allData.data;
            console.log("product save response ", productresp);
            //dispatch(loading(false));
            dispatch(fetchProducts());//fetched at the time of save it self
        })
        .catch((err)=>{
            console.log("Error While Saving Product", err)
        })
    }
};

export const AddItemToCart = (selectedProduct)=>{
    return {
        type : actionTypes.ADD_ITEM,
        payload : {selectedProduct}
    }
}

export const UpdateItemInCart = (productId, qty)=>{
    return {
        type : actionTypes.UPDATE_ITEM,
        payload : {
            productId,
            qty
        }
    }
}

export const RemoveItemFromCart = (productId)=>{
    return {
        type : actionTypes.REMOVE_ITEM,
        payload : {productId}
    }
}

export const EmptyTheCart = ()=>{
    return {
        type : actionTypes.EMPTY_CART
    }
}

export const fetchUserCart = (userid)=>{
    console.log("Cart ");

    return function (dispatch) {
        //dispatch(loading(true));

        axios.post("http://localhost:9000/cart/api/getusercart",
            {userid}
        )
        .then((allCartData)=>{
            let cartList = allCartData.data;
            console.log("get products response ", cartList);
            //dispatch(loading(false));
            //need to do this in loop
            for (const item of cartList.cart) {
                console.log("item in for of", item);
                let action = dispatch(AddItemToCart(item));
                dispatch(action);    
            }    
        })
        .catch((err)=>{
            //dispatch(loading(false));
            console.log("Error While Saving Product", err)
        })
    }
};


async function reloadCart(dispatch, userId) {
  dispatch(EmptyTheCart());
  const { data: { cart=[] } } = await axios.post(
    "http://localhost:9000/cart/api/getUserCart",
    { userid: userId }
  );
  cart.forEach(item => dispatch(AddItemToCart(item)));
}

export const mergeCart = (orderId) => async (dispatch, getState) => {
  const {
    userReducer: { user },
    recentOrderReducer: orders,
  } = getState();
  const order = orders.find(o => o._id === orderId);
  if (!order) throw new Error("Order not found");

  // Get the current cart in detail (should have _id, name, price, qty, etc)
  const { data: { cart: existingCart = [] } } = await axios.post(
    "http://localhost:9000/cart/api/getusercart",
    { userid: user._id }
  );

  // Build a map by _id
  const cartMap = {};
  existingCart.forEach(item => {
    cartMap[item._id] = { ...item };
  });

  // Merge order items by _id
  order.order.forEach(orderItem => {
    const id = orderItem._id;
    if (cartMap[id]) {
      cartMap[id].qty = Number(cartMap[id].qty) + Number(orderItem.qty);
    } else {
      cartMap[id] = { ...orderItem };
    }
  });

  // Save back to backend
 const mergedCart = Object.values(cartMap).map(item => ({
  ...item,
  productId: item._id,
}));
  await axios.post(
  "http://localhost:9000/cart/api/saveUserCart",
  { userid: user._id, cart: mergedCart }
);
  await reloadCart(dispatch, user._id);
};


export const replaceCart = (orderId) => async (dispatch, getState) => {
  const {
    userReducer: { user },
    recentOrderReducer: orders,
  } = getState();
  const order = orders.find(o => o._id === orderId);
  if (!order) throw new Error("Order not found");

  const newCart = order.order.map(i => ({
    productId: i._id.toString(),
    qty:       i.qty,
  }));

  await axios.post(
    "http://localhost:9000/cart/api/saveUserCart",
    { userid: user._id, cart: newCart }
  );
  await reloadCart(dispatch, user._id);
};