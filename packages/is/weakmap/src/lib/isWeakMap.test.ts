import { isWeakMap } from './isWeakMap.js';
import { describe, it, expect } from 'vitest';

describe('isWeakMap', () => {
  it('should return true for a WeakMap instance', () => {
    const weakmap = new WeakMap();
    expect(isWeakMap(weakmap)).toBe(true);
  });

  it('should return false for non-WeakMap objects', () => {
    expect(isWeakMap({})).toBe(false);
    expect(isWeakMap([])).toBe(false);
    expect(isWeakMap(new Map())).toBe(false);
    expect(isWeakMap(null)).toBe(false);
    expect(isWeakMap(undefined)).toBe(false);
  });

  it('should return false for primitive values', () => {
    expect(isWeakMap(123)).toBe(false);
    expect(isWeakMap('string')).toBe(false);
    expect(isWeakMap(true)).toBe(false);
    expect(isWeakMap(Symbol())).toBe(false);
  });

  it('should handle edge cases gracefully', () => {
    // Test with objects that might throw errors on toString
    const problematicObject = Object.defineProperty({}, 'toString', {
      value: () => {
        throw new Error();
      },
      configurable: true,
    });
    expect(isWeakMap(problematicObject)).toBe(false);
  });

  it('should return false for non-object values that might cause exceptions', () => {
    const problematicValue = Object.create(null, {
      toString: {
        value() {
          throw new Error();
        },
        configurable: true,
      },
    });
    expect(isWeakMap(problematicValue)).toBe(false);
  });

  it('should return false for undefined and null values', () => {
    expect(isWeakMap(undefined)).toBe(false);
    expect(isWeakMap(null)).toBe(false);
  });

  describe('README.md examples', () => {
    it('should handle Arrays', () => {
      expect(isWeakMap([])).toBeFalsy();
      expect(isWeakMap([1, 2, 3])).toBeFalsy();
      expect(isWeakMap(['a', 'b', 'c'])).toBeFalsy();
    });

    it('should handle BigInts', () => {
      expect(isWeakMap(42n)).toBeFalsy();
      expect(isWeakMap(0n)).toBeFalsy();
      expect(isWeakMap(-0n)).toBeFalsy();
      expect(isWeakMap(-42n)).toBeFalsy();
    });

    it('should handle Booleans', () => {
      expect(isWeakMap(true)).toBeFalsy();
      expect(isWeakMap(false)).toBeFalsy();
    });

    it('should handle a Class', () => {
      expect(isWeakMap(class SomeClass {})).toBeFalsy();
    });

    it('should handle a Dates', () => {
      expect(isWeakMap(new Date())).toBeFalsy();
      expect(isWeakMap(new Date('1970-01-01T12:00:00.000Z'))).toBeFalsy();
      expect(isWeakMap(new Date('2099-12-31'))).toBeFalsy();
    });

    it('should handle a Empty', () => {
      expect(isWeakMap(null)).toBeFalsy();
      expect(isWeakMap(undefined)).toBeFalsy();
    });

    it('should handle Errors', () => {
      expect(isWeakMap(new Error('message'))).toBeFalsy();
    });

    it('should handle Floats', () => {
      expect(isWeakMap(3.14)).toBeFalsy();
      expect(isWeakMap(0.0)).toBeFalsy();
      expect(isWeakMap(-0.0)).toBeFalsy();
      expect(isWeakMap(-3.14)).toBeFalsy();
      expect(isWeakMap(Math.E)).toBeFalsy();
      expect(isWeakMap(Math.PI)).toBeFalsy();
      expect(isWeakMap(Number.MIN_VALUE)).toBeFalsy();
    });

    it('should handle Functions', () => {
      expect(isWeakMap(() => 'function')).toBeFalsy();
      expect(isWeakMap(async () => 'function')).toBeFalsy();
    });

    it('should handle Generators', () => {
      const gen1 = (function* simpleGenerator() {
        yield 1;
      })();
      const gen2 = (async function* asyncGenerator() {
        yield 1;
      })();
      expect(isWeakMap(gen1)).toBeFalsy();
      expect(isWeakMap(gen2)).toBeFalsy();
    });

    it('should handle Maps', () => {
      expect(isWeakMap(new Map())).toBeFalsy();
      expect(isWeakMap(new Map([['key1', 123]]))).toBeFalsy();
      expect(isWeakMap(new Map([['key1', 'value1']]))).toBeFalsy();
    });

    it('should handle Numbers', () => {
      expect(isWeakMap(Number.POSITIVE_INFINITY)).toBeFalsy();
      expect(isWeakMap(Number.MAX_SAFE_INTEGER)).toBeFalsy();
      expect(isWeakMap(Number.MAX_VALUE)).toBeFalsy();
      expect(isWeakMap(3e8)).toBeFalsy();
      expect(isWeakMap(42)).toBeFalsy();
      expect(isWeakMap(1)).toBeFalsy();
      expect(isWeakMap(0)).toBeFalsy();
      expect(isWeakMap(-0)).toBeFalsy();
      expect(isWeakMap(-1)).toBeFalsy();
      expect(isWeakMap(-42)).toBeFalsy();
      expect(isWeakMap(-3e8)).toBeFalsy();
      expect(isWeakMap(Number.MIN_SAFE_INTEGER)).toBeFalsy();
      expect(isWeakMap(Number.NEGATIVE_INFINITY)).toBeFalsy();
      expect(isWeakMap(Number.NaN)).toBeFalsy();
    });

    it('should handle POJOs', () => {
      expect(isWeakMap({})).toBeFalsy();
      expect(isWeakMap({ key: 'string' })).toBeFalsy();
      expect(isWeakMap({ key: 123 })).toBeFalsy();
    });

    it('should handle Promise', () => {
      expect(isWeakMap(new Promise(() => 1))).toBeFalsy();
      expect(isWeakMap(Promise.resolve())).toBeFalsy();
    });

    it('should handle Regular Expression', () => {
      expect(isWeakMap(/[regex]+/gi)).toBeFalsy();
      expect(isWeakMap(new RegExp('d', 'gi'))).toBeFalsy();
    });

    it('should handle Sets', () => {
      expect(isWeakMap(new Set())).toBeFalsy();
      expect(isWeakMap(new Set([1, 2, 3]))).toBeFalsy();
      expect(isWeakMap(new Set(['a', 'b', 'c']))).toBeFalsy();
    });

    it('should handle Strings', () => {
      expect(isWeakMap('')).toBeFalsy();
      expect(isWeakMap('a longer string')).toBeFalsy();
      expect(isWeakMap('1000n')).toBeFalsy();
      expect(isWeakMap('3e8')).toBeFalsy();
      expect(isWeakMap('42')).toBeFalsy();
      expect(isWeakMap('3.14')).toBeFalsy();
      expect(isWeakMap('0')).toBeFalsy();
      expect(isWeakMap('-0')).toBeFalsy();
      expect(isWeakMap('-3.14')).toBeFalsy();
      expect(isWeakMap('-42')).toBeFalsy();
      expect(isWeakMap('-3e8')).toBeFalsy();
      expect(isWeakMap('-1000n')).toBeFalsy();
    });

    it('should handle Symbols', () => {
      expect(isWeakMap(Symbol())).toBeFalsy();
      expect(isWeakMap(Symbol('name'))).toBeFalsy();
    });

    it('should handle This', () => {
      expect(isWeakMap(this)).toBeFalsy();
      expect(isWeakMap(globalThis)).toBeFalsy();
    });

    it('should handle TypedArrays', () => {
      expect(isWeakMap(new Int8Array(2))).toBeFalsy();
      expect(isWeakMap(new Int16Array(2))).toBeFalsy();
      expect(isWeakMap(new Int32Array(2))).toBeFalsy();
      expect(isWeakMap(new Uint8Array(2))).toBeFalsy();
      expect(isWeakMap(new Uint16Array(2))).toBeFalsy();
      expect(isWeakMap(new Uint32Array(2))).toBeFalsy();
      expect(isWeakMap(new Uint8ClampedArray(2))).toBeFalsy();
      expect(isWeakMap(new BigInt64Array(2))).toBeFalsy();
      expect(isWeakMap(new BigUint64Array(2))).toBeFalsy();
      expect(isWeakMap(new Float32Array(2))).toBeFalsy();
      expect(isWeakMap(new Float64Array(2))).toBeFalsy();
      expect(isWeakMap(new SharedArrayBuffer(512))).toBeFalsy();
    });

    it('should handle WeakMap/Set', () => {
      expect(isWeakMap(new WeakMap())).toBeTruthy();
      expect(isWeakMap(new WeakSet())).toBeFalsy();
    });
  });
});
