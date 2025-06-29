import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";

import NotificationBell from "./NotificationBell.jsx";
import { logoutUser }   from "../State/User/UserAction";
import "./HeaderComponent.css";

const Header = ({ user }) => {
  const dispatch = useDispatch();
  const nav      = useNavigate();
  const name     = user?.userName;
  const phone    = user?.mobile;

  const doLogout = () => {
    dispatch(logoutUser());
    nav("/userhook");
  };

  return (
    <header className="app-header">
      {/* ROW 1: always 60px tall */}
      <div className="header-row row1">
        <div>
          <span className="greeting-text">
            {name
              ? `Hi ${name}, ${phone} — Welcome!`
              : "Welcome to Shopping Cart"}
          </span>
          {!name && (
            <span className="login-hint">
              &nbsp;Please <NavLink to="/userhook">Login</NavLink>.
            </span>
          )}
        </div>
        <div className="header-controls">
          <NotificationBell />
          {name && (
            <button className="logout-button" onClick={doLogout}>
              Logout
            </button>
          )}
        </div>
      </div>

      {/* ROW 2: always 50px tall */}
      <div className="header-row row2">
        <NavLink to="/home"     className="button">Home</NavLink>
        <NavLink to="/userhook" className="button">Login</NavLink>
        <NavLink to="/about"    className="button">About</NavLink>
        {name && (
          <>
            <NavLink to="/product"       className="button">Product</NavLink>
            <NavLink to="/cart"          className="button">Cart</NavLink>
            <NavLink to="/coupon"          className="button">Coupon</NavLink>
            <NavLink to="/checkout"      className="button">Checkout</NavLink>
            <NavLink to="/recent-orders" className="button">Recent Orders</NavLink>
          </>
        )}
      </div>
    </header>
  );
};

export default connect((s) => ({ user: s.userReducer.user }))(Header);




// import React from "react"; // this is responsible to parse the JSX code
// import { NavLink, useNavigate } from "react-router-dom";
// import { connect } from "react-redux"; //helps to connect react component with redux store
// import NotificationBell     from "./NotificationBell.jsx";
// import "./HeaderComponent.css";

// let Header = (props)=>{
//     let user = props.user; //reading from mapStateToProps which reads from userReducer.user
    
//     console.log(user)
    
//     const usrName = user && user.userName ? user.userName : "";

//     //navigate hook is used to create navigation link on the fly and send the request to given component
//     const navigateHook = useNavigate();
//     const navigateWithName = ()=>{
//         navigateHook("/about/5000/Alec P.")
//     }

//     return(
//         <>
//             {usrName !=""?
//             <h2>Hi {usrName}, {user.mobile} , Welcome to Shopping Cart sponsored by Tech Team SIT</h2>:
//             <h2>Welcome to Shopping Cart sponsored by Tech Team SIT,
//                 <div><h3>Please click on login button to proceed to login.</h3></div>
//             </h2>
//             }   
//              <div className="header-actions">
//                <NotificationBell />
//             </div>
//             <div>
//                 <NavLink to="/home"  className="button" activeclassname="true"> Home </NavLink>
//                 {/* <NavLink to="/user"  className="button" activeclassname="true"> Login </NavLink> */}
//                 <NavLink to="/userhook"  className="button" activeclassname="true"> Login </NavLink>
//                 <NavLink to="/about"  className="button" activeclassname="true"> About </NavLink>
//                 {usrName !== "" && (
//                 <>
//                 <NavLink to="/product"  className="button" activeclassname="true"> Product </NavLink>               
//                 <NavLink to="/cart"  className="button" activeclassname="true"> Cart </NavLink>
//                 <NavLink to="/checkout"  className="button" activeclassname="true"> Checkout </NavLink>
//                 {/*<NavLink to="/coupon"  className="button" activeclassname="true"> Coupon </NavLink>*/}
//                 <NavLink to="/recent-orders"  className="button" activeclassname="true"> Recent Orders </NavLink>
//                 </>
//                 )}

//                 {/* <NavLink to="/studenthook"  className="button" activeclassname="true"> Student Login </NavLink> */}
//                  {/* <NavLink to="/hook"  className="button" activeclassname="true"> Hooks </NavLink> */}

//                 {/* <NavLink to="/comp"  className="button" activeclassname="true"> Controlled/UnControlled </NavLink> */}
//                 {/* <NavLink to="/about/2025"  className="button" activeclassname="true"> About </NavLink> */}
//                 {/* <NavLink to="/about/2025/dat"  className="button" activeclassname="true"> About </NavLink> */}
//             </div>

//             {/* <button onClick={navigateWithName} >About With Name</button> */}
//         </>
//     )
// }

