import { describe, it, expect } from 'vitest';
import { Calculator } from '../calculator';

describe('Calculator', () => {
  const calculator = new Calculator();

  describe('add', () => {
    it('should add two positive numbers correctly', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    it('should handle zero values', () => {
      expect(calculator.add(0, 5)).toBe(5);
      expect(calculator.add(5, 0)).toBe(5);
      expect(calculator.add(0, 0)).toBe(0);
    });

    it('should handle negative numbers', () => {
      expect(calculator.add(-2, 3)).toBe(1);
      expect(calculator.add(-2, -3)).toBe(-5);
    });

    it('should handle decimal numbers', () => {
      expect(calculator.add(1.5, 2.3)).toBeCloseTo(3.8);
    });
  });

  describe('subtract', () => {
    it('should subtract two positive numbers correctly', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    it('should handle negative results', () => {
      expect(calculator.subtract(3, 5)).toBe(-2);
    });

    it('should handle zero values', () => {
      expect(calculator.subtract(5, 0)).toBe(5);
      expect(calculator.subtract(0, 5)).toBe(-5);
    });
  });

  describe('multiply', () => {
    it('should multiply two positive numbers correctly', () => {
      expect(calculator.multiply(4, 3)).toBe(12);
    });

    it('should handle zero multiplication', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
      expect(calculator.multiply(0, 5)).toBe(0);
    });

    it('should handle negative numbers', () => {
      expect(calculator.multiply(-2, 3)).toBe(-6);
      expect(calculator.multiply(-2, -3)).toBe(6);
    });
  });

  describe('divide', () => {
    it('should divide two positive numbers correctly', () => {
      expect(calculator.divide(6, 2)).toBe(3);
    });

    it('should handle decimal results', () => {
      expect(calculator.divide(5, 2)).toBe(2.5);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow(
        'Division by zero is not allowed'
      );
    });

    it('should handle negative numbers', () => {
      expect(calculator.divide(-6, 2)).toBe(-3);
      expect(calculator.divide(-6, -2)).toBe(3);
    });
  });

  describe('power', () => {
    it('should calculate power correctly', () => {
      expect(calculator.power(2, 3)).toBe(8);
      expect(calculator.power(5, 2)).toBe(25);
    });

    it('should handle power of zero', () => {
      expect(calculator.power(5, 0)).toBe(1);
      expect(calculator.power(0, 0)).toBe(1);
    });

    it('should handle power of one', () => {
      expect(calculator.power(5, 1)).toBe(5);
    });

    it('should throw error for negative exponents', () => {
      expect(() => calculator.power(2, -1)).toThrow(
        'Negative exponents are not supported'
      );
    });
  });

  describe('factorial', () => {
    it('should calculate factorial correctly', () => {
      expect(calculator.factorial(0)).toBe(1);
      expect(calculator.factorial(1)).toBe(1);
      expect(calculator.factorial(5)).toBe(120);
    });

    it('should throw error for negative numbers', () => {
      expect(() => calculator.factorial(-1)).toThrow(
        'Factorial of negative numbers is not defined'
      );
    });

    it('should handle large numbers', () => {
      expect(calculator.factorial(10)).toBe(3628800);
    });
  });
});
