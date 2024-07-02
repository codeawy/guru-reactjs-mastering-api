import { faker } from "@faker-js/faker";

export const generateProductsFakeData = (MAX_LENGTH: number = 10) => {
  return {
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    qty: faker.number.int({ max: MAX_LENGTH }),
  };
};
