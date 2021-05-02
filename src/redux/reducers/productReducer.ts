import { productStore } from "../stores/productStore";
import { IProduct, IProductStore } from "../../interfaces/products-interface";
import { IAction } from "../../interfaces/general";
import * as actionTypes from "../actionTypes/productActionTypes";
import storage, {
  getSessionStorage,
  setSessionStorage
} from "../../helpers/storage";

const handleSetSessionStorage = (data: IProductStore) => {
  setSessionStorage(storage.products, data);
};

export const productReducer = (
  state = productStore,
  { type, payload }: IAction
): IProductStore => {
  const products_storage = getSessionStorage(storage.products);

  switch (type) {
    case actionTypes.SET_PRODUCT: {
      const newStorage = { ...products_storage };
      newStorage.products.push(payload);
      const newState = {
        ...products_storage,
        ...newStorage
      };
      handleSetSessionStorage(newState);
      return newState;
    }

    case actionTypes.ADD_RECENT_PRODUCT: {
      const recent = [...state.recently_viewed];
      const newStorage = { ...products_storage };
      if (
        typeof payload === "object" &&
        !newStorage.recently_viewed.find(
          (item: IProduct) => item.id === payload!.id
        )
      ) {
        if (recent.length === 3) {
          newStorage.recently_viewed.shift();
          newStorage.recently_viewed.push(payload!);
        } else {
          newStorage.recently_viewed.push(payload!);
        }
      }
      const newState = { ...products_storage, ...newStorage };
      handleSetSessionStorage(newState);
      return newState;
    }

    default:
      return products_storage;
  }
};
