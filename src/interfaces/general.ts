import { IProduct } from "./productsInterface";

export interface IAction {
  type: string;
  payload?: any;
}
