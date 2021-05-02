import React from "react";
import storage, { getSessionStorage } from "../../../../helpers/storage";
import * as buyLandingPageActionTypes from "../../../../redux/actionTypes/buyLandingPageActionTypes";
import { useDispatch } from "react-redux";

const CartNotification: React.FC<{
  svg?: React.ReactNode;
}> = ({ svg }) => {
  const buyPage_storage = getSessionStorage(storage.buyPage);
  const cart_storage = getSessionStorage(storage.cart);

  const dispatch = useDispatch();

  const handleCheckedNotification = () => {
    dispatch({
      type: buyLandingPageActionTypes.SET_HAS_CHECKED_NOTIFICATION,
      payload: true
    });
  };

  return (
    <div className="svg-container" onClick={handleCheckedNotification}>
      {svg}
      {!buyPage_storage.hasCheckedNotification && (
        <div className="cart-notification-container">
          <div className="cart-notification">
            <p>{cart_storage.cart.length}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartNotification;
