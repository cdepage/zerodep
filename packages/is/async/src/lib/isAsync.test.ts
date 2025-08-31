import { isAsync } from './isAsync.js';
import { describe, expect, it } from 'vitest';

describe('isAsync', () => {
  it('should return true for async functions', () => {
    const asyncFn = async () => 1;
    expect(isAsync(asyncFn)).toBe(true);
  });

  it('should return true for promises', () => {
    const promise = Promise.resolve();
    expect(isAsync(promise)).toBe(true);
  });

  it('should return false for regular functions', () => {
    function regularFn() {
      return 1;
    }

    expect(isAsync(regularFn)).toBe(false);
  });

  it('should return false for non-functions and non-promises', () => {
    expect(isAsync(null)).toBe(false);
    expect(isAsync(undefined)).toBe(false);
    expect(isAsync({})).toBe(false);
    expect(isAsync([])).toBe(false);
    expect(isAsync(42)).toBe(false);
    expect(isAsync('string')).toBe(false);
  });

  it('should handle edge cases gracefully', () => {
    // Test with objects that might throw errors when accessing their properties
    const problematicObject = Object.defineProperty({}, 'constructor', {
      get: () => {
        throw new Error('Problematic object');
      },
    });
    expect(isAsync(problematicObject)).toBe(false);
  });

  it('should return false for custom objects with AsyncFunction constructor name', () => {
    const objWithAsyncConstructor = Object.defineProperty({}, 'constructor', {
      get: () => ({ name: 'AsyncFunction' }),
    });
    expect(isAsync(objWithAsyncConstructor)).toBe(true);
  });

  it('should handle generators correctly', () => {
    function* generatorFn() {
      yield 1;
    }

    expect(isAsync(generatorFn())).toBe(true);

    async function* asyncGeneratorFn() {
      yield 1;
    }

    expect(isAsync(asyncGeneratorFn())).toBe(true);
  });

  describe('README.md examples', () => {
    it('should handle Arrays', () => {
      expect(isAsync([])).toBeFalsy();
      expect(isAsync([1, 2, 3])).toBeFalsy();
      expect(isAsync(['a', 'b', 'c'])).toBeFalsy();
    });

    it('should handle BigInts', () => {
      expect(isAsync(42n)).toBeFalsy();
      expect(isAsync(0n)).toBeFalsy();
      expect(isAsync(-0n)).toBeFalsy();
      expect(isAsync(-42n)).toBeFalsy();
    });

    it('should handle Booleans', () => {
      expect(isAsync(true)).toBeFalsy();
      expect(isAsync(false)).toBeFalsy();
    });

    it('should handle a Class', () => {
      expect(isAsync(class SomeClass {})).toBeFalsy();
    });

    it('should handle a Dates', () => {
      expect(isAsync(new Date())).toBeFalsy();
      expect(isAsync(new Date('1970-01-01T12:00:00.000Z'))).toBeFalsy();
      expect(isAsync(new Date('2099-12-31'))).toBeFalsy();
    });

    it('should handle a Empty', () => {
      expect(isAsync(null)).toBeFalsy();
      expect(isAsync(undefined)).toBeFalsy();
    });

    it('should handle Errors', () => {
      expect(isAsync(new Error('message'))).toBeFalsy();
    });

    it('should handle Floats', () => {
      expect(isAsync(3.14)).toBeFalsy();
      expect(isAsync(0.0)).toBeFalsy();
      expect(isAsync(-0.0)).toBeFalsy();
      expect(isAsync(-3.14)).toBeFalsy();
      expect(isAsync(Math.E)).toBeFalsy();
      expect(isAsync(Math.PI)).toBeFalsy();
      expect(isAsync(Number.MIN_VALUE)).toBeFalsy();
    });

    it('should handle Functions', () => {
      expect(isAsync(() => 'function')).toBeFalsy();
      expect(isAsync(async () => 'function')).toBeTruthy();
    });

    it('should handle Generators', () => {
      const gen1 = (function* simpleGenerator() {
        yield 1;
      })();
      const gen2 = (async function* asyncGenerator() {
        yield 1;
      })();
      expect(isAsync(gen1)).toBeTruthy();
      expect(isAsync(gen2)).toBeTruthy();
    });

    it('should handle Generators', () => {
      expect(isAsync(new Map())).toBeFalsy();
      expect(isAsync(new Map([['key1', 123]]))).toBeFalsy();
      expect(isAsync(new Map([['key1', 'value1']]))).toBeFalsy();
    });

    it('should handle Numbers', () => {
      expect(isAsync(Number.POSITIVE_INFINITY)).toBeFalsy();
      expect(isAsync(Number.MAX_SAFE_INTEGER)).toBeFalsy();
      expect(isAsync(Number.MAX_VALUE)).toBeFalsy();
      expect(isAsync(3e8)).toBeFalsy();
      expect(isAsync(42)).toBeFalsy();
      expect(isAsync(1)).toBeFalsy();
      expect(isAsync(0)).toBeFalsy();
      expect(isAsync(-0)).toBeFalsy();
      expect(isAsync(-1)).toBeFalsy();
      expect(isAsync(-42)).toBeFalsy();
      expect(isAsync(-3e8)).toBeFalsy();
      expect(isAsync(Number.MIN_SAFE_INTEGER)).toBeFalsy();
      expect(isAsync(Number.NEGATIVE_INFINITY)).toBeFalsy();
      expect(isAsync(Number.NaN)).toBeFalsy();
    });

    it('should handle POJOs', () => {
      expect(isAsync({})).toBeFalsy();
      expect(isAsync({ key: 'string' })).toBeFalsy();
      expect(isAsync({ key: 123 })).toBeFalsy();
    });

    it('should handle Promise', () => {
      expect(isAsync(new Promise(() => 1))).toBeTruthy();
      expect(isAsync(Promise.resolve())).toBeTruthy();
    });

    it('should handle Regular Expression', () => {
      expect(isAsync(/[regex]+/gi)).toBeFalsy();
      expect(isAsync(new RegExp('d', 'gi'))).toBeFalsy();
    });

    it('should handle Sets', () => {
      expect(isAsync(new Set())).toBeFalsy();
      expect(isAsync(new Set([1, 2, 3]))).toBeFalsy();
      expect(isAsync(new Set(['a', 'b', 'c']))).toBeFalsy();
    });

    it('should handle Strings', () => {
      expect(isAsync('')).toBeFalsy();
      expect(isAsync('a longer string')).toBeFalsy();
      expect(isAsync('1000n')).toBeFalsy();
      expect(isAsync('3e8')).toBeFalsy();
      expect(isAsync('42')).toBeFalsy();
      expect(isAsync('3.14')).toBeFalsy();
      expect(isAsync('0')).toBeFalsy();
      expect(isAsync('-0')).toBeFalsy();
      expect(isAsync('-3.14')).toBeFalsy();
      expect(isAsync('-42')).toBeFalsy();
      expect(isAsync('-3e8')).toBeFalsy();
      expect(isAsync('-1000n')).toBeFalsy();
    });

    it('should handle Symbols', () => {
      expect(isAsync(Symbol())).toBeFalsy();
      expect(isAsync(Symbol('name'))).toBeFalsy();
    });

    it('should handle This', () => {
      expect(isAsync(this)).toBeFalsy();
      expect(isAsync(globalThis)).toBeFalsy();
    });

    it('should handle TypedArrays', () => {
      expect(isAsync(new Int8Array(2))).toBeFalsy();
      expect(isAsync(new Int16Array(2))).toBeFalsy();
      expect(isAsync(new Int32Array(2))).toBeFalsy();
      expect(isAsync(new Uint8Array(2))).toBeFalsy();
      expect(isAsync(new Uint16Array(2))).toBeFalsy();
      expect(isAsync(new Uint32Array(2))).toBeFalsy();
      expect(isAsync(new Uint8ClampedArray(2))).toBeFalsy();
      expect(isAsync(new BigInt64Array(2))).toBeFalsy();
      expect(isAsync(new BigUint64Array(2))).toBeFalsy();
      expect(isAsync(new Float32Array(2))).toBeFalsy();
      expect(isAsync(new Float64Array(2))).toBeFalsy();
      expect(isAsync(new SharedArrayBuffer(512))).toBeFalsy();
    });

    it('should handle WeakMap/Set', () => {
      expect(isAsync(new WeakMap())).toBeFalsy();
      expect(isAsync(new WeakSet())).toBeFalsy();
    });
  });
});
