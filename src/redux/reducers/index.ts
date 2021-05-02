import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productReducer } from "./productReducer";
import { buyLandingPageReducer } from "./buyLandingPageReducer";

const rootReducer = combineReducers({
  cartReducer,
  productReducer,
  buyLandingPageReducer
});

export default rootReducer;
