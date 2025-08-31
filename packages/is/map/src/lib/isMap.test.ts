import { isMap } from './isMap.js';
import { describe, it, expect } from 'vitest';

describe('isMap', () => {
  it('should return true for Map instances', () => {
    const map = new Map();
    expect(isMap(map)).toBe(true);
  });

  it('should return false for non-Map objects', () => {
    const obj = {};
    expect(isMap(obj)).toBe(false);
  });

  it('should return false for null', () => {
    expect(isMap(null)).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isMap(undefined)).toBe(false);
  });

  it('should return false for arrays', () => {
    const arr: unknown[] = [];
    expect(isMap(arr)).toBe(false);
  });

  it('should return false for strings', () => {
    const str = 'string';
    expect(isMap(str)).toBe(false);
  });

  it('should return false for numbers', () => {
    const num = 42;
    expect(isMap(num)).toBe(false);
  });

  it('should return false for booleans', () => {
    const bool = true;
    expect(isMap(bool)).toBe(false);
  });

  it('should return false for functions', () => {
    const fn = () => 1;
    expect(isMap(fn)).toBe(false);
  });

  describe('README.md examples', () => {
    it('should handle Arrays', () => {
      expect(isMap([])).toBeFalsy();
      expect(isMap([1, 2, 3])).toBeFalsy();
      expect(isMap(['a', 'b', 'c'])).toBeFalsy();
    });

    it('should handle BigInts', () => {
      expect(isMap(42n)).toBeFalsy();
      expect(isMap(0n)).toBeFalsy();
      expect(isMap(-0n)).toBeFalsy();
      expect(isMap(-42n)).toBeFalsy();
    });

    it('should handle Booleans', () => {
      expect(isMap(true)).toBeFalsy();
      expect(isMap(false)).toBeFalsy();
    });

    it('should handle a Class', () => {
      expect(isMap(class SomeClass {})).toBeFalsy();
    });

    it('should handle a Dates', () => {
      expect(isMap(new Date())).toBeFalsy();
      expect(isMap(new Date('1970-01-01T12:00:00.000Z'))).toBeFalsy();
      expect(isMap(new Date('2099-12-31'))).toBeFalsy();
    });

    it('should handle a Empty', () => {
      expect(isMap(null)).toBeFalsy();
      expect(isMap(undefined)).toBeFalsy();
    });

    it('should handle Errors', () => {
      expect(isMap(new Error('message'))).toBeFalsy();
    });

    it('should handle Floats', () => {
      expect(isMap(3.14)).toBeFalsy();
      expect(isMap(0.0)).toBeFalsy();
      expect(isMap(-0.0)).toBeFalsy();
      expect(isMap(-3.14)).toBeFalsy();
      expect(isMap(Math.E)).toBeFalsy();
      expect(isMap(Math.PI)).toBeFalsy();
      expect(isMap(Number.MIN_VALUE)).toBeFalsy();
    });

    it('should handle Functions', () => {
      expect(isMap(() => 'function')).toBeFalsy();
      expect(isMap(async () => 'function')).toBeFalsy();
    });

    it('should handle Generators', () => {
      const gen1 = (function* simpleGenerator() {
        yield 1;
      })();
      const gen2 = (async function* asyncGenerator() {
        yield 1;
      })();
      expect(isMap(gen1)).toBeFalsy();
      expect(isMap(gen2)).toBeFalsy();
    });

    it('should handle Maps', () => {
      expect(isMap(new Map())).toBeTruthy();
      expect(isMap(new Map([['key1', 123]]))).toBeTruthy();
      expect(isMap(new Map([['key1', 'value1']]))).toBeTruthy();
    });

    it('should handle Numbers', () => {
      expect(isMap(Number.POSITIVE_INFINITY)).toBeFalsy();
      expect(isMap(Number.MAX_SAFE_INTEGER)).toBeFalsy();
      expect(isMap(Number.MAX_VALUE)).toBeFalsy();
      expect(isMap(3e8)).toBeFalsy();
      expect(isMap(42)).toBeFalsy();
      expect(isMap(1)).toBeFalsy();
      expect(isMap(0)).toBeFalsy();
      expect(isMap(-0)).toBeFalsy();
      expect(isMap(-1)).toBeFalsy();
      expect(isMap(-42)).toBeFalsy();
      expect(isMap(-3e8)).toBeFalsy();
      expect(isMap(Number.MIN_SAFE_INTEGER)).toBeFalsy();
      expect(isMap(Number.NEGATIVE_INFINITY)).toBeFalsy();
      expect(isMap(Number.NaN)).toBeFalsy();
    });

    it('should handle POJOs', () => {
      expect(isMap({})).toBeFalsy();
      expect(isMap({ key: 'string' })).toBeFalsy();
      expect(isMap({ key: 123 })).toBeFalsy();
    });

    it('should handle Promise', () => {
      expect(isMap(new Promise(() => 1))).toBeFalsy();
      expect(isMap(Promise.resolve())).toBeFalsy();
    });

    it('should handle Regular Expression', () => {
      expect(isMap(/[regex]+/gi)).toBeFalsy();
      expect(isMap(new RegExp('d', 'gi'))).toBeFalsy();
    });

    it('should handle Sets', () => {
      expect(isMap(new Set())).toBeFalsy();
      expect(isMap(new Set([1, 2, 3]))).toBeFalsy();
      expect(isMap(new Set(['a', 'b', 'c']))).toBeFalsy();
    });

    it('should handle Strings', () => {
      expect(isMap('')).toBeFalsy();
      expect(isMap('a longer string')).toBeFalsy();
      expect(isMap('1000n')).toBeFalsy();
      expect(isMap('3e8')).toBeFalsy();
      expect(isMap('42')).toBeFalsy();
      expect(isMap('3.14')).toBeFalsy();
      expect(isMap('0')).toBeFalsy();
      expect(isMap('-0')).toBeFalsy();
      expect(isMap('-3.14')).toBeFalsy();
      expect(isMap('-42')).toBeFalsy();
      expect(isMap('-3e8')).toBeFalsy();
      expect(isMap('-1000n')).toBeFalsy();
    });

    it('should handle Symbols', () => {
      expect(isMap(Symbol())).toBeFalsy();
      expect(isMap(Symbol('name'))).toBeFalsy();
    });

    it('should handle This', () => {
      expect(isMap(this)).toBeFalsy();
      expect(isMap(globalThis)).toBeFalsy();
    });

    it('should handle TypedArrays', () => {
      expect(isMap(new Int8Array(2))).toBeFalsy();
      expect(isMap(new Int16Array(2))).toBeFalsy();
      expect(isMap(new Int32Array(2))).toBeFalsy();
      expect(isMap(new Uint8Array(2))).toBeFalsy();
      expect(isMap(new Uint16Array(2))).toBeFalsy();
      expect(isMap(new Uint32Array(2))).toBeFalsy();
      expect(isMap(new Uint8ClampedArray(2))).toBeFalsy();
      expect(isMap(new BigInt64Array(2))).toBeFalsy();
      expect(isMap(new BigUint64Array(2))).toBeFalsy();
      expect(isMap(new Float32Array(2))).toBeFalsy();
      expect(isMap(new Float64Array(2))).toBeFalsy();
      expect(isMap(new SharedArrayBuffer(512))).toBeFalsy();
    });

    it('should handle WeakMap/Set', () => {
      expect(isMap(new WeakMap())).toBeFalsy();
      expect(isMap(new WeakSet())).toBeFalsy();
    });
  });
});
