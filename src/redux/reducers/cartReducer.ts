import cartStore from "../stores/cartStore";
import { ICartStore } from "../../interfaces/cartInterface";
import { IAction } from "../../interfaces/general";
import * as actionTypes from "../actionTypes/cartActionTypes";

export const cartReducer = (
  state = cartStore,
  { type, payload }: IAction
): ICartStore => {
  switch (type) {
    case actionTypes.ADD_PRODUCT:
      return { ...state };

    default:
      return state;
  }
};
