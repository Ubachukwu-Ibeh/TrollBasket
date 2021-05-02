import { cartStore } from "../stores/cartStore";
import { ICartStore } from "../../interfaces/cart-interface";
import { IAction } from "../../interfaces/general";
import * as actionTypes from "../actionTypes/cartActionTypes";
import storage, {
  getSessionStorage,
  setSessionStorage
} from "../../helpers/storage";

const handleSetSessionStorage = (data: ICartStore) => {
  setSessionStorage(storage.cart, data);
};

export const cartReducer = (
  state = cartStore,
  { type, payload }: IAction
): ICartStore => {
  const cart_storage = getSessionStorage(storage.cart);

  const find = () => {
    let index: number | undefined;

    state.cart.find((item, idx) => {
      index = idx;
      return item.id === payload;
    });
    return index;
  };

  switch (type) {
    case actionTypes.ADD_PRODUCT: {
      const newStorage = { ...cart_storage };
      newStorage.cart.push(payload);
      const newState = {
        ...cart_storage,
        ...newStorage
      };
      handleSetSessionStorage(newState);
      return newState;
    }

    case actionTypes.DELETE_PRODUCT: {
      const listOfItems = [...state.cart];
      let index: number;
      listOfItems.find((item, idx) => {
        index = idx;
        return item.id === payload;
      });
      const newStorage = { ...cart_storage };
      newStorage.cart.splice(index!, 1);
      const newState = {
        ...cart_storage,
        ...newStorage
      };
      handleSetSessionStorage(newState);
      return newState;
    }

    case actionTypes.INCREASE_PRODUCT_QTY: {
      const index = find();
      const initialAmount = cart_storage.cart[index!].amount!;
      if (initialAmount === 10) return cart_storage;
      const newStorage = { ...cart_storage };
      newStorage.cart[index!].amount! += 1;
      const newState = { ...cart_storage, ...newStorage };
      handleSetSessionStorage(newState);
      return newState;
    }

    case actionTypes.DECREASE_PRODUCT_QTY: {
      const index = find();
      const initialAmount = cart_storage.cart[index!].amount!;
      if (initialAmount === 1) return cart_storage;
      const newStorage = { ...cart_storage };
      newStorage.cart[index!].amount! -= 1;
      const newState = { ...cart_storage, ...newStorage };
      handleSetSessionStorage(newState);
      return newState;
    }

    default:
      return cart_storage;
  }
};
