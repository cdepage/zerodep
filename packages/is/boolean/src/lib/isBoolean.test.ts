import { isBoolean } from './isBoolean.js';
import { describe, it, expect } from 'vitest';

describe('isBoolean', () => {
  it('should return true for boolean values', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
  });

  it('should return false for non-boolean values', () => {
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean('')).toBe(false);
    expect(isBoolean('true')).toBe(false);
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
    expect(isBoolean({})).toBe(false);
    expect(isBoolean([])).toBe(false);
  });

  it('should handle edge cases correctly', () => {
    // Test with objects that might be mistaken for booleans
    const booleanLikeObject = { valueOf: () => true };
    expect(isBoolean(booleanLikeObject)).toBe(false);

    // Test with boxed boolean objects (created using new Boolean())
    const boxedTrue = new Boolean(true);
    const boxedFalse = new Boolean(false);
    expect(isBoolean(boxedTrue)).toBe(true);
    expect(isBoolean(boxedFalse)).toBe(true);
  });

  describe('README.md examples', () => {
    it('should handle Arrays', () => {
      expect(isBoolean([])).toBeFalsy();
      expect(isBoolean([1, 2, 3])).toBeFalsy();
      expect(isBoolean(['a', 'b', 'c'])).toBeFalsy();
    });

    it('should handle BigInts', () => {
      expect(isBoolean(42n)).toBeFalsy();
      expect(isBoolean(0n)).toBeFalsy();
      expect(isBoolean(-0n)).toBeFalsy();
      expect(isBoolean(-42n)).toBeFalsy();
    });

    it('should handle Booleans', () => {
      expect(isBoolean(true)).toBeTruthy();
      expect(isBoolean(false)).toBeTruthy();
    });

    it('should handle a Class', () => {
      expect(isBoolean(class SomeClass {})).toBeFalsy();
    });

    it('should handle a Dates', () => {
      expect(isBoolean(new Date())).toBeFalsy();
      expect(isBoolean(new Date('1970-01-01T12:00:00.000Z'))).toBeFalsy();
      expect(isBoolean(new Date('2099-12-31'))).toBeFalsy();
    });

    it('should handle a Empty', () => {
      expect(isBoolean(null)).toBeFalsy();
      expect(isBoolean(undefined)).toBeFalsy();
    });

    it('should handle Errors', () => {
      expect(isBoolean(new Error('message'))).toBeFalsy();
    });

    it('should handle Floats', () => {
      expect(isBoolean(3.14)).toBeFalsy();
      expect(isBoolean(0.0)).toBeFalsy();
      expect(isBoolean(-0.0)).toBeFalsy();
      expect(isBoolean(-3.14)).toBeFalsy();
      expect(isBoolean(Math.E)).toBeFalsy();
      expect(isBoolean(Math.PI)).toBeFalsy();
      expect(isBoolean(Number.MIN_VALUE)).toBeFalsy();
    });

    it('should handle Functions', () => {
      expect(isBoolean(() => 'function')).toBeFalsy();
      expect(isBoolean(async () => 'function')).toBeFalsy();
    });

    it('should handle Generators', () => {
      const gen1 = (function* simpleGenerator() {
        yield 1;
      })();
      const gen2 = (async function* asyncGenerator() {
        yield 1;
      })();
      expect(isBoolean(gen1)).toBeFalsy();
      expect(isBoolean(gen2)).toBeFalsy();
    });

    it('should handle Generators', () => {
      expect(isBoolean(new Map())).toBeFalsy();
      expect(isBoolean(new Map([['key1', 123]]))).toBeFalsy();
      expect(isBoolean(new Map([['key1', 'value1']]))).toBeFalsy();
    });

    it('should handle Numbers', () => {
      expect(isBoolean(Number.POSITIVE_INFINITY)).toBeFalsy();
      expect(isBoolean(Number.MAX_SAFE_INTEGER)).toBeFalsy();
      expect(isBoolean(Number.MAX_VALUE)).toBeFalsy();
      expect(isBoolean(3e8)).toBeFalsy();
      expect(isBoolean(42)).toBeFalsy();
      expect(isBoolean(1)).toBeFalsy();
      expect(isBoolean(0)).toBeFalsy();
      expect(isBoolean(-0)).toBeFalsy();
      expect(isBoolean(-1)).toBeFalsy();
      expect(isBoolean(-42)).toBeFalsy();
      expect(isBoolean(-3e8)).toBeFalsy();
      expect(isBoolean(Number.MIN_SAFE_INTEGER)).toBeFalsy();
      expect(isBoolean(Number.NEGATIVE_INFINITY)).toBeFalsy();
      expect(isBoolean(Number.NaN)).toBeFalsy();
    });

    it('should handle POJOs', () => {
      expect(isBoolean({})).toBeFalsy();
      expect(isBoolean({ key: 'string' })).toBeFalsy();
      expect(isBoolean({ key: 123 })).toBeFalsy();
    });

    it('should handle Promise', () => {
      expect(isBoolean(new Promise(() => 1))).toBeFalsy();
      expect(isBoolean(Promise.resolve())).toBeFalsy();
    });

    it('should handle Regular Expression', () => {
      expect(isBoolean(/[regex]+/gi)).toBeFalsy();
      expect(isBoolean(new RegExp('d', 'gi'))).toBeFalsy();
    });

    it('should handle Sets', () => {
      expect(isBoolean(new Set())).toBeFalsy();
      expect(isBoolean(new Set([1, 2, 3]))).toBeFalsy();
      expect(isBoolean(new Set(['a', 'b', 'c']))).toBeFalsy();
    });

    it('should handle Strings', () => {
      expect(isBoolean('')).toBeFalsy();
      expect(isBoolean('a longer string')).toBeFalsy();
      expect(isBoolean('1000n')).toBeFalsy();
      expect(isBoolean('3e8')).toBeFalsy();
      expect(isBoolean('42')).toBeFalsy();
      expect(isBoolean('3.14')).toBeFalsy();
      expect(isBoolean('0')).toBeFalsy();
      expect(isBoolean('-0')).toBeFalsy();
      expect(isBoolean('-3.14')).toBeFalsy();
      expect(isBoolean('-42')).toBeFalsy();
      expect(isBoolean('-3e8')).toBeFalsy();
      expect(isBoolean('-1000n')).toBeFalsy();
    });

    it('should handle Symbols', () => {
      expect(isBoolean(Symbol())).toBeFalsy();
      expect(isBoolean(Symbol('name'))).toBeFalsy();
    });

    it('should handle This', () => {
      expect(isBoolean(this)).toBeFalsy();
      expect(isBoolean(globalThis)).toBeFalsy();
    });

    it('should handle TypedArrays', () => {
      expect(isBoolean(new Int8Array(2))).toBeFalsy();
      expect(isBoolean(new Int16Array(2))).toBeFalsy();
      expect(isBoolean(new Int32Array(2))).toBeFalsy();
      expect(isBoolean(new Uint8Array(2))).toBeFalsy();
      expect(isBoolean(new Uint16Array(2))).toBeFalsy();
      expect(isBoolean(new Uint32Array(2))).toBeFalsy();
      expect(isBoolean(new Uint8ClampedArray(2))).toBeFalsy();
      expect(isBoolean(new BigInt64Array(2))).toBeFalsy();
      expect(isBoolean(new BigUint64Array(2))).toBeFalsy();
      expect(isBoolean(new Float32Array(2))).toBeFalsy();
      expect(isBoolean(new Float64Array(2))).toBeFalsy();
      expect(isBoolean(new SharedArrayBuffer(512))).toBeFalsy();
    });

    it('should handle WeakMap/Set', () => {
      expect(isBoolean(new WeakMap())).toBeFalsy();
      expect(isBoolean(new WeakSet())).toBeFalsy();
    });
  });
});
