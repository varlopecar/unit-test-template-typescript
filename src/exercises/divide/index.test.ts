import { divide } from "./index";

describe("divide", () => {
  it("should divide two numbers", () => {
    const result = divide(6, 3);

    expect(result).toBe(2);
  });

  it("should divide two negative numbers", () => {
    const result = divide(-6, -3);

    expect(result).toBe(2);
  });

  it("should divide a negative number and a positive number", () => {
    const result = divide(-6, 3);

    expect(result).toBe(-2);
  });

  it("should throw an exception when dividing by 0", () => {
    const act = () => divide(6, 0);

    expect(act).toThrow("Cannot divide by 0")
  });
});
