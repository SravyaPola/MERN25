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


export const mergeCart = (orderId) => {
  return async (dispatch, getState) => {
    const { userReducer: { user }, recentOrderReducer: orders } = getState();
    const order = orders.find((o) => o._id === orderId);
    if (!order) throw new Error("Order not found");

    // build the “to-add” list
    const items = order.order.map((i) => ({
      productId: i._id.toString(),
      qty:       i.qty,
    }));

    // fetch existing cart
    const res = await axios.post("/cart/api/getusercart", { userid: user._id });
    const existing = (res.data?.cart) || [];

    // merge: sum quantities
    const newCart = [...existing];
    items.forEach((it) => {
      const found = newCart.find((x) => x.productId === it.productId);
      if (found) {
        found.qty += it.qty;           // increment by reorder qty
      } else {
        newCart.push(it);               // brand-new item
      }
    });

    // save merged cart
    await axios.post("/cart/api/saveUserCart", { userid: user._id, cart: newCart });

    // reload Redux cart slice
    dispatch(EmptyTheCart());
    const full = await axios.post("/cart/api/getUserCart", { userid: user._id });
    for (const item of full.data.cart) {
      dispatch(AddItemToCart(item));
    }
  };
};

export const replaceCart = (orderId) => {
  return async (dispatch, getState) => {
    const { userReducer: { user }, recentOrderReducer: orders } = getState();
    const order = orders.find((o) => o._id === orderId);
    if (!order) throw new Error("Order not found");

    // build the “to-add” list
    const items = order.order.map((i) => ({
      productId: i._id.toString(),
      qty:       i.qty,
    }));

    // save only this order’s items
    await axios.post("/cart/api/saveUserCart", { userid: user._id, cart: items });

    // reload Redux cart slice
    dispatch(EmptyTheCart());
    const full = await axios.post("/cart/api/getUserCart", { userid: user._id });
    for (const item of full.data.cart) {
      dispatch(AddItemToCart(item));
    }
  };
};
