import { describe, it, expect } from 'vitest';
import { ArrayUtils } from '../arrayUtils'

describe('ArrayUtils', () => {
  describe('findMax', () => {
    describe('空配列', () => {
      it('should throw an error', () => {
        expect(() => {
          ArrayUtils.findMax([]);
        }).toThrow("Array cannot be empty");
      });
    });

    describe("要素が一つ以上の配列", () => {
      it('要素が一つの配列', () => {
        expect(ArrayUtils.findMax([5])).toBe(5);
      });

      describe('要素が複数の配列', () => {
        it('最大値が一つのみ含まれる配列', () => {
          expect(ArrayUtils.findMax([5,4,3,6,7])).toBe(7)
        });

        it('最大値が複数含まれる配列', () => {
          expect(ArrayUtils.findMax([5,5,3,2,1,4])).toBe(5)
        })
      })
    });
  
  });
});