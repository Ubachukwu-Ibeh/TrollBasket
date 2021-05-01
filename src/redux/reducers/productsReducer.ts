import { productStore } from "../stores/productStore";
import { IProductStore } from "../../interfaces/productsInterface";
import { IAction } from "../../interfaces/general";
import * as actionTypes from "../actionTypes/productActionTypes";
import { setSessionStorage } from "../../helpers/storage";

export const productsReducer = (
  state = productStore,
  { type, payload }: IAction
): IProductStore => {
  switch (type) {
    case actionTypes.SET_PRODUCT:
      state.products.push(payload!);
      setSessionStorage("storage", state);
      return { ...state };

    default:
      return state;
  }
};
