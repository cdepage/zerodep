import { isString } from './isString.js';
import { describe, it, expect } from 'vitest';

describe('isString', () => {
  it('should return true for string values', () => {
    expect(isString('')).toBe(true);
    expect(isString('hello')).toBe(true);
    expect(isString('12345')).toBe(true);
  });

  it('should return false for non-string values', () => {
    expect(isString(undefined)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(123)).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString([])).toBe(false);
  });

  it('should handle edge cases correctly', () => {
    // Empty string
    expect(isString('')).toBe(true);

    // String with special characters
    expect(isString('!@#$%^&*()_+')).toBe(true);

    // Object that looks like a string but isn't
    const fakeString = { toString: () => '[object String]' };
    expect(isString(fakeString)).toBe(false);
  });

  it('should validate input types correctly', () => {
    // Undefined and null should be false
    expect(isString(undefined)).toBe(false);
    expect(isString(null)).toBe(false);

    // Numbers, booleans, objects, arrays should all return false
    expect(isString(123)).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString([])).toBe(false);
  });

  describe('README.md examples', () => {
    it('should handle Arrays', () => {
      expect(isString([])).toBeFalsy();
      expect(isString([1, 2, 3])).toBeFalsy();
      expect(isString(['a', 'b', 'c'])).toBeFalsy();
    });

    it('should handle BigInts', () => {
      expect(isString(42n)).toBeFalsy();
      expect(isString(0n)).toBeFalsy();
      expect(isString(-0n)).toBeFalsy();
      expect(isString(-42n)).toBeFalsy();
    });

    it('should handle Booleans', () => {
      expect(isString(true)).toBeFalsy();
      expect(isString(false)).toBeFalsy();
    });

    it('should handle a Class', () => {
      expect(isString(class SomeClass {})).toBeFalsy();
    });

    it('should handle a Dates', () => {
      expect(isString(new Date())).toBeFalsy();
      expect(isString(new Date('1970-01-01T12:00:00.000Z'))).toBeFalsy();
      expect(isString(new Date('2099-12-31'))).toBeFalsy();
    });

    it('should handle a Empty', () => {
      expect(isString(null)).toBeFalsy();
      expect(isString(undefined)).toBeFalsy();
    });

    it('should handle Errors', () => {
      expect(isString(new Error('message'))).toBeFalsy();
    });

    it('should handle Floats', () => {
      expect(isString(3.14)).toBeFalsy();
      expect(isString(0.0)).toBeFalsy();
      expect(isString(-0.0)).toBeFalsy();
      expect(isString(-3.14)).toBeFalsy();
      expect(isString(Math.E)).toBeFalsy();
      expect(isString(Math.PI)).toBeFalsy();
      expect(isString(Number.MIN_VALUE)).toBeFalsy();
    });

    it('should handle Functions', () => {
      expect(isString(() => 'function')).toBeFalsy();
      expect(isString(async () => 'function')).toBeFalsy();
    });

    it('should handle Generators', () => {
      const gen1 = (function* simpleGenerator() {
        yield 1;
      })();
      const gen2 = (async function* asyncGenerator() {
        yield 1;
      })();
      expect(isString(gen1)).toBeFalsy();
      expect(isString(gen2)).toBeFalsy();
    });

    it('should handle Maps', () => {
      expect(isString(new Map())).toBeFalsy();
      expect(isString(new Map([['key1', 123]]))).toBeFalsy();
      expect(isString(new Map([['key1', 'value1']]))).toBeFalsy();
    });

    it('should handle Numbers', () => {
      expect(isString(Number.POSITIVE_INFINITY)).toBeFalsy();
      expect(isString(Number.MAX_SAFE_INTEGER)).toBeFalsy();
      expect(isString(Number.MAX_VALUE)).toBeFalsy();
      expect(isString(3e8)).toBeFalsy();
      expect(isString(42)).toBeFalsy();
      expect(isString(1)).toBeFalsy();
      expect(isString(0)).toBeFalsy();
      expect(isString(-0)).toBeFalsy();
      expect(isString(-1)).toBeFalsy();
      expect(isString(-42)).toBeFalsy();
      expect(isString(-3e8)).toBeFalsy();
      expect(isString(Number.MIN_SAFE_INTEGER)).toBeFalsy();
      expect(isString(Number.NEGATIVE_INFINITY)).toBeFalsy();
      expect(isString(Number.NaN)).toBeFalsy();
    });

    it('should handle POJOs', () => {
      expect(isString({})).toBeFalsy();
      expect(isString({ key: 'string' })).toBeFalsy();
      expect(isString({ key: 123 })).toBeFalsy();
    });

    it('should handle Promise', () => {
      expect(isString(new Promise(() => 1))).toBeFalsy();
      expect(isString(Promise.resolve())).toBeFalsy();
    });

    it('should handle Regular Expression', () => {
      expect(isString(/[regex]+/gi)).toBeFalsy();
      expect(isString(new RegExp('d', 'gi'))).toBeFalsy();
    });

    it('should handle Sets', () => {
      expect(isString(new Set())).toBeFalsy();
      expect(isString(new Set([1, 2, 3]))).toBeFalsy();
      expect(isString(new Set(['a', 'b', 'c']))).toBeFalsy();
    });

    it('should handle Strings', () => {
      expect(isString('')).toBeTruthy();
      expect(isString('a longer string')).toBeTruthy();
      expect(isString('1000n')).toBeTruthy();
      expect(isString('3e8')).toBeTruthy();
      expect(isString('42')).toBeTruthy();
      expect(isString('3.14')).toBeTruthy();
      expect(isString('0')).toBeTruthy();
      expect(isString('-0')).toBeTruthy();
      expect(isString('-3.14')).toBeTruthy();
      expect(isString('-42')).toBeTruthy();
      expect(isString('-3e8')).toBeTruthy();
      expect(isString('-1000n')).toBeTruthy();
    });

    it('should handle Symbols', () => {
      expect(isString(Symbol())).toBeFalsy();
      expect(isString(Symbol('name'))).toBeFalsy();
    });

    it('should handle This', () => {
      expect(isString(this)).toBeFalsy();
      expect(isString(globalThis)).toBeFalsy();
    });

    it('should handle TypedArrays', () => {
      expect(isString(new Int8Array(2))).toBeFalsy();
      expect(isString(new Int16Array(2))).toBeFalsy();
      expect(isString(new Int32Array(2))).toBeFalsy();
      expect(isString(new Uint8Array(2))).toBeFalsy();
      expect(isString(new Uint16Array(2))).toBeFalsy();
      expect(isString(new Uint32Array(2))).toBeFalsy();
      expect(isString(new Uint8ClampedArray(2))).toBeFalsy();
      expect(isString(new BigInt64Array(2))).toBeFalsy();
      expect(isString(new BigUint64Array(2))).toBeFalsy();
      expect(isString(new Float32Array(2))).toBeFalsy();
      expect(isString(new Float64Array(2))).toBeFalsy();
      expect(isString(new SharedArrayBuffer(512))).toBeFalsy();
    });

    it('should handle WeakMap/Set', () => {
      expect(isString(new WeakMap())).toBeFalsy();
      expect(isString(new WeakSet())).toBeFalsy();
    });
  });
});
