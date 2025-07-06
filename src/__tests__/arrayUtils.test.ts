import { describe, it, expect } from 'vitest';
import { ArrayUtils } from '../arrayUtils'
import { a } from 'vitest/dist/chunks/suite.d.FvehnV49.js';

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

  describe('findMin', () =>{
    describe('空配列', () => {
      it('要素が0個の配列の場合、エラー', () => {
        expect(() => {
          ArrayUtils.findMin([])
        }).toThrow('Array cannot be empty')
      });
    });

    describe('要素が1つ以上の配列', () => {
      it('要素が1つの配列', () => {
        expect(ArrayUtils.findMin([5])).toBe(5)
      });
    });

    describe('要素が複数の配列', () => {
      it('最小値が1つのみ含まれる', () => {
        expect(ArrayUtils.findMin([
          5.6,3,1,2
        ])).toBe(1)
      });
      it('最小値が複数含まれる', () => {
        expect(ArrayUtils.findMin([
          1,5,3,1,2
        ])).toBe(1)
      });
    });
  });

  describe('average', () => {
    describe('要素が0の配列', () => {
      it('要素が0の配列', () => {
        expect(() => {
          ArrayUtils.average([])
        }).toThrow('Array cannot be empty')
      })
    });
    describe('要素が1つ以上の配列', () => {
      it('要素が1つの配列', () => {
        expect(ArrayUtils.average([5])).toBe(5)
      });
      it('要素が複数の配列', () => {
        expect(ArrayUtils.average([1,2,5,4,3])).toBe(3)
      });
    });
  });

  describe('removeDuplicates', () => {
    describe('要素が0個の配列', () => {
      it('要素が0個の配列', () => {
        expect(ArrayUtils.removeDuplicates([])).toStrictEqual([])
      })
    });
    describe('要素が1つ以上の配列',() => {
      it('要素が1つの配列', () => {
        expect(ArrayUtils.removeDuplicates([5])).toStrictEqual([5])
      })
      describe('要素が2つ以上の配列', () => {
        it('重複がない配列', () => {
          expect(ArrayUtils.removeDuplicates([1,2,3,4,5])).toStrictEqual([1,2,3,4,5])
        });
        it('重複がある配列', () => {
          expect(ArrayUtils.removeDuplicates([1,2,2,3,4,4,5])).toStrictEqual([1,2,3,4,5])
        })
      })
    });
  });

  describe('chunk', () => {
    it('sizeが0未満', () => {
      expect(() => {
        ArrayUtils.chunk([1,2,3], -1)
      }).toThrow('Chunk size must be positive')
    });
    it('sizeが0', () => {
      expect(() => {
        ArrayUtils.chunk([1,2,3], 0)
      }).toThrow('Chunk size must be positive')
    })
    describe('sizeが1以上', () => {
      it('空配列', () => {
        expect(ArrayUtils.chunk([], 3)).toStrictEqual([])
      });
      describe('空配列でない', () => {
        it('要素数がsizeの倍数の配列', () => {
          expect(ArrayUtils.chunk([1,2,3,4], 2)).toStrictEqual(
            [[1,2], [3,4]]
          )
        });
        it('要素数がsizeの倍数ではない', () => {
          expect(ArrayUtils.chunk([1,2,3,4,5], 2)).toStrictEqual(
            [[1,2], [3,4], [5]]
          )
        })
      })
    })
  });

  describe('flatten', () => {
    it('空配列', () => {
      expect(ArrayUtils.flatten([])).toStrictEqual([])
    });
    
    describe('空配列でない', () => {
      it('ネストの最大値が0', () => {
        expect(ArrayUtils.flatten([1,2,3])).toStrictEqual([1,2,3])
      });

      describe('ネストの最大値が0でない', () => {
        describe('ネストの最大値が1', () => {
          it('最深部の配列の要素数が同じ', () => {
            expect(ArrayUtils.flatten([[1,2], [3, 4]])).toStrictEqual(
            [1,2,3,4]
            )
          });

          it('最深部の配列の要素数が異なる', () => {
            expect(ArrayUtils.flatten([[1,2, 3],[4]])).toStrictEqual(
            [1,2,3,4]
            )
          })
        })
      })
    })

  })

  describe('sortByProperty', () => {
    describe('ascendingがtrue（昇順ソート）', () => {
      it('配列の要素が0', () => {
        expect(ArrayUtils.sortByProperty([], 'a')).toStrictEqual([])
      })

      describe('配列の要素が1つ以上', () => {
        describe('ソートに使用するプロパティを全オブジェクトが持つ', () => {
          it('ソートに使用するプロパティの型が比較可能である', () => {
            expect(ArrayUtils.sortByProperty([{a: 3}, {a: 1}, {a:10}], "a")).toStrictEqual(
              [{a: 1}, {a: 3}, {a: 10}]
            )
          });
          it('ソートに使用するプロパティの型が順序関係を定義できない', () => {
            expect(() => {
              ArrayUtils.sortByProperty(
                [{a: Symbol('a')}, {a: Symbol('b')}, {a: Symbol('c')}],
                'a',
                true
              )
            }).toThrow("Cannot convert a Symbol value to a number")
          })
        })
      });
    });
    describe('ascendeingがfalse（降順ソート', () => {
      it('配列の要素が0', () => {
        expect(ArrayUtils.sortByProperty([], 'a')).toStrictEqual([])
      })

      describe('配列の要素が1つ以上', () => {
        describe('ソートに使用するプロパティを全オブジェクトが持つ', () => {
          it('ソートに使用するプロパティの型が比較可能である', () => {
            expect(ArrayUtils.sortByProperty([{a: 3}, {a: 1}, {a:10}], "a", false)).toStrictEqual(
              [{a: 10}, {a: 3}, {a: 1}]
            )
          });
          it('ソートに使用するプロパティの型が順序関係を定義できない', () => {
            expect(() => {
              ArrayUtils.sortByProperty(
                [{a: Symbol('a')}, {a: Symbol('b')}, {a: Symbol('c')}],
                'a',
                true
            )
            }).toThrow("Cannot convert a Symbol value to a number")
          })
        })
      });
    });
  })
});