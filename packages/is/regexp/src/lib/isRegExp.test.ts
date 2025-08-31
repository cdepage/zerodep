import { isRegExp } from './isRegExp';
import { describe, expect, it } from 'vitest';

describe('isRegExp', () => {
  it('should return true for a RegExp instance', () => {
    const regexp = new RegExp('test');
    expect(isRegExp(regexp)).toBe(true);
  });

  it('should return false for non-RegExp values', () => {
    expect(isRegExp(null)).toBe(false);
    expect(isRegExp(undefined)).toBe(false);
    expect(isRegExp('')).toBe(false);
    expect(isRegExp({})).toBe(false);
    expect(isRegExp([])).toBe(false);
    expect(isRegExp(123)).toBe(false);
  });

  it('should return false for RegExp-like objects', () => {
    const regexLike = { test: () => true };
    Object.setPrototypeOf(regexLike, RegExp.prototype);
    expect(isRegExp(regexLike)).toBe(false);
  });

  it('should handle edge cases correctly', () => {
    // Edge case: empty RegExp
    expect(isRegExp(new RegExp(''))).toBe(true);

    // Edge case: global flag
    expect(isRegExp(/test/g)).toBe(true);

    // Edge case: multiline flag
    expect(isRegExp(/test/m)).toBe(true);

    // Edge case: sticky flag
    expect(isRegExp(/test/y)).toBe(true);
  });

  it('should handle input validation correctly', () => {
    // Input validation: undefined
    expect(isRegExp(undefined)).toBe(false);

    // Input validation: null
    expect(isRegExp(null)).toBe(false);

    // Input validation: NaN
    expect(isRegExp(NaN)).toBe(false);
  });

  describe('README.md examples', () => {
    it('should handle Arrays', () => {
      expect(isRegExp([])).toBeFalsy();
      expect(isRegExp([1, 2, 3])).toBeFalsy();
      expect(isRegExp(['a', 'b', 'c'])).toBeFalsy();
    });

    it('should handle BigInts', () => {
      expect(isRegExp(42n)).toBeFalsy();
      expect(isRegExp(0n)).toBeFalsy();
      expect(isRegExp(-0n)).toBeFalsy();
      expect(isRegExp(-42n)).toBeFalsy();
    });

    it('should handle Booleans', () => {
      expect(isRegExp(true)).toBeFalsy();
      expect(isRegExp(false)).toBeFalsy();
    });

    it('should handle a Class', () => {
      expect(isRegExp(class SomeClass {})).toBeFalsy();
    });

    it('should handle a Dates', () => {
      expect(isRegExp(new Date())).toBeFalsy();
      expect(isRegExp(new Date('1970-01-01T12:00:00.000Z'))).toBeFalsy();
      expect(isRegExp(new Date('2099-12-31'))).toBeFalsy();
    });

    it('should handle a Empty', () => {
      expect(isRegExp(null)).toBeFalsy();
      expect(isRegExp(undefined)).toBeFalsy();
    });

    it('should handle Errors', () => {
      expect(isRegExp(new Error('message'))).toBeFalsy();
    });

    it('should handle Floats', () => {
      expect(isRegExp(3.14)).toBeFalsy();
      expect(isRegExp(0.0)).toBeFalsy();
      expect(isRegExp(-0.0)).toBeFalsy();
      expect(isRegExp(-3.14)).toBeFalsy();
      expect(isRegExp(Math.E)).toBeFalsy();
      expect(isRegExp(Math.PI)).toBeFalsy();
      expect(isRegExp(Number.MIN_VALUE)).toBeFalsy();
    });

    it('should handle Functions', () => {
      expect(isRegExp(() => 'function')).toBeFalsy();
      expect(isRegExp(async () => 'function')).toBeFalsy();
    });

    it('should handle Generators', () => {
      const gen1 = (function* simpleGenerator() {
        yield 1;
      })();
      const gen2 = (async function* asyncGenerator() {
        yield 1;
      })();
      expect(isRegExp(gen1)).toBeFalsy();
      expect(isRegExp(gen2)).toBeFalsy();
    });

    it('should handle Maps', () => {
      expect(isRegExp(new Map())).toBeFalsy();
      expect(isRegExp(new Map([['key1', 123]]))).toBeFalsy();
      expect(isRegExp(new Map([['key1', 'value1']]))).toBeFalsy();
    });

    it('should handle Numbers', () => {
      expect(isRegExp(Number.POSITIVE_INFINITY)).toBeFalsy();
      expect(isRegExp(Number.MAX_SAFE_INTEGER)).toBeFalsy();
      expect(isRegExp(Number.MAX_VALUE)).toBeFalsy();
      expect(isRegExp(3e8)).toBeFalsy();
      expect(isRegExp(42)).toBeFalsy();
      expect(isRegExp(1)).toBeFalsy();
      expect(isRegExp(0)).toBeFalsy();
      expect(isRegExp(-0)).toBeFalsy();
      expect(isRegExp(-1)).toBeFalsy();
      expect(isRegExp(-42)).toBeFalsy();
      expect(isRegExp(-3e8)).toBeFalsy();
      expect(isRegExp(Number.MIN_SAFE_INTEGER)).toBeFalsy();
      expect(isRegExp(Number.NEGATIVE_INFINITY)).toBeFalsy();
      expect(isRegExp(Number.NaN)).toBeFalsy();
    });

    it('should handle POJOs', () => {
      expect(isRegExp({})).toBeFalsy();
      expect(isRegExp({ key: 'string' })).toBeFalsy();
      expect(isRegExp({ key: 123 })).toBeFalsy();
    });

    it('should handle Promise', () => {
      expect(isRegExp(new Promise(() => 1))).toBeFalsy();
      expect(isRegExp(Promise.resolve())).toBeFalsy();
    });

    it('should handle Regular Expression', () => {
      expect(isRegExp(/[regexp]+/gi)).toBeTruthy();
      expect(isRegExp(new RegExp('d', 'gi'))).toBeTruthy();
    });

    it('should handle Sets', () => {
      expect(isRegExp(new Set())).toBeFalsy();
      expect(isRegExp(new Set([1, 2, 3]))).toBeFalsy();
      expect(isRegExp(new Set(['a', 'b', 'c']))).toBeFalsy();
    });

    it('should handle Strings', () => {
      expect(isRegExp('')).toBeFalsy();
      expect(isRegExp('a longer string')).toBeFalsy();
      expect(isRegExp('1000n')).toBeFalsy();
      expect(isRegExp('3e8')).toBeFalsy();
      expect(isRegExp('42')).toBeFalsy();
      expect(isRegExp('3.14')).toBeFalsy();
      expect(isRegExp('0')).toBeFalsy();
      expect(isRegExp('-0')).toBeFalsy();
      expect(isRegExp('-3.14')).toBeFalsy();
      expect(isRegExp('-42')).toBeFalsy();
      expect(isRegExp('-3e8')).toBeFalsy();
      expect(isRegExp('-1000n')).toBeFalsy();
    });

    it('should handle Symbols', () => {
      expect(isRegExp(Symbol())).toBeFalsy();
      expect(isRegExp(Symbol('name'))).toBeFalsy();
    });

    it('should handle This', () => {
      expect(isRegExp(this)).toBeFalsy();
      expect(isRegExp(globalThis)).toBeFalsy();
    });

    it('should handle TypedArrays', () => {
      expect(isRegExp(new Int8Array(2))).toBeFalsy();
      expect(isRegExp(new Int16Array(2))).toBeFalsy();
      expect(isRegExp(new Int32Array(2))).toBeFalsy();
      expect(isRegExp(new Uint8Array(2))).toBeFalsy();
      expect(isRegExp(new Uint16Array(2))).toBeFalsy();
      expect(isRegExp(new Uint32Array(2))).toBeFalsy();
      expect(isRegExp(new Uint8ClampedArray(2))).toBeFalsy();
      expect(isRegExp(new BigInt64Array(2))).toBeFalsy();
      expect(isRegExp(new BigUint64Array(2))).toBeFalsy();
      expect(isRegExp(new Float32Array(2))).toBeFalsy();
      expect(isRegExp(new Float64Array(2))).toBeFalsy();
      expect(isRegExp(new SharedArrayBuffer(512))).toBeFalsy();
    });

    it('should handle WeakMap/Set', () => {
      expect(isRegExp(new WeakMap())).toBeFalsy();
      expect(isRegExp(new WeakSet())).toBeFalsy();
    });
  });
});
