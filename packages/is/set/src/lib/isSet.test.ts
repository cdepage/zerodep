import { isSet } from './isSet.js';
import { describe, it, expect } from 'vitest';

describe('isSet', () => {
  it('should return true for a Set object', () => {
    const set = new Set();
    expect(isSet(set)).toBe(true);
  });

  it('should return false for non-Set objects', () => {
    expect(isSet({})).toBe(false);
    expect(isSet([])).toBe(false);
    expect(isSet(null)).toBe(false);
    expect(isSet(undefined)).toBe(false);
    expect(isSet(123)).toBe(false);
    expect(isSet('string')).toBe(false);
  });

  it('should return false for empty Set objects', () => {
    const set = new Set();
    expect(isSet(set)).toBe(true);
  });

  it('should return true for Sets with elements', () => {
    const set = new Set([1, 2, 3]);
    expect(isSet(set)).toBe(true);
  });

  it('should handle edge cases correctly', () => {
    // Test with a Set containing various types of values
    const mixedSet = new Set([1, 'string', true, {}, []]);
    expect(isSet(mixedSet)).toBe(true);

    // Test with a Set containing another Set
    const nestedSet = new Set();
    nestedSet.add(new Set());
    expect(isSet(nestedSet)).toBe(true);
  });

  it('should handle input validation correctly', () => {
    // Test with undefined and null inputs
    expect(isSet(undefined)).toBe(false);
    expect(isSet(null)).toBe(false);

    // Test with primitive values
    expect(isSet(123)).toBe(false);
    expect(isSet('string')).toBe(false);
    expect(isSet(true)).toBe(false);
  });

  describe('README.md examples', () => {
    it('should handle Arrays', () => {
      expect(isSet([])).toBeFalsy();
      expect(isSet([1, 2, 3])).toBeFalsy();
      expect(isSet(['a', 'b', 'c'])).toBeFalsy();
    });

    it('should handle BigInts', () => {
      expect(isSet(42n)).toBeFalsy();
      expect(isSet(0n)).toBeFalsy();
      expect(isSet(-0n)).toBeFalsy();
      expect(isSet(-42n)).toBeFalsy();
    });

    it('should handle Booleans', () => {
      expect(isSet(true)).toBeFalsy();
      expect(isSet(false)).toBeFalsy();
    });

    it('should handle a Class', () => {
      expect(isSet(class SomeClass {})).toBeFalsy();
    });

    it('should handle a Dates', () => {
      expect(isSet(new Date())).toBeFalsy();
      expect(isSet(new Date('1970-01-01T12:00:00.000Z'))).toBeFalsy();
      expect(isSet(new Date('2099-12-31'))).toBeFalsy();
    });

    it('should handle a Empty', () => {
      expect(isSet(null)).toBeFalsy();
      expect(isSet(undefined)).toBeFalsy();
    });

    it('should handle Errors', () => {
      expect(isSet(new Error('message'))).toBeFalsy();
    });

    it('should handle Floats', () => {
      expect(isSet(3.14)).toBeFalsy();
      expect(isSet(0.0)).toBeFalsy();
      expect(isSet(-0.0)).toBeFalsy();
      expect(isSet(-3.14)).toBeFalsy();
      expect(isSet(Math.E)).toBeFalsy();
      expect(isSet(Math.PI)).toBeFalsy();
      expect(isSet(Number.MIN_VALUE)).toBeFalsy();
    });

    it('should handle Functions', () => {
      expect(isSet(() => 'function')).toBeFalsy();
      expect(isSet(async () => 'function')).toBeFalsy();
    });

    it('should handle Generators', () => {
      const gen1 = (function* simpleGenerator() {
        yield 1;
      })();
      const gen2 = (async function* asyncGenerator() {
        yield 1;
      })();
      expect(isSet(gen1)).toBeFalsy();
      expect(isSet(gen2)).toBeFalsy();
    });

    it('should handle Maps', () => {
      expect(isSet(new Map())).toBeFalsy();
      expect(isSet(new Map([['key1', 123]]))).toBeFalsy();
      expect(isSet(new Map([['key1', 'value1']]))).toBeFalsy();
    });

    it('should handle Numbers', () => {
      expect(isSet(Number.POSITIVE_INFINITY)).toBeFalsy();
      expect(isSet(Number.MAX_SAFE_INTEGER)).toBeFalsy();
      expect(isSet(Number.MAX_VALUE)).toBeFalsy();
      expect(isSet(3e8)).toBeFalsy();
      expect(isSet(42)).toBeFalsy();
      expect(isSet(1)).toBeFalsy();
      expect(isSet(0)).toBeFalsy();
      expect(isSet(-0)).toBeFalsy();
      expect(isSet(-1)).toBeFalsy();
      expect(isSet(-42)).toBeFalsy();
      expect(isSet(-3e8)).toBeFalsy();
      expect(isSet(Number.MIN_SAFE_INTEGER)).toBeFalsy();
      expect(isSet(Number.NEGATIVE_INFINITY)).toBeFalsy();
      expect(isSet(Number.NaN)).toBeFalsy();
    });

    it('should handle POJOs', () => {
      expect(isSet({})).toBeFalsy();
      expect(isSet({ key: 'string' })).toBeFalsy();
      expect(isSet({ key: 123 })).toBeFalsy();
    });

    it('should handle Promise', () => {
      expect(isSet(new Promise(() => 1))).toBeFalsy();
      expect(isSet(Promise.resolve())).toBeFalsy();
    });

    it('should handle Regular Expression', () => {
      expect(isSet(/[regex]+/gi)).toBeFalsy();
      expect(isSet(new RegExp('d', 'gi'))).toBeFalsy();
    });

    it('should handle Sets', () => {
      expect(isSet(new Set())).toBeTruthy();
      expect(isSet(new Set([1, 2, 3]))).toBeTruthy();
      expect(isSet(new Set(['a', 'b', 'c']))).toBeTruthy();
    });

    it('should handle Strings', () => {
      expect(isSet('')).toBeFalsy();
      expect(isSet('a longer string')).toBeFalsy();
      expect(isSet('1000n')).toBeFalsy();
      expect(isSet('3e8')).toBeFalsy();
      expect(isSet('42')).toBeFalsy();
      expect(isSet('3.14')).toBeFalsy();
      expect(isSet('0')).toBeFalsy();
      expect(isSet('-0')).toBeFalsy();
      expect(isSet('-3.14')).toBeFalsy();
      expect(isSet('-42')).toBeFalsy();
      expect(isSet('-3e8')).toBeFalsy();
      expect(isSet('-1000n')).toBeFalsy();
    });

    it('should handle Symbols', () => {
      expect(isSet(Symbol())).toBeFalsy();
      expect(isSet(Symbol('name'))).toBeFalsy();
    });

    it('should handle This', () => {
      expect(isSet(this)).toBeFalsy();
      expect(isSet(globalThis)).toBeFalsy();
    });

    it('should handle TypedArrays', () => {
      expect(isSet(new Int8Array(2))).toBeFalsy();
      expect(isSet(new Int16Array(2))).toBeFalsy();
      expect(isSet(new Int32Array(2))).toBeFalsy();
      expect(isSet(new Uint8Array(2))).toBeFalsy();
      expect(isSet(new Uint16Array(2))).toBeFalsy();
      expect(isSet(new Uint32Array(2))).toBeFalsy();
      expect(isSet(new Uint8ClampedArray(2))).toBeFalsy();
      expect(isSet(new BigInt64Array(2))).toBeFalsy();
      expect(isSet(new BigUint64Array(2))).toBeFalsy();
      expect(isSet(new Float32Array(2))).toBeFalsy();
      expect(isSet(new Float64Array(2))).toBeFalsy();
      expect(isSet(new SharedArrayBuffer(512))).toBeFalsy();
    });

    it('should handle WeakMap/Set', () => {
      expect(isSet(new WeakMap())).toBeFalsy();
      expect(isSet(new WeakSet())).toBeFalsy();
    });
  });
});
