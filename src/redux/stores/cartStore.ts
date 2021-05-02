import { ICartStore } from "../../interfaces/cart-interface";
import storage, { setSessionStorage } from "../../helpers/storage";

export const cartStore: ICartStore = {
  cart: []
};

setSessionStorage(storage.cart, cartStore);
