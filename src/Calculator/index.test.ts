import { Calculator, Operation } from "./index";

describe("Calculator", () => {
  const calculator = new Calculator();
  const operator = calculator.getOperator();

  it.each([
    {
      input: [2, 3],
      expected: 5,
    },
    {
      input: [-1, 3],
      expected: 2,
    },
    {
      input: [0, 0],
      expected: 0,
    },
  ])("should return %p when adding %p", ({ input, expected }) => {
    // Arrange
    operator.add = jest.fn().mockReturnValue(expected);

    // Act
    const result = calculator.calculate(input[0], input[1], Operation.ADD);

    // Assert
    expect(operator.add).toHaveBeenCalledTimes(1);
    expect(operator.add).toHaveBeenCalledWith(input[0], input[1]);
    expect(result).toBe(expected);
  });

  it.each([
    {
      input: [2, 3],
      expected: 6,
    },
    {
      input: [-1, 3],
      expected: -3,
    },
    {
      input: [0, 0],
      expected: 0,
    },
  ])("should return %p when multiplying %p", ({ input, expected }) => {
    // Arrange
    operator.multiply = jest.fn().mockReturnValue(expected);

    // Act
    const result = calculator.calculate(input[0], input[1], Operation.MULTIPLY);

    // Assert
    expect(operator.multiply).toHaveBeenCalledTimes(1);
    expect(operator.multiply).toHaveBeenCalledWith(input[0], input[1]);
    expect(result).toBe(expected);
  });

  it.each([
    {
      input: [2, 3],
      expected: 0.6666666666666666,
    },
    {
      input: [-1, 3],
      expected: -0.3333333333333333,
    },
  ])("should return %p when dividing %p", ({ input, expected }) => {
    // Arrange
    operator.divide = jest.fn().mockReturnValue(expected);

    // Act
    const result = calculator.calculate(input[0], input[1], Operation.DIVIDE);

    // Assert
    expect(operator.divide).toHaveBeenCalledTimes(1);
    expect(operator.divide).toHaveBeenCalledWith(input[0], input[1]);
    expect(result).toBe(expected);
  });

  it("should throw an error when dividing by zero", () => {
    // Act
    operator.divide = jest.fn().mockImplementation(() => {
      throw new Error("Cannot divide by zero");
    });

    const act = () => calculator.calculate(2, 0, Operation.DIVIDE);

    // Assert
    expect(act).toThrow("Cannot divide by zero");
  });

  it("should throw an error when the operation is invalid", () => {
    // Act
    const act = () => calculator.calculate(2, 3, "invalid" as Operation);

    // Assert
    expect(act).toThrow("Invalid operation");
  });
});
