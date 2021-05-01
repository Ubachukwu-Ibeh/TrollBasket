import React, { useState } from "react";
import { IProduct } from "../../../../interfaces/productsInterface";

const Product: React.FC<IProduct> = ({
  id,
  price,
  stock,
  backgroundColor,
  icon,
  name,
  location
}) => {
  return (
    <div className="product">
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
