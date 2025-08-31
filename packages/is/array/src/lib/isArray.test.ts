import { isArray } from './isArray.js';
import { describe, expect, it } from 'vitest';

describe('isArray', () => {
  it('should return true for arrays', () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2, 3])).toBe(true);
    expect(isArray(['a', 'b', 'c'])).toBe(true);
  });

  it('should return false for non-arrays', () => {
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray({})).toBe(false);
    expect(isArray('string')).toBe(false);
    expect(isArray(123)).toBe(false);
    expect(isArray(true)).toBe(false);
  });

  it('should handle edge cases gracefully', () => {
    // Test with objects that might be mistaken for arrays
    expect(isArray({ length: 0 })).toBe(false);

    // Test with functions (which are objects but not arrays)
    expect(
      isArray(function () {
        return 1;
      }),
    ).toBe(false);
  });

  describe('README.md examples', () => {
    it('should handle Arrays', () => {
      expect(isArray([])).toBeTruthy();
      expect(isArray([1, 2, 3])).toBeTruthy();
      expect(isArray(['a', 'b', 'c'])).toBeTruthy();
    });

    it('should handle BigInts', () => {
      expect(isArray(42n)).toBeFalsy();
      expect(isArray(0n)).toBeFalsy();
      expect(isArray(-0n)).toBeFalsy();
      expect(isArray(-42n)).toBeFalsy();
    });

    it('should handle Booleans', () => {
      expect(isArray(true)).toBeFalsy();
      expect(isArray(false)).toBeFalsy();
    });

    it('should handle a Class', () => {
      expect(isArray(class SomeClass {})).toBeFalsy();
    });

    it('should handle a Dates', () => {
      expect(isArray(new Date())).toBeFalsy();
      expect(isArray(new Date('1970-01-01T12:00:00.000Z'))).toBeFalsy();
      expect(isArray(new Date('2099-12-31'))).toBeFalsy();
    });

    it('should handle a Empty', () => {
      expect(isArray(null)).toBeFalsy();
      expect(isArray(undefined)).toBeFalsy();
    });

    it('should handle Errors', () => {
      expect(isArray(new Error('message'))).toBeFalsy();
    });

    it('should handle Floats', () => {
      expect(isArray(3.14)).toBeFalsy();
      expect(isArray(0.0)).toBeFalsy();
      expect(isArray(-0.0)).toBeFalsy();
      expect(isArray(-3.14)).toBeFalsy();
      expect(isArray(Math.E)).toBeFalsy();
      expect(isArray(Math.PI)).toBeFalsy();
      expect(isArray(Number.MIN_VALUE)).toBeFalsy();
    });

    it('should handle Functions', () => {
      expect(isArray(() => 'function')).toBeFalsy();
      expect(isArray(async () => 'function')).toBeFalsy();
    });

    it('should handle Generators', () => {
      const gen1 = (function* simpleGenerator() {
        yield 1;
      })();
      const gen2 = (async function* asyncGenerator() {
        yield 1;
      })();
      expect(isArray(gen1)).toBeFalsy();
      expect(isArray(gen2)).toBeFalsy();
    });

    it('should handle Maps', () => {
      expect(isArray(new Map())).toBeFalsy();
      expect(isArray(new Map([['key1', 123]]))).toBeFalsy();
      expect(isArray(new Map([['key1', 'value1']]))).toBeFalsy();
    });

    it('should handle Numbers', () => {
      expect(isArray(Number.POSITIVE_INFINITY)).toBeFalsy();
      expect(isArray(Number.MAX_SAFE_INTEGER)).toBeFalsy();
      expect(isArray(Number.MAX_VALUE)).toBeFalsy();
      expect(isArray(3e8)).toBeFalsy();
      expect(isArray(42)).toBeFalsy();
      expect(isArray(1)).toBeFalsy();
      expect(isArray(0)).toBeFalsy();
      expect(isArray(-0)).toBeFalsy();
      expect(isArray(-1)).toBeFalsy();
      expect(isArray(-42)).toBeFalsy();
      expect(isArray(-3e8)).toBeFalsy();
      expect(isArray(Number.MIN_SAFE_INTEGER)).toBeFalsy();
      expect(isArray(Number.NEGATIVE_INFINITY)).toBeFalsy();
      expect(isArray(Number.NaN)).toBeFalsy();
    });

    it('should handle POJOs', () => {
      expect(isArray({})).toBeFalsy();
      expect(isArray({ key: 'string' })).toBeFalsy();
      expect(isArray({ key: 123 })).toBeFalsy();
    });

    it('should handle Promise', () => {
      expect(isArray(new Promise(() => 1))).toBeFalsy();
      expect(isArray(Promise.resolve())).toBeFalsy();
    });

    it('should handle Regular Expression', () => {
      expect(isArray(/[regex]+/gi)).toBeFalsy();
      expect(isArray(new RegExp('d', 'gi'))).toBeFalsy();
    });

    it('should handle Sets', () => {
      expect(isArray(new Set())).toBeFalsy();
      expect(isArray(new Set([1, 2, 3]))).toBeFalsy();
      expect(isArray(new Set(['a', 'b', 'c']))).toBeFalsy();
    });

    it('should handle Strings', () => {
      expect(isArray('')).toBeFalsy();
      expect(isArray('a longer string')).toBeFalsy();
      expect(isArray('1000n')).toBeFalsy();
      expect(isArray('3e8')).toBeFalsy();
      expect(isArray('42')).toBeFalsy();
      expect(isArray('3.14')).toBeFalsy();
      expect(isArray('0')).toBeFalsy();
      expect(isArray('-0')).toBeFalsy();
      expect(isArray('-3.14')).toBeFalsy();
      expect(isArray('-42')).toBeFalsy();
      expect(isArray('-3e8')).toBeFalsy();
      expect(isArray('-1000n')).toBeFalsy();
    });

    it('should handle Symbols', () => {
      expect(isArray(Symbol())).toBeFalsy();
      expect(isArray(Symbol('name'))).toBeFalsy();
    });

    it('should handle This', () => {
      expect(isArray(this)).toBeFalsy();
      expect(isArray(globalThis)).toBeFalsy();
    });

    it('should handle TypedArrays', () => {
      expect(isArray(new Int8Array(2))).toBeFalsy();
      expect(isArray(new Int16Array(2))).toBeFalsy();
      expect(isArray(new Int32Array(2))).toBeFalsy();
      expect(isArray(new Uint8Array(2))).toBeFalsy();
      expect(isArray(new Uint16Array(2))).toBeFalsy();
      expect(isArray(new Uint32Array(2))).toBeFalsy();
      expect(isArray(new Uint8ClampedArray(2))).toBeFalsy();
      expect(isArray(new BigInt64Array(2))).toBeFalsy();
      expect(isArray(new BigUint64Array(2))).toBeFalsy();
      expect(isArray(new Float32Array(2))).toBeFalsy();
      expect(isArray(new Float64Array(2))).toBeFalsy();
      expect(isArray(new SharedArrayBuffer(512))).toBeFalsy();
    });

    it('should handle WeakMap/Set', () => {
      expect(isArray(new WeakMap())).toBeFalsy();
      expect(isArray(new WeakSet())).toBeFalsy();
    });
  });
});
