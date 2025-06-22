import React, { useState, useEffect } from "react";
import {useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNotification }           from "../../State/Notification/NotificationAction";
import { addCoupon } from "../../State/Coupon/CouponAction";

//functional component
let Coupon = (props) => {
    
    //reading from user reducer using react-redux hook - useSelector
    //below code allows us the access of any store's state here is 
    let coupon = useSelector((state) => state.couponReducer.coupon); //inside implements mapStateToProps for one state
    let user = useSelector((state) => state.userReducer.user); //inside implements mapStateToProps for one state

    const dispatch      = useDispatch(); // ← define dispatch


     // ── NEW: dedupe & fire static
  const notifications  = useSelector(s => s.notifications.items);
  const hasShownStatic = notifications.some(
    n => n.message === "To Make Payment from Payment Page"
  );
     useEffect(() => {
  if (!hasShownStatic) {
    dispatch(addNotification(
      "Tip: Generate a coupon before checkout.",
      "static"
    ));
  }
}, [dispatch, hasShownStatic]);

   const addCouponClick = () => {
  const code = Math.ceil(Math.random() * 100000);
  dispatch(addCoupon(code));
  dispatch(addNotification(
    `New coupon generated: ${code}.`,
    "dynamic"
  ));
};

    let navigate = useNavigate();
    let func = function(event) {      
        
        navigate('/checkout');
        event.preventDefault();
    }

       // ── NEW (optional): notify when component mounts
    useEffect(() => {
      dispatch(
        addNotification(
          "To Make Payment from Payment Page",
          "static"
        )
      );
    }, [dispatch]);

    // let dateObj = new Date();
    // let [digitalClock, digitalClockUpDate] = useState(dateObj.toLocaleTimeString())

    // setInterval(() => {
    //     let dateObjct = new Date();
    //     digitalClockUpDate(dateObjct.toLocaleTimeString())
    // }, 1000);

    return(
        <section className={"componentClass"}>
            <h1>Generate Coupon</h1>
            <div className="col-md-8">
                <div className="col-md-12">
                    <b>Hi, {user.userName != "" ? user.userName: ""}</b>
                    {coupon ?                    
                    <p>Your Generated Coupon is : 
                    <b>{coupon}</b></p> : 
                    <p>Please Click on Generate Button to Generate the Coupon ID</p>
                    }
                    {/* <h5>{"Digital Clock : " +digitalClock}</h5> */}
                </div>
                
                <button onClick={addCouponClick} >Generate</button>
                <button onClick={func}>Go To Checkout</button>
                
            </div>
            {/* <QRCode value={coupon}  /> */}
        </section>
    )
}

export default Coupon;