// //subscribing from store - mapStateToProps - allows to access the store data in react component as props
// let mapStateToProps = (store)=>{
//     return{
//         user : store.userReducer.user //this is accessing user data from user reducer and will be used in component as props
//     }
// }

// export default connect(mapStateToProps, null)(Header);



// // import React from "react"; // this is responsible to parse the JSX code
// // import { NavLink, useNavigate } from "react-router-dom";
// // import { connect } from "react-redux"; //helps to connect react component with redux store

// // let Header = (props)=>{
// //     let user = props.user; //reading from mapStateToProps which reads from userReducer.user
    
// //     console.log(user)
    
// //     const usrName = user && user.userName ? user.userName : "";

// //     //navigate hook is used to create navigation link on the fly and send the request to given component
// //     const navigateHook = useNavigate();
// //     const navigateWithName = ()=>{
// //         navigateHook("/about/5000/Alec P.")
// //     }

// //     return(
// //         <>
// //             {usrName !=""?
// //             <h2>Hi {usrName}, {user.mobile} , Welcome to Shopping Cart sponsored by Tech Team SIT</h2>:
// //             <h2>Welcome to Shopping Cart sponsored by Tech Team SIT,
// //                 <div><h3>Please click on login button to proceed to login.</h3></div>
// //             </h2>
// //         }   
// //             <div>
// //                 <NavLink to="/home"  className="button" activeclassname="true"> Home </NavLink>
// //                 <NavLink to="/user"  className="button" activeclassname="true"> Login </NavLink>
// //                 <NavLink to="/about"  className="button" activeclassname="true"> About </NavLink>

// //                 {/* <NavLink to="/comp"  className="button" activeclassname="true"> Controlled/UnControlled </NavLink> */}
// //                 {/* <NavLink to="/about/2025"  className="button" activeclassname="true"> About </NavLink> */}
// //                 {/* <NavLink to="/about/2025/dat"  className="button" activeclassname="true"> About </NavLink> */}
// //             </div>

// //             {/* <button onClick={navigateWithName} >About With Name</button> */}
// //         </>
// //     )
// // }

// // //subscribing from store - mapStateToProps - allows to access the store data in react component as props
// // let mapStateToProps = (store)=>{
// //     return{
// //         user : store.useReducer.user //this is accessing user data from user reducer and will be used in component as props
// //     }
// // }

// // export default connect(mapStateToProps, null)(Header);






// // // import React from "react"; // this is responsible to parse the JSX code
// // // import { NavLink, useNavigate } from "react-router-dom";
// // // import { connect } from "react-redux"; //helps to connect react component with redux store

// // // let Header = (props)=>{
// // //     let user = props.user; //reading from mapStateToProps which reads from userReducer.user
    
// // //     console.log(user)
    
// // //     const usrName = user && user.userName ? user.userName : "";

// // //     //navigate hook is used to create navigation link on the fly and send the request to given component
// // //     const navigateHook = useNavigate();
// // //     const navigateWithName = ()=>{
// // //         navigateHook("/about/5000/Alec P.")
// // //     }

// // //     return(
// // //         <>
// // //             {usrName !=""?
// // //             <h2>Hi {usrName}, {user.mobile} , Welcome to Shopping Cart sponsored by Tech Team SIT</h2>:
// // //             <h2>Welcome to Shopping Cart sponsored by Tech Team SIT,
// // //                 <div><h3>Please click on login button to proceed to login.</h3></div>
// // //             </h2>
// // //         }   
// // //             <div>
// // //                 <NavLink to="/home"  className="button" activeclassname="true"> Home </NavLink>
// // //                 <NavLink to="/user"  className="button" activeclassname="true"> Login </NavLink>
// // //                 <NavLink to="/about"  className="button" activeclassname="true"> About </NavLink>

// // //                 {/* <NavLink to="/comp"  className="button" activeclassname="true"> Controlled/UnControlled </NavLink> */}
// // //                 {/* <NavLink to="/about/2025"  className="button" activeclassname="true"> About </NavLink> */}
// // //                 {/* <NavLink to="/about/2025/dat"  className="button" activeclassname="true"> About </NavLink> */}
// // //             </div>

// // //             {/* <button onClick={navigateWithName} >About With Name</button> */}
// // //         </>
// // //     )
// // // }

// // // //subscribing from store - mapStateToProps - allows to access the store data in react component as props
// // // let mapStateToProps = (store)=>{
// // //     return{
// // //         user : store.useReducer.user //this is accessing user data from user reducer and will be used in component as props
// // //     }
// // // }

// // // export default connect(mapStateToProps, null)(Header);