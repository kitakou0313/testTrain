import { describe, it, expect } from 'vitest';
import { StringUtils } from '../stringUtils'

describe('StringUtils', () => {
  describe('reverse', () => {
    it('strが""', () => {
      expect(StringUtils.reverse('')).toBe('');
    });
    it('strが1の長さ', () => {
      expect(StringUtils.reverse('a')).toBe('a');
    });
    it('strが2以上の長さ', () => {
      expect(StringUtils.reverse('abcde')).toBe('edcba')
    });
    // it('stgがnull', () => {
    //   expect(StringUtils.reverse(null))
    // })
    // it('strがundefined', () => {
    //   expect(StringUtils.reverse(undefined))
    // })
  })
})