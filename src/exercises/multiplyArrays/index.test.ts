import { multiplyArrays } from "./index";

describe("multiplyArrays", () => {
  it("should multiply two arrays", () => {
    const result = multiplyArrays([1, 2, 3], [4, 5, 6]);

    expect(result).toEqual([4, 10, 18]);
  });

  it("should multiply two arrays with negative numbers", () => {
    const result = multiplyArrays([-1, -2, -3], [-4, -5, -6]);

    expect(result).toEqual([4, 10, 18]);
  });

  it("should multiply two arrays with negative and positive numbers", () => {
    const result = multiplyArrays([-1, 2, -3], [4, -5, 6]);

    expect(result).toEqual([-4, -10, -18]);
  });

  it("should throw an exception multiply two empty arrays", () => {
    const act = () => multiplyArrays([], []);

    expect(act).toThrow("Arrays must have at least one element");
  });

  it("should throw an excepetion when arrays' length are different", () => {
    const act = () => multiplyArrays([1, 2], [4, 5, 6]);

    expect(act).toThrow("Arrays must have the same length");
  });
});
