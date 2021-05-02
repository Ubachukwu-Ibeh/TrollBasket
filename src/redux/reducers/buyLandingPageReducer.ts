import { buyLandingPageStore } from "../stores/buyLandingPageStore";
import { IAction } from "../../interfaces/general";
import { IBuyPageStore } from "../../interfaces/buyPage-interface";
import * as actionTypes from "../actionTypes/buyLandingPageActionTypes";
import storage, {
  getSessionStorage,
  setSessionStorage
} from "../../helpers/storage";

const handleSetSessionStorage = (data: IBuyPageStore) => {
  setSessionStorage(storage.buyPage, data);
};

export const buyLandingPageReducer = (
  state = buyLandingPageStore,
  { type, payload }: IAction
) => {
  const buyPage_storage = getSessionStorage(storage.buyPage);

  switch (type) {
    case actionTypes.CHANGE_LOCATION: {
      const newStorage = { ...buyPage_storage };
      typeof payload === "string" && (newStorage.selectedLocation = payload);
      const newState = { ...buyPage_storage, ...newStorage };
      handleSetSessionStorage(newState);
      return newState;
    }
    case actionTypes.SET_HAS_CHECKED_NOTIFICATION: {
      const newStorage = { ...buyPage_storage };
      newStorage.hasCheckedNotification = payload;
      const newState = { ...buyPage_storage, ...newStorage };
      handleSetSessionStorage(newState);
      return newState;
    }

    default:
      return buyPage_storage;
  }
};
