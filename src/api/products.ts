import { IProduct } from "../interfaces/products-interface";
import getRandom from "../helpers/getRandom";

export const locations = ["Abia", "Ekiti", "Enugu", "Lagos", "Ogun"];

type IAllProducts = Array<IProduct>;

const getPriceRange = (): string => {
  const upperBoundary = getRandom(5_000, 100_000);
  const lowerBoundary = upperBoundary / 2;

  return `₦${lowerBoundary.toLocaleString()} - ₦${upperBoundary.toLocaleString()}`;
};

export const generateProducts = (): IAllProducts => {
  const allProducts: IAllProducts = [];

  const productNames = [
    "Honda CR-V",
    "Renault Duster",
    "Skoda Yeti",
    "Maruti Suzuki Ciaz",
    "Hyundai Elantra",
    "Maruti Suzuki S-Cross",
    "Volvo S60 Cross Country",
    "Hyundai i20 Active",
    "Audi R8",
    "Mercedes-Benz GLE Coupe"
  ];

  productNames.forEach(product => {
    allProducts.push({
      id: allProducts.length.toString(),
      name: product,
      view_description:
        "Get comfy and comfortable with the new 2019 designer sneaker for all your events ",
      price: getPriceRange(),
      location: locations[getRandom(0, locations.length)],
      stock: getRandom(1, 50),
      backgroundColor: `rgb(${getRandom(0, 200)},${getRandom(
        0,
        200
      )},${getRandom(0, 200)})`,
      icon: product.charAt(0),
      rating: getRandom(1, 5),
      amount: 1
    });
  });

  return allProducts;
};
