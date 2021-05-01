import React from "react";
import BackArrowIcon from "../../../../assets/svg/BackArrowIcon";
import SearchIcon from "../../../../assets/svg/SearchIcon";
import CartIcon from "../../../../assets/svg/CartIcon";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation-main">
      <div>
        <div className="icon-container">
          <Link to={"/"}>
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
        <div className="icon-container">
          <CartIcon />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
