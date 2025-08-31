import { isBigInt } from './isBigInt.js';
import { describe, expect, it } from 'vitest';

describe('isBigInt', () => {
  it('should return true for BigInt values', () => {
    const bigIntValue = BigInt(123);
    expect(isBigInt(bigIntValue)).toBe(true);
  });

  it('should return false for non-BigInt values', () => {
    expect(isBigInt(123)).toBe(false); // Number
    expect(isBigInt('123')).toBe(false); // String
    expect(isBigInt(true)).toBe(false); // Boolean
    expect(isBigInt(null)).toBe(false); // Null
    expect(isBigInt(undefined)).toBe(false); // Undefined
    expect(isBigInt({})).toBe(false); // Object
    expect(isBigInt([])).toBe(false); // Array
  });

  it('should handle edge cases gracefully', () => {
    const maxSafeInteger = BigInt(Number.MAX_SAFE_INTEGER);
    const minSafeInteger = BigInt(Number.MIN_SAFE_INTEGER);

    expect(isBigInt(maxSafeInteger)).toBe(true);
    expect(isBigInt(minSafeInteger)).toBe(true);

    // Test with very large and very small BigInt values
    const largeBigInt = BigInt('9' + '0'.repeat(100));
    const smallBigInt = BigInt('-9' + '0'.repeat(100));

    expect(isBigInt(largeBigInt)).toBe(true);
    expect(isBigInt(smallBigInt)).toBe(true);

    // Test with non-numeric strings that might cause issues
    expect(isBigInt(BigInt('0xFF'))).toBe(true); // Hexadecimal
    expect(isBigInt(BigInt('0b1010'))).toBe(true); // Binary
  });

  it('should handle exceptions gracefully', () => {
    const proxyHandler = {
      get: () => {
        throw new Error('Proxy trap error');
      },
    };
    const proxyValue = new Proxy({}, proxyHandler);

    expect(isBigInt(proxyValue)).toBe(false);
  });

  describe('README.md examples', () => {
    it('should handle Arrays', () => {
      expect(isBigInt([])).toBeFalsy();
      expect(isBigInt([1, 2, 3])).toBeFalsy();
      expect(isBigInt(['a', 'b', 'c'])).toBeFalsy();
    });

    it('should handle BigInts', () => {
      expect(isBigInt(42n)).toBeTruthy();
      expect(isBigInt(0n)).toBeTruthy();
      expect(isBigInt(-0n)).toBeTruthy();
      expect(isBigInt(-42n)).toBeTruthy();
    });

    it('should handle Booleans', () => {
      expect(isBigInt(true)).toBeFalsy();
      expect(isBigInt(false)).toBeFalsy();
    });

    it('should handle a Class', () => {
      expect(isBigInt(class SomeClass {})).toBeFalsy();
    });

    it('should handle a Dates', () => {
      expect(isBigInt(new Date())).toBeFalsy();
      expect(isBigInt(new Date('1970-01-01T12:00:00.000Z'))).toBeFalsy();
      expect(isBigInt(new Date('2099-12-31'))).toBeFalsy();
    });

    it('should handle a Empty', () => {
      expect(isBigInt(null)).toBeFalsy();
      expect(isBigInt(undefined)).toBeFalsy();
    });

    it('should handle Errors', () => {
      expect(isBigInt(new Error('message'))).toBeFalsy();
    });

    it('should handle Floats', () => {
      expect(isBigInt(3.14)).toBeFalsy();
      expect(isBigInt(0.0)).toBeFalsy();
      expect(isBigInt(-0.0)).toBeFalsy();
      expect(isBigInt(-3.14)).toBeFalsy();
      expect(isBigInt(Math.E)).toBeFalsy();
      expect(isBigInt(Math.PI)).toBeFalsy();
      expect(isBigInt(Number.MIN_VALUE)).toBeFalsy();
    });

    it('should handle Functions', () => {
      expect(isBigInt(() => 'function')).toBeFalsy();
      expect(isBigInt(async () => 'function')).toBeFalsy();
    });

    it('should handle Generators', () => {
      const gen1 = (function* simpleGenerator() {
        yield 1;
      })();
      const gen2 = (async function* asyncGenerator() {
        yield 1;
      })();
      expect(isBigInt(gen1)).toBeFalsy();
      expect(isBigInt(gen2)).toBeFalsy();
    });

    it('should handle Generators', () => {
      expect(isBigInt(new Map())).toBeFalsy();
      expect(isBigInt(new Map([['key1', 123]]))).toBeFalsy();
      expect(isBigInt(new Map([['key1', 'value1']]))).toBeFalsy();
    });

    it('should handle Numbers', () => {
      expect(isBigInt(Number.POSITIVE_INFINITY)).toBeFalsy();
      expect(isBigInt(Number.MAX_SAFE_INTEGER)).toBeFalsy();
      expect(isBigInt(Number.MAX_VALUE)).toBeFalsy();
      expect(isBigInt(3e8)).toBeFalsy();
      expect(isBigInt(42)).toBeFalsy();
      expect(isBigInt(1)).toBeFalsy();
      expect(isBigInt(0)).toBeFalsy();
      expect(isBigInt(-0)).toBeFalsy();
      expect(isBigInt(-1)).toBeFalsy();
      expect(isBigInt(-42)).toBeFalsy();
      expect(isBigInt(-3e8)).toBeFalsy();
      expect(isBigInt(Number.MIN_SAFE_INTEGER)).toBeFalsy();
      expect(isBigInt(Number.NEGATIVE_INFINITY)).toBeFalsy();
      expect(isBigInt(Number.NaN)).toBeFalsy();
    });

    it('should handle POJOs', () => {
      expect(isBigInt({})).toBeFalsy();
      expect(isBigInt({ key: 'string' })).toBeFalsy();
      expect(isBigInt({ key: 123 })).toBeFalsy();
    });

    it('should handle Promise', () => {
      expect(isBigInt(new Promise(() => 1))).toBeFalsy();
      expect(isBigInt(Promise.resolve())).toBeFalsy();
    });

    it('should handle Regular Expression', () => {
      expect(isBigInt(/[regex]+/gi)).toBeFalsy();
      expect(isBigInt(new RegExp('d', 'gi'))).toBeFalsy();
    });

    it('should handle Sets', () => {
      expect(isBigInt(new Set())).toBeFalsy();
      expect(isBigInt(new Set([1, 2, 3]))).toBeFalsy();
      expect(isBigInt(new Set(['a', 'b', 'c']))).toBeFalsy();
    });

    it('should handle Strings', () => {
      expect(isBigInt('')).toBeFalsy();
      expect(isBigInt('a longer string')).toBeFalsy();
      expect(isBigInt('1000n')).toBeFalsy();
      expect(isBigInt('3e8')).toBeFalsy();
      expect(isBigInt('42')).toBeFalsy();
      expect(isBigInt('3.14')).toBeFalsy();
      expect(isBigInt('0')).toBeFalsy();
      expect(isBigInt('-0')).toBeFalsy();
      expect(isBigInt('-3.14')).toBeFalsy();
      expect(isBigInt('-42')).toBeFalsy();
      expect(isBigInt('-3e8')).toBeFalsy();
      expect(isBigInt('-1000n')).toBeFalsy();
    });

    it('should handle Symbols', () => {
      expect(isBigInt(Symbol())).toBeFalsy();
      expect(isBigInt(Symbol('name'))).toBeFalsy();
    });

    it('should handle This', () => {
      expect(isBigInt(this)).toBeFalsy();
      expect(isBigInt(globalThis)).toBeFalsy();
    });

    it('should handle TypedArrays', () => {
      expect(isBigInt(new Int8Array(2))).toBeFalsy();
      expect(isBigInt(new Int16Array(2))).toBeFalsy();
      expect(isBigInt(new Int32Array(2))).toBeFalsy();
      expect(isBigInt(new Uint8Array(2))).toBeFalsy();
      expect(isBigInt(new Uint16Array(2))).toBeFalsy();
      expect(isBigInt(new Uint32Array(2))).toBeFalsy();
      expect(isBigInt(new Uint8ClampedArray(2))).toBeFalsy();
      expect(isBigInt(new BigInt64Array(2))).toBeFalsy();
      expect(isBigInt(new BigUint64Array(2))).toBeFalsy();
      expect(isBigInt(new Float32Array(2))).toBeFalsy();
      expect(isBigInt(new Float64Array(2))).toBeFalsy();
      expect(isBigInt(new SharedArrayBuffer(512))).toBeFalsy();
    });

    it('should handle WeakMap/Set', () => {
      expect(isBigInt(new WeakMap())).toBeFalsy();
      expect(isBigInt(new WeakSet())).toBeFalsy();
    });
  });
});
