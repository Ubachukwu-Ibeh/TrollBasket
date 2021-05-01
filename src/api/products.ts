import { IProduct } from "../interfaces/productsInterface";
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
      backgroundColor: `rgb(${getRandom(100, 255)},${getRandom(
        100,
        255
      )},${getRandom(100, 255)})`,
      icon: product.charAt(0),
      rating: getRandom(1, 5)
    });
  });

  return allProducts;
};
