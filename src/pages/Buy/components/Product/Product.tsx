import React from "react";
import { IProduct } from "../../../../interfaces/products-interface";
import { useDispatch } from "react-redux";
import * as productActionTypes from "../../../../redux/actionTypes/productActionTypes";

const Product: React.FC<IProduct> = ({
  id,
  price,
  stock,
  backgroundColor,
  icon,
  name,
  location
}) => {
  const dispatch = useDispatch();
  const addToRecent = () => {
    dispatch({
      type: productActionTypes.ADD_RECENT_PRODUCT,
      payload: {
        id,
        price,
        stock,
        backgroundColor,
        icon,
        name,
        location
      }
    });
  };
  return (
    <div className="product" onTouchStart={addToRecent}>
      <div style={{ backgroundColor }}>
        <p>{icon}</p>
      </div>
      <strong>{name}</strong>
      <p className="location">{location}</p>
      <strong>{price}</strong>
      <p>MOQ {stock} pieces</p>
    </div>
  );
};

export default Product;
