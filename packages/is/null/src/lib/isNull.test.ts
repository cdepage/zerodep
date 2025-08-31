import { isNull } from './isNull.js';
import { describe, it, expect } from 'vitest';

describe('isNull', () => {
  it('should return true when value is null', () => {
    expect(isNull(null)).toBe(true);
  });

  it('should return false when value is not null', () => {
    expect(isNull(undefined)).toBe(false);
    expect(isNull(0)).toBe(false);
    expect(isNull('')).toBe(false);
    expect(isNull({})).toBe(false);
    expect(isNull([])).toBe(false);
  });

  it('should handle edge cases correctly', () => {
    expect(isNull(NaN)).toBe(false); // NaN is not null
    expect(isNull(false)).toBe(false); // false is not null
    expect(isNull(true)).toBe(false); // true is not null
  });

  it('should handle complex objects correctly', () => {
    const obj = { key: 'value' };
    expect(isNull(obj)).toBe(false);
  });

  describe('README.md examples', () => {
    it('should handle Arrays', () => {
      expect(isNull([])).toBeFalsy();
      expect(isNull([1, 2, 3])).toBeFalsy();
      expect(isNull(['a', 'b', 'c'])).toBeFalsy();
    });

    it('should handle BigInts', () => {
      expect(isNull(42n)).toBeFalsy();
      expect(isNull(0n)).toBeFalsy();
      expect(isNull(-0n)).toBeFalsy();
      expect(isNull(-42n)).toBeFalsy();
    });

    it('should handle Booleans', () => {
      expect(isNull(true)).toBeFalsy();
      expect(isNull(false)).toBeFalsy();
    });

    it('should handle a Class', () => {
      expect(isNull(class SomeClass {})).toBeFalsy();
    });

    it('should handle a Dates', () => {
      expect(isNull(new Date())).toBeFalsy();
      expect(isNull(new Date('1970-01-01T12:00:00.000Z'))).toBeFalsy();
      expect(isNull(new Date('2099-12-31'))).toBeFalsy();
    });

    it('should handle a Empty', () => {
      expect(isNull(null)).toBeTruthy();
      expect(isNull(undefined)).toBeFalsy();
    });

    it('should handle Errors', () => {
      expect(isNull(new Error('message'))).toBeFalsy();
    });

    it('should handle Floats', () => {
      expect(isNull(3.14)).toBeFalsy();
      expect(isNull(0.0)).toBeFalsy();
      expect(isNull(-0.0)).toBeFalsy();
      expect(isNull(-3.14)).toBeFalsy();
      expect(isNull(Math.E)).toBeFalsy();
      expect(isNull(Math.PI)).toBeFalsy();
      expect(isNull(Number.MIN_VALUE)).toBeFalsy();
    });

    it('should handle Functions', () => {
      expect(isNull(() => 'function')).toBeFalsy();
      expect(isNull(async () => 'function')).toBeFalsy();
    });

    it('should handle Generators', () => {
      const gen1 = (function* simpleGenerator() {
        yield 1;
      })();
      const gen2 = (async function* asyncGenerator() {
        yield 1;
      })();
      expect(isNull(gen1)).toBeFalsy();
      expect(isNull(gen2)).toBeFalsy();
    });

    it('should handle Maps', () => {
      expect(isNull(new Map())).toBeFalsy();
      expect(isNull(new Map([['key1', 123]]))).toBeFalsy();
      expect(isNull(new Map([['key1', 'value1']]))).toBeFalsy();
    });

    it('should handle Numbers', () => {
      expect(isNull(Number.POSITIVE_INFINITY)).toBeFalsy();
      expect(isNull(Number.MAX_SAFE_INTEGER)).toBeFalsy();
      expect(isNull(Number.MAX_VALUE)).toBeFalsy();
      expect(isNull(3e8)).toBeFalsy();
      expect(isNull(42)).toBeFalsy();
      expect(isNull(1)).toBeFalsy();
      expect(isNull(0)).toBeFalsy();
      expect(isNull(-0)).toBeFalsy();
      expect(isNull(-1)).toBeFalsy();
      expect(isNull(-42)).toBeFalsy();
      expect(isNull(-3e8)).toBeFalsy();
      expect(isNull(Number.MIN_SAFE_INTEGER)).toBeFalsy();
      expect(isNull(Number.NEGATIVE_INFINITY)).toBeFalsy();
      expect(isNull(Number.NaN)).toBeFalsy();
    });

    it('should handle POJOs', () => {
      expect(isNull({})).toBeFalsy();
      expect(isNull({ key: 'string' })).toBeFalsy();
      expect(isNull({ key: 123 })).toBeFalsy();
    });

    it('should handle Promise', () => {
      expect(isNull(new Promise(() => 1))).toBeFalsy();
      expect(isNull(Promise.resolve())).toBeFalsy();
    });

    it('should handle Regular Expression', () => {
      expect(isNull(/[regex]+/gi)).toBeFalsy();
      expect(isNull(new RegExp('d', 'gi'))).toBeFalsy();
    });

    it('should handle Sets', () => {
      expect(isNull(new Set())).toBeFalsy();
      expect(isNull(new Set([1, 2, 3]))).toBeFalsy();
      expect(isNull(new Set(['a', 'b', 'c']))).toBeFalsy();
    });

    it('should handle Strings', () => {
      expect(isNull('')).toBeFalsy();
      expect(isNull('a longer string')).toBeFalsy();
      expect(isNull('1000n')).toBeFalsy();
      expect(isNull('3e8')).toBeFalsy();
      expect(isNull('42')).toBeFalsy();
      expect(isNull('3.14')).toBeFalsy();
      expect(isNull('0')).toBeFalsy();
      expect(isNull('-0')).toBeFalsy();
      expect(isNull('-3.14')).toBeFalsy();
      expect(isNull('-42')).toBeFalsy();
      expect(isNull('-3e8')).toBeFalsy();
      expect(isNull('-1000n')).toBeFalsy();
    });

    it('should handle Symbols', () => {
      expect(isNull(Symbol())).toBeFalsy();
      expect(isNull(Symbol('name'))).toBeFalsy();
    });

    it('should handle This', () => {
      expect(isNull(this)).toBeFalsy();
      expect(isNull(globalThis)).toBeFalsy();
    });

    it('should handle TypedArrays', () => {
      expect(isNull(new Int8Array(2))).toBeFalsy();
      expect(isNull(new Int16Array(2))).toBeFalsy();
      expect(isNull(new Int32Array(2))).toBeFalsy();
      expect(isNull(new Uint8Array(2))).toBeFalsy();
      expect(isNull(new Uint16Array(2))).toBeFalsy();
      expect(isNull(new Uint32Array(2))).toBeFalsy();
      expect(isNull(new Uint8ClampedArray(2))).toBeFalsy();
      expect(isNull(new BigInt64Array(2))).toBeFalsy();
      expect(isNull(new BigUint64Array(2))).toBeFalsy();
      expect(isNull(new Float32Array(2))).toBeFalsy();
      expect(isNull(new Float64Array(2))).toBeFalsy();
      expect(isNull(new SharedArrayBuffer(512))).toBeFalsy();
    });

    it('should handle WeakMap/Set', () => {
      expect(isNull(new WeakMap())).toBeFalsy();
      expect(isNull(new WeakSet())).toBeFalsy();
    });
  });
});
