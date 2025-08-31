import { isGenerator } from './isGenerator.js';
import { describe, expect, it } from 'vitest';

// Helper function to create a generator
function* simpleGenerator() {
  yield 1;
}

// Helper function to create an async generator
async function* asyncGenerator() {
  yield 1;
}

describe('isGenerator', () => {
  it('should return true for a Generator object', () => {
    const gen = simpleGenerator();
    expect(isGenerator(gen)).toBe(true);
  });

  it('should return true for an AsyncGenerator object', async () => {
    const gen = asyncGenerator();
    expect(isGenerator(gen)).toBe(true);
  });

  it('should return false for a non-generator object', () => {
    expect(isGenerator({})).toBe(false);
  });

  it('should return false for null', () => {
    expect(isGenerator(null)).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isGenerator(undefined)).toBe(false);
  });

  it('should return false for a string', () => {
    expect(isGenerator('')).toBe(false);
  });

  it('should return false for a number', () => {
    expect(isGenerator(123)).toBe(false);
  });

  it('should return false for an array', () => {
    expect(isGenerator([])).toBe(false);
  });

  it('should return false for a function', () => {
    expect(isGenerator(() => 1)).toBe(false);
  });

  it('should handle objects that throw on Object.prototype.toString.call', () => {
    const problematicObject = {
      toString: () => {
        throw new Error('Problematic object');
      },
    };
    expect(isGenerator(problematicObject)).toBe(false);
  });

  describe('README.md examples', () => {
    it('should handle Arrays', () => {
      expect(isGenerator([])).toBeFalsy();
      expect(isGenerator([1, 2, 3])).toBeFalsy();
      expect(isGenerator(['a', 'b', 'c'])).toBeFalsy();
    });

    it('should handle BigInts', () => {
      expect(isGenerator(42n)).toBeFalsy();
      expect(isGenerator(0n)).toBeFalsy();
      expect(isGenerator(-0n)).toBeFalsy();
      expect(isGenerator(-42n)).toBeFalsy();
    });

    it('should handle Booleans', () => {
      expect(isGenerator(true)).toBeFalsy();
      expect(isGenerator(false)).toBeFalsy();
    });

    it('should handle a Class', () => {
      expect(isGenerator(class SomeClass {})).toBeFalsy();
    });

    it('should handle a Dates', () => {
      expect(isGenerator(new Date())).toBeFalsy();
      expect(isGenerator(new Date('1970-01-01T12:00:00.000Z'))).toBeFalsy();
      expect(isGenerator(new Date('2099-12-31'))).toBeFalsy();
    });

    it('should handle a Empty', () => {
      expect(isGenerator(null)).toBeFalsy();
      expect(isGenerator(undefined)).toBeFalsy();
    });

    it('should handle Errors', () => {
      expect(isGenerator(new Error('message'))).toBeFalsy();
    });

    it('should handle Floats', () => {
      expect(isGenerator(3.14)).toBeFalsy();
      expect(isGenerator(0.0)).toBeFalsy();
      expect(isGenerator(-0.0)).toBeFalsy();
      expect(isGenerator(-3.14)).toBeFalsy();
      expect(isGenerator(Math.E)).toBeFalsy();
      expect(isGenerator(Math.PI)).toBeFalsy();
      expect(isGenerator(Number.MIN_VALUE)).toBeFalsy();
    });

    it('should handle Functions', () => {
      expect(isGenerator(() => 'function')).toBeFalsy();
      expect(isGenerator(async () => 'function')).toBeFalsy();
    });

    it('should handle Generators', () => {
      const gen1 = (function* simpleGenerator() {
        yield 1;
      })();
      expect(isGenerator(gen1)).toBeTruthy();

      const gen2 = (async function* asyncGenerator() {
        yield 1;
      })();
      expect(isGenerator(gen2)).toBeTruthy();
    });

    it('should handle Generators', () => {
      expect(isGenerator(new Map())).toBeFalsy();
      expect(isGenerator(new Map([['key1', 123]]))).toBeFalsy();
      expect(isGenerator(new Map([['key1', 'value1']]))).toBeFalsy();
    });

    it('should handle Numbers', () => {
      expect(isGenerator(Number.POSITIVE_INFINITY)).toBeFalsy();
      expect(isGenerator(Number.MAX_SAFE_INTEGER)).toBeFalsy();
      expect(isGenerator(Number.MAX_VALUE)).toBeFalsy();
      expect(isGenerator(3e8)).toBeFalsy();
      expect(isGenerator(42)).toBeFalsy();
      expect(isGenerator(1)).toBeFalsy();
      expect(isGenerator(0)).toBeFalsy();
      expect(isGenerator(-0)).toBeFalsy();
      expect(isGenerator(-1)).toBeFalsy();
      expect(isGenerator(-42)).toBeFalsy();
      expect(isGenerator(-3e8)).toBeFalsy();
      expect(isGenerator(Number.MIN_SAFE_INTEGER)).toBeFalsy();
      expect(isGenerator(Number.NEGATIVE_INFINITY)).toBeFalsy();
      expect(isGenerator(Number.NaN)).toBeFalsy();
    });

    it('should handle POJOs', () => {
      expect(isGenerator({})).toBeFalsy();
      expect(isGenerator({ key: 'string' })).toBeFalsy();
      expect(isGenerator({ key: 123 })).toBeFalsy();
    });

    it('should handle Promise', () => {
      expect(isGenerator(new Promise(() => 1))).toBeFalsy();
      expect(isGenerator(Promise.resolve())).toBeFalsy();
    });

    it('should handle Regular Expression', () => {
      expect(isGenerator(/[regex]+/gi)).toBeFalsy();
      expect(isGenerator(new RegExp('d', 'gi'))).toBeFalsy();
    });

    it('should handle Sets', () => {
      expect(isGenerator(new Set())).toBeFalsy();
      expect(isGenerator(new Set([1, 2, 3]))).toBeFalsy();
      expect(isGenerator(new Set(['a', 'b', 'c']))).toBeFalsy();
    });

    it('should handle Strings', () => {
      expect(isGenerator('')).toBeFalsy();
      expect(isGenerator('a longer string')).toBeFalsy();
      expect(isGenerator('1000n')).toBeFalsy();
      expect(isGenerator('3e8')).toBeFalsy();
      expect(isGenerator('42')).toBeFalsy();
      expect(isGenerator('3.14')).toBeFalsy();
      expect(isGenerator('0')).toBeFalsy();
      expect(isGenerator('-0')).toBeFalsy();
      expect(isGenerator('-3.14')).toBeFalsy();
      expect(isGenerator('-42')).toBeFalsy();
      expect(isGenerator('-3e8')).toBeFalsy();
      expect(isGenerator('-1000n')).toBeFalsy();
    });

    it('should handle Symbols', () => {
      expect(isGenerator(Symbol())).toBeFalsy();
      expect(isGenerator(Symbol('name'))).toBeFalsy();
    });

    it('should handle This', () => {
      expect(isGenerator(this)).toBeFalsy();
      expect(isGenerator(globalThis)).toBeFalsy();
    });

    it('should handle TypedArrays', () => {
      expect(isGenerator(new Int8Array(2))).toBeFalsy();
      expect(isGenerator(new Int16Array(2))).toBeFalsy();
      expect(isGenerator(new Int32Array(2))).toBeFalsy();
      expect(isGenerator(new Uint8Array(2))).toBeFalsy();
      expect(isGenerator(new Uint16Array(2))).toBeFalsy();
      expect(isGenerator(new Uint32Array(2))).toBeFalsy();
      expect(isGenerator(new Uint8ClampedArray(2))).toBeFalsy();
      expect(isGenerator(new BigInt64Array(2))).toBeFalsy();
      expect(isGenerator(new BigUint64Array(2))).toBeFalsy();
      expect(isGenerator(new Float32Array(2))).toBeFalsy();
      expect(isGenerator(new Float64Array(2))).toBeFalsy();
      expect(isGenerator(new SharedArrayBuffer(512))).toBeFalsy();
    });

    it('should handle WeakMap/Set', () => {
      expect(isGenerator(new WeakMap())).toBeFalsy();
      expect(isGenerator(new WeakSet())).toBeFalsy();
    });
  });
});
