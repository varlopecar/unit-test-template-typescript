import Operator from "./index";

describe("Operator", () => {
  const operator = Operator.getInstance();

  it.each([
    {
      input: [2, 3],
      expected: 5,
    },
    {
      input: [-1, 1],
      expected: 0,
    },
    {
      input: [0, 0],
      expected: 0,
    },
  ])("should return the sum of two numbers", ({ input: [a, b], expected }) => {
    // Act
    const act = operator.add(a, b);

    // Assert
    expect(act).toBe(expected);
  });

  it.each([
    {
      input: [2, 3],
      expected: 6,
    },
    {
      input: [-1, 1],
      expected: -1,
    },
    {
      input: [0, 0],
      expected: 0,
    },
  ])(
    "should return the product of two numbers",
    ({ input: [a, b], expected }) => {
      // Act
      const act = operator.multiply(a, b);

      // Assert
      expect(act).toBe(expected);
    }
  );

  it.each([
    {
      input: [8, 4],
      expected: 2,
    },
    {
      input: [0, 1],
      expected: 0,
    },
    {
      input: [-3, 3],
      expected: -1,
    },
  ])(
    "should return the division of two numbers",
    ({ input: [a, b], expected }) => {
      // Act
      const act = operator.divide(a, b);

      // Assert
      expect(act).toBe(expected);
    }
  );

  it.each([
    {
      input: [-4, 0],
      expected: "Cannot divide by zero",
    },
    {
      input: [4, 0],
      expected: "Cannot divide by zero",
    },
  ])(
    "should throw an error when dividing by zero",
    ({ input: [a, b], expected }) => {
      // Act
      const act = () => operator.divide(a, b);

      // Assert
      expect(act).toThrow(expected);
    }
  );
});
