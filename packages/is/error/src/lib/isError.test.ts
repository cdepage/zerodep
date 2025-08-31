import { isError } from './isError.js';
import { describe, it, expect } from 'vitest';

describe('isError', () => {
  it('should return true for an instance of Error', () => {
    const error = new Error('test');
    expect(isError(error)).toBe(true);
  });

  it('should return false for a non-Error object', () => {
    const obj = { message: 'test' };
    expect(isError(obj)).toBe(false);
  });

  it('should return true for an instance of a custom Error subclass', () => {
    class CustomError extends Error {}
    class OtherError extends Error {}
    const error = new CustomError('test');
    expect(isError(error)).toBe(true);
    expect(isError(error, CustomError)).toBe(true);
    expect(isError(error, OtherError)).toBe(false);
  });

  it('should return false for an instance of Error that is not the specified type', () => {
    class CustomError extends Error {}
    const error = new Error('test');
    expect(isError(error, CustomError)).toBe(false);
  });

  it('should return true if message property is not a string', () => {
    const error = new Error(123 as any);
    expect(isError(error)).toBe(true);
  });

  describe('README.md examples', () => {
    it('should handle Arrays', () => {
      expect(isError([])).toBeFalsy();
      expect(isError([1, 2, 3])).toBeFalsy();
      expect(isError(['a', 'b', 'c'])).toBeFalsy();
    });

    it('should handle BigInts', () => {
      expect(isError(42n)).toBeFalsy();
      expect(isError(0n)).toBeFalsy();
      expect(isError(-0n)).toBeFalsy();
      expect(isError(-42n)).toBeFalsy();
    });

    it('should handle Booleans', () => {
      expect(isError(true)).toBeFalsy();
      expect(isError(false)).toBeFalsy();
    });

    it('should handle a Class', () => {
      expect(isError(class SomeClass {})).toBeFalsy();
    });

    it('should handle a Dates', () => {
      expect(isError(new Date())).toBeFalsy();
      expect(isError(new Date('1970-01-01T12:00:00.000Z'))).toBeFalsy();
      expect(isError(new Date('2099-12-31'))).toBeFalsy();
    });

    it('should handle a Empty', () => {
      expect(isError(null)).toBeFalsy();
      expect(isError(undefined)).toBeFalsy();
    });

    it('should handle Errors', () => {
      expect(isError(new Error('message'))).toBeTruthy();
    });

    it('should handle Floats', () => {
      expect(isError(3.14)).toBeFalsy();
      expect(isError(0.0)).toBeFalsy();
      expect(isError(-0.0)).toBeFalsy();
      expect(isError(-3.14)).toBeFalsy();
      expect(isError(Math.E)).toBeFalsy();
      expect(isError(Math.PI)).toBeFalsy();
      expect(isError(Number.MIN_VALUE)).toBeFalsy();
    });

    it('should handle Functions', () => {
      expect(isError(() => 'function')).toBeFalsy();
      expect(isError(async () => 'function')).toBeFalsy();
    });

    it('should handle Generators', () => {
      const gen1 = (function* simpleGenerator() {
        yield 1;
      })();
      const gen2 = (async function* asyncGenerator() {
        yield 1;
      })();
      expect(isError(gen1)).toBeFalsy();
      expect(isError(gen2)).toBeFalsy();
    });

    it('should handle Generators', () => {
      expect(isError(new Map())).toBeFalsy();
      expect(isError(new Map([['key1', 123]]))).toBeFalsy();
      expect(isError(new Map([['key1', 'value1']]))).toBeFalsy();
    });

    it('should handle Numbers', () => {
      expect(isError(Number.POSITIVE_INFINITY)).toBeFalsy();
      expect(isError(Number.MAX_SAFE_INTEGER)).toBeFalsy();
      expect(isError(Number.MAX_VALUE)).toBeFalsy();
      expect(isError(3e8)).toBeFalsy();
      expect(isError(42)).toBeFalsy();
      expect(isError(1)).toBeFalsy();
      expect(isError(0)).toBeFalsy();
      expect(isError(-0)).toBeFalsy();
      expect(isError(-1)).toBeFalsy();
      expect(isError(-42)).toBeFalsy();
      expect(isError(-3e8)).toBeFalsy();
      expect(isError(Number.MIN_SAFE_INTEGER)).toBeFalsy();
      expect(isError(Number.NEGATIVE_INFINITY)).toBeFalsy();
      expect(isError(Number.NaN)).toBeFalsy();
    });

    it('should handle POJOs', () => {
      expect(isError({})).toBeFalsy();
      expect(isError({ key: 'string' })).toBeFalsy();
      expect(isError({ key: 123 })).toBeFalsy();
    });

    it('should handle Promise', () => {
      expect(isError(new Promise(() => 1))).toBeFalsy();
      expect(isError(Promise.resolve())).toBeFalsy();
    });

    it('should handle Regular Expression', () => {
      expect(isError(/[regex]+/gi)).toBeFalsy();
      expect(isError(new RegExp('d', 'gi'))).toBeFalsy();
    });

    it('should handle Sets', () => {
      expect(isError(new Set())).toBeFalsy();
      expect(isError(new Set([1, 2, 3]))).toBeFalsy();
      expect(isError(new Set(['a', 'b', 'c']))).toBeFalsy();
    });

    it('should handle Strings', () => {
      expect(isError('')).toBeFalsy();
      expect(isError('a longer string')).toBeFalsy();
      expect(isError('1000n')).toBeFalsy();
      expect(isError('3e8')).toBeFalsy();
      expect(isError('42')).toBeFalsy();
      expect(isError('3.14')).toBeFalsy();
      expect(isError('0')).toBeFalsy();
      expect(isError('-0')).toBeFalsy();
      expect(isError('-3.14')).toBeFalsy();
      expect(isError('-42')).toBeFalsy();
      expect(isError('-3e8')).toBeFalsy();
      expect(isError('-1000n')).toBeFalsy();
    });

    it('should handle Symbols', () => {
      expect(isError(Symbol())).toBeFalsy();
      expect(isError(Symbol('name'))).toBeFalsy();
    });

    it('should handle This', () => {
      expect(isError(this)).toBeFalsy();
      expect(isError(globalThis)).toBeFalsy();
    });

    it('should handle TypedArrays', () => {
      expect(isError(new Int8Array(2))).toBeFalsy();
      expect(isError(new Int16Array(2))).toBeFalsy();
      expect(isError(new Int32Array(2))).toBeFalsy();
      expect(isError(new Uint8Array(2))).toBeFalsy();
      expect(isError(new Uint16Array(2))).toBeFalsy();
      expect(isError(new Uint32Array(2))).toBeFalsy();
      expect(isError(new Uint8ClampedArray(2))).toBeFalsy();
      expect(isError(new BigInt64Array(2))).toBeFalsy();
      expect(isError(new BigUint64Array(2))).toBeFalsy();
      expect(isError(new Float32Array(2))).toBeFalsy();
      expect(isError(new Float64Array(2))).toBeFalsy();
      expect(isError(new SharedArrayBuffer(512))).toBeFalsy();
    });

    it('should handle WeakMap/Set', () => {
      expect(isError(new WeakMap())).toBeFalsy();
      expect(isError(new WeakSet())).toBeFalsy();
    });
  });
});
