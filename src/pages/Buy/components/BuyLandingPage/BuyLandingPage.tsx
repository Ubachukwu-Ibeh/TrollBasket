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
import { IProduct } from "../../../../interfaces/productsInterface";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as productActionTypes from "../../../../redux/actionTypes/productActionTypes";
import { createSelectorHook } from "react-redux";
import { getSessionStorage } from "../../../../helpers/storage";

export const LocationContext = React.createContext<
  React.Dispatch<React.SetStateAction<Array<IProduct>>> | undefined
>(undefined);
const useSelector = createSelectorHook();

const BuyLandingPage = () => {
  const [products, setProducts] = useState<Array<IProduct>>([]);
  const homeTitle = useRef<HTMLParagraphElement>(null);
  const search = useRef<HTMLDivElement>(null);

  const currentLocation = useSelector(
    state => state.buyLandingPageReducer.selectedLocation
  );

  const dispatch = useDispatch();
  const storage = getSessionStorage("storage");

  //Initialize UI fixes and stores
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

    const initializeProducts = (product: IProduct) => {
      dispatch({
        type: productActionTypes.SET_PRODUCT,
        payload: product
      });
    };

    if (storage) {
      setProducts([...storage.products]);
    } else {
      const products = generateProducts();
      products.forEach(product => {
        initializeProducts(product);
      });
      setProducts(products);
    }
  }, []);

  //Handles search
  const updateQuery = (str: string) => {
    if (str.length === 0) {
      setProducts([...storage.products]);
      return;
    }
    const filtered = products.filter(
      product =>
        product.name?.slice(0, str.length).toLowerCase() === str.toLowerCase()
    );
    setProducts([...filtered]);
  };

  return (
    <div className="landingPage-main">
      <div className="landingPage-title">
        <p ref={homeTitle}>TrollBasket</p>
      </div>
      <div className="nav-container">
        <nav id="nav">
          <LocationContext.Provider value={setProducts}>
            <NavItem
              text={currentLocation}
              svg={<LocationIcon />}
              type="drop-down"
            />
          </LocationContext.Provider>
          <NavItem text="My Orders" svg={<MyOrdersIcon />} />
          <NavItem text="Cart" svg={<CartIcon />} />
        </nav>
      </div>
      <div ref={search} className="search-bar">
        <input
          type="search"
          placeholder="search merchbuy"
          onChange={e => updateQuery(e.target.value)}
        />
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
      {/* Render products */}
      <div className="products-container">
        {products.map((product, index) => {
          return (
            <Link key={product.id} to={`/details-landing-page/${product.id}`}>
              <Product {...product} />
            </Link>
          );
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

export default BuyLandingPage;
