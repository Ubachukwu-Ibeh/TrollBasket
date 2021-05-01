import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productsReducer } from "./productsReducer";
import { buyLandingPageReducer } from "./buyLandingPageReducer";

const rootReducer = combineReducers({
  cartReducer,
  productsReducer,
  buyLandingPageReducer
});

export default rootReducer;
