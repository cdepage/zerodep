import { isNil } from './isNil.js';
import { describe, it, expect } from 'vitest';

describe('isNil', () => {
  it('should return true for null values', () => {
    expect(isNil(null)).toBe(true);
  });

  it('should return true for undefined values', () => {
    expect(isNil(undefined)).toBe(true);
  });

  it('should return false for non-null and non-undefined values', () => {
    expect(isNil(0)).toBe(false);
    expect(isNil(false)).toBe(false);
    expect(isNil('')).toBe(false);
    expect(isNil({})).toBe(false);
    expect(isNil([])).toBe(false);
  });

  it('should return false for NaN', () => {
    expect(isNil(NaN)).toBe(false);
  });

  it('should handle complex objects correctly', () => {
    const obj = { key: 'value' };
    expect(isNil(obj)).toBe(false);

    // @ts-expect-error - override intended
    delete obj.key;
    expect(isNil(obj)).toBe(false); // Object is still not null or undefined
  });

  describe('README.md examples', () => {
    it('should handle Arrays', () => {
      expect(isNil([])).toBeFalsy();
      expect(isNil([1, 2, 3])).toBeFalsy();
      expect(isNil(['a', 'b', 'c'])).toBeFalsy();
    });

    it('should handle BigInts', () => {
      expect(isNil(42n)).toBeFalsy();
      expect(isNil(0n)).toBeFalsy();
      expect(isNil(-0n)).toBeFalsy();
      expect(isNil(-42n)).toBeFalsy();
    });

    it('should handle Booleans', () => {
      expect(isNil(true)).toBeFalsy();
      expect(isNil(false)).toBeFalsy();
    });

    it('should handle a Class', () => {
      expect(isNil(class SomeClass {})).toBeFalsy();
    });

    it('should handle a Dates', () => {
      expect(isNil(new Date())).toBeFalsy();
      expect(isNil(new Date('1970-01-01T12:00:00.000Z'))).toBeFalsy();
      expect(isNil(new Date('2099-12-31'))).toBeFalsy();
    });

    it('should handle a Empty', () => {
      expect(isNil(null)).toBeTruthy();
      expect(isNil(undefined)).toBeTruthy();
    });

    it('should handle Errors', () => {
      expect(isNil(new Error('message'))).toBeFalsy();
    });

    it('should handle Floats', () => {
      expect(isNil(3.14)).toBeFalsy();
      expect(isNil(0.0)).toBeFalsy();
      expect(isNil(-0.0)).toBeFalsy();
      expect(isNil(-3.14)).toBeFalsy();
      expect(isNil(Math.E)).toBeFalsy();
      expect(isNil(Math.PI)).toBeFalsy();
      expect(isNil(Number.MIN_VALUE)).toBeFalsy();
    });

    it('should handle Functions', () => {
      expect(isNil(() => 'function')).toBeFalsy();
      expect(isNil(async () => 'function')).toBeFalsy();
    });

    it('should handle Generators', () => {
      const gen1 = (function* simpleGenerator() {
        yield 1;
      })();
      const gen2 = (async function* asyncGenerator() {
        yield 1;
      })();
      expect(isNil(gen1)).toBeFalsy();
      expect(isNil(gen2)).toBeFalsy();
    });

    it('should handle Maps', () => {
      expect(isNil(new Map())).toBeFalsy();
      expect(isNil(new Map([['key1', 123]]))).toBeFalsy();
      expect(isNil(new Map([['key1', 'value1']]))).toBeFalsy();
    });

    it('should handle Numbers', () => {
      expect(isNil(Number.POSITIVE_INFINITY)).toBeFalsy();
      expect(isNil(Number.MAX_SAFE_INTEGER)).toBeFalsy();
      expect(isNil(Number.MAX_VALUE)).toBeFalsy();
      expect(isNil(3e8)).toBeFalsy();
      expect(isNil(42)).toBeFalsy();
      expect(isNil(1)).toBeFalsy();
      expect(isNil(0)).toBeFalsy();
      expect(isNil(-0)).toBeFalsy();
      expect(isNil(-1)).toBeFalsy();
      expect(isNil(-42)).toBeFalsy();
      expect(isNil(-3e8)).toBeFalsy();
      expect(isNil(Number.MIN_SAFE_INTEGER)).toBeFalsy();
      expect(isNil(Number.NEGATIVE_INFINITY)).toBeFalsy();
      expect(isNil(Number.NaN)).toBeFalsy();
    });

    it('should handle POJOs', () => {
      expect(isNil({})).toBeFalsy();
      expect(isNil({ key: 'string' })).toBeFalsy();
      expect(isNil({ key: 123 })).toBeFalsy();
    });

    it('should handle Promise', () => {
      expect(isNil(new Promise(() => 1))).toBeFalsy();
      expect(isNil(Promise.resolve())).toBeFalsy();
    });

    it('should handle Regular Expression', () => {
      expect(isNil(/[regex]+/gi)).toBeFalsy();
      expect(isNil(new RegExp('d', 'gi'))).toBeFalsy();
    });

    it('should handle Sets', () => {
      expect(isNil(new Set())).toBeFalsy();
      expect(isNil(new Set([1, 2, 3]))).toBeFalsy();
      expect(isNil(new Set(['a', 'b', 'c']))).toBeFalsy();
    });

    it('should handle Strings', () => {
      expect(isNil('')).toBeFalsy();
      expect(isNil('a longer string')).toBeFalsy();
      expect(isNil('1000n')).toBeFalsy();
      expect(isNil('3e8')).toBeFalsy();
      expect(isNil('42')).toBeFalsy();
      expect(isNil('3.14')).toBeFalsy();
      expect(isNil('0')).toBeFalsy();
      expect(isNil('-0')).toBeFalsy();
      expect(isNil('-3.14')).toBeFalsy();
      expect(isNil('-42')).toBeFalsy();
      expect(isNil('-3e8')).toBeFalsy();
      expect(isNil('-1000n')).toBeFalsy();
    });

    it('should handle Symbols', () => {
      expect(isNil(Symbol())).toBeFalsy();
      expect(isNil(Symbol('name'))).toBeFalsy();
    });

    it('should handle This', () => {
      expect(isNil(this)).toBeFalsy();
      expect(isNil(globalThis)).toBeFalsy();
    });

    it('should handle TypedArrays', () => {
      expect(isNil(new Int8Array(2))).toBeFalsy();
      expect(isNil(new Int16Array(2))).toBeFalsy();
      expect(isNil(new Int32Array(2))).toBeFalsy();
      expect(isNil(new Uint8Array(2))).toBeFalsy();
      expect(isNil(new Uint16Array(2))).toBeFalsy();
      expect(isNil(new Uint32Array(2))).toBeFalsy();
      expect(isNil(new Uint8ClampedArray(2))).toBeFalsy();
      expect(isNil(new BigInt64Array(2))).toBeFalsy();
      expect(isNil(new BigUint64Array(2))).toBeFalsy();
      expect(isNil(new Float32Array(2))).toBeFalsy();
      expect(isNil(new Float64Array(2))).toBeFalsy();
      expect(isNil(new SharedArrayBuffer(512))).toBeFalsy();
    });

    it('should handle WeakMap/Set', () => {
      expect(isNil(new WeakMap())).toBeFalsy();
      expect(isNil(new WeakSet())).toBeFalsy();
    });
  });
});
