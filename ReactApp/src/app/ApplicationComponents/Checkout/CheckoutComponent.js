// File: ReactApp/src/app/ApplicationComponents/Checkout/CheckoutComponent.js

import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import Cart from "../Cart/CartComponent"; // one level up into Cart/
import { saveRecentOrder } from "../../State/RecentOrder/RecentOrderAction"; // two levels up
import { EmptyTheCart } from "../../State/Cart/CartAction";                  // two levels up

const CheckoutComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 1) Grab user, coupon, and cart from Redux
  const user = useSelector((state) => state.userReducer.user);
  const coupon = useSelector((state) => state.couponReducer.coupon);
  const cartList = useSelector((state) => state.cartReducer);

  // Determine if cart has any items
  const hasItemsInCart = Array.isArray(cartList) && cartList.length > 0;

  // 2) Local UI state: toggle between “Checkout” vs. “Payment” view
  const [checkout, setCheckout] = useState(true);

  // 3) Go back to /cart
  const goBackToCart = (event) => {
    event.preventDefault();
    navigate("/cart");
  };

  // 4) Called when “Make Payment” is clicked
  const makePaymentClick = () => {
    if (checkout) {
      // Only when moving from “Checkout” → “Payment” do we save & clear
      if (!hasItemsInCart) {
        // Should never reach here because the button is disabled, but guard just in case
        alert("Your cart is empty. Please add at least one product before checking out.");
        return;
      }
      if (user && user._id) {
        const dateTime = new Date().toISOString();
        dispatch(saveRecentOrder(cartList, user._id, dateTime));
        dispatch(EmptyTheCart());
      } else {
        alert("Please log in before making a payment.");
        return;
      }
    }
    setCheckout(!checkout);
  };

  return (
    <>
      {checkout ? (
        <Fragment>
          <h1>Checkout Component</h1>

          <div>
            Hi, <b>{user?.userName}</b>
            <br />
            <p>
              Your items are checked out and will be delivered to the address below.
              <br />
              If everything looks correct, please proceed to payment.
            </p>
            <hr />
            <div>
              Mobile: <b>{user?.mobile}</b>
              <br />
              Address: <b>{user?.street}</b>
            </div>
            <hr />

            {hasItemsInCart ? (
              coupon ? (
                <p>
                  Coupon applied successfully: <b>{coupon}</b>
                </p>
              ) : (
                <p>
                  <b>Please generate a coupon to get a discount. </b>
                  <NavLink to="/coupon">Click here</NavLink>
                </p>
              )
            ) : (
              // Cart is empty, so hide the “Apply Coupon” link and show a reminder
              <p style={{ color: "gray" }}>
                (Add items to your cart to generate a coupon.)
              </p>
            )}

            <hr />
          </div>

          {/* Render the cart in read‐only mode */}
          <Cart readOnly={true} />

          <div style={{ marginTop: "1rem" }}>
            <button onClick={goBackToCart} style={{ marginRight: "1rem" }}>
              Go Back To Cart
            </button>
            <button
              onClick={makePaymentClick}
              disabled={!hasItemsInCart}
              style={{
                cursor: hasItemsInCart ? "pointer" : "not-allowed",
                opacity: hasItemsInCart ? 1 : 0.5,
              }}
            >
              Make Payment
            </button>
          </div>

          {!hasItemsInCart && (
            <p style={{ color: "red", marginTop: "0.5rem" }}>
              Your cart is empty. Add items to enable “Make Payment.”
            </p>
          )}
        </Fragment>
      ) : (
        <Fragment>
          <h1>Payment Page</h1>
          <div>
            Thank you for your payment—your items are now under process!
            <hr />
          </div>
          <div style={{ marginTop: "1rem" }}>
            <button onClick={goBackToCart} style={{ marginRight: "1rem" }}>
              Go Back To Cart
            </button>
            <button onClick={makePaymentClick}>Go To Checkout</button>
          </div>
        </Fragment>
      )}
    </>
  );
};

export default CheckoutComponent;
