import { buyLandingPageStore } from "../stores/buyLandingPageStore";
import { IAction } from "../../interfaces/general";
import * as actionTypes from "../actionTypes/buyLandingPageTypes";

export const buyLandingPageReducer = (
  state = buyLandingPageStore,
  { type, payload }: IAction
) => {
  switch (type) {
    case actionTypes.CHANGE_LOCATION:
      state.selectedLocation = payload!;
      return { ...state };

    default:
      return state;
  }
};
