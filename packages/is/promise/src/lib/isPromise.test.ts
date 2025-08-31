import { isPromise } from './isPromise.js';
import { describe, it, expect } from 'vitest';

describe('isPromise', () => {
  it('should return true for a Promise object', () => {
    const promise = new Promise(() => 1);
    expect(isPromise(promise)).toBe(true);
  });

  it('should return false for non-Promise objects', () => {
    expect(isPromise(null)).toBe(false);
    expect(isPromise(undefined)).toBe(false);
    expect(isPromise({})).toBe(false);
    expect(isPromise([])).toBe(false);
    expect(isPromise('string')).toBe(false);
    expect(isPromise(123)).toBe(false);
  });

  it('should return false for Promise-like objects', () => {
    const promiseLike = { then: () => 1, catch: () => 1 };
    expect(isPromise(promiseLike)).toBe(false);
  });

  it('should handle edge cases correctly', () => {
    // Test with a custom object that has toString method
    const customObject = {
      toString: () => '[object Promise]',
    };
    expect(isPromise(customObject)).toBe(false);

    // Test with null and undefined
    expect(isPromise(null)).toBe(false);
    expect(isPromise(undefined)).toBe(false);
  });

  describe('README.md examples', () => {
    it('should handle Arrays', () => {
      expect(isPromise([])).toBeFalsy();
      expect(isPromise([1, 2, 3])).toBeFalsy();
      expect(isPromise(['a', 'b', 'c'])).toBeFalsy();
    });

    it('should handle BigInts', () => {
      expect(isPromise(42n)).toBeFalsy();
      expect(isPromise(0n)).toBeFalsy();
      expect(isPromise(-0n)).toBeFalsy();
      expect(isPromise(-42n)).toBeFalsy();
    });

    it('should handle Booleans', () => {
      expect(isPromise(true)).toBeFalsy();
      expect(isPromise(false)).toBeFalsy();
    });

    it('should handle a Class', () => {
      expect(isPromise(class SomeClass {})).toBeFalsy();
    });

    it('should handle a Dates', () => {
      expect(isPromise(new Date())).toBeFalsy();
      expect(isPromise(new Date('1970-01-01T12:00:00.000Z'))).toBeFalsy();
      expect(isPromise(new Date('2099-12-31'))).toBeFalsy();
    });

    it('should handle a Empty', () => {
      expect(isPromise(null)).toBeFalsy();
      expect(isPromise(undefined)).toBeFalsy();
    });

    it('should handle Errors', () => {
      expect(isPromise(new Error('message'))).toBeFalsy();
    });

    it('should handle Floats', () => {
      expect(isPromise(3.14)).toBeFalsy();
      expect(isPromise(0.0)).toBeFalsy();
      expect(isPromise(-0.0)).toBeFalsy();
      expect(isPromise(-3.14)).toBeFalsy();
      expect(isPromise(Math.E)).toBeFalsy();
      expect(isPromise(Math.PI)).toBeFalsy();
      expect(isPromise(Number.MIN_VALUE)).toBeFalsy();
    });

    it('should handle Functions', () => {
      expect(isPromise(() => 'function')).toBeFalsy();
      expect(isPromise(async () => 'function')).toBeFalsy();
    });

    it('should handle Generators', () => {
      const gen1 = (function* simpleGenerator() {
        yield 1;
      })();
      const gen2 = (async function* asyncGenerator() {
        yield 1;
      })();
      expect(isPromise(gen1)).toBeFalsy();
      expect(isPromise(gen2)).toBeFalsy();
    });

    it('should handle Maps', () => {
      expect(isPromise(new Map())).toBeFalsy();
      expect(isPromise(new Map([['key1', 123]]))).toBeFalsy();
      expect(isPromise(new Map([['key1', 'value1']]))).toBeFalsy();
    });

    it('should handle Numbers', () => {
      expect(isPromise(Number.POSITIVE_INFINITY)).toBeFalsy();
      expect(isPromise(Number.MAX_SAFE_INTEGER)).toBeFalsy();
      expect(isPromise(Number.MAX_VALUE)).toBeFalsy();
      expect(isPromise(3e8)).toBeFalsy();
      expect(isPromise(42)).toBeFalsy();
      expect(isPromise(1)).toBeFalsy();
      expect(isPromise(0)).toBeFalsy();
      expect(isPromise(-0)).toBeFalsy();
      expect(isPromise(-1)).toBeFalsy();
      expect(isPromise(-42)).toBeFalsy();
      expect(isPromise(-3e8)).toBeFalsy();
      expect(isPromise(Number.MIN_SAFE_INTEGER)).toBeFalsy();
      expect(isPromise(Number.NEGATIVE_INFINITY)).toBeFalsy();
      expect(isPromise(Number.NaN)).toBeFalsy();
    });

    it('should handle POJOs', () => {
      expect(isPromise({})).toBeFalsy();
      expect(isPromise({ key: 'string' })).toBeFalsy();
      expect(isPromise({ key: 123 })).toBeFalsy();
    });

    it('should handle Promise', () => {
      expect(isPromise(new Promise(() => 1))).toBeTruthy();
      expect(isPromise(Promise.resolve())).toBeTruthy();
    });

    it('should handle Regular Expression', () => {
      expect(isPromise(/[regex]+/gi)).toBeFalsy();
      expect(isPromise(new RegExp('d', 'gi'))).toBeFalsy();
    });

    it('should handle Sets', () => {
      expect(isPromise(new Set())).toBeFalsy();
      expect(isPromise(new Set([1, 2, 3]))).toBeFalsy();
      expect(isPromise(new Set(['a', 'b', 'c']))).toBeFalsy();
    });

    it('should handle Strings', () => {
      expect(isPromise('')).toBeFalsy();
      expect(isPromise('a longer string')).toBeFalsy();
      expect(isPromise('1000n')).toBeFalsy();
      expect(isPromise('3e8')).toBeFalsy();
      expect(isPromise('42')).toBeFalsy();
      expect(isPromise('3.14')).toBeFalsy();
      expect(isPromise('0')).toBeFalsy();
      expect(isPromise('-0')).toBeFalsy();
      expect(isPromise('-3.14')).toBeFalsy();
      expect(isPromise('-42')).toBeFalsy();
      expect(isPromise('-3e8')).toBeFalsy();
      expect(isPromise('-1000n')).toBeFalsy();
    });

    it('should handle Symbols', () => {
      expect(isPromise(Symbol())).toBeFalsy();
      expect(isPromise(Symbol('name'))).toBeFalsy();
    });

    it('should handle This', () => {
      expect(isPromise(this)).toBeFalsy();
      expect(isPromise(globalThis)).toBeFalsy();
    });

    it('should handle TypedArrays', () => {
      expect(isPromise(new Int8Array(2))).toBeFalsy();
      expect(isPromise(new Int16Array(2))).toBeFalsy();
      expect(isPromise(new Int32Array(2))).toBeFalsy();
      expect(isPromise(new Uint8Array(2))).toBeFalsy();
      expect(isPromise(new Uint16Array(2))).toBeFalsy();
      expect(isPromise(new Uint32Array(2))).toBeFalsy();
      expect(isPromise(new Uint8ClampedArray(2))).toBeFalsy();
      expect(isPromise(new BigInt64Array(2))).toBeFalsy();
      expect(isPromise(new BigUint64Array(2))).toBeFalsy();
      expect(isPromise(new Float32Array(2))).toBeFalsy();
      expect(isPromise(new Float64Array(2))).toBeFalsy();
      expect(isPromise(new SharedArrayBuffer(512))).toBeFalsy();
    });

    it('should handle WeakMap/Set', () => {
      expect(isPromise(new WeakMap())).toBeFalsy();
      expect(isPromise(new WeakSet())).toBeFalsy();
    });
  });
});
