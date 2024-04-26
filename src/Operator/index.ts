import { multiply } from './../exercises/multiply/index';
export default class Operator {
    private static instance: Operator;

    private constructor() {}

    public static getInstance(): Operator {
        if (!Operator.instance) {
            Operator.instance = new Operator();
        }
        return Operator.instance;
    }

    public add(a: number, b: number): number {
        return a + b;
    }

    public multiply(a: number, b: number): number {
        return multiply(a, b);
    }

    public divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    }
}