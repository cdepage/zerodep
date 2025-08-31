import { isWeakSet } from './isWeakSet.js';
import { describe, it, expect } from 'vitest';

describe('isWeakSet', () => {
  it('should return true for WeakSet instances', () => {
    const weakSet = new WeakSet();
    expect(isWeakSet(weakSet)).toBe(true);
  });

  it('should return false for non-WeakSet values', () => {
    expect(isWeakSet(null)).toBe(false);
    expect(isWeakSet(undefined)).toBe(false);
    expect(isWeakSet({})).toBe(false);
    expect(isWeakSet([])).toBe(false);
    expect(isWeakSet(new Set())).toBe(false);
    expect(isWeakSet(new Map())).toBe(false);
  });

  it('should handle edge cases gracefully', () => {
    // Test with a value that throws an error when Object.prototype.toString.call is called
    const problematicValue = {
      [Symbol.toStringTag]: 'problematic',
      toString: () => {
        throw new Error('Problematic value');
      },
    };
    expect(isWeakSet(problematicValue)).toBe(false);
  });

  it('should handle input validation correctly', () => {
    // Test with various primitive values
    expect(isWeakSet(true)).toBe(false);
    expect(isWeakSet(123)).toBe(false);
    expect(isWeakSet('string')).toBe(false);
    expect(isWeakSet(Symbol())).toBe(false);

    // Test with function
    expect(isWeakSet(() => 1)).toBe(false);
  });

  describe('README.md examples', () => {
    it('should handle Arrays', () => {
      expect(isWeakSet([])).toBeFalsy();
      expect(isWeakSet([1, 2, 3])).toBeFalsy();
      expect(isWeakSet(['a', 'b', 'c'])).toBeFalsy();
    });

    it('should handle BigInts', () => {
      expect(isWeakSet(42n)).toBeFalsy();
      expect(isWeakSet(0n)).toBeFalsy();
      expect(isWeakSet(-0n)).toBeFalsy();
      expect(isWeakSet(-42n)).toBeFalsy();
    });

    it('should handle Booleans', () => {
      expect(isWeakSet(true)).toBeFalsy();
      expect(isWeakSet(false)).toBeFalsy();
    });

    it('should handle a Class', () => {
      expect(isWeakSet(class SomeClass {})).toBeFalsy();
    });

    it('should handle a Dates', () => {
      expect(isWeakSet(new Date())).toBeFalsy();
      expect(isWeakSet(new Date('1970-01-01T12:00:00.000Z'))).toBeFalsy();
      expect(isWeakSet(new Date('2099-12-31'))).toBeFalsy();
    });

    it('should handle a Empty', () => {
      expect(isWeakSet(null)).toBeFalsy();
      expect(isWeakSet(undefined)).toBeFalsy();
    });

    it('should handle Errors', () => {
      expect(isWeakSet(new Error('message'))).toBeFalsy();
    });

    it('should handle Floats', () => {
      expect(isWeakSet(3.14)).toBeFalsy();
      expect(isWeakSet(0.0)).toBeFalsy();
      expect(isWeakSet(-0.0)).toBeFalsy();
      expect(isWeakSet(-3.14)).toBeFalsy();
      expect(isWeakSet(Math.E)).toBeFalsy();
      expect(isWeakSet(Math.PI)).toBeFalsy();
      expect(isWeakSet(Number.MIN_VALUE)).toBeFalsy();
    });

    it('should handle Functions', () => {
      expect(isWeakSet(() => 'function')).toBeFalsy();
      expect(isWeakSet(async () => 'function')).toBeFalsy();
    });

    it('should handle Generators', () => {
      const gen1 = (function* simpleGenerator() {
        yield 1;
      })();
      const gen2 = (async function* asyncGenerator() {
        yield 1;
      })();
      expect(isWeakSet(gen1)).toBeFalsy();
      expect(isWeakSet(gen2)).toBeFalsy();
    });

    it('should handle Maps', () => {
      expect(isWeakSet(new Map())).toBeFalsy();
      expect(isWeakSet(new Map([['key1', 123]]))).toBeFalsy();
      expect(isWeakSet(new Map([['key1', 'value1']]))).toBeFalsy();
    });

    it('should handle Numbers', () => {
      expect(isWeakSet(Number.POSITIVE_INFINITY)).toBeFalsy();
      expect(isWeakSet(Number.MAX_SAFE_INTEGER)).toBeFalsy();
      expect(isWeakSet(Number.MAX_VALUE)).toBeFalsy();
      expect(isWeakSet(3e8)).toBeFalsy();
      expect(isWeakSet(42)).toBeFalsy();
      expect(isWeakSet(1)).toBeFalsy();
      expect(isWeakSet(0)).toBeFalsy();
      expect(isWeakSet(-0)).toBeFalsy();
      expect(isWeakSet(-1)).toBeFalsy();
      expect(isWeakSet(-42)).toBeFalsy();
      expect(isWeakSet(-3e8)).toBeFalsy();
      expect(isWeakSet(Number.MIN_SAFE_INTEGER)).toBeFalsy();
      expect(isWeakSet(Number.NEGATIVE_INFINITY)).toBeFalsy();
      expect(isWeakSet(Number.NaN)).toBeFalsy();
    });

    it('should handle POJOs', () => {
      expect(isWeakSet({})).toBeFalsy();
      expect(isWeakSet({ key: 'string' })).toBeFalsy();
      expect(isWeakSet({ key: 123 })).toBeFalsy();
    });

    it('should handle Promise', () => {
      expect(isWeakSet(new Promise(() => 1))).toBeFalsy();
      expect(isWeakSet(Promise.resolve())).toBeFalsy();
    });

    it('should handle Regular Expression', () => {
      expect(isWeakSet(/[regex]+/gi)).toBeFalsy();
      expect(isWeakSet(new RegExp('d', 'gi'))).toBeFalsy();
    });

    it('should handle Sets', () => {
      expect(isWeakSet(new Set())).toBeFalsy();
      expect(isWeakSet(new Set([1, 2, 3]))).toBeFalsy();
      expect(isWeakSet(new Set(['a', 'b', 'c']))).toBeFalsy();
    });

    it('should handle Strings', () => {
      expect(isWeakSet('')).toBeFalsy();
      expect(isWeakSet('a longer string')).toBeFalsy();
      expect(isWeakSet('1000n')).toBeFalsy();
      expect(isWeakSet('3e8')).toBeFalsy();
      expect(isWeakSet('42')).toBeFalsy();
      expect(isWeakSet('3.14')).toBeFalsy();
      expect(isWeakSet('0')).toBeFalsy();
      expect(isWeakSet('-0')).toBeFalsy();
      expect(isWeakSet('-3.14')).toBeFalsy();
      expect(isWeakSet('-42')).toBeFalsy();
      expect(isWeakSet('-3e8')).toBeFalsy();
      expect(isWeakSet('-1000n')).toBeFalsy();
    });

    it('should handle Symbols', () => {
      expect(isWeakSet(Symbol())).toBeFalsy();
      expect(isWeakSet(Symbol('name'))).toBeFalsy();
    });

    it('should handle This', () => {
      expect(isWeakSet(this)).toBeFalsy();
      expect(isWeakSet(globalThis)).toBeFalsy();
    });

    it('should handle TypedArrays', () => {
      expect(isWeakSet(new Int8Array(2))).toBeFalsy();
      expect(isWeakSet(new Int16Array(2))).toBeFalsy();
      expect(isWeakSet(new Int32Array(2))).toBeFalsy();
      expect(isWeakSet(new Uint8Array(2))).toBeFalsy();
      expect(isWeakSet(new Uint16Array(2))).toBeFalsy();
      expect(isWeakSet(new Uint32Array(2))).toBeFalsy();
      expect(isWeakSet(new Uint8ClampedArray(2))).toBeFalsy();
      expect(isWeakSet(new BigInt64Array(2))).toBeFalsy();
      expect(isWeakSet(new BigUint64Array(2))).toBeFalsy();
      expect(isWeakSet(new Float32Array(2))).toBeFalsy();
      expect(isWeakSet(new Float64Array(2))).toBeFalsy();
      expect(isWeakSet(new SharedArrayBuffer(512))).toBeFalsy();
    });

    it('should handle WeakMap/Set', () => {
      expect(isWeakSet(new WeakMap())).toBeFalsy();
      expect(isWeakSet(new WeakSet())).toBeTruthy();
    });
  });
});
