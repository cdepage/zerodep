import { isSymbol } from './isSymbol.js';
import { describe, it, expect } from 'vitest';

describe('isSymbol', () => {
  it('should return true for a Symbol value', () => {
    const symbol = Symbol('test');
    expect(isSymbol(symbol)).toBe(true);
  });

  it('should return false for non-Symbol values', () => {
    expect(isSymbol(null)).toBe(false);
    expect(isSymbol(undefined)).toBe(false);
    expect(isSymbol(42)).toBe(false);
    expect(isSymbol('string')).toBe(false);
    expect(isSymbol(true)).toBe(false);
    expect(isSymbol({})).toBe(false);
    expect(isSymbol([])).toBe(false);
  });

  it('should handle edge cases correctly', () => {
    // Edge case: Symbol.prototype
    expect(isSymbol(Symbol.prototype)).toBe(true);

    // Edge case: Object with toString overridden
    const obj = { toString: () => '[object Symbol]' };
    expect(isSymbol(obj)).toBe(false);
  });

  it('should validate input types correctly', () => {
    // Input validation for various primitive and object types
    expect(isSymbol(NaN)).toBe(false);
    expect(isSymbol(Infinity)).toBe(false);
    expect(isSymbol(new Date())).toBe(false);
    expect(isSymbol(/regex/)).toBe(false);
  });

  describe('README.md examples', () => {
    it('should handle Arrays', () => {
      expect(isSymbol([])).toBeFalsy();
      expect(isSymbol([1, 2, 3])).toBeFalsy();
      expect(isSymbol(['a', 'b', 'c'])).toBeFalsy();
    });

    it('should handle BigInts', () => {
      expect(isSymbol(42n)).toBeFalsy();
      expect(isSymbol(0n)).toBeFalsy();
      expect(isSymbol(-0n)).toBeFalsy();
      expect(isSymbol(-42n)).toBeFalsy();
    });

    it('should handle Booleans', () => {
      expect(isSymbol(true)).toBeFalsy();
      expect(isSymbol(false)).toBeFalsy();
    });

    it('should handle a Class', () => {
      expect(isSymbol(class SomeClass {})).toBeFalsy();
    });

    it('should handle a Dates', () => {
      expect(isSymbol(new Date())).toBeFalsy();
      expect(isSymbol(new Date('1970-01-01T12:00:00.000Z'))).toBeFalsy();
      expect(isSymbol(new Date('2099-12-31'))).toBeFalsy();
    });

    it('should handle a Empty', () => {
      expect(isSymbol(null)).toBeFalsy();
      expect(isSymbol(undefined)).toBeFalsy();
    });

    it('should handle Errors', () => {
      expect(isSymbol(new Error('message'))).toBeFalsy();
    });

    it('should handle Floats', () => {
      expect(isSymbol(3.14)).toBeFalsy();
      expect(isSymbol(0.0)).toBeFalsy();
      expect(isSymbol(-0.0)).toBeFalsy();
      expect(isSymbol(-3.14)).toBeFalsy();
      expect(isSymbol(Math.E)).toBeFalsy();
      expect(isSymbol(Math.PI)).toBeFalsy();
      expect(isSymbol(Number.MIN_VALUE)).toBeFalsy();
    });

    it('should handle Functions', () => {
      expect(isSymbol(() => 'function')).toBeFalsy();
      expect(isSymbol(async () => 'function')).toBeFalsy();
    });

    it('should handle Generators', () => {
      const gen1 = (function* simpleGenerator() {
        yield 1;
      })();
      const gen2 = (async function* asyncGenerator() {
        yield 1;
      })();
      expect(isSymbol(gen1)).toBeFalsy();
      expect(isSymbol(gen2)).toBeFalsy();
    });

    it('should handle Maps', () => {
      expect(isSymbol(new Map())).toBeFalsy();
      expect(isSymbol(new Map([['key1', 123]]))).toBeFalsy();
      expect(isSymbol(new Map([['key1', 'value1']]))).toBeFalsy();
    });

    it('should handle Numbers', () => {
      expect(isSymbol(Number.POSITIVE_INFINITY)).toBeFalsy();
      expect(isSymbol(Number.MAX_SAFE_INTEGER)).toBeFalsy();
      expect(isSymbol(Number.MAX_VALUE)).toBeFalsy();
      expect(isSymbol(3e8)).toBeFalsy();
      expect(isSymbol(42)).toBeFalsy();
      expect(isSymbol(1)).toBeFalsy();
      expect(isSymbol(0)).toBeFalsy();
      expect(isSymbol(-0)).toBeFalsy();
      expect(isSymbol(-1)).toBeFalsy();
      expect(isSymbol(-42)).toBeFalsy();
      expect(isSymbol(-3e8)).toBeFalsy();
      expect(isSymbol(Number.MIN_SAFE_INTEGER)).toBeFalsy();
      expect(isSymbol(Number.NEGATIVE_INFINITY)).toBeFalsy();
      expect(isSymbol(Number.NaN)).toBeFalsy();
    });

    it('should handle POJOs', () => {
      expect(isSymbol({})).toBeFalsy();
      expect(isSymbol({ key: 'string' })).toBeFalsy();
      expect(isSymbol({ key: 123 })).toBeFalsy();
    });

    it('should handle Promise', () => {
      expect(isSymbol(new Promise(() => 1))).toBeFalsy();
      expect(isSymbol(Promise.resolve())).toBeFalsy();
    });

    it('should handle Regular Expression', () => {
      expect(isSymbol(/[regex]+/gi)).toBeFalsy();
      expect(isSymbol(new RegExp('d', 'gi'))).toBeFalsy();
    });

    it('should handle Sets', () => {
      expect(isSymbol(new Set())).toBeFalsy();
      expect(isSymbol(new Set([1, 2, 3]))).toBeFalsy();
      expect(isSymbol(new Set(['a', 'b', 'c']))).toBeFalsy();
    });

    it('should handle Strings', () => {
      expect(isSymbol('')).toBeFalsy();
      expect(isSymbol('a longer string')).toBeFalsy();
      expect(isSymbol('1000n')).toBeFalsy();
      expect(isSymbol('3e8')).toBeFalsy();
      expect(isSymbol('42')).toBeFalsy();
      expect(isSymbol('3.14')).toBeFalsy();
      expect(isSymbol('0')).toBeFalsy();
      expect(isSymbol('-0')).toBeFalsy();
      expect(isSymbol('-3.14')).toBeFalsy();
      expect(isSymbol('-42')).toBeFalsy();
      expect(isSymbol('-3e8')).toBeFalsy();
      expect(isSymbol('-1000n')).toBeFalsy();
    });

    it('should handle Symbols', () => {
      expect(isSymbol(Symbol())).toBeTruthy();
      expect(isSymbol(Symbol('name'))).toBeTruthy();
    });

    it('should handle This', () => {
      expect(isSymbol(this)).toBeFalsy();
      expect(isSymbol(globalThis)).toBeFalsy();
    });

    it('should handle TypedArrays', () => {
      expect(isSymbol(new Int8Array(2))).toBeFalsy();
      expect(isSymbol(new Int16Array(2))).toBeFalsy();
      expect(isSymbol(new Int32Array(2))).toBeFalsy();
      expect(isSymbol(new Uint8Array(2))).toBeFalsy();
      expect(isSymbol(new Uint16Array(2))).toBeFalsy();
      expect(isSymbol(new Uint32Array(2))).toBeFalsy();
      expect(isSymbol(new Uint8ClampedArray(2))).toBeFalsy();
      expect(isSymbol(new BigInt64Array(2))).toBeFalsy();
      expect(isSymbol(new BigUint64Array(2))).toBeFalsy();
      expect(isSymbol(new Float32Array(2))).toBeFalsy();
      expect(isSymbol(new Float64Array(2))).toBeFalsy();
      expect(isSymbol(new SharedArrayBuffer(512))).toBeFalsy();
    });

    it('should handle WeakMap/Set', () => {
      expect(isSymbol(new WeakMap())).toBeFalsy();
      expect(isSymbol(new WeakSet())).toBeFalsy();
    });
  });
});
