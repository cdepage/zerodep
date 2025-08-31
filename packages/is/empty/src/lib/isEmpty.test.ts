import { isEmpty } from './isEmpty.js';
import { describe, expect, it } from 'vitest';

describe('isEmpty', () => {
  it('should return true for nil values', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  it('should return true for empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  it('should return false for non-empty string', () => {
    expect(isEmpty(' ')).toBe(false);
    expect(isEmpty('test')).toBe(false);
  });

  it('should return true for empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  it('should return false for non-empty array', () => {
    expect(isEmpty([1])).toBe(false);
    expect(isEmpty([''])).toBe(false);
  });

  it('should return true for empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('should return false for non-empty object', () => {
    expect(isEmpty({ key: 'value' })).toBe(false);
    expect(isEmpty({ a: [] })).toBe(false);
  });

  it('should return true for empty Map and Set', () => {
    const map = new Map();
    const set = new Set();
    expect(isEmpty(map)).toBe(true);
    expect(isEmpty(set)).toBe(true);
  });

  it('should return false for non-empty Map and Set', () => {
    const map = new Map([[1, 'a']]);
    const set = new Set([1]);
    expect(isEmpty(map)).toBe(false);
    expect(isEmpty(set)).toBe(false);
  });

  it('should return false for other types of values', () => {
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(true)).toBe(false);
    expect(
      isEmpty(function () {
        return 1;
      }),
    ).toBe(false);
    expect(isEmpty(Symbol())).toBe(false);
  });

  it('should handle exceptions gracefully and return false', () => {
    const valueWithError = new Proxy(
      {},
      {
        get: () => {
          throw new Error('Test error');
        },
      },
    );
    expect(isEmpty(valueWithError)).toBe(false);
  });

  describe('README.md examples', () => {
    it('should handle Arrays', () => {
      expect(isEmpty([])).toBeTruthy();
      expect(isEmpty([1, 2, 3])).toBeFalsy();
      expect(isEmpty(['a', 'b', 'c'])).toBeFalsy();
    });

    it('should handle BigInts', () => {
      expect(isEmpty(42n)).toBeFalsy();
      expect(isEmpty(0n)).toBeFalsy();
      expect(isEmpty(-0n)).toBeFalsy();
      expect(isEmpty(-42n)).toBeFalsy();
    });

    it('should handle Booleans', () => {
      expect(isEmpty(true)).toBeFalsy();
      expect(isEmpty(false)).toBeFalsy();
    });

    it('should handle a Class', () => {
      expect(isEmpty(class SomeClass {})).toBeFalsy();
    });

    it('should handle a Dates', () => {
      expect(isEmpty(new Date())).toBeFalsy();
      expect(isEmpty(new Date('1970-01-01T12:00:00.000Z'))).toBeFalsy();
      expect(isEmpty(new Date('2099-12-31'))).toBeFalsy();
    });

    it('should handle a Empty', () => {
      expect(isEmpty(null)).toBeTruthy();
      expect(isEmpty(undefined)).toBeTruthy();
    });

    it('should handle Errors', () => {
      expect(isEmpty(new Error('message'))).toBeFalsy();
    });

    it('should handle Floats', () => {
      expect(isEmpty(3.14)).toBeFalsy();
      expect(isEmpty(0.0)).toBeFalsy();
      expect(isEmpty(-0.0)).toBeFalsy();
      expect(isEmpty(-3.14)).toBeFalsy();
      expect(isEmpty(Math.E)).toBeFalsy();
      expect(isEmpty(Math.PI)).toBeFalsy();
      expect(isEmpty(Number.MIN_VALUE)).toBeFalsy();
    });

    it('should handle Functions', () => {
      expect(isEmpty(() => 'function')).toBeFalsy();
      expect(isEmpty(async () => 'function')).toBeFalsy();
    });

    it('should handle Generators', () => {
      const gen1 = (function* simpleGenerator() {
        yield 1;
      })();
      const gen2 = (async function* asyncGenerator() {
        yield 1;
      })();
      expect(isEmpty(gen1)).toBeFalsy();
      expect(isEmpty(gen2)).toBeFalsy();
    });

    it('should handle Maps', () => {
      expect(isEmpty(new Map())).toBeTruthy();
      expect(isEmpty(new Map([['key1', 123]]))).toBeFalsy();
      expect(isEmpty(new Map([['key1', 'value1']]))).toBeFalsy();
    });

    it('should handle Numbers', () => {
      expect(isEmpty(Number.POSITIVE_INFINITY)).toBeFalsy();
      expect(isEmpty(Number.MAX_SAFE_INTEGER)).toBeFalsy();
      expect(isEmpty(Number.MAX_VALUE)).toBeFalsy();
      expect(isEmpty(3e8)).toBeFalsy();
      expect(isEmpty(42)).toBeFalsy();
      expect(isEmpty(1)).toBeFalsy();
      expect(isEmpty(0)).toBeFalsy();
      expect(isEmpty(-0)).toBeFalsy();
      expect(isEmpty(-1)).toBeFalsy();
      expect(isEmpty(-42)).toBeFalsy();
      expect(isEmpty(-3e8)).toBeFalsy();
      expect(isEmpty(Number.MIN_SAFE_INTEGER)).toBeFalsy();
      expect(isEmpty(Number.NEGATIVE_INFINITY)).toBeFalsy();
      expect(isEmpty(Number.NaN)).toBeFalsy();
    });

    it('should handle POJOs', () => {
      expect(isEmpty({})).toBeTruthy();
      expect(isEmpty({ key: 'string' })).toBeFalsy();
      expect(isEmpty({ key: 123 })).toBeFalsy();
    });

    it('should handle Promise', () => {
      expect(isEmpty(new Promise(() => 1))).toBeFalsy();
      expect(isEmpty(Promise.resolve())).toBeFalsy();
    });

    it('should handle Regular Expression', () => {
      expect(isEmpty(/[regex]+/gi)).toBeFalsy();
      expect(isEmpty(new RegExp('d', 'gi'))).toBeFalsy();
    });

    it('should handle Sets', () => {
      expect(isEmpty(new Set())).toBeTruthy();
      expect(isEmpty(new Set([1, 2, 3]))).toBeFalsy();
      expect(isEmpty(new Set(['a', 'b', 'c']))).toBeFalsy();
    });

    it('should handle Strings', () => {
      expect(isEmpty('')).toBeTruthy();
      expect(isEmpty('a longer string')).toBeFalsy();
      expect(isEmpty('1000n')).toBeFalsy();
      expect(isEmpty('3e8')).toBeFalsy();
      expect(isEmpty('42')).toBeFalsy();
      expect(isEmpty('3.14')).toBeFalsy();
      expect(isEmpty('0')).toBeFalsy();
      expect(isEmpty('-0')).toBeFalsy();
      expect(isEmpty('-3.14')).toBeFalsy();
      expect(isEmpty('-42')).toBeFalsy();
      expect(isEmpty('-3e8')).toBeFalsy();
      expect(isEmpty('-1000n')).toBeFalsy();
    });

    it('should handle Symbols', () => {
      expect(isEmpty(Symbol())).toBeFalsy();
      expect(isEmpty(Symbol('name'))).toBeFalsy();
    });

    it('should handle This', () => {
      expect(isEmpty(this)).toBeFalsy();
      expect(isEmpty(globalThis)).toBeFalsy();
    });

    it('should handle TypedArrays', () => {
      expect(isEmpty(new Int8Array(2))).toBeFalsy();
      expect(isEmpty(new Int16Array(2))).toBeFalsy();
      expect(isEmpty(new Int32Array(2))).toBeFalsy();
      expect(isEmpty(new Uint8Array(2))).toBeFalsy();
      expect(isEmpty(new Uint16Array(2))).toBeFalsy();
      expect(isEmpty(new Uint32Array(2))).toBeFalsy();
      expect(isEmpty(new Uint8ClampedArray(2))).toBeFalsy();
      expect(isEmpty(new BigInt64Array(2))).toBeFalsy();
      expect(isEmpty(new BigUint64Array(2))).toBeFalsy();
      expect(isEmpty(new Float32Array(2))).toBeFalsy();
      expect(isEmpty(new Float64Array(2))).toBeFalsy();
      expect(isEmpty(new SharedArrayBuffer(512))).toBeFalsy();
    });

    it('should handle WeakMap/Set', () => {
      expect(isEmpty(new WeakMap())).toBeFalsy();
      expect(isEmpty(new WeakSet())).toBeFalsy();
    });
  });
});
