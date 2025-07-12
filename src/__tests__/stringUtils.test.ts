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
        it('回文でない', () => {
          expect(StringUtils.isPalindrome('abcde')).toBe(false)
        })
      });  
      describe('長さが偶数', () => {
        describe('回文である', () => {
          it('大文字小文字区別なしで回文', () => {
            expect(StringUtils.isPalindrome('Heeh')).toBe(true)
          })

          it('大文字小文字区別ありでも回文', () => {
            expect(StringUtils.isPalindrome('HEEH')).toBe(true)
          })
        });
        it('回文でない', () => {
          expect(StringUtils.isPalindrome('abcd')).toBe(false)
        })
      });
    })
  })

  describe('captalize', () => {
    // it('strがnull', () => {
    //   expect(StringUtils.capitalize(null))
    // });
    // it('strがundefined', () => {
    //   expect(StringUtils.capitalize(undefined))
    // })
    it('strが空文字列', () => {
      expect(StringUtils.capitalize('')).toBe('')
    });

    describe('strが1以上の長さ', () => {
      describe('長さが1', () => {
        describe('先頭の文字が英字', () => {
          it('先頭の文字が大文字', () => {
            expect(StringUtils.capitalize('A')).toBe('A')
          })
          it('先頭の文字が小文字', () => {
            expect(StringUtils.capitalize('a')).toBe('A');
          })
        });

        it('先頭が英字ではない', () => {
          expect(StringUtils.capitalize('1')).toBe('1');
          expect(StringUtils.capitalize('@')).toBe('@');
        })
      });

      describe('長さが2以上', () => {
        describe('先頭の文字が英字', () => {
          it('先頭の文字が大文字', () => {
            expect(StringUtils.capitalize('Abc')).toBe('Abc')
          });
          it('先頭の文字が小文字', () => {
            expect(StringUtils.capitalize('abc')).toBe('Abc')
          });
        });
        describe('先頭の文字が英字ではない', () => {
          it('先頭の文字が英字ではない', () => {
            expect(StringUtils.capitalize('1bc')).toBe('1bc')
            expect(StringUtils.capitalize('@bc')).toBe('@bc')
          })
        });
      });
    })
  });

  describe('countWords', () => {
    // it('strがnull', () => {
    //   expect(StringUtils.countWords(null))
    // });
    // it('strがundefined', () => {
    //   expect(StringUtils.countWords(undefined))
    // })
    it('strが空文字列', () => {
      expect(StringUtils.countWords('')).toBe(0)
    })
  })
})