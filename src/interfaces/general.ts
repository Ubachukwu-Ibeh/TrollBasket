import { IProduct } from "./products-interface";

export interface IAction {
  type: string;
  payload?: IProduct | string | boolean;
}
