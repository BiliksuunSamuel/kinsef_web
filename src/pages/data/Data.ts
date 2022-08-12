import { INavbarLink } from "../interface";
import { faker } from "@faker-js/faker";
import ProductModel from "../../model/ProductModel";
import constants from "../../constants";
import { v4 as uuid } from "uuid";
import images from "../../resources/images";
export default class Data {
  static navbarLinks: INavbarLink[] = [
    { title: "Home", route: "/" },
    { title: "About", route: "/about" },
    { title: "Services", route: "/services" },
  ];

  generateId(): string {
    return uuid();
  }

  static getCategory(): string[] {
    const categories: string[] = [];

    Array.from({ length: 40 }).forEach(() => {
      categories.push(faker.commerce.productMaterial());
    });

    return categories;
  }

  static getProducts(count?: number): ProductModel[] {
    const products: ProductModel[] = [];
    const cat = faker.commerce.productMaterial();
    Array.from({ length: count ? count : 25 }).forEach(async () => {
      products.push({
        name: faker.commerce.productName(),
        cost: faker.commerce.price(10, 100, 2, constants.currency),
        id: uuid(),
        category: cat,
        image: faker.image.image(),
        description: faker.commerce.productDescription(),
        adjective: faker.commerce.productAdjective(),
      });
    });
    return products;
  }

  static getProductInfo(): ProductModel {
    return {
      name: faker.commerce.productName(),
      cost: faker.commerce.price(10, 100, 2, constants.currency),
      id: uuid(),
      category: faker.commerce.productMaterial(),
      image: images.shoe2,
      description: faker.commerce.productDescription(),
      adjective: faker.commerce.productAdjective(),
    };
  }
}
