import React, { useEffect, useRef } from "react";
import NavItem from "../NavItem/NavItem";
import LocationIcon from "../../../../assets/svg/LocationIcon";
import MyOrdersIcon from "../../../../assets/svg/MyOrdersIcon";
import CartIcon from "../../../../assets/svg/CartIcon";
import SearchIcon from "../../../../assets/svg/SearchIcon";
import Info from "../Info/Info";

const colors = {
  orange: "#EE6F44",
  blue: "#227EFF",
  darkBlue: "#003277"
};

const Home = () => {
  const homeTitle = useRef<HTMLParagraphElement>(null);
  const search = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let svgMargin;
    if (homeTitle && homeTitle.current) {
      svgMargin = window.getComputedStyle(document.getElementById("d-d")!)
        .marginLeft;
      homeTitle.current.style.marginLeft = svgMargin;
    }
    if (search && search.current) {
      search.current.style.width = `calc(${
        window.getComputedStyle(document.getElementById("nav")!).width
      } - (${svgMargin} * 2))`;
    }
  }, []);

  return (
    <div className="home-main">
      <div className="home-title">
        <p ref={homeTitle}>TrollBasket</p>
      </div>
      <div className="nav-container">
        <nav className="nav" id="nav">
          <NavItem text="Lagos" svg={<LocationIcon />} type="drop-down" />
          <NavItem text="My Orders" svg={<MyOrdersIcon />} />
          <NavItem text="Cart" svg={<CartIcon />} />
        </nav>
      </div>
      <div ref={search} className="search-bar">
        <input type="search" placeholder="search merchbuy" />
        <SearchIcon />
      </div>
      <div className="info-slider">
        <div className="space"></div>
        <Info backgroundColor={colors.blue} />
        <Info
          numberID={1}
          question={
            <p>
              Having any <span style={{ color: colors.orange }}>issues</span>{" "}
              with <br></br> your order?
            </p>
          }
          action="Contact Us"
          backgroundColor={colors.darkBlue}
        />
        <Info backgroundColor={colors.orange} />
        <div className="space"></div>
      </div>
    </div>
  );
};

export default Home;
