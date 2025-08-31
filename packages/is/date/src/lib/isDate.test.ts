import { isDate } from './isDate.js';
import { describe, it, expect } from 'vitest';

describe('isDate', () => {
  it('should return true for valid Date instances', () => {
    const date = new Date();
    expect(isDate(date)).toBe(true);
  });

  it('should return false for non-Date objects', () => {
    expect(isDate({})).toBe(false);
    expect(isDate([])).toBe(false);
    expect(isDate(123)).toBe(false);
    expect(isDate('string')).toBe(false);
    expect(isDate(null)).toBe(false);
    expect(isDate(undefined)).toBe(false);
  });

  it('should return false for invalid Date instances', () => {
    const invalidDate = new Date('invalid');
    expect(isDate(invalidDate)).toBe(false);

    const nanDate = new Date(Number.NaN);
    expect(isDate(nanDate)).toBe(false);
  });

  it('should return true for valid Date strings', () => {
    const dateStr = '2023-10-05T14:48:00.000Z';
    const date = new Date(dateStr);
    expect(isDate(date)).toBe(true);
  });

  it('should return false for invalid Date strings', () => {
    const invalidDateStr = 'not a date';
    const date = new Date(invalidDateStr);
    expect(isDate(date)).toBe(false);
  });

  describe('README.md examples', () => {
    it('should handle Arrays', () => {
      expect(isDate([])).toBeFalsy();
      expect(isDate([1, 2, 3])).toBeFalsy();
      expect(isDate(['a', 'b', 'c'])).toBeFalsy();
    });

    it('should handle BigInts', () => {
      expect(isDate(42n)).toBeFalsy();
      expect(isDate(0n)).toBeFalsy();
      expect(isDate(-0n)).toBeFalsy();
      expect(isDate(-42n)).toBeFalsy();
    });

    it('should handle Booleans', () => {
      expect(isDate(true)).toBeFalsy();
      expect(isDate(false)).toBeFalsy();
    });

    it('should handle a Class', () => {
      expect(isDate(class SomeClass {})).toBeFalsy();
    });

    it('should handle a Dates', () => {
      expect(isDate(new Date())).toBeTruthy();
      expect(isDate(new Date('1970-01-01T12:00:00.000Z'))).toBeTruthy();
      expect(isDate(new Date('2099-12-31'))).toBeTruthy();
    });

    it('should handle a Empty', () => {
      expect(isDate(null)).toBeFalsy();
      expect(isDate(undefined)).toBeFalsy();
    });

    it('should handle Errors', () => {
      expect(isDate(new Error('message'))).toBeFalsy();
    });

    it('should handle Floats', () => {
      expect(isDate(3.14)).toBeFalsy();
      expect(isDate(0.0)).toBeFalsy();
      expect(isDate(-0.0)).toBeFalsy();
      expect(isDate(-3.14)).toBeFalsy();
      expect(isDate(Math.E)).toBeFalsy();
      expect(isDate(Math.PI)).toBeFalsy();
      expect(isDate(Number.MIN_VALUE)).toBeFalsy();
    });

    it('should handle Functions', () => {
      expect(isDate(() => 'function')).toBeFalsy();
      expect(isDate(async () => 'function')).toBeFalsy();
    });

    it('should handle Generators', () => {
      const gen1 = (function* simpleGenerator() {
        yield 1;
      })();
      const gen2 = (async function* asyncGenerator() {
        yield 1;
      })();
      expect(isDate(gen1)).toBeFalsy();
      expect(isDate(gen2)).toBeFalsy();
    });

    it('should handle Generators', () => {
      expect(isDate(new Map())).toBeFalsy();
      expect(isDate(new Map([['key1', 123]]))).toBeFalsy();
      expect(isDate(new Map([['key1', 'value1']]))).toBeFalsy();
    });

    it('should handle Numbers', () => {
      expect(isDate(Number.POSITIVE_INFINITY)).toBeFalsy();
      expect(isDate(Number.MAX_SAFE_INTEGER)).toBeFalsy();
      expect(isDate(Number.MAX_VALUE)).toBeFalsy();
      expect(isDate(3e8)).toBeFalsy();
      expect(isDate(42)).toBeFalsy();
      expect(isDate(1)).toBeFalsy();
      expect(isDate(0)).toBeFalsy();
      expect(isDate(-0)).toBeFalsy();
      expect(isDate(-1)).toBeFalsy();
      expect(isDate(-42)).toBeFalsy();
      expect(isDate(-3e8)).toBeFalsy();
      expect(isDate(Number.MIN_SAFE_INTEGER)).toBeFalsy();
      expect(isDate(Number.NEGATIVE_INFINITY)).toBeFalsy();
      expect(isDate(Number.NaN)).toBeFalsy();
    });

    it('should handle POJOs', () => {
      expect(isDate({})).toBeFalsy();
      expect(isDate({ key: 'string' })).toBeFalsy();
      expect(isDate({ key: 123 })).toBeFalsy();
    });

    it('should handle Promise', () => {
      expect(isDate(new Promise(() => 1))).toBeFalsy();
      expect(isDate(Promise.resolve())).toBeFalsy();
    });

    it('should handle Regular Expression', () => {
      expect(isDate(/[regex]+/gi)).toBeFalsy();
      expect(isDate(new RegExp('d', 'gi'))).toBeFalsy();
    });

    it('should handle Sets', () => {
      expect(isDate(new Set())).toBeFalsy();
      expect(isDate(new Set([1, 2, 3]))).toBeFalsy();
      expect(isDate(new Set(['a', 'b', 'c']))).toBeFalsy();
    });

    it('should handle Strings', () => {
      expect(isDate('')).toBeFalsy();
      expect(isDate('a longer string')).toBeFalsy();
      expect(isDate('1000n')).toBeFalsy();
      expect(isDate('3e8')).toBeFalsy();
      expect(isDate('42')).toBeFalsy();
      expect(isDate('3.14')).toBeFalsy();
      expect(isDate('0')).toBeFalsy();
      expect(isDate('-0')).toBeFalsy();
      expect(isDate('-3.14')).toBeFalsy();
      expect(isDate('-42')).toBeFalsy();
      expect(isDate('-3e8')).toBeFalsy();
      expect(isDate('-1000n')).toBeFalsy();
    });

    it('should handle Symbols', () => {
      expect(isDate(Symbol())).toBeFalsy();
      expect(isDate(Symbol('name'))).toBeFalsy();
    });

    it('should handle This', () => {
      expect(isDate(this)).toBeFalsy();
      expect(isDate(globalThis)).toBeFalsy();
    });

    it('should handle TypedArrays', () => {
      expect(isDate(new Int8Array(2))).toBeFalsy();
      expect(isDate(new Int16Array(2))).toBeFalsy();
      expect(isDate(new Int32Array(2))).toBeFalsy();
      expect(isDate(new Uint8Array(2))).toBeFalsy();
      expect(isDate(new Uint16Array(2))).toBeFalsy();
      expect(isDate(new Uint32Array(2))).toBeFalsy();
      expect(isDate(new Uint8ClampedArray(2))).toBeFalsy();
      expect(isDate(new BigInt64Array(2))).toBeFalsy();
      expect(isDate(new BigUint64Array(2))).toBeFalsy();
      expect(isDate(new Float32Array(2))).toBeFalsy();
      expect(isDate(new Float64Array(2))).toBeFalsy();
      expect(isDate(new SharedArrayBuffer(512))).toBeFalsy();
    });

    it('should handle WeakMap/Set', () => {
      expect(isDate(new WeakMap())).toBeFalsy();
      expect(isDate(new WeakSet())).toBeFalsy();
    });
  });
});
