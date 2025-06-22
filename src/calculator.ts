export class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  }

  power(base: number, exponent: number): number {
    if (exponent < 0) {
      throw new Error('Negative exponents are not supported');
    }
    return Math.pow(base, exponent);
  }

  factorial(n: number): number {
    if (n < 0) {
      throw new Error('Factorial of negative numbers is not defined');
    }
    if (n === 0 || n === 1) {
      return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}