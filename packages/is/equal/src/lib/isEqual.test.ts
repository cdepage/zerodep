import { isEqual } from './isEqual.js';
import { describe, expect, it } from 'vitest';

describe('isEqual', () => {
  // Test primitives
  it('should return true for equal primitives', () => {
    expect(isEqual(1, 1)).toBe(true);
    expect(isEqual('hello', 'hello')).toBe(true);
    expect(isEqual(true, true)).toBe(true);
    expect(isEqual(null, null)).toBe(true);
    expect(isEqual(undefined, undefined)).toBe(true);
  });

  it('should return false for unequal primitives', () => {
    expect(isEqual(1, '1')).toBe(false);
    expect(isEqual('hello', 'world')).toBe(false);
    expect(isEqual(true, false)).toBe(false);
    expect(isEqual(null, undefined)).toBe(false);
  });

  // Test arrays
  it('should return true for equal arrays', () => {
    expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(isEqual(['a', 'b'], ['a', 'b'])).toBe(true);
    expect(
      isEqual(
        [
          [1, 2],
          [3, 4],
        ],
        [
          [1, 2],
          [3, 4],
        ],
      ),
    ).toBe(true);
  });

  it('should return false for unequal arrays', () => {
    expect(isEqual([1, 2, 3], [1, 2, 4])).toBe(false);
    expect(isEqual(['a', 'b'], ['a'])).toBe(false);
    expect(isEqual([[1, 2]], [[1, 3]])).toBe(false);
  });

  // Test objects
  it('should return true for equal objects', () => {
    expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
    expect(isEqual({ x: 'hello' }, { x: 'hello' })).toBe(true);
    expect(isEqual({ nested: { obj: true } }, { nested: { obj: true } })).toBe(
      true,
    );
  });

  it('should return false for unequal objects', () => {
    expect(isEqual({ a: 1, b: 2 }, { a: 1, c: 2 })).toBe(false);
    expect(isEqual({ x: 'hello' }, { y: 'hello' })).toBe(false);
    expect(isEqual({ nested: { obj: true } }, { nested: { obj: false } })).toBe(
      false,
    );
  });

  // Test Maps
  it('should return true for equal Maps', () => {
    const map1 = new Map([
      [1, 'a'],
      [2, 'b'],
    ]);
    const map2 = new Map([
      [1, 'a'],
      [2, 'b'],
    ]);
    expect(isEqual(map1, map2)).toBe(true);
  });

  it('should return false for unequal Maps', () => {
    const map1 = new Map([
      [1, 'a'],
      [2, 'b'],
    ]);
    const map2 = new Map([
      [1, 'a'],
      [3, 'c'],
    ]);
    expect(isEqual(map1, map2)).toBe(false);
  });

  // Test Sets
  it('should return true for equal Sets', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([1, 2, 3]);
    expect(isEqual(set1, set2)).toBe(true);
  });

  it('should return false for unequal Sets', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([1, 2, 4]);
    expect(isEqual(set1, set2)).toBe(false);
  });

  // Test TypedArrays
  it('should return true for equal TypedArrays', () => {
    const uint8Array1 = new Uint8Array([1, 2, 3]);
    const uint8Array2 = new Uint8Array([1, 2, 3]);
    expect(isEqual(uint8Array1, uint8Array2)).toBe(true);
  });

  it('should return false for unequal TypedArrays', () => {
    const uint8Array1 = new Uint8Array([1, 2, 3]);
    const uint8Array2 = new Uint8Array([1, 2, 4]);
    expect(isEqual(uint8Array1, uint8Array2)).toBe(false);
  });

  // Test Dates
  it('should return true for equal Dates', () => {
    const date1 = new Date(2023, 9, 5);
    const date2 = new Date(2023, 9, 5);
    expect(isEqual(date1, date2)).toBe(true);
  });

  it('should return false for unequal Dates', () => {
    const date1 = new Date(2023, 9, 5);
    const date2 = new Date(2023, 9, 6);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test Functions
  it('should return false for functions', () => {
    function foo() {
      return 1;
    }

    function bar() {
      return 1;
    }

    expect(isEqual(foo, bar)).toBe(false);
  });

  // Test RegExp
  it('should return true for equal RegExps', () => {
    const regex1 = /abc/;
    const regex2 = /abc/;
    expect(isEqual(regex1, regex2)).toBe(true);
  });

  it('should return false for unequal RegExps', () => {
    const regex1 = /abc/;
    const regex2 = /def/;
    expect(isEqual(regex1, regex2)).toBe(false);
  });

  describe('README.md examples', () => {
    it('should handle Arrays', () => {
      expect(isEqual([], [])).toBeTruthy();
      expect(isEqual([1, 2], [1, 2])).toBeTruthy();
      expect(isEqual([1, 2], [2, 1])).toBeFalsy();
      expect(isEqual([1, 2], [1, 2, 3])).toBeFalsy();
      expect(isEqual(['a', 'b', 'c'], ['c', 'b', 'a'])).toBeFalsy();
      expect(isEqual(['a', 'b', 'c'], ['a', 'b', 'c', 'd'])).toBeFalsy();
      expect(
        isEqual(['b', [2, 4, ['c', 'd', 6]]], ['b', [2, 4, ['c', 'd', 6]]]),
      ).toBeTruthy();
      expect(
        isEqual(['b', [2, 4, ['c', 'd', 6]]], [[4, ['c', 'd', 6], 2], 'b']),
      ).toBeFalsy();
    });

    it('should handle BigInts', () => {
      expect(isEqual(42n, 42n)).toBeTruthy();
      expect(isEqual(0n, 0)).toBeFalsy();
      expect(isEqual(8675309n, BigInt(8675309))).toBeTruthy();
    });

    it('should handle Booleans', () => {
      expect(isEqual(true, true)).toBeTruthy();
      expect(isEqual(true, false)).toBeFalsy();
      expect(isEqual(true, new Boolean(true))).toBeTruthy();
    });

    it('should handle Dates', () => {
      expect(
        isEqual(
          new Date('2000-01-01T00:00:00.000Z'),
          new Date('2000-01-01T00:00:00.000Z'),
        ),
      ).toBeTruthy();
      expect(
        isEqual(
          new Date('2000-01-01T00:00:00.000Z'),
          new Date('1999-12-31T23:59:59.999Z'),
        ),
      ).toBeFalsy();
    });

    it('should handle Empty', () => {
      expect(isEqual(null, null)).toBeTruthy();
      expect(isEqual(undefined, undefined)).toBeTruthy();
      expect(isEqual(null, undefined)).toBeFalsy();
    });

    it('should handle Errors', () => {
      expect(isEqual(new Error('message'), new Error('message'))).toBeTruthy();
      expect(isEqual(new Error('message'), new Error('xxxx'))).toBeFalsy();
      expect(
        isEqual(new TypeError('error'), new RangeError('error')),
      ).toBeFalsy();
    });

    // Floats
    it('should handle Floats', () => {
      expect(isEqual(0.08, 0.08)).toBeTruthy();
      expect(isEqual(Math.PI, Math.PI)).toBeTruthy();
      expect(isEqual(-273.15, new Number(-273.15))).toBeFalsy();
    });

    it('should handle Functions', () => {
      expect(
        isEqual(
          () => 'function',
          () => 'function',
        ),
      ).toBeTruthy();
      expect(
        isEqual(
          () => 'xxxx',
          () => 'yyyy',
        ),
      ).toBeFalsy();
    });

    it('should handle Generators', () => {
      const gen1 = (function* simpleGenerator() {
        yield 1;
      })();
      const gen2 = (async function* asyncGenerator() {
        yield 1;
      })();
      expect(isEqual(gen1, gen1)).toBeTruthy();
      expect(isEqual(gen1, gen2)).toBeFalsy();
      expect(isEqual(gen2, gen2)).toBeTruthy();
    });

    it('should handle Maps', () => {
      expect(isEqual(new Map(), new Map())).toBeTruthy();
      expect(
        isEqual(new Map([['key1', 123]]), new Map([['key1', 123]])),
      ).toBeTruthy();
      expect(
        isEqual(new Map([['key1', 123]]), new Map([['2key', 123]])),
      ).toBeFalsy();
      expect(
        isEqual(new Map([['key1', 123]]), new Map([['key1', 456]])),
      ).toBeFalsy();
      expect(
        isEqual(
          new Map([['key1', 123]]),
          new Map([
            ['key1', 123],
            ['key2', 456],
          ]),
        ),
      ).toBeFalsy();
      expect(
        isEqual(
          new Map([
            ['key1', 123],
            ['key2', 456],
          ]),
          new Map([
            ['key2', 456],
            ['key1', 123],
          ]),
        ),
      ).toBeFalsy();
    });

    it('should handle Numbers', () => {
      expect(isEqual(0, 0)).toBeTruthy();
      expect(isEqual(0, -0)).toBeFalsy();
      expect(isEqual(3e8, 3e8)).toBeTruthy();
      expect(isEqual(1234, 5678)).toBeFalsy();
      expect(isEqual(Infinity, Infinity)).toBeTruthy();
      expect(isEqual(Infinity, -Infinity)).toBeFalsy();
      expect(
        isEqual(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER),
      ).toBeTruthy();
      expect(
        isEqual(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER),
      ).toBeFalsy();
      expect(isEqual(Number.NaN, Number.NaN)).toBeTruthy();
      expect(isEqual(2161, new Number(2161))).toBeFalsy();
    });

    it('should handle POJOs', () => {
      expect(isEqual({}, {})).toBeTruthy();
      expect(isEqual({ key: 'string' }, { key: 'string' })).toBeTruthy();
      expect(isEqual({ key: [1, 2, 3] }, { key: [1, 2, 3] })).toBeTruthy();
      expect(isEqual({ key: [1, 2, 3] }, { key: [3, 2, 1] })).toBeFalsy();
      expect(
        isEqual({ a: 1, b: { c: [1, 2] } }, { a: 1, b: { c: [1, 2] } }),
      ).toBeTruthy();
      expect(
        isEqual({ a: 1, b: { c: [1, 2] } }, { b: { c: [1, 2] }, a: 1 }),
      ).toBeTruthy();
      expect(
        isEqual({ a: 1, b: { c: [1, 2] } }, { b: 1, c: { d: [1, 2] } }),
      ).toBeFalsy();
      expect(
        isEqual({ a: 1, b: { c: [1, 2] } }, { a: 1, b: { c: [2, 1] } }),
      ).toBeFalsy();
    });

    it('should handle Promises', () => {
      expect(isEqual(new Promise(() => 1), new Promise(() => 1))).toBeFalsy();
      expect(isEqual(Promise.resolve(), Promise.resolve())).toBeFalsy();
    });

    it('should handle Regular Expression', () => {
      expect(isEqual(/[aeiou]+/gi, /[aeiou]+/gi)).toBeTruthy();
      expect(
        isEqual(new RegExp('d', 'gi'), new RegExp('d', 'gi')),
      ).toBeTruthy();
      expect(isEqual(/[aeiou]+/gi, new RegExp('[aeiou]+', 'gi'))).toBeTruthy();
      expect(isEqual(new RegExp('abc'), new RegExp('def'))).toBeFalsy();
    });

    it('should handle Regular Sets', () => {
      expect(isEqual(new Set(), new Set())).toBeTruthy();
      expect(isEqual(new Set([1, 2, 3]), new Set([1, 2, 3]))).toBeTruthy();
      expect(isEqual(new Set([1, 2, 3]), new Set([3, 2, 1]))).toBeFalsy();
      expect(isEqual(new Set([1, 2, 3]), new Set([1, 2]))).toBeFalsy();
    });

    it('should handle Strings', () => {
      expect(isEqual('', '')).toBeTruthy();
      expect(isEqual('asdf', 'asdf')).toBeTruthy();
      expect(isEqual('asdf', 'qwerty')).toBeFalsy();
      expect(isEqual('G', new String('G'))).toBeFalsy();
    });

    it('should handle Symbols', () => {
      expect(() => isEqual(Symbol(), Symbol())).toThrow(
        'Cannot compare Symbol values',
      );
      expect(() => isEqual(Symbol('val1'), Symbol('val1'))).toThrow(
        'Cannot compare Symbol values',
      );
    });

    it('should handle TypedArrays', () => {
      expect(isEqual(new Int8Array(2), new Int8Array(2))).toBeTruthy();
      expect(() =>
        isEqual(new SharedArrayBuffer(2), new SharedArrayBuffer(2)),
      ).toThrow('Cannot compare SharedArrayBuffer values');
    });

    it('should handle  WeakMap and WeakSet', () => {
      expect(() => isEqual(new WeakMap(), new WeakMap())).toThrow(
        'Cannot compare WeakMap values',
      );
      expect(() => isEqual(new WeakSet(), new WeakSet())).toThrow(
        'Cannot compare WeakSet values',
      );
    });
  });
});
