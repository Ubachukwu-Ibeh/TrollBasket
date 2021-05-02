export interface IProduct {
  id: string;
  name?: string;
  view_description?: string;
  price: string;
  location: string;
  stock: number;
  backgroundColor: string;
  icon: string;
  rating?: number;
  amount?: number;
}

export interface IProductStore {
  products: Array<IProduct>;
  recently_viewed: Array<IProduct>;
}
