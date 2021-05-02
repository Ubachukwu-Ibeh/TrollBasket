import React, { useState, useEffect, useRef } from "react";
import Navigation from "../Navigation/Navigation";
import ForwardArrowIcon from "../../../../assets/svg/ForwardArrowIcon";
import StarOnIcon from "../../../../assets/svg/StarOnIcon";
import StarOffIcon from "../../../../assets/svg/StarOffIcon";
import CancelIcon from "../../../../assets/svg/CancelIcon";
import { useDispatch } from "react-redux";
import * as cartActionTypes from "../../../../redux/actionTypes/cartActionTypes";
import * as buyLandingPageActionTypes from "../../../../redux/actionTypes/buyLandingPageActionTypes";
import { IProduct } from "../../../../interfaces/products-interface";
import { RouteComponentProps } from "react-router-dom";
import storage, { getSessionStorage } from "../../../../helpers/storage";
import colors from "../../../../helpers/colors";

let timeout: NodeJS.Timeout;

const DetailsLandingPage = ({ match }: RouteComponentProps<{ id: string }>) => {
  window.scrollTo(0, 0);

  const dispatch = useDispatch();

  const [notify, setNotify] = useState(false);
  const [cancel, setCancel] = useState(false);

  const product_storage = getSessionStorage(storage.products);
  const cart_storage = getSessionStorage(storage.cart);

  const notification = useRef<HTMLDivElement>(null);

  const {
    id,
    backgroundColor,
    icon,
    view_description,
    rating,
    name,
    price,
    amount
  } = product_storage.products.find(
    (item: IProduct) => item.id === match.params.id
  );

  useEffect(() => {
    if (!notify) return;
    const notificationEl = notification.current!;
    if (cancel) {
      notificationEl.style.display = "none";
      notificationEl.style.animation = "none";
      clearTimeout(timeout);
      return;
    }
    notificationEl.style.display = "flex";
    notificationEl.style.animation = "notify 0.8s ease";
    timeout = setTimeout(() => {
      notificationEl.style.display = "none";
      clearTimeout(timeout);
    }, 2000);
  }, [notify, cancel]);

  const handleCancel = () => {
    setCancel(true);
  };

  const hasAdded = cart_storage.cart.find((item: IProduct) => item.id === id);

  const handleNotify = () => {
    if (notify || hasAdded) return;
    setNotify(true);
    dispatch({
      type: cartActionTypes.ADD_PRODUCT,
      payload: {
        id,
        backgroundColor,
        icon,
        view_description,
        rating,
        name,
        price,
        amount
      }
    });
    dispatch({
      type: buyLandingPageActionTypes.SET_HAS_CHECKED_NOTIFICATION,
      payload: false
    });
  };

  return (
    <div className="detailslandingPage-main">
      <div className="nav-container-details">
        <Navigation />
        <div
          ref={notification}
          className="notification"
          onTouchEnd={handleCancel}
          style={{ display: "none" }}>
          <p>Item added to cart successfully</p>
          <CancelIcon />
        </div>
      </div>
      <div className="product-image-display">
        <div style={{ backgroundColor }}>
          <p>{icon}</p>
        </div>
      </div>
      <div className="section-container">
        <div className="details">
          <strong>{name}</strong>
          <p className="product-description-main">{view_description}</p>
          <p>
            <strong>{price}</strong> /piece
          </p>
        </div>
      </div>
      <div className="section-container">
        <div className="product-description">
          <p>Product Description</p>
          <ForwardArrowIcon />
        </div>
      </div>
      <div className="section-container">
        <div className="reviews">
          <div className="reviews-header">
            <p>Reviews and Ratings</p>
            <p className="view-all">View all</p>
          </div>
          <div className="reviews-stars">
            {Array(5)
              .fill("star")
              .map((star, index) => {
                return index < rating ? (
                  <StarOnIcon key={index} />
                ) : (
                  <StarOffIcon key={index} />
                );
              })}
            <p>{rating}.0</p>
          </div>
          <div className="reviews-comment">
            <p>
              This is the best product I have used in a long while and the size
              fits perfectly and I love the colors!!!!!
            </p>
          </div>
          <div className="reviews-user">
            <div></div>
            <p>Segun Arinze</p>
          </div>
        </div>
      </div>
      <footer>
        <button
          onTouchEnd={handleNotify}
          style={{
            backgroundColor: notify || hasAdded ? "#ddd" : colors.blue
          }}>
          Add to cart
        </button>
        <button>Wishlist</button>
      </footer>
    </div>
  );
};

export default DetailsLandingPage;
