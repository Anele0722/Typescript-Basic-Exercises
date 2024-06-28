//1. Creating an interface ICalculator that defines the methods for basic arithmetic operations(
interface ICalculator {
interface ICalculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply(a: number, b: number): number;
    divide(a: number, b: number): number | string;
}

//2. Implementing a class that adheres to the ICalculator interface
class Calculator implements ICalculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number | string {
        if (b === 0) {
            return "Cannot divide by zero";
        }
        return a / b;
    }
}

//3. Usage example
const calculator = new Calculator();
console.log(calculator.add(5, 3)); // Output: 8
console.log(calcalculator.subtract(5, 3)); // Output: 2
console.log(calculator.multiply(5, 3)); // Output: 15
console.log(calculator.divide(5, 0)); // Output: "Cannot divide by zero"
