import { products } from "../../src/data/products";
import { getCurrentDate, getPastDate } from "../../src/helpers/getDates";

describe("test in data products", () => {
  it("products date must be in format yyyy-mm-dd", () => {
    const currentDate = getCurrentDate();
    const fiveDaysAgo = getPastDate(5);
    const sevenDaysAgo = getPastDate(7);

    products.forEach((product) => {
      if (product.id <= 3) {
        expect(product.validityDate).toBe(currentDate);
      } else if (product.id === 4) {
        expect(product.validityDate).toBe(fiveDaysAgo);
      } else if (product.id === 5) {
        expect(product.validityDate).toBe(sevenDaysAgo);
      }
    });
  });

  it("product name must be a string", () => {
    products.forEach((product) => {
      expect(product.name).toBeTruthy();
    });
  });

  it("product price must be greater than 0", () => {
    products.forEach((product) => {
      expect(product.price).toBeGreaterThan(0);
    });
  });

  it(" product description must be a string", () => {
    products.forEach((product) => {
      expect(product.description).toBeTruthy();
    });
  });
});
