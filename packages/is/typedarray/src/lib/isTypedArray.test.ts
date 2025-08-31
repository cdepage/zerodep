import { isTypedArray } from './isTypedArray.js';
import { describe, it, expect } from 'vitest';

describe('isTypedArray', () => {
  // Test main functionalities: all typed arrays should return true
  it('should return true for all typed array types', () => {
    const typedArrays = [
      new Int8Array(),
      new Uint8Array(),
      new Uint8ClampedArray(),
      new Int16Array(),
      new Uint16Array(),
      new Int32Array(),
      new Uint32Array(),
      new Float32Array(),
      new Float64Array(),
      new BigInt64Array(),
      new BigUint64Array(),
    ];

    typedArrays.forEach((array) => {
      expect(isTypedArray(array)).toBe(true);
    });
  });

  // Test edge cases: non-typed arrays should return false
  it('should return false for non-typed array values', () => {
    const nonTypedArrays = [
      null,
      undefined,
      '',
      'string',
      123,
      true,
      false,
      {},
      [],
      new Date(),
      new Map(),
      new Set(),
      new WeakMap(),
      new WeakSet(),
      function () {
        return 1;
      },
      /regex/,
    ];

    nonTypedArrays.forEach((value) => {
      expect(isTypedArray(value)).toBe(false);
    });
  });

  // Test input validation: handle edge cases like null, undefined
  it('should return false for null and undefined', () => {
    expect(isTypedArray(null)).toBe(false);
    expect(isTypedArray(undefined)).toBe(false);
  });

  // Test logical correctness: ensure the function handles exceptions properly
  it('should return false when an exception is thrown', () => {
    const value = Object.create(null); // Create a non-standard object that might throw on toString.call

    // Mock Object.prototype.toString.call to throw an error
    const originalToStringCall = Object.prototype.toString;
    Object.prototype.toString = function () {
      throw new Error('Test exception');
    };

    expect(isTypedArray(value)).toBe(false);

    // Restore the original method
    Object.prototype.toString = originalToStringCall;
  });

  describe('README.md examples', () => {
    it('should handle Arrays', () => {
      expect(isTypedArray([])).toBeFalsy();
      expect(isTypedArray([1, 2, 3])).toBeFalsy();
      expect(isTypedArray(['a', 'b', 'c'])).toBeFalsy();
    });

    it('should handle BigInts', () => {
      expect(isTypedArray(42n)).toBeFalsy();
      expect(isTypedArray(0n)).toBeFalsy();
      expect(isTypedArray(-0n)).toBeFalsy();
      expect(isTypedArray(-42n)).toBeFalsy();
    });

    it('should handle Booleans', () => {
      expect(isTypedArray(true)).toBeFalsy();
      expect(isTypedArray(false)).toBeFalsy();
    });

    it('should handle a Class', () => {
      expect(isTypedArray(class SomeClass {})).toBeFalsy();
    });

    it('should handle a Dates', () => {
      expect(isTypedArray(new Date())).toBeFalsy();
      expect(isTypedArray(new Date('1970-01-01T12:00:00.000Z'))).toBeFalsy();
      expect(isTypedArray(new Date('2099-12-31'))).toBeFalsy();
    });

    it('should handle a Empty', () => {
      expect(isTypedArray(null)).toBeFalsy();
      expect(isTypedArray(undefined)).toBeFalsy();
    });

    it('should handle Errors', () => {
      expect(isTypedArray(new Error('message'))).toBeFalsy();
    });

    it('should handle Floats', () => {
      expect(isTypedArray(3.14)).toBeFalsy();
      expect(isTypedArray(0.0)).toBeFalsy();
      expect(isTypedArray(-0.0)).toBeFalsy();
      expect(isTypedArray(-3.14)).toBeFalsy();
      expect(isTypedArray(Math.E)).toBeFalsy();
      expect(isTypedArray(Math.PI)).toBeFalsy();
      expect(isTypedArray(Number.MIN_VALUE)).toBeFalsy();
    });

    it('should handle Functions', () => {
      expect(isTypedArray(() => 'function')).toBeFalsy();
      expect(isTypedArray(async () => 'function')).toBeFalsy();
    });

    it('should handle Generators', () => {
      const gen1 = (function* simpleGenerator() {
        yield 1;
      })();
      const gen2 = (async function* asyncGenerator() {
        yield 1;
      })();
      expect(isTypedArray(gen1)).toBeFalsy();
      expect(isTypedArray(gen2)).toBeFalsy();
    });

    it('should handle Maps', () => {
      expect(isTypedArray(new Map())).toBeFalsy();
      expect(isTypedArray(new Map([['key1', 123]]))).toBeFalsy();
      expect(isTypedArray(new Map([['key1', 'value1']]))).toBeFalsy();
    });

    it('should handle Numbers', () => {
      expect(isTypedArray(Number.POSITIVE_INFINITY)).toBeFalsy();
      expect(isTypedArray(Number.MAX_SAFE_INTEGER)).toBeFalsy();
      expect(isTypedArray(Number.MAX_VALUE)).toBeFalsy();
      expect(isTypedArray(3e8)).toBeFalsy();
      expect(isTypedArray(42)).toBeFalsy();
      expect(isTypedArray(1)).toBeFalsy();
      expect(isTypedArray(0)).toBeFalsy();
      expect(isTypedArray(-0)).toBeFalsy();
      expect(isTypedArray(-1)).toBeFalsy();
      expect(isTypedArray(-42)).toBeFalsy();
      expect(isTypedArray(-3e8)).toBeFalsy();
      expect(isTypedArray(Number.MIN_SAFE_INTEGER)).toBeFalsy();
      expect(isTypedArray(Number.NEGATIVE_INFINITY)).toBeFalsy();
      expect(isTypedArray(Number.NaN)).toBeFalsy();
    });

    it('should handle POJOs', () => {
      expect(isTypedArray({})).toBeFalsy();
      expect(isTypedArray({ key: 'string' })).toBeFalsy();
      expect(isTypedArray({ key: 123 })).toBeFalsy();
    });

    it('should handle Promise', () => {
      expect(isTypedArray(new Promise(() => 1))).toBeFalsy();
      expect(isTypedArray(Promise.resolve())).toBeFalsy();
    });

    it('should handle Regular Expression', () => {
      expect(isTypedArray(/[regex]+/gi)).toBeFalsy();
      expect(isTypedArray(new RegExp('d', 'gi'))).toBeFalsy();
    });

    it('should handle Sets', () => {
      expect(isTypedArray(new Set())).toBeFalsy();
      expect(isTypedArray(new Set([1, 2, 3]))).toBeFalsy();
      expect(isTypedArray(new Set(['a', 'b', 'c']))).toBeFalsy();
    });

    it('should handle Strings', () => {
      expect(isTypedArray('')).toBeFalsy();
      expect(isTypedArray('a longer string')).toBeFalsy();
      expect(isTypedArray('1000n')).toBeFalsy();
      expect(isTypedArray('3e8')).toBeFalsy();
      expect(isTypedArray('42')).toBeFalsy();
      expect(isTypedArray('3.14')).toBeFalsy();
      expect(isTypedArray('0')).toBeFalsy();
      expect(isTypedArray('-0')).toBeFalsy();
      expect(isTypedArray('-3.14')).toBeFalsy();
      expect(isTypedArray('-42')).toBeFalsy();
      expect(isTypedArray('-3e8')).toBeFalsy();
      expect(isTypedArray('-1000n')).toBeFalsy();
    });

    it('should handle Symbols', () => {
      expect(isTypedArray(Symbol())).toBeFalsy();
      expect(isTypedArray(Symbol('name'))).toBeFalsy();
    });

    it('should handle This', () => {
      expect(isTypedArray(this)).toBeFalsy();
      expect(isTypedArray(globalThis)).toBeFalsy();
    });

    it('should handle TypedArrays', () => {
      expect(isTypedArray(new Int8Array(2))).toBeTruthy();
      expect(isTypedArray(new Int16Array(2))).toBeTruthy();
      expect(isTypedArray(new Int32Array(2))).toBeTruthy();
      expect(isTypedArray(new Uint8Array(2))).toBeTruthy();
      expect(isTypedArray(new Uint16Array(2))).toBeTruthy();
      expect(isTypedArray(new Uint32Array(2))).toBeTruthy();
      expect(isTypedArray(new Uint8ClampedArray(2))).toBeTruthy();
      expect(isTypedArray(new BigInt64Array(2))).toBeTruthy();
      expect(isTypedArray(new BigUint64Array(2))).toBeTruthy();
      expect(isTypedArray(new Float32Array(2))).toBeTruthy();
      expect(isTypedArray(new Float64Array(2))).toBeTruthy();
      expect(isTypedArray(new SharedArrayBuffer(512))).toBeTruthy();
    });

    it('should handle WeakMap/Set', () => {
      expect(isTypedArray(new WeakMap())).toBeFalsy();
      expect(isTypedArray(new WeakSet())).toBeFalsy();
    });
  });
});
