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

    describe('strが長さ1以上', () => {
      it('strが空白を含まない', () => {
        expect(StringUtils.countWords('abc')).toBe(1)
      });
      describe('strが空白を含む', () => {
        describe('空白が1つ', () => {
          it('空白が全角', () => {
            expect(StringUtils.countWords('abc　def')).toBe(2)
          })
          it('空白が半角', () => {
             expect(StringUtils.countWords('abc def')).toBe(2)
          })
        })
        describe('空白が2つ以上連続', () => {
          it('空白が全角', () => {
            expect(StringUtils.countWords('abc　　def')).toBe(2)
          })
          it('空白が半角', () => {
            expect(StringUtils.countWords('abc  def')).toBe(2)
          })
          it('空白が全角と半角', () => {
            expect(StringUtils.countWords('abc　 def')).toBe(2)
            expect(StringUtils.countWords('abc 　def')).toBe(2)
          })
        })
      })
    })
  })

  describe('truncate', () => {
    // it('strがnull', () => {
    //   expect(StringUtils.truncate(null, 0))
    // })
    // it('strがundefined', () => {
    //   expect(StringUtils.truncate(undefined, 0))
    // })
    describe('strが空文字列', () => {
      it('maxLengthが < 0', () => {
        expect(() => {
          StringUtils.truncate('', -1)
        }).toThrow('Maximum length cannot be negative')
      });
      it('maxLength = 0', () => {
        expect(StringUtils.truncate('', 0)).toBe('')
      });
      it('maxLengthが > 0', () => {
        expect(StringUtils.truncate('', 1)).toBe('')
      })
    })
    describe('strが長さ1', () => {
      it('maxLengthが < 0', () => {
        expect(() => {
          StringUtils.truncate('a', -1)
        }).toThrow('Maximum length cannot be negative')
      });
      it('maxLengthが = 0', () => {
        expect(StringUtils.truncate('a', 0)).toBe('...')
      });
      it('maxLengthが >= 1', () => {
        expect(StringUtils.truncate('a', 1)).toBe('a')
        expect(StringUtils.truncate('a', 2)).toBe('a')
      })
    })
    describe('strが長さ2以上', () => {
      it('maxLengthが < 0', () => {
        expect(() => {
          StringUtils.truncate('abc', -1)
        }).toThrow('Maximum length cannot be negative')
      });
      it('maxLengthが = 0', () => {
        expect(StringUtils.truncate('abc', 0)).toBe('...')
      });
      it('maxLengthが > 0 かつ < strの文字数', () => {
        expect(StringUtils.truncate('abc', 1)).toBe('a...')
        expect(StringUtils.truncate('abc', 2)).toBe('ab...')
      });
      it('maxLengthが >= strの文字数', () => {
        expect(StringUtils.truncate('abc', 3)).toBe('abc')
        expect(StringUtils.truncate('abc', 4)).toBe('abc')
      });
    })
  });

  describe('extractNumbers', () => {
    // it('strがnull', () => {
    //   expect(StringUtils.extractNumbers(null))
    // })

    // it('strがnull', () => {
    //   expect(StringUtils.extractNumbers(undefined))
    // })

    it('strが空文字列', () => {
      expect(StringUtils.extractNumbers('')).toStrictEqual([])
    });
    describe('strが1文字', () => {
      it('数字', () => {
        expect(StringUtils.extractNumbers('1')).toStrictEqual([1])
      });
      it('数字以外', () => {
        expect(StringUtils.extractNumbers('a')).toStrictEqual([])
        expect(StringUtils.extractNumbers('@')).toStrictEqual([])
      })
    });

    describe('strが2文字以上', () => {
      it('数字が含まれない', () => {
        expect(StringUtils.extractNumbers('ab')).toStrictEqual([])
        expect(StringUtils.extractNumbers('@#')).toStrictEqual([])
      });
      
      describe('数字が含まれる', () => {
        it('数字が1つ', () => {
          expect(StringUtils.extractNumbers('a1b')).toStrictEqual([1])
          expect(StringUtils.extractNumbers('1a2b')).toStrictEqual([1, 2])
        });

        describe('数字が複数', () => {
          it('数字が連続している場合', () => {
            expect(StringUtils.extractNumbers('11a')).toStrictEqual([11])
          });
          it('数字が連続していない場合', () => {
            expect(StringUtils.extractNumbers('1a1')).toStrictEqual([1,1])
          });
        });
      });
    })
  })
})