import { isNumber } from './isNumber.js';
import { describe, it, expect } from 'vitest';

describe('isNumber', () => {
  it('should return true for valid numbers', () => {
    expect(isNumber(0)).toBe(true);
    expect(isNumber(1)).toBe(true);
    expect(isNumber(-1)).toBe(true);
    expect(isNumber(3.14)).toBe(true);
  });

  it('should return false for non-number values', () => {
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber('')).toBe(false);
    expect(isNumber('string')).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber([])).toBe(false);
  });

  it('should return false for NaN', () => {
    expect(isNumber(NaN)).toBe(false);
  });

  it('should return false for Infinity and -Infinity', () => {
    expect(isNumber(Infinity)).toBe(false);
    expect(isNumber(-Infinity)).toBe(false);
  });

  it('should handle edge cases correctly', () => {
    // Number object
    expect(isNumber(new Number(1))).toBe(true);

    // Object with valueOf method returning a number
    const obj = { valueOf: () => 42 };
    expect(isNumber(obj)).toBe(false); // isNumber doesn't call valueOf

    // Object with toString method returning a number string
    const strObj = { toString: () => '42' };
    expect(isNumber(strObj)).toBe(false); // isNumber doesn't call toString
  });

  describe('README.md examples', () => {
    it('should handle Arrays', () => {
      expect(isNumber([])).toBeFalsy();
      expect(isNumber([1, 2, 3])).toBeFalsy();
      expect(isNumber(['a', 'b', 'c'])).toBeFalsy();
    });

    it('should handle BigInts', () => {
      expect(isNumber(42n)).toBeFalsy();
      expect(isNumber(0n)).toBeFalsy();
      expect(isNumber(-0n)).toBeFalsy();
      expect(isNumber(-42n)).toBeFalsy();
    });

    it('should handle Booleans', () => {
      expect(isNumber(true)).toBeFalsy();
      expect(isNumber(false)).toBeFalsy();
    });

    it('should handle a Class', () => {
      expect(isNumber(class SomeClass {})).toBeFalsy();
    });

    it('should handle a Dates', () => {
      expect(isNumber(new Date())).toBeFalsy();
      expect(isNumber(new Date('1970-01-01T12:00:00.000Z'))).toBeFalsy();
      expect(isNumber(new Date('2099-12-31'))).toBeFalsy();
    });

    it('should handle a Empty', () => {
      expect(isNumber(null)).toBeFalsy();
      expect(isNumber(undefined)).toBeFalsy();
    });

    it('should handle Errors', () => {
      expect(isNumber(new Error('message'))).toBeFalsy();
    });

    it('should handle Floats', () => {
      expect(isNumber(3.14)).toBeTruthy();
      expect(isNumber(0.0)).toBeTruthy();
      expect(isNumber(-0.0)).toBeTruthy();
      expect(isNumber(-3.14)).toBeTruthy();
      expect(isNumber(Math.E)).toBeTruthy();
      expect(isNumber(Math.PI)).toBeTruthy();
      expect(isNumber(Number.MIN_VALUE)).toBeTruthy();
    });

    it('should handle Functions', () => {
      expect(isNumber(() => 'function')).toBeFalsy();
      expect(isNumber(async () => 'function')).toBeFalsy();
    });

    it('should handle Generators', () => {
      const gen1 = (function* simpleGenerator() {
        yield 1;
      })();
      const gen2 = (async function* asyncGenerator() {
        yield 1;
      })();
      expect(isNumber(gen1)).toBeFalsy();
      expect(isNumber(gen2)).toBeFalsy();
    });

    it('should handle Maps', () => {
      expect(isNumber(new Map())).toBeFalsy();
      expect(isNumber(new Map([['key1', 123]]))).toBeFalsy();
      expect(isNumber(new Map([['key1', 'value1']]))).toBeFalsy();
    });

    it('should handle Numbers', () => {
      expect(isNumber(Number.POSITIVE_INFINITY)).toBeFalsy();
      expect(isNumber(Number.MAX_SAFE_INTEGER)).toBeTruthy();
      expect(isNumber(Number.MAX_VALUE)).toBeTruthy();
      expect(isNumber(3e8)).toBeTruthy();
      expect(isNumber(42)).toBeTruthy();
      expect(isNumber(1)).toBeTruthy();
      expect(isNumber(0)).toBeTruthy();
      expect(isNumber(-0)).toBeTruthy();
      expect(isNumber(-1)).toBeTruthy();
      expect(isNumber(-42)).toBeTruthy();
      expect(isNumber(-3e8)).toBeTruthy();
      expect(isNumber(Number.MIN_SAFE_INTEGER)).toBeTruthy();
      expect(isNumber(Number.NEGATIVE_INFINITY)).toBeFalsy();
      expect(isNumber(Number.NaN)).toBeFalsy();
    });

    it('should handle POJOs', () => {
      expect(isNumber({})).toBeFalsy();
      expect(isNumber({ key: 'string' })).toBeFalsy();
      expect(isNumber({ key: 123 })).toBeFalsy();
    });

    it('should handle Promise', () => {
      expect(isNumber(new Promise(() => 1))).toBeFalsy();
      expect(isNumber(Promise.resolve())).toBeFalsy();
    });

    it('should handle Regular Expression', () => {
      expect(isNumber(/[regex]+/gi)).toBeFalsy();
      expect(isNumber(new RegExp('d', 'gi'))).toBeFalsy();
    });

    it('should handle Sets', () => {
      expect(isNumber(new Set())).toBeFalsy();
      expect(isNumber(new Set([1, 2, 3]))).toBeFalsy();
      expect(isNumber(new Set(['a', 'b', 'c']))).toBeFalsy();
    });

    it('should handle Strings', () => {
      expect(isNumber('')).toBeFalsy();
      expect(isNumber('a longer string')).toBeFalsy();
      expect(isNumber('1000n')).toBeFalsy();
      expect(isNumber('3e8')).toBeFalsy();
      expect(isNumber('42')).toBeFalsy();
      expect(isNumber('3.14')).toBeFalsy();
      expect(isNumber('0')).toBeFalsy();
      expect(isNumber('-0')).toBeFalsy();
      expect(isNumber('-3.14')).toBeFalsy();
      expect(isNumber('-42')).toBeFalsy();
      expect(isNumber('-3e8')).toBeFalsy();
      expect(isNumber('-1000n')).toBeFalsy();
    });

    it('should handle Symbols', () => {
      expect(isNumber(Symbol())).toBeFalsy();
      expect(isNumber(Symbol('name'))).toBeFalsy();
    });

    it('should handle This', () => {
      expect(isNumber(this)).toBeFalsy();
      expect(isNumber(globalThis)).toBeFalsy();
    });

    it('should handle TypedArrays', () => {
      expect(isNumber(new Int8Array(2))).toBeFalsy();
      expect(isNumber(new Int16Array(2))).toBeFalsy();
      expect(isNumber(new Int32Array(2))).toBeFalsy();
      expect(isNumber(new Uint8Array(2))).toBeFalsy();
      expect(isNumber(new Uint16Array(2))).toBeFalsy();
      expect(isNumber(new Uint32Array(2))).toBeFalsy();
      expect(isNumber(new Uint8ClampedArray(2))).toBeFalsy();
      expect(isNumber(new BigInt64Array(2))).toBeFalsy();
      expect(isNumber(new BigUint64Array(2))).toBeFalsy();
      expect(isNumber(new Float32Array(2))).toBeFalsy();
      expect(isNumber(new Float64Array(2))).toBeFalsy();
      expect(isNumber(new SharedArrayBuffer(512))).toBeFalsy();
    });

    it('should handle WeakMap/Set', () => {
      expect(isNumber(new WeakMap())).toBeFalsy();
      expect(isNumber(new WeakSet())).toBeFalsy();
    });
  });
});
