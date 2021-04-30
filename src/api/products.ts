import { IProducts } from "../interfaces/productsInterface";
import getRandom from "../helpers/getRandom";

export const locations = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi,",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Yobe",
  "Zamfara"
];

type IAllProducts = Array<IProducts>;

const getPriceRange = (): string => {
  const upperBoundary = getRandom(90_000, 200_000);
  const lowerBoundary = upperBoundary / 2;

  return `${lowerBoundary} - ${upperBoundary}`;
};

export const generateProducts = (): IAllProducts => {
  const allProducts: IAllProducts = [];

  const PRODUCT_AMOUNT = 10;

  for (let i = 0; i < PRODUCT_AMOUNT; i++) {
    allProducts.push({
      id: allProducts.length.toString(),
      name: "NIKE Huararche 2019",
      description:
        "Get comfy and comfortable with the new 2019 designer sneaker for all your events",
      image: "",
      price: getPriceRange(),
      location: locations.slice(getRandom(0, locations.length), 1)[0],
      stock: getRandom(1, 50)
    });
  }

  return allProducts;
};
