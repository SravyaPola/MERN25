import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../State/Product/ProductAction";
import ProductItemComponent from "./ProductItemComponent";

const DisplayProducts = ({ orderId }) => {
  const products = useSelector((state) => state.productReducer.Products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products?.length === 0) {
      dispatch(fetchProducts());
    }
  }, [products, dispatch]);

  return (
    <>
      {products && products.length > 0 ? (
        products.map((productItem) => (
          <ProductItemComponent
            key={productItem._id}
            product={productItem}
            orderId={orderId}                   // ← MAKE SURE this prop is passed in
          />
        ))
      ) : (
        <div>
          <h4>No Products To Display</h4>
        </div>
      )}
    </>
  );
};

export default DisplayProducts;
