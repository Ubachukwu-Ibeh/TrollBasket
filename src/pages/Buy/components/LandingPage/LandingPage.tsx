import React, { useEffect, useRef, useState } from "react";
import NavItem from "../NavItem/NavItem";
import LocationIcon from "../../../../assets/svg/LocationIcon";
import MyOrdersIcon from "../../../../assets/svg/MyOrdersIcon";
import CartIcon from "../../../../assets/svg/CartIcon";
import ProductCategoriesIcon from "../../../../assets/svg/ProductCategoriesIcon";
import PopularProductsIcon from "../../../../assets/svg/PopularProductsIcon";
import RecommendedProductsIcon from "../../../../assets/svg/RecommendedProductsIcon";
import ShopsIcon from "../../../../assets/svg/ShopsIcon";
import SearchIcon from "../../../../assets/svg/SearchIcon";
import HomeIcon from "../../../../assets/svg/HomeIcon";
import BuyIcon from "../../../../assets/svg/BuyIcon";
import DealsIcon from "../../../../assets/svg/DealsIcon";
import WalletIcon from "../../../../assets/svg/WalletIcon";
import MoreIcon from "../../../../assets/svg/MoreIcon";
import Info from "../Info/Info";
import Options from "../Options/Options";
import colors from "../../../../helpers/colors";
import { generateProducts } from "../../../../api/products";
import Product from "../Product/Product";
import { IProducts } from "../../../../interfaces/productsInterface";

const LandingPage = () => {
  const [products, setProducts] = useState<Array<IProducts>>([]);
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
    setProducts(generateProducts());
  }, []);

  return (
    <div className="landingPage-main">
      <div className="landingPage-title">
        <p ref={homeTitle}>TrollBasket</p>
      </div>
      <div className="nav-container">
        <nav id="nav">
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
      <div className="options-container">
        <Options
          svg={<ProductCategoriesIcon />}
          backgroundColor={colors.blue}
          description="Product catgories"
        />
        <Options
          svg={<PopularProductsIcon />}
          backgroundColor={colors.orange}
          description="Popular Products"
        />
        <Options
          svg={<RecommendedProductsIcon />}
          backgroundColor={colors.purple}
          description="Recommended Products"
        />
        <Options
          svg={<ShopsIcon />}
          backgroundColor={colors.green}
          description="Shops"
        />
      </div>
      <div className="products-container">
        {products.map(product => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
      <footer>
        <Options
          svg={<HomeIcon />}
          backgroundColor="transparent"
          description="Home"
          type="footer"
        />
        <Options
          svg={<BuyIcon />}
          backgroundColor="transparent"
          description="Buy"
          type="footer"
          selected={true}
        />
        <Options
          svg={<DealsIcon />}
          backgroundColor="transparent"
          description="Deals"
          type="footer"
        />
        <Options
          svg={<WalletIcon />}
          backgroundColor="transparent"
          description="Wallet"
          type="footer"
        />
        <Options
          svg={<MoreIcon />}
          backgroundColor="transparent"
          description="More"
          type="footer"
        />
      </footer>
    </div>
  );
};

export default LandingPage;
