import cartStore from "../stores/cartStore";
import { ICartAction, ICartStore } from "../../interfaces/cartInterface";
import * as actionTypes from "../actionTypes/cartActionTypes";

const cartReducer = (state = cartStore, action: ICartAction): ICartStore => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      break;

    default:
      break;
  }
  return state;
};
export default cartReducer;
