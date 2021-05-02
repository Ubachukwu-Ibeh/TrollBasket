import React, { useState } from "react";
import Item from "../Item/Item";
import Product from "../../../Buy/components/Product/Product";
import storage, { getSessionStorage } from "../../../../helpers/storage";
import { IProduct } from "../../../../interfaces/products-interface";
import BackArrowIcon from "../../../../assets/svg/BackArrowIcon";
import { Link } from "react-router-dom";
import { Routes } from "../../../../Routes";

export const CartContext = React.createContext<
  React.Dispatch<React.SetStateAction<boolean>> | undefined
>(undefined);

const CartLandingPage = () => {
  const [, setTriggerRender] = useState(false);
  const products_storage = getSessionStorage(storage.products);
  const cart_storage = getSessionStorage(storage.cart);

  return (
    <div className="cartLandingPage-main">
      <div className="nav-container-details cart-nav">
        <div>
          <div className="icon-container">
            <Link to={Routes.Buy}>
              <BackArrowIcon />
            </Link>
          </div>
          <div>
            <p>Cart</p>
          </div>
        </div>
      </div>
      <div className="item-container">
        <CartContext.Provider value={setTriggerRender}>
          {cart_storage.cart.map((item: IProduct) => {
            return <Item key={"cart-product" + item.id} {...item} />;
          })}
        </CartContext.Provider>
      </div>
      <div className="checkout-main">
        <div className="price-details">
          <div>
            <p>Subtotal</p>
            <p>N18,888</p>
          </div>
          <div>
            <p>Total</p>
            <strong>N18,888</strong>
          </div>
          <button>Checkout</button>
        </div>
      </div>
      <div className="recently-viewed">
        <div className="recent">
          <div className="recently-viewed-headers">
            <p>Recently viewed</p>
            <p className="view-all">View all</p>
          </div>
          <div className="recently-viewed-item">
            {products_storage.recently_viewed.map((product: IProduct) => {
              return <Product key={"recent" + product.id} {...product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartLandingPage;
