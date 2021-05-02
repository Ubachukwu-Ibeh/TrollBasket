import React, { useState, useEffect, useRef, useContext } from "react";
import { locations } from "../../../../api/products";
import DropDownArrow from "../../../../assets/svg/DropDownArrow";
import { useDispatch } from "react-redux";
import * as buyLandingPageActionTypes from "../../../../redux/actionTypes/buyLandingPageActionTypes";
import { LocationContext } from "../BuyLandingPage/BuyLandingPage";
import storage, { getSessionStorage } from "../../../../helpers/storage";
import CartNotification from "../CartNotification/CartNotification";

const NavItem: React.FC<{
  text: string;
  svg: React.ReactNode;
  type?: string;
}> = ({ text, svg, type }) => {
  const [dropVisible, setDropVisible] = useState(false);
  const main = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const setProducts = useContext(LocationContext);

  const handleDropDownVisibility = () => {
    setDropVisible(prev => !prev);
  };

  useEffect(() => {
    const toggleDropDown = (e: TouchEvent) => {
      let check;

      setDropVisible(prev => (check = prev));

      if (check) {
        handleDropDownVisibility();
      }

      const el = e.target as HTMLDivElement;
      if (main && main.current) {
        if (el.id === main.current.id) {
          handleDropDownVisibility();
        }
      }
    };

    window.addEventListener("touchend", toggleDropDown);

    return () => {
      window.removeEventListener("touchend", toggleDropDown);
    };
  }, []);

  const updateLocation = (str: string) => {
    dispatch({
      type: buyLandingPageActionTypes.CHANGE_LOCATION,
      payload: str
    });
    if (str === "All") {
      const products_storage = getSessionStorage(storage.products);
      setProducts!([...products_storage.products]);
    } else {
      setProducts!(prev => prev.filter(product => product.location === str));
    }
  };

  return (
    <div
      className="nav-item-main"
      ref={main}
      id="main"
      onTouchEnd={e => {
        if (type === "drop-down") {
          e.stopPropagation();
          handleDropDownVisibility();
        }
      }}>
      {type === "drop-down" && (
        <div className="location-dropdown-container" id="d-d">
          {dropVisible && (
            <div className="location-dropdown">
              {[
                <p onTouchEnd={() => updateLocation("All")} key="All">
                  All
                </p>,
                ...locations.map(locale => (
                  <p onTouchEnd={() => updateLocation(locale)} key={locale}>
                    {locale}
                  </p>
                ))
              ]}
            </div>
          )}
        </div>
      )}

      <div
        className="svg-container"
        style={type === "drop-down" ? { marginLeft: "0px" } : undefined}>
        {type === "cart" ? (
          <CartNotification svg={svg} />
        ) : (
          <>
            {svg}
            <div className="cart-notification-container">
              {type === "cart" && (
                <div className="cart-notification">
                  <p>6</p>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      <p>{text}</p>

      {type === "drop-down" && <DropDownArrow />}
    </div>
  );
};

export default NavItem;
