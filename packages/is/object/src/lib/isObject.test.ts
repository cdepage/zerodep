import { isObject } from './isObject.js';
import { describe, it, expect } from 'vitest';

describe('isObject', () => {
  it('should return true for plain objects', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ key: 'value' })).toBe(true);
  });

  it('should return false for non-objects', () => {
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject('string')).toBe(false);
    expect(isObject(123)).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject([])).toBe(false); // Arrays are objects, but not plain objects
  });

  it('should return false for objects created with different constructors', () => {
    const obj = Object.create(null);
    expect(isObject(obj)).toBe(false);

    function CustomConstructor() {
      return 1;
    }
    // @ts-expect-error - override intended
    const customObj = new CustomConstructor();
    expect(isObject(customObj)).toBe(false);
  });

  describe('README.md examples', () => {
    it('should handle Arrays', () => {
      expect(isObject([])).toBeFalsy();
      expect(isObject([1, 2, 3])).toBeFalsy();
      expect(isObject(['a', 'b', 'c'])).toBeFalsy();
    });

    it('should handle BigInts', () => {
      expect(isObject(42n)).toBeFalsy();
      expect(isObject(0n)).toBeFalsy();
      expect(isObject(-0n)).toBeFalsy();
      expect(isObject(-42n)).toBeFalsy();
    });

    it('should handle Booleans', () => {
      expect(isObject(true)).toBeFalsy();
      expect(isObject(false)).toBeFalsy();
    });

    it('should handle a Class', () => {
      expect(isObject(class SomeClass {})).toBeFalsy();
    });

    it('should handle a Dates', () => {
      expect(isObject(new Date())).toBeFalsy();
      expect(isObject(new Date('1970-01-01T12:00:00.000Z'))).toBeFalsy();
      expect(isObject(new Date('2099-12-31'))).toBeFalsy();
    });

    it('should handle a Empty', () => {
      expect(isObject(null)).toBeFalsy();
      expect(isObject(undefined)).toBeFalsy();
    });

    it('should handle Errors', () => {
      expect(isObject(new Error('message'))).toBeFalsy();
    });

    it('should handle Floats', () => {
      expect(isObject(3.14)).toBeFalsy();
      expect(isObject(0.0)).toBeFalsy();
      expect(isObject(-0.0)).toBeFalsy();
      expect(isObject(-3.14)).toBeFalsy();
      expect(isObject(Math.E)).toBeFalsy();
      expect(isObject(Math.PI)).toBeFalsy();
      expect(isObject(Number.MIN_VALUE)).toBeFalsy();
    });

    it('should handle Functions', () => {
      expect(isObject(() => 'function')).toBeFalsy();
      expect(isObject(async () => 'function')).toBeFalsy();
    });

    it('should handle Generators', () => {
      const gen1 = (function* simpleGenerator() {
        yield 1;
      })();
      const gen2 = (async function* asyncGenerator() {
        yield 1;
      })();
      expect(isObject(gen1)).toBeFalsy();
      expect(isObject(gen2)).toBeFalsy();
    });

    it('should handle Maps', () => {
      expect(isObject(new Map())).toBeFalsy();
      expect(isObject(new Map([['key1', 123]]))).toBeFalsy();
      expect(isObject(new Map([['key1', 'value1']]))).toBeFalsy();
    });

    it('should handle Numbers', () => {
      expect(isObject(Number.POSITIVE_INFINITY)).toBeFalsy();
      expect(isObject(Number.MAX_SAFE_INTEGER)).toBeFalsy();
      expect(isObject(Number.MAX_VALUE)).toBeFalsy();
      expect(isObject(3e8)).toBeFalsy();
      expect(isObject(42)).toBeFalsy();
      expect(isObject(1)).toBeFalsy();
      expect(isObject(0)).toBeFalsy();
      expect(isObject(-0)).toBeFalsy();
      expect(isObject(-1)).toBeFalsy();
      expect(isObject(-42)).toBeFalsy();
      expect(isObject(-3e8)).toBeFalsy();
      expect(isObject(Number.MIN_SAFE_INTEGER)).toBeFalsy();
      expect(isObject(Number.NEGATIVE_INFINITY)).toBeFalsy();
      expect(isObject(Number.NaN)).toBeFalsy();
    });

    it('should handle POJOs', () => {
      expect(isObject({})).toBeTruthy();
      expect(isObject({ key: 'string' })).toBeTruthy();
      expect(isObject({ key: 123 })).toBeTruthy();
    });

    it('should handle Promise', () => {
      expect(isObject(new Promise(() => 1))).toBeFalsy();
      expect(isObject(Promise.resolve())).toBeFalsy();
    });

    it('should handle Regular Expression', () => {
      expect(isObject(/[regex]+/gi)).toBeFalsy();
      expect(isObject(new RegExp('d', 'gi'))).toBeFalsy();
    });

    it('should handle Sets', () => {
      expect(isObject(new Set())).toBeFalsy();
      expect(isObject(new Set([1, 2, 3]))).toBeFalsy();
      expect(isObject(new Set(['a', 'b', 'c']))).toBeFalsy();
    });

    it('should handle Strings', () => {
      expect(isObject('')).toBeFalsy();
      expect(isObject('a longer string')).toBeFalsy();
      expect(isObject('1000n')).toBeFalsy();
      expect(isObject('3e8')).toBeFalsy();
      expect(isObject('42')).toBeFalsy();
      expect(isObject('3.14')).toBeFalsy();
      expect(isObject('0')).toBeFalsy();
      expect(isObject('-0')).toBeFalsy();
      expect(isObject('-3.14')).toBeFalsy();
      expect(isObject('-42')).toBeFalsy();
      expect(isObject('-3e8')).toBeFalsy();
      expect(isObject('-1000n')).toBeFalsy();
    });

    it('should handle Symbols', () => {
      expect(isObject(Symbol())).toBeFalsy();
      expect(isObject(Symbol('name'))).toBeFalsy();
    });

    it('should handle This', () => {
      expect(isObject(this)).toBeFalsy();
      expect(isObject(globalThis)).toBeFalsy();
    });

    it('should handle TypedArrays', () => {
      expect(isObject(new Int8Array(2))).toBeFalsy();
      expect(isObject(new Int16Array(2))).toBeFalsy();
      expect(isObject(new Int32Array(2))).toBeFalsy();
      expect(isObject(new Uint8Array(2))).toBeFalsy();
      expect(isObject(new Uint16Array(2))).toBeFalsy();
      expect(isObject(new Uint32Array(2))).toBeFalsy();
      expect(isObject(new Uint8ClampedArray(2))).toBeFalsy();
      expect(isObject(new BigInt64Array(2))).toBeFalsy();
      expect(isObject(new BigUint64Array(2))).toBeFalsy();
      expect(isObject(new Float32Array(2))).toBeFalsy();
      expect(isObject(new Float64Array(2))).toBeFalsy();
      expect(isObject(new SharedArrayBuffer(512))).toBeFalsy();
    });

    it('should handle WeakMap/Set', () => {
      expect(isObject(new WeakMap())).toBeFalsy();
      expect(isObject(new WeakSet())).toBeFalsy();
    });
  });
});
