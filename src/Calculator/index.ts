import Operator from '../Operator';

export enum Operation {
    ADD = "add",
    MULTIPLY = "multiply",
    DIVIDE = "divide"
}

export class Calculator {
    private readonly operator: Operator;

    constructor() {
        this.operator = Operator.getInstance();
    }

    getOperator(): Operator {
        return this.operator;
    }

    public calculate(a: number, b: number, operation: Operation): number {
        switch (operation) {
            case Operation.ADD:
                return this.operator.add(a, b);
            case Operation.MULTIPLY:
                return this.operator.multiply(a, b);
            case Operation.DIVIDE:
                return this.operator.divide(a, b);
            default:
                throw new Error("Invalid operation");
        }
    }
}