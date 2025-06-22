import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveProduct } from "../../State/Product/ProductAction";
import DisplayProducts from "./DisplayProduct";
import { addNotification }  from "../../State/Notification/NotificationAction";

const ProductComponent = () => {
  // 1) Grab the current user from Redux
  const user = useSelector((state) => state.userReducer.user);
  const isAdmin = user && user.userName === "admin";

   const dispatch       = useDispatch();
  const notifications  = useSelector(s => s.notifications.items);
  const hasShownStatic = notifications.some(
    n => n.message === "To Add Products from Product Screen"
  );

  // 2) Refs for the form fields
  const nameRef = useRef(null);
  const priceRef = useRef(null);
  const descRef = useRef(null);
  const ratingRef = useRef(null);

  // 3) Grab the “current product” from Redux (e.g. for editing)
  const product = useSelector((state) => state.productReducer.Product);

  const dispatchProduct = useDispatch();

// src/app/Product/ProductComponent.jsx
useEffect(() => {
  if (isAdmin && !hasShownStatic) {
    dispatch(addNotification(
      "Tip: Use this screen to add new products.",
      "static"
    ));
  }
}, [dispatch, isAdmin, hasShownStatic]);


  // 4) Only initialize the inputs if the user is an admin and the refs exist
  useEffect(() => {
    // If not admin, skip all of this because the form never renders
    if (!isAdmin) return;

    // Check that each ref is non-null before setting .value
    if (nameRef.current) {
      nameRef.current.value = product?.name || "";
    }
    if (priceRef.current) {
      priceRef.current.value = product?.price || "";
    }
    if (descRef.current) {
      descRef.current.value = product?.desc || "";
    }
    if (ratingRef.current) {
      ratingRef.current.value = product?.rating || "";
    }
    // We only want to run this when `product` or `isAdmin` changes
  }, [product, isAdmin]);

  // 5) Handler for saving the product (only admin can trigger)
  const saveProductClick = (evt) => {
    evt.preventDefault();
    if (!isAdmin) return;

    const productToSave = {
      name: nameRef.current.value,
      price: priceRef.current.value,
      desc: descRef.current.value,
      rating: ratingRef.current.value,
    };

    alert("We are going to save this product: " + JSON.stringify(productToSave));
    dispatchProduct(saveProduct(productToSave));

    // Optionally clear fields afterward
    nameRef.current.value = "";
    priceRef.current.value = "";
    descRef.current.value = "";
    ratingRef.current.value = "";
  };

  return (
    <div className="col-md-12">
      <h1 className="col-md-12">Product Component</h1>

      {isAdmin ? (
        <form className="form componentClass">
          <div className="form col-md-8">
            <div className="col-md-12">
              <b>Product Name</b>
              <input
                type="text"
                className="form-control col-md-6 name"
                ref={nameRef}
                maxLength={25}
                placeholder="Product Name"
              />
            </div>
            <div className="col-md-12">
              <b>Price </b>
              <input
                type="number"
                className="form-control col-md-6"
                ref={priceRef}
                placeholder="Product Price"
              />
            </div>
            <div className="col-md-12">
              <b>Description </b>
              <input
                type="text"
                className="form-control col-md-6"
                ref={descRef}
                placeholder="Please Describe the product"
              />
            </div>
            <div className="col-md-12">
              <b>Ratings </b>
              <input
                type="text"
                className="form-control col-md-6"
                ref={ratingRef}
                placeholder="Ratings"
              />
            </div>
            <input
              type="button"
              className="form-control btn btn-primary col-md-3"
              value="Save Product"
              onClick={saveProductClick}
            />
          </div>
        </form>
      ) : (
        <div style={{ margin: "2rem 0", color: "#555" }}>
          {user && user.userName
            ? "Only ‘admin’ can add new products."
            : "Please log in as ‘admin’ to add new products."}
        </div>
      )}

      <hr />
      <DisplayProducts />
    </div>
  );
};

export default ProductComponent;
