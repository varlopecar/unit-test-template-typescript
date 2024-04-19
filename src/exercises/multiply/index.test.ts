import { multiply } from "./index";

describe("multiply", () => {
  it("should multiply 2 numbers", () => {
    const result = multiply(2, 3);

    expect(result).toBe(6);
  });

  it("should multiply 2 negative numbers", () => {
    const result = multiply(-2, -3);

    expect(result).toBe(6);
  });

  it("should multiply a negative and a positive number", () => {
    const result = multiply(-2, 3);

    expect(result).toBe(-6);
  });

  it("should multiply a number by 0", () => {
    const result = multiply(2, 0);

    expect(result).toBe(0);
  });
});
