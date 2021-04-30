import React from "react";
import { IProducts } from "../../../../interfaces/productsInterface";
import getRandom from "../../../../helpers/getRandom";
import { useDispatch } from "react-redux";

const Product: React.FC<IProducts> = ({
  price,
  stock,
  backgroundColor,
  description,
  icon
}) => {
  return (
    <div className="product">
      <div style={{ backgroundColor }}>
        <p>{icon}</p>
      </div>
      <p>{description.slice(getRandom(0, description.length))}</p>
      <strong>{price}</strong>
      <p>MOQ {stock} pieces</p>
    </div>
  );
};

export default Product;
