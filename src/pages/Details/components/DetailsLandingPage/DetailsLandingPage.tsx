import React from "react";
import Navigation from "../Navigation/Navigation";
import ForwardArrowIcon from "../../../../assets/svg/ForwardArrowIcon";
import StarOnIcon from "../../../../assets/svg/StarOnIcon";
import StarOffIcon from "../../../../assets/svg/StarOffIcon";
import CancelIcon from "../../../../assets/svg/CancelIcon";
import { useDispatch, createSelectorHook } from "react-redux";
import * as actionTypes from "../../../../redux/actionTypes/cartActionTypes";
import {
  IProduct,
  IProductStore
} from "../../../../interfaces/productsInterface";
import { RouteComponentProps } from "react-router-dom";

const useSelector = createSelectorHook();

const DetailsLandingPage = ({ match }: RouteComponentProps<{ id: string }>) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.productsReducer.products);
  const {
    backgroundColor,
    icon,
    view_description,
    rating,
    name,
    price
  } = state.find((item: IProduct) => item.id === match.params.id);
  //   const addProduct = () => {
  //     dispatch({
  //       type: actionTypes.ADD_PRODUCT,
  //       payload: {
  //         id,
  //         price,
  //         stock,
  //         backgroundColor,
  //         description,
  //         icon
  //       }
  //     });
  //     setIsSelected(!isSelected);
  //   };
  //   const removeProduct = () => {
  //     dispatch({
  //       type: actionTypes.DELETE_PRODUCT,
  //       payload: {
  //         id
  //       }
  //     });
  //     setIsSelected(!isSelected);
  //   };
  return (
    <div className="detailslandingPage-main">
      <div className="nav-container-details">
        <Navigation />
        {/* <div className="notification">
          <p>Item added to cart successfully</p>
          <CancelIcon />
        </div> */}
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
        <button>Add to cart</button>
        <button>Wishlist</button>
      </footer>
    </div>
  );
};

export default DetailsLandingPage;
