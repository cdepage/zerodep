import { isJson } from './isJson.js';
import { describe, it, expect } from 'vitest';

describe('isJson', () => {
  it('should return true for a plain object with valid JSON properties', () => {
    const obj = { key: 'value', num: 123, bool: true, nullVal: null };
    expect(isJson(obj)).toBe(true);
  });

  it('should return true for an array with valid JSON properties', () => {
    const arr = ['string', 123, true, null];
    expect(isJson(arr)).toBe(true);
  });

  it('should return false for a function', () => {
    const func = () => 1;
    expect(isJson(func)).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isJson(undefined)).toBe(false);
  });

  it('should Nreturn false for null', () => {
    expect(isJson(null)).toBe(false);
  });

  it('should return false for a circular reference', () => {
    const obj: any = {};
    obj.self = obj;
    expect(isJson(obj)).toBe(false);
  });

  it('should return true for an object with non-string keys', () => {
    const obj = { [Symbol()]: 'value' };
    expect(isJson(obj)).toBe(true);
  });

  describe('README.md examples', () => {
    it('should handle Arrays', () => {
      expect(isJson([])).toBeTruthy();
      expect(isJson([1, 2, 3])).toBeTruthy();
      expect(isJson(['a', 'b', 'c'])).toBeTruthy();
    });

    it('should handle BigInts', () => {
      expect(isJson(42n)).toBeFalsy();
      expect(isJson(0n)).toBeFalsy();
      expect(isJson(-0n)).toBeFalsy();
      expect(isJson(-42n)).toBeFalsy();
    });

    it('should handle Booleans', () => {
      expect(isJson(true)).toBeFalsy();
      expect(isJson(false)).toBeFalsy();
    });

    it('should handle a Class', () => {
      expect(isJson(class SomeClass {})).toBeFalsy();
    });

    it('should handle a Dates', () => {
      expect(isJson(new Date())).toBeFalsy();
      expect(isJson(new Date('1970-01-01T12:00:00.000Z'))).toBeFalsy();
      expect(isJson(new Date('2099-12-31'))).toBeFalsy();
    });

    it('should handle a Empty', () => {
      expect(isJson(null)).toBeFalsy();
      expect(isJson(undefined)).toBeFalsy();
    });

    it('should handle Errors', () => {
      expect(isJson(new Error('message'))).toBeFalsy();
    });

    it('should handle Floats', () => {
      expect(isJson(3.14)).toBeFalsy();
      expect(isJson(0.0)).toBeFalsy();
      expect(isJson(-0.0)).toBeFalsy();
      expect(isJson(-3.14)).toBeFalsy();
      expect(isJson(Math.E)).toBeFalsy();
      expect(isJson(Math.PI)).toBeFalsy();
      expect(isJson(Number.MIN_VALUE)).toBeFalsy();
    });

    it('should handle Functions', () => {
      expect(isJson(() => 'function')).toBeFalsy();
      expect(isJson(async () => 'function')).toBeFalsy();
    });

    it('should handle Generators', () => {
      const gen1 = (function* simpleGenerator() {
        yield 1;
      })();
      const gen2 = (async function* asyncGenerator() {
        yield 1;
      })();
      expect(isJson(gen1)).toBeFalsy();
      expect(isJson(gen2)).toBeFalsy();
    });

    it('should handle Maps', () => {
      expect(isJson(new Map())).toBeFalsy();
      expect(isJson(new Map([['key1', 123]]))).toBeFalsy();
      expect(isJson(new Map([['key1', 'value1']]))).toBeFalsy();
    });

    it('should handle Numbers', () => {
      expect(isJson(Number.POSITIVE_INFINITY)).toBeFalsy();
      expect(isJson(Number.MAX_SAFE_INTEGER)).toBeFalsy();
      expect(isJson(Number.MAX_VALUE)).toBeFalsy();
      expect(isJson(3e8)).toBeFalsy();
      expect(isJson(42)).toBeFalsy();
      expect(isJson(1)).toBeFalsy();
      expect(isJson(0)).toBeFalsy();
      expect(isJson(-0)).toBeFalsy();
      expect(isJson(-1)).toBeFalsy();
      expect(isJson(-42)).toBeFalsy();
      expect(isJson(-3e8)).toBeFalsy();
      expect(isJson(Number.MIN_SAFE_INTEGER)).toBeFalsy();
      expect(isJson(Number.NEGATIVE_INFINITY)).toBeFalsy();
      expect(isJson(Number.NaN)).toBeFalsy();
    });

    it('should handle JSONs', () => {
      expect(isJson({})).toBeTruthy();
      expect(isJson({ key: 'string' })).toBeTruthy();
      expect(isJson({ key: 123 })).toBeTruthy();
    });

    it('should handle Promise', () => {
      expect(isJson(new Promise(() => 1))).toBeFalsy();
      expect(isJson(Promise.resolve())).toBeFalsy();
    });

    it('should handle Regular Expression', () => {
      expect(isJson(/[regx]+/gi)).toBeFalsy();
      expect(isJson(new RegExp('d', 'gi'))).toBeFalsy();
    });

    it('should handle Sets', () => {
      expect(isJson(new Set())).toBeFalsy();
      expect(isJson(new Set([1, 2, 3]))).toBeFalsy();
      expect(isJson(new Set(['a', 'b', 'c']))).toBeFalsy();
    });

    it('should handle Strings', () => {
      expect(isJson('')).toBeFalsy();
      expect(isJson('a longer string')).toBeFalsy();
      expect(isJson('1000n')).toBeFalsy();
      expect(isJson('3e8')).toBeFalsy();
      expect(isJson('42')).toBeFalsy();
      expect(isJson('3.14')).toBeFalsy();
      expect(isJson('0')).toBeFalsy();
      expect(isJson('-0')).toBeFalsy();
      expect(isJson('-3.14')).toBeFalsy();
      expect(isJson('-42')).toBeFalsy();
      expect(isJson('-3e8')).toBeFalsy();
      expect(isJson('-1000n')).toBeFalsy();
    });

    it('should handle Symbols', () => {
      expect(isJson(Symbol())).toBeFalsy();
      expect(isJson(Symbol('name'))).toBeFalsy();
    });

    it('should handle This', () => {
      expect(isJson(this)).toBeFalsy();
      expect(isJson(globalThis)).toBeFalsy();
    });

    it('should handle TypedArrays', () => {
      expect(isJson(new Int8Array(2))).toBeFalsy();
      expect(isJson(new Int16Array(2))).toBeFalsy();
      expect(isJson(new Int32Array(2))).toBeFalsy();
      expect(isJson(new Uint8Array(2))).toBeFalsy();
      expect(isJson(new Uint16Array(2))).toBeFalsy();
      expect(isJson(new Uint32Array(2))).toBeFalsy();
      expect(isJson(new Uint8ClampedArray(2))).toBeFalsy();
      expect(isJson(new BigInt64Array(2))).toBeFalsy();
      expect(isJson(new BigUint64Array(2))).toBeFalsy();
      expect(isJson(new Float32Array(2))).toBeFalsy();
      expect(isJson(new Float64Array(2))).toBeFalsy();
      expect(isJson(new SharedArrayBuffer(512))).toBeFalsy();
    });

    it('should handle WeakMap/Set', () => {
      expect(isJson(new WeakMap())).toBeFalsy();
      expect(isJson(new WeakSet())).toBeFalsy();
    });
  });
});
