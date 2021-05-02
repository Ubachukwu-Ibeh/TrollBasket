import React, { useContext } from "react";
import PlusIcon from "../../../../assets/svg/PlusIcon";
import MinusIcon from "../../../../assets/svg/MinusIcon";
import DeleteIcon from "../../../../assets/svg/DeleteIcon";
import { IProduct } from "../../../../interfaces/products-interface";
import { useDispatch } from "react-redux";
import * as cartActionTypes from "../../../../redux/actionTypes/cartActionTypes";
import { CartContext } from "../CartLandingPage/CartLandingPage";

const Item: React.FC<IProduct> = ({
  id,
  price,
  backgroundColor,
  icon,
  name,
  amount
}) => {
  const dispatch = useDispatch();

  const setTriggerRender = useContext(CartContext);
  const handleDelete = (id: string) => {
    dispatch({
      type: cartActionTypes.DELETE_PRODUCT,
      payload: id
    });
    setTriggerRender!(prev => !prev);
  };

  const handleQuantity = (operation: string) => {
    if (operation === "+") {
      dispatch({
        type: cartActionTypes.INCREASE_PRODUCT_QTY,
        payload: id
      });
    } else {
      dispatch({
        type: cartActionTypes.DECREASE_PRODUCT_QTY,
        payload: id
      });
    }
    setTriggerRender!(prev => !prev);
  };

  return (
    <div className="item-main">
      <div className="product-info">
        <div style={{ backgroundColor }}>
          <p>{icon}</p>
        </div>
        <div className="cart-product-info">
          <p>{name}</p>
          <strong>{price.slice(0, price.indexOf(" "))}</strong>
        </div>
      </div>
      <div className="cart-actions">
        <div className="delete" onTouchEnd={() => handleDelete(id)}>
          <DeleteIcon />
          <p>Delete</p>
        </div>
        <div className="increment">
          <div onTouchEnd={() => handleQuantity("-")}>
            <MinusIcon />
          </div>
          <p>{amount}</p>
          <div onTouchEnd={() => handleQuantity("+")}>
            <PlusIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
