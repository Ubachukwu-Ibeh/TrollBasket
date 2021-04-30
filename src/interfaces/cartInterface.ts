import { IProducts } from "./productsInterface";

export interface ICartStore {
  products: Array<IProducts>;
}

export interface ICartAction {
  type: string;
  payload?: unknown;
}
