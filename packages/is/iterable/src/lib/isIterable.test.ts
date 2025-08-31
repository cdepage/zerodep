import { isIterable } from './isIterable.js';
import { describe, it, expect } from 'vitest';

// Mock the dependencies
vi.mock('@zerodep/is-nil', () => ({
  isNil: (value: unknown) => value === null || value === undefined,
}));

vi.mock('@zerodep/is-string', () => ({
  isString: (value: unknown) => typeof value === 'string',
}));

describe('isIterable', () => {
  it('should return false for nil values', () => {
    expect(isIterable(null)).toBe(false);
    expect(isIterable(undefined)).toBe(false);
  });

  it('should return false for strings', () => {
    expect(isIterable('')).toBe(false);
    expect(isIterable('test')).toBe(false);
  });

  it('should return true for objects with sync iterator', () => {
    const iterable = { [Symbol.iterator]: () => ({}) };
    expect(isIterable(iterable)).toBe(true);
  });

  it('should return true for objects with async iterator', () => {
    const asyncIterable = { [Symbol.asyncIterator]: () => ({}) };
    expect(isIterable(asyncIterable)).toBe(true);
  });

  it('should return false for non-iterable objects', () => {
    expect(isIterable({})).toBe(false);
  });

  it('should return true for iterable objects', () => {
    expect(isIterable([])).toBe(true);
  });

  it('should handle errors gracefully', () => {
    const errorThrowingObject = new Proxy(
      {},
      {
        get: () => {
          throw new Error();
        },
      },
    );
    expect(isIterable(errorThrowingObject)).toBe(false);
  });

  it('should return false for primitive values', () => {
    expect(isIterable(42)).toBe(false);
    expect(isIterable(true)).toBe(false);
    expect(isIterable(Symbol())).toBe(false);
  });

  describe('README.md examples', () => {
    it('should handle Arrays', () => {
      expect(isIterable([])).toBeTruthy();
      expect(isIterable([1, 2, 3])).toBeTruthy();
      expect(isIterable(['a', 'b', 'c'])).toBeTruthy();
    });

    it('should handle BigInts', () => {
      expect(isIterable(42n)).toBeFalsy();
      expect(isIterable(0n)).toBeFalsy();
      expect(isIterable(-0n)).toBeFalsy();
      expect(isIterable(-42n)).toBeFalsy();
    });

    it('should handle Booleans', () => {
      expect(isIterable(true)).toBeFalsy();
      expect(isIterable(false)).toBeFalsy();
    });

    it('should handle a Class', () => {
      expect(isIterable(class SomeClass {})).toBeFalsy();
    });

    it('should handle a Dates', () => {
      expect(isIterable(new Date())).toBeFalsy();
      expect(isIterable(new Date('1970-01-01T12:00:00.000Z'))).toBeFalsy();
      expect(isIterable(new Date('2099-12-31'))).toBeFalsy();
    });

    it('should handle a Empty', () => {
      expect(isIterable(null)).toBeFalsy();
      expect(isIterable(undefined)).toBeFalsy();
    });

    it('should handle Errors', () => {
      expect(isIterable(new Error('message'))).toBeFalsy();
    });

    it('should handle Floats', () => {
      expect(isIterable(3.14)).toBeFalsy();
      expect(isIterable(0.0)).toBeFalsy();
      expect(isIterable(-0.0)).toBeFalsy();
      expect(isIterable(-3.14)).toBeFalsy();
      expect(isIterable(Math.E)).toBeFalsy();
      expect(isIterable(Math.PI)).toBeFalsy();
      expect(isIterable(Number.MIN_VALUE)).toBeFalsy();
    });

    it('should handle Functions', () => {
      expect(isIterable(() => 'function')).toBeFalsy();
      expect(isIterable(async () => 'function')).toBeFalsy();
    });

    it('should handle Generators', () => {
      const gen1 = (function* simpleGenerator() {
        yield 1;
      })();
      const gen2 = (async function* asyncGenerator() {
        yield 1;
      })();
      expect(isIterable(gen1)).toBeTruthy();
      expect(isIterable(gen2)).toBeTruthy();
    });

    it('should handle Maps', () => {
      expect(isIterable(new Map())).toBeTruthy();
      expect(isIterable(new Map([['key1', 123]]))).toBeTruthy();
      expect(isIterable(new Map([['key1', 'value1']]))).toBeTruthy();
    });

    it('should handle Numbers', () => {
      expect(isIterable(Number.POSITIVE_INFINITY)).toBeFalsy();
      expect(isIterable(Number.MAX_SAFE_INTEGER)).toBeFalsy();
      expect(isIterable(Number.MAX_VALUE)).toBeFalsy();
      expect(isIterable(3e8)).toBeFalsy();
      expect(isIterable(42)).toBeFalsy();
      expect(isIterable(1)).toBeFalsy();
      expect(isIterable(0)).toBeFalsy();
      expect(isIterable(-0)).toBeFalsy();
      expect(isIterable(-1)).toBeFalsy();
      expect(isIterable(-42)).toBeFalsy();
      expect(isIterable(-3e8)).toBeFalsy();
      expect(isIterable(Number.MIN_SAFE_INTEGER)).toBeFalsy();
      expect(isIterable(Number.NEGATIVE_INFINITY)).toBeFalsy();
      expect(isIterable(Number.NaN)).toBeFalsy();
    });

    it('should handle POJOs', () => {
      expect(isIterable({})).toBeFalsy();
      expect(isIterable({ key: 'string' })).toBeFalsy();
      expect(isIterable({ key: 123 })).toBeFalsy();
    });

    it('should handle Promise', () => {
      expect(isIterable(new Promise(() => 1))).toBeFalsy();
      expect(isIterable(Promise.resolve())).toBeFalsy();
    });

    it('should handle Regular Expression', () => {
      expect(isIterable(/[regex]+/gi)).toBeFalsy();
      expect(isIterable(new RegExp('d', 'gi'))).toBeFalsy();
    });

    it('should handle Sets', () => {
      expect(isIterable(new Set())).toBeTruthy();
      expect(isIterable(new Set([1, 2, 3]))).toBeTruthy();
      expect(isIterable(new Set(['a', 'b', 'c']))).toBeTruthy();
    });

    it('should handle Strings', () => {
      expect(isIterable('')).toBeFalsy();
      expect(isIterable('a longer string')).toBeFalsy();
      expect(isIterable('1000n')).toBeFalsy();
      expect(isIterable('3e8')).toBeFalsy();
      expect(isIterable('42')).toBeFalsy();
      expect(isIterable('3.14')).toBeFalsy();
      expect(isIterable('0')).toBeFalsy();
      expect(isIterable('-0')).toBeFalsy();
      expect(isIterable('-3.14')).toBeFalsy();
      expect(isIterable('-42')).toBeFalsy();
      expect(isIterable('-3e8')).toBeFalsy();
      expect(isIterable('-1000n')).toBeFalsy();
    });

    it('should handle Symbols', () => {
      expect(isIterable(Symbol())).toBeFalsy();
      expect(isIterable(Symbol('name'))).toBeFalsy();
    });

    it('should handle This', () => {
      expect(isIterable(this)).toBeFalsy();
      expect(isIterable(globalThis)).toBeFalsy();
    });

    it('should handle TypedArrays', () => {
      expect(isIterable(new Int8Array(2))).toBeTruthy();
      expect(isIterable(new Int16Array(2))).toBeTruthy();
      expect(isIterable(new Int32Array(2))).toBeTruthy();
      expect(isIterable(new Uint8Array(2))).toBeTruthy();
      expect(isIterable(new Uint16Array(2))).toBeTruthy();
      expect(isIterable(new Uint32Array(2))).toBeTruthy();
      expect(isIterable(new Uint8ClampedArray(2))).toBeTruthy();
      expect(isIterable(new BigInt64Array(2))).toBeTruthy();
      expect(isIterable(new BigUint64Array(2))).toBeTruthy();
      expect(isIterable(new Float32Array(2))).toBeTruthy();
      expect(isIterable(new Float64Array(2))).toBeTruthy();
      expect(isIterable(new SharedArrayBuffer(512))).toBeFalsy();
    });

    it('should handle WeakMap/Set', () => {
      expect(isIterable(new WeakMap())).toBeFalsy();
      expect(isIterable(new WeakSet())).toBeFalsy();
    });
  });
});
