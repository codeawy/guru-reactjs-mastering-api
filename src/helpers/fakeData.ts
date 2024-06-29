import { faker } from "@faker-js/faker";

export const generateProductsFakeData = () => {
  return {
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    qty: faker.number.int({ max: 150 }),
  };
};
