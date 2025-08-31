import { isFloat } from './isFloat.js';
import { describe, it, expect } from 'vitest';

describe('isFloat', () => {
  // Test main functionalities
  it('should return true for float numbers', () => {
    expect(isFloat(3.14)).toBe(true);
    expect(isFloat(-2.718)).toBe(true);
  });

  it('should return false for integer numbers', () => {
    expect(isFloat(42)).toBe(false);
    expect(isFloat(-99)).toBe(false);
  });

  // Test edge cases
  it('should handle zero correctly', () => {
    expect(isFloat(0)).toBe(true); // Zero is considered a float in this context
  });

  it('should return false for NaN and Infinity', () => {
    expect(isFloat(NaN)).toBe(false);
    expect(isFloat(Infinity)).toBe(false);
    expect(isFloat(-Infinity)).toBe(false);
  });

  // Test input validation
  it('should return false for non-number inputs', () => {
    expect(isFloat(null)).toBe(false);
    expect(isFloat(undefined)).toBe(false);
    expect(isFloat('string')).toBe(false);
    expect(isFloat(true)).toBe(false);
    expect(isFloat({})).toBe(false);
    expect(isFloat([])).toBe(false);
  });

  // Test logical correctness
  it('should handle new Number() constructs correctly', () => {
    expect(isFloat(new Number(3.14))).toBe(false); // new Number() creates an object, not a primitive number
    expect(isFloat(new Number(42))).toBe(false);
  });

  describe('README.md examples', () => {
    it('should handle Arrays', () => {
      expect(isFloat([])).toBeFalsy();
      expect(isFloat([1, 2, 3])).toBeFalsy();
      expect(isFloat(['a', 'b', 'c'])).toBeFalsy();
    });

    it('should handle BigInts', () => {
      expect(isFloat(42n)).toBeFalsy();
      expect(isFloat(0n)).toBeFalsy();
      expect(isFloat(-0n)).toBeFalsy();
      expect(isFloat(-42n)).toBeFalsy();
    });

    it('should handle Booleans', () => {
      expect(isFloat(true)).toBeFalsy();
      expect(isFloat(false)).toBeFalsy();
    });

    it('should handle a Class', () => {
      expect(isFloat(class SomeClass {})).toBeFalsy();
    });

    it('should handle a Dates', () => {
      expect(isFloat(new Date())).toBeFalsy();
      expect(isFloat(new Date('1970-01-01T12:00:00.000Z'))).toBeFalsy();
      expect(isFloat(new Date('2099-12-31'))).toBeFalsy();
    });

    it('should handle a Empty', () => {
      expect(isFloat(null)).toBeFalsy();
      expect(isFloat(undefined)).toBeFalsy();
    });

    it('should handle Errors', () => {
      expect(isFloat(new Error('message'))).toBeFalsy();
    });

    it('should handle Floats', () => {
      expect(isFloat(3.14)).toBeTruthy();
      expect(isFloat(0.0)).toBeTruthy();
      expect(isFloat(-0.0)).toBeTruthy();
      expect(isFloat(-3.14)).toBeTruthy();
      expect(isFloat(Math.E)).toBeTruthy();
      expect(isFloat(Math.PI)).toBeTruthy();
      expect(isFloat(Number.MIN_VALUE)).toBeTruthy();
    });

    it('should handle Functions', () => {
      expect(isFloat(() => 'function')).toBeFalsy();
      expect(isFloat(async () => 'function')).toBeFalsy();
    });

    it('should handle Generators', () => {
      const gen1 = (function* simpleGenerator() {
        yield 1;
      })();
      const gen2 = (async function* asyncGenerator() {
        yield 1;
      })();
      expect(isFloat(gen1)).toBeFalsy();
      expect(isFloat(gen2)).toBeFalsy();
    });

    it('should handle Generators', () => {
      expect(isFloat(new Map())).toBeFalsy();
      expect(isFloat(new Map([['key1', 123]]))).toBeFalsy();
      expect(isFloat(new Map([['key1', 'value1']]))).toBeFalsy();
    });

    it('should handle Numbers', () => {
      expect(isFloat(Number.POSITIVE_INFINITY)).toBeFalsy();
      expect(isFloat(Number.MAX_SAFE_INTEGER)).toBeFalsy();
      expect(isFloat(Number.MAX_VALUE)).toBeFalsy();
      expect(isFloat(3e8)).toBeFalsy();
      expect(isFloat(42)).toBeFalsy();
      expect(isFloat(1)).toBeFalsy();
      expect(isFloat(0)).toBeTruthy();
      expect(isFloat(-0)).toBeTruthy();
      expect(isFloat(-1)).toBeFalsy();
      expect(isFloat(-42)).toBeFalsy();
      expect(isFloat(-3e8)).toBeFalsy();
      expect(isFloat(Number.MIN_SAFE_INTEGER)).toBeFalsy();
      expect(isFloat(Number.NEGATIVE_INFINITY)).toBeFalsy();
      expect(isFloat(Number.NaN)).toBeFalsy();
    });

    it('should handle POJOs', () => {
      expect(isFloat({})).toBeFalsy();
      expect(isFloat({ key: 'string' })).toBeFalsy();
      expect(isFloat({ key: 123 })).toBeFalsy();
    });

    it('should handle Promise', () => {
      expect(isFloat(new Promise(() => 1))).toBeFalsy();
      expect(isFloat(Promise.resolve())).toBeFalsy();
    });

    it('should handle Regular Expression', () => {
      expect(isFloat(/[regex]+/gi)).toBeFalsy();
      expect(isFloat(new RegExp('d', 'gi'))).toBeFalsy();
    });

    it('should handle Sets', () => {
      expect(isFloat(new Set())).toBeFalsy();
      expect(isFloat(new Set([1, 2, 3]))).toBeFalsy();
      expect(isFloat(new Set(['a', 'b', 'c']))).toBeFalsy();
    });

    it('should handle Strings', () => {
      expect(isFloat('')).toBeFalsy();
      expect(isFloat('a longer string')).toBeFalsy();
      expect(isFloat('1000n')).toBeFalsy();
      expect(isFloat('3e8')).toBeFalsy();
      expect(isFloat('42')).toBeFalsy();
      expect(isFloat('3.14')).toBeFalsy();
      expect(isFloat('0')).toBeFalsy();
      expect(isFloat('-0')).toBeFalsy();
      expect(isFloat('-3.14')).toBeFalsy();
      expect(isFloat('-42')).toBeFalsy();
      expect(isFloat('-3e8')).toBeFalsy();
      expect(isFloat('-1000n')).toBeFalsy();
    });

    it('should handle Symbols', () => {
      expect(isFloat(Symbol())).toBeFalsy();
      expect(isFloat(Symbol('name'))).toBeFalsy();
    });

    it('should handle This', () => {
      expect(isFloat(this)).toBeFalsy();
      expect(isFloat(globalThis)).toBeFalsy();
    });

    it('should handle TypedArrays', () => {
      expect(isFloat(new Int8Array(2))).toBeFalsy();
      expect(isFloat(new Int16Array(2))).toBeFalsy();
      expect(isFloat(new Int32Array(2))).toBeFalsy();
      expect(isFloat(new Uint8Array(2))).toBeFalsy();
      expect(isFloat(new Uint16Array(2))).toBeFalsy();
      expect(isFloat(new Uint32Array(2))).toBeFalsy();
      expect(isFloat(new Uint8ClampedArray(2))).toBeFalsy();
      expect(isFloat(new BigInt64Array(2))).toBeFalsy();
      expect(isFloat(new BigUint64Array(2))).toBeFalsy();
      expect(isFloat(new Float32Array(2))).toBeFalsy();
      expect(isFloat(new Float64Array(2))).toBeFalsy();
      expect(isFloat(new SharedArrayBuffer(512))).toBeFalsy();
    });

    it('should handle WeakMap/Set', () => {
      expect(isFloat(new WeakMap())).toBeFalsy();
      expect(isFloat(new WeakSet())).toBeFalsy();
    });
  });
});
