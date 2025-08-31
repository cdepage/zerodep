import { isFunction } from './isFunction.js';
import { describe, it, expect } from 'vitest';

describe('isFunction', () => {
  it('should return true for regular functions', () => {
    const func = () => 1;
    expect(isFunction(func)).toBe(true);
  });

  it('should return true for async functions', async () => {
    const asyncFunc = async () => 1;
    expect(isFunction(asyncFunc)).toBe(true);
  });

  it('should return false for non-functions', () => {
    expect(isFunction(42)).toBe(false);
    expect(isFunction('string')).toBe(false);
    expect(isFunction({})).toBe(false);
    expect(isFunction([])).toBe(false);
    expect(isFunction(null)).toBe(false);
    expect(isFunction(undefined)).toBe(false);
  });

  it('should return false for class constructors', () => {
    class TestClass {}
    expect(isFunction(TestClass)).toBe(true);
  });

  it('should handle edge cases correctly', () => {
    // Edge case: Function.prototype
    expect(isFunction(Function.prototype)).toBe(true);

    // Edge case: Object.create(null)
    const obj = Object.create(null);
    expect(isFunction(obj)).toBe(false);
  });

  describe('README.md examples', () => {
    it('should handle Arrays', () => {
      expect(isFunction([])).toBeFalsy();
      expect(isFunction([1, 2, 3])).toBeFalsy();
      expect(isFunction(['a', 'b', 'c'])).toBeFalsy();
    });

    it('should handle BigInts', () => {
      expect(isFunction(42n)).toBeFalsy();
      expect(isFunction(0n)).toBeFalsy();
      expect(isFunction(-0n)).toBeFalsy();
      expect(isFunction(-42n)).toBeFalsy();
    });

    it('should handle Booleans', () => {
      expect(isFunction(true)).toBeFalsy();
      expect(isFunction(false)).toBeFalsy();
    });

    it('should handle a Class', () => {
      expect(isFunction(class SomeClass {})).toBeTruthy();
    });

    it('should handle a Dates', () => {
      expect(isFunction(new Date())).toBeFalsy();
      expect(isFunction(new Date('1970-01-01T12:00:00.000Z'))).toBeFalsy();
      expect(isFunction(new Date('2099-12-31'))).toBeFalsy();
    });

    it('should handle a Empty', () => {
      expect(isFunction(null)).toBeFalsy();
      expect(isFunction(undefined)).toBeFalsy();
    });

    it('should handle Errors', () => {
      expect(isFunction(new Error('message'))).toBeFalsy();
    });

    it('should handle Floats', () => {
      expect(isFunction(3.14)).toBeFalsy();
      expect(isFunction(0.0)).toBeFalsy();
      expect(isFunction(-0.0)).toBeFalsy();
      expect(isFunction(-3.14)).toBeFalsy();
      expect(isFunction(Math.E)).toBeFalsy();
      expect(isFunction(Math.PI)).toBeFalsy();
      expect(isFunction(Number.MIN_VALUE)).toBeFalsy();
    });

    it('should handle Functions', () => {
      expect(isFunction(() => 'function')).toBeTruthy();
      expect(isFunction(async () => 'function')).toBeTruthy();
    });

    it('should handle Generators', () => {
      const gen1 = (function* simpleGenerator() {
        yield 1;
      })();
      const gen2 = (async function* asyncGenerator() {
        yield 1;
      })();
      expect(isFunction(gen1)).toBeFalsy();
      expect(isFunction(gen2)).toBeFalsy();
    });

    it('should handle Generators', () => {
      expect(isFunction(new Map())).toBeFalsy();
      expect(isFunction(new Map([['key1', 123]]))).toBeFalsy();
      expect(isFunction(new Map([['key1', 'value1']]))).toBeFalsy();
    });

    it('should handle Numbers', () => {
      expect(isFunction(Number.POSITIVE_INFINITY)).toBeFalsy();
      expect(isFunction(Number.MAX_SAFE_INTEGER)).toBeFalsy();
      expect(isFunction(Number.MAX_VALUE)).toBeFalsy();
      expect(isFunction(3e8)).toBeFalsy();
      expect(isFunction(42)).toBeFalsy();
      expect(isFunction(1)).toBeFalsy();
      expect(isFunction(0)).toBeFalsy();
      expect(isFunction(-0)).toBeFalsy();
      expect(isFunction(-1)).toBeFalsy();
      expect(isFunction(-42)).toBeFalsy();
      expect(isFunction(-3e8)).toBeFalsy();
      expect(isFunction(Number.MIN_SAFE_INTEGER)).toBeFalsy();
      expect(isFunction(Number.NEGATIVE_INFINITY)).toBeFalsy();
      expect(isFunction(Number.NaN)).toBeFalsy();
    });

    it('should handle POJOs', () => {
      expect(isFunction({})).toBeFalsy();
      expect(isFunction({ key: 'string' })).toBeFalsy();
      expect(isFunction({ key: 123 })).toBeFalsy();
    });

    it('should handle Promise', () => {
      expect(isFunction(new Promise(() => 1))).toBeFalsy();
      expect(isFunction(Promise.resolve())).toBeFalsy();
    });

    it('should handle Regular Expression', () => {
      expect(isFunction(/[regex]+/gi)).toBeFalsy();
      expect(isFunction(new RegExp('d', 'gi'))).toBeFalsy();
    });

    it('should handle Sets', () => {
      expect(isFunction(new Set())).toBeFalsy();
      expect(isFunction(new Set([1, 2, 3]))).toBeFalsy();
      expect(isFunction(new Set(['a', 'b', 'c']))).toBeFalsy();
    });

    it('should handle Strings', () => {
      expect(isFunction('')).toBeFalsy();
      expect(isFunction('a longer string')).toBeFalsy();
      expect(isFunction('1000n')).toBeFalsy();
      expect(isFunction('3e8')).toBeFalsy();
      expect(isFunction('42')).toBeFalsy();
      expect(isFunction('3.14')).toBeFalsy();
      expect(isFunction('0')).toBeFalsy();
      expect(isFunction('-0')).toBeFalsy();
      expect(isFunction('-3.14')).toBeFalsy();
      expect(isFunction('-42')).toBeFalsy();
      expect(isFunction('-3e8')).toBeFalsy();
      expect(isFunction('-1000n')).toBeFalsy();
    });

    it('should handle Symbols', () => {
      expect(isFunction(Symbol())).toBeFalsy();
      expect(isFunction(Symbol('name'))).toBeFalsy();
    });

    it('should handle This', () => {
      expect(isFunction(this)).toBeFalsy();
      expect(isFunction(globalThis)).toBeFalsy();
    });

    it('should handle TypedArrays', () => {
      expect(isFunction(new Int8Array(2))).toBeFalsy();
      expect(isFunction(new Int16Array(2))).toBeFalsy();
      expect(isFunction(new Int32Array(2))).toBeFalsy();
      expect(isFunction(new Uint8Array(2))).toBeFalsy();
      expect(isFunction(new Uint16Array(2))).toBeFalsy();
      expect(isFunction(new Uint32Array(2))).toBeFalsy();
      expect(isFunction(new Uint8ClampedArray(2))).toBeFalsy();
      expect(isFunction(new BigInt64Array(2))).toBeFalsy();
      expect(isFunction(new BigUint64Array(2))).toBeFalsy();
      expect(isFunction(new Float32Array(2))).toBeFalsy();
      expect(isFunction(new Float64Array(2))).toBeFalsy();
      expect(isFunction(new SharedArrayBuffer(512))).toBeFalsy();
    });

    it('should handle WeakMap/Set', () => {
      expect(isFunction(new WeakMap())).toBeFalsy();
      expect(isFunction(new WeakSet())).toBeFalsy();
    });
  });
});
