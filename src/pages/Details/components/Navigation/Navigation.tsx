import React from "react";
import BackArrowIcon from "../../../../assets/svg/BackArrowIcon";
import SearchIcon from "../../../../assets/svg/SearchIcon";
import CartIcon from "../../../../assets/svg/CartIcon";
import { Link } from "react-router-dom";
import { Routes } from "../../../../Routes";
import CartNotification from "../../../Buy/components/CartNotification/CartNotification";

const Navigation = () => {
  return (
    <div className="navigation-main">
      <div>
        <div className="icon-container">
          <Link to={Routes.Buy}>
            <BackArrowIcon />
          </Link>
        </div>
      </div>
      <div>
        <p>Details</p>
      </div>
      <div>
        <div className="icon-container">
          <SearchIcon />
        </div>
        <Link to={Routes.Cart}>
          <div className="icon-container">
            <CartNotification svg={<CartIcon />} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
