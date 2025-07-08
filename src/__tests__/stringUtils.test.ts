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
  });

  describe('isPalindrome', () => {
    // it('stgがnull', () => {
    //   expect(StringUtils.reverse(null))
    // })
    // it('strがundefined', () => {
    //   expect(StringUtils.reverse(undefined))
    // })

    it('strが空文字', () => {
      expect(StringUtils.isPalindrome('')).toBe(
        true
      )
    });

    it('strが1の長さ', () => {
      expect(StringUtils.isPalindrome('a')).toBe(true)
    });

    describe('strが2以上の長さ', () => {
      describe('長さが奇数', () => {
        describe('回文である', () => {
          it('大文字小文字区別なしで回文', () => {
            expect(StringUtils.isPalindrome('Heleh')).toBe(true)
          })

          it('大文字小文字区別ありでも回文', () => {
            expect(StringUtils.isPalindrome('HEAEH')).toBe(true)
          })
        });
      });  
      describe('長さが奇数', () => {

      });
    })
  })
})