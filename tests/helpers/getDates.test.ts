import { getCurrentDate, getPastDate } from "../../src/helpers/getDates";
describe("test in getDates", () => {
  it("return  current date in format yyyy-mm-dd", () => {
    const currentDate = new Date().toISOString().split("T")[0];
    expect(getCurrentDate()).toBe(currentDate);
  });

  it("return past date in format yyyy-mm-dd", () => {
    const daysAgo = 5;
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - daysAgo);
    const pastDate = currentDate.toISOString().split("T")[0];
    expect(getPastDate(daysAgo)).toBe(pastDate);
  });
});
