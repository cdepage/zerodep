import { isUndefined } from './isUndefined.js';
import { describe, it, expect } from 'vitest';

describe('isUndefined', () => {
  it('should return true for undefined values', () => {
    expect(isUndefined(undefined)).toBe(true);
  });

  it('should return false for non-undefined values', () => {
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined(0)).toBe(false);
    expect(isUndefined('')).toBe(false);
    expect(isUndefined({})).toBe(false);
    expect(isUndefined([])).toBe(false);
  });

  it('should handle edge cases correctly', () => {
    // Edge case: NaN
    expect(isUndefined(NaN)).toBe(false);

    // Edge case: Function
    expect(isUndefined(() => 1)).toBe(false);

    // Edge case: Boolean values
    expect(isUndefined(true)).toBe(false);
    expect(isUndefined(false)).toBe(false);
  });

  it('should validate input types', () => {
    // Input validation: Number
    expect(isUndefined(42)).toBe(false);

    // Input validation: String
    expect(isUndefined('test')).toBe(false);

    // Input validation: Object
    expect(isUndefined({ key: 'value' })).toBe(false);
  });

  it('should maintain logical correctness', () => {
    // Logical correctness: undefined is the only value that should return true
    const testValues = [
      null,
      0,
      '',
      {},
      [],
      NaN,
      () => 1,
      true,
      false,
      42,
      'test',
    ];
    for (const value of testValues) {
      expect(isUndefined(value)).toBe(false);
    }
  });

  describe('README.md examples', () => {
    it('should handle Arrays', () => {
      expect(isUndefined([])).toBeFalsy();
      expect(isUndefined([1, 2, 3])).toBeFalsy();
      expect(isUndefined(['a', 'b', 'c'])).toBeFalsy();
    });

    it('should handle BigInts', () => {
      expect(isUndefined(42n)).toBeFalsy();
      expect(isUndefined(0n)).toBeFalsy();
      expect(isUndefined(-0n)).toBeFalsy();
      expect(isUndefined(-42n)).toBeFalsy();
    });

    it('should handle Booleans', () => {
      expect(isUndefined(true)).toBeFalsy();
      expect(isUndefined(false)).toBeFalsy();
    });

    it('should handle a Class', () => {
      expect(isUndefined(class SomeClass {})).toBeFalsy();
    });

    it('should handle a Dates', () => {
      expect(isUndefined(new Date())).toBeFalsy();
      expect(isUndefined(new Date('1970-01-01T12:00:00.000Z'))).toBeFalsy();
      expect(isUndefined(new Date('2099-12-31'))).toBeFalsy();
    });

    it('should handle a Empty', () => {
      expect(isUndefined(null)).toBeFalsy();
      expect(isUndefined(undefined)).toBeTruthy();
    });

    it('should handle Errors', () => {
      expect(isUndefined(new Error('message'))).toBeFalsy();
    });

    it('should handle Floats', () => {
      expect(isUndefined(3.14)).toBeFalsy();
      expect(isUndefined(0.0)).toBeFalsy();
      expect(isUndefined(-0.0)).toBeFalsy();
      expect(isUndefined(-3.14)).toBeFalsy();
      expect(isUndefined(Math.E)).toBeFalsy();
      expect(isUndefined(Math.PI)).toBeFalsy();
      expect(isUndefined(Number.MIN_VALUE)).toBeFalsy();
    });

    it('should handle Functions', () => {
      expect(isUndefined(() => 'function')).toBeFalsy();
      expect(isUndefined(async () => 'function')).toBeFalsy();
    });

    it('should handle Generators', () => {
      const gen1 = (function* simpleGenerator() {
        yield 1;
      })();
      const gen2 = (async function* asyncGenerator() {
        yield 1;
      })();
      expect(isUndefined(gen1)).toBeFalsy();
      expect(isUndefined(gen2)).toBeFalsy();
    });

    it('should handle Maps', () => {
      expect(isUndefined(new Map())).toBeFalsy();
      expect(isUndefined(new Map([['key1', 123]]))).toBeFalsy();
      expect(isUndefined(new Map([['key1', 'value1']]))).toBeFalsy();
    });

    it('should handle Numbers', () => {
      expect(isUndefined(Number.POSITIVE_INFINITY)).toBeFalsy();
      expect(isUndefined(Number.MAX_SAFE_INTEGER)).toBeFalsy();
      expect(isUndefined(Number.MAX_VALUE)).toBeFalsy();
      expect(isUndefined(3e8)).toBeFalsy();
      expect(isUndefined(42)).toBeFalsy();
      expect(isUndefined(1)).toBeFalsy();
      expect(isUndefined(0)).toBeFalsy();
      expect(isUndefined(-0)).toBeFalsy();
      expect(isUndefined(-1)).toBeFalsy();
      expect(isUndefined(-42)).toBeFalsy();
      expect(isUndefined(-3e8)).toBeFalsy();
      expect(isUndefined(Number.MIN_SAFE_INTEGER)).toBeFalsy();
      expect(isUndefined(Number.NEGATIVE_INFINITY)).toBeFalsy();
      expect(isUndefined(Number.NaN)).toBeFalsy();
    });

    it('should handle POJOs', () => {
      expect(isUndefined({})).toBeFalsy();
      expect(isUndefined({ key: 'string' })).toBeFalsy();
      expect(isUndefined({ key: 123 })).toBeFalsy();
    });

    it('should handle Promise', () => {
      expect(isUndefined(new Promise(() => 1))).toBeFalsy();
      expect(isUndefined(Promise.resolve())).toBeFalsy();
    });

    it('should handle Regular Expression', () => {
      expect(isUndefined(/[regex]+/gi)).toBeFalsy();
      expect(isUndefined(new RegExp('d', 'gi'))).toBeFalsy();
    });

    it('should handle Sets', () => {
      expect(isUndefined(new Set())).toBeFalsy();
      expect(isUndefined(new Set([1, 2, 3]))).toBeFalsy();
      expect(isUndefined(new Set(['a', 'b', 'c']))).toBeFalsy();
    });

    it('should handle Strings', () => {
      expect(isUndefined('')).toBeFalsy();
      expect(isUndefined('a longer string')).toBeFalsy();
      expect(isUndefined('1000n')).toBeFalsy();
      expect(isUndefined('3e8')).toBeFalsy();
      expect(isUndefined('42')).toBeFalsy();
      expect(isUndefined('3.14')).toBeFalsy();
      expect(isUndefined('0')).toBeFalsy();
      expect(isUndefined('-0')).toBeFalsy();
      expect(isUndefined('-3.14')).toBeFalsy();
      expect(isUndefined('-42')).toBeFalsy();
      expect(isUndefined('-3e8')).toBeFalsy();
      expect(isUndefined('-1000n')).toBeFalsy();
    });

    it('should handle Symbols', () => {
      expect(isUndefined(Symbol())).toBeFalsy();
      expect(isUndefined(Symbol('name'))).toBeFalsy();
    });

    it('should handle This', () => {
      expect(isUndefined(this)).toBeFalsy();
      expect(isUndefined(globalThis)).toBeFalsy();
    });

    it('should handle TypedArrays', () => {
      expect(isUndefined(new Int8Array(2))).toBeFalsy();
      expect(isUndefined(new Int16Array(2))).toBeFalsy();
      expect(isUndefined(new Int32Array(2))).toBeFalsy();
      expect(isUndefined(new Uint8Array(2))).toBeFalsy();
      expect(isUndefined(new Uint16Array(2))).toBeFalsy();
      expect(isUndefined(new Uint32Array(2))).toBeFalsy();
      expect(isUndefined(new Uint8ClampedArray(2))).toBeFalsy();
      expect(isUndefined(new BigInt64Array(2))).toBeFalsy();
      expect(isUndefined(new BigUint64Array(2))).toBeFalsy();
      expect(isUndefined(new Float32Array(2))).toBeFalsy();
      expect(isUndefined(new Float64Array(2))).toBeFalsy();
      expect(isUndefined(new SharedArrayBuffer(512))).toBeFalsy();
    });

    it('should handle WeakMap/Set', () => {
      expect(isUndefined(new WeakMap())).toBeFalsy();
      expect(isUndefined(new WeakSet())).toBeFalsy();
    });
  });
});
