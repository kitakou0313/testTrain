import { describe, it, expect } from 'vitest';
import { ArrayUtils } from '../arrayUtils'

describe('ArrayUtils', () => {
   const arrayUtils = new ArrayUtils();

  describe('findMax', () => {
    it('空配列', () => {
      expect( () => {
        ArrayUtils.findMax([])
      }
      ).toThrow("Array cannot be empty")
    });

  });
});