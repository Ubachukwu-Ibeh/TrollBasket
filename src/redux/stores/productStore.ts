import { IProductStore } from "../../interfaces/products-interface";
import storage, { setSessionStorage } from "../../helpers/storage";

export const productStore: IProductStore = {
  products: [],
  recently_viewed: []
};

setSessionStorage(storage.products, productStore);
