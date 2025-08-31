import { isInteger } from './isInteger.js';
import { describe, expect, it } from 'vitest';

describe('isInteger', () => {
  it('should return true for integer numbers', () => {
    expect(isInteger(0)).toBe(true);
    expect(isInteger(1)).toBe(true);
    expect(isInteger(-1)).toBe(true);
    expect(isInteger(123456789)).toBe(true);
  });

  it('should return false for non-integer numbers', () => {
    expect(isInteger(0.1)).toBe(false);
    expect(isInteger(1.5)).toBe(false);
    expect(isInteger(-1.5)).toBe(false);
    expect(isInteger(Number.MAX_SAFE_INTEGER + 1)).toBe(true); // beyond safe integer range
  });

  it('should return false for non-number values', () => {
    expect(isInteger(null)).toBe(false);
    expect(isInteger(undefined)).toBe(false);
    expect(isInteger(true)).toBe(false);
    expect(isInteger(false)).toBe(false);
    expect(isInteger('')).toBe(false);
    expect(isInteger('123')).toBe(false);
    expect(isInteger([])).toBe(false);
    expect(isInteger({})).toBe(false);
  });

  it('should handle edge cases correctly', () => {
    expect(isInteger(Number.POSITIVE_INFINITY)).toBe(false);
    expect(isInteger(Number.NEGATIVE_INFINITY)).toBe(false);
    expect(isInteger(NaN)).toBe(false);
  });

  describe('README.md examples', () => {
    it('should handle Arrays', () => {
      expect(isInteger([])).toBeFalsy();
      expect(isInteger([1, 2, 3])).toBeFalsy();
      expect(isInteger(['a', 'b', 'c'])).toBeFalsy();
    });

    it('should handle BigInts', () => {
      expect(isInteger(42n)).toBeFalsy();
      expect(isInteger(0n)).toBeFalsy();
      expect(isInteger(-0n)).toBeFalsy();
      expect(isInteger(-42n)).toBeFalsy();
    });

    it('should handle Booleans', () => {
      expect(isInteger(true)).toBeFalsy();
      expect(isInteger(false)).toBeFalsy();
    });

    it('should handle a Class', () => {
      expect(isInteger(class SomeClass {})).toBeFalsy();
    });

    it('should handle a Dates', () => {
      expect(isInteger(new Date())).toBeFalsy();
      expect(isInteger(new Date('1970-01-01T12:00:00.000Z'))).toBeFalsy();
      expect(isInteger(new Date('2099-12-31'))).toBeFalsy();
    });

    it('should handle a Empty', () => {
      expect(isInteger(null)).toBeFalsy();
      expect(isInteger(undefined)).toBeFalsy();
    });

    it('should handle Errors', () => {
      expect(isInteger(new Error('message'))).toBeFalsy();
    });

    it('should handle Floats', () => {
      expect(isInteger(3.14)).toBeFalsy();
      expect(isInteger(0.0)).toBeTruthy();
      expect(isInteger(-0.0)).toBeTruthy();
      expect(isInteger(-3.14)).toBeFalsy();
      expect(isInteger(Math.E)).toBeFalsy();
      expect(isInteger(Math.PI)).toBeFalsy();
      expect(isInteger(Number.MIN_VALUE)).toBeFalsy();
    });

    it('should handle Functions', () => {
      expect(isInteger(() => 'function')).toBeFalsy();
      expect(isInteger(async () => 'function')).toBeFalsy();
    });

    it('should handle Generators', () => {
      const gen1 = (function* simpleGenerator() {
        yield 1;
      })();
      const gen2 = (async function* asyncGenerator() {
        yield 1;
      })();
      expect(isInteger(gen1)).toBeFalsy();
      expect(isInteger(gen2)).toBeFalsy();
    });

    it('should handle Maps', () => {
      expect(isInteger(new Map())).toBeFalsy();
      expect(isInteger(new Map([['key1', 123]]))).toBeFalsy();
      expect(isInteger(new Map([['key1', 'value1']]))).toBeFalsy();
    });

    it('should handle Numbers', () => {
      expect(isInteger(Number.POSITIVE_INFINITY)).toBeFalsy();
      expect(isInteger(Number.MAX_SAFE_INTEGER)).toBeTruthy();
      expect(isInteger(Number.MAX_VALUE)).toBeTruthy();
      expect(isInteger(3e8)).toBeTruthy();
      expect(isInteger(42)).toBeTruthy();
      expect(isInteger(1)).toBeTruthy();
      expect(isInteger(0)).toBeTruthy();
      expect(isInteger(-0)).toBeTruthy();
      expect(isInteger(-1)).toBeTruthy();
      expect(isInteger(-42)).toBeTruthy();
      expect(isInteger(-3e8)).toBeTruthy();
      expect(isInteger(Number.MIN_SAFE_INTEGER)).toBeTruthy();
      expect(isInteger(Number.NEGATIVE_INFINITY)).toBeFalsy();
      expect(isInteger(Number.NaN)).toBeFalsy();
    });

    it('should handle POJOs', () => {
      expect(isInteger({})).toBeFalsy();
      expect(isInteger({ key: 'string' })).toBeFalsy();
      expect(isInteger({ key: 123 })).toBeFalsy();
    });

    it('should handle Promise', () => {
      expect(isInteger(new Promise(() => 1))).toBeFalsy();
      expect(isInteger(Promise.resolve())).toBeFalsy();
    });

    it('should handle Regular Expression', () => {
      expect(isInteger(/[regex]+/gi)).toBeFalsy();
      expect(isInteger(new RegExp('d', 'gi'))).toBeFalsy();
    });

    it('should handle Sets', () => {
      expect(isInteger(new Set())).toBeFalsy();
      expect(isInteger(new Set([1, 2, 3]))).toBeFalsy();
      expect(isInteger(new Set(['a', 'b', 'c']))).toBeFalsy();
    });

    it('should handle Strings', () => {
      expect(isInteger('')).toBeFalsy();
      expect(isInteger('a longer string')).toBeFalsy();
      expect(isInteger('1000n')).toBeFalsy();
      expect(isInteger('3e8')).toBeFalsy();
      expect(isInteger('42')).toBeFalsy();
      expect(isInteger('3.14')).toBeFalsy();
      expect(isInteger('0')).toBeFalsy();
      expect(isInteger('-0')).toBeFalsy();
      expect(isInteger('-3.14')).toBeFalsy();
      expect(isInteger('-42')).toBeFalsy();
      expect(isInteger('-3e8')).toBeFalsy();
      expect(isInteger('-1000n')).toBeFalsy();
    });

    it('should handle Symbols', () => {
      expect(isInteger(Symbol())).toBeFalsy();
      expect(isInteger(Symbol('name'))).toBeFalsy();
    });

    it('should handle This', () => {
      expect(isInteger(this)).toBeFalsy();
      expect(isInteger(globalThis)).toBeFalsy();
    });

    it('should handle TypedArrays', () => {
      expect(isInteger(new Int8Array(2))).toBeFalsy();
      expect(isInteger(new Int16Array(2))).toBeFalsy();
      expect(isInteger(new Int32Array(2))).toBeFalsy();
      expect(isInteger(new Uint8Array(2))).toBeFalsy();
      expect(isInteger(new Uint16Array(2))).toBeFalsy();
      expect(isInteger(new Uint32Array(2))).toBeFalsy();
      expect(isInteger(new Uint8ClampedArray(2))).toBeFalsy();
      expect(isInteger(new BigInt64Array(2))).toBeFalsy();
      expect(isInteger(new BigUint64Array(2))).toBeFalsy();
      expect(isInteger(new Float32Array(2))).toBeFalsy();
      expect(isInteger(new Float64Array(2))).toBeFalsy();
      expect(isInteger(new SharedArrayBuffer(512))).toBeFalsy();
    });

    it('should handle WeakMap/Set', () => {
      expect(isInteger(new WeakMap())).toBeFalsy();
      expect(isInteger(new WeakSet())).toBeFalsy();
    });
  });
});
