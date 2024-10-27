/* eslint-disable no-case-declarations, sonarjs/cognitive-complexity */
import { ZeroDepError } from '@zerodep/errors';

const getType = Object.prototype.toString;

// main comparison function
const compare = (a: any, b: any): boolean => {
  // use native check for positive equality use case, it handles:
  // - strings & numbers (including new String() or new Number() constructs)
  // - objects that reference the same memory space
  // - javascript quirks like null, undefined, NaN etc...
  // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
  // time complexity: constant - O(1)
  if (Object.is(a, b)) {
    return true;
  }

  // fail fast: null is an object, anything vs null is unequal (two nulls would be handled above)
  // time complexity: constant - O(1)
  if (a == null || b == null) {
    return false;
  }

  // fail fast: values of different types cannot be equal
  // time complexity: constant - O(1)
  const typeA = Array.isArray(a) ? 'Array' : getType.call(a).slice(8, -1);
  const typeB = Array.isArray(b) ? 'Array' : getType.call(b).slice(8, -1);
  if (typeA !== typeB) {
    return false;
  }

  // comparison is now between two identical types
  switch (typeA) {
    // CAUTION: this is recursive for nested array items, may blow-up call stack
    case 'Array':
      // equal arrays have to have the same length
      // time complexity: constant - O(1)
      if (a.length === b.length) {
        // equal arrays have to have the same values in identical order
        // time complexity: linear - O(n)
        for (const ndx in a) {
          if (!compare(a[ndx], b[ndx])) {
            return false;
          }
        }
        return true;
      }
      return false;

    // Array Buffers
    case 'ArrayBuffer':
      // Array Buffers can only be equal if they are of the same length & byte-for-byte identical
      // time complexity: constant - O(1)
      const dvA = new DataView(a);
      const dvB = new DataView(b);
      return compare(dvA, dvB);

    // Booleans can be constructed via new Boolean()
    case 'Boolean':
      // time complexity: constant - O(1)
      return !!a === !!b;

    // Data Views
    case 'DataView':
      // Data Views can only be equal if they are of the same length
      // time complexity: constant - O(1)
      if (a.byteLength === b.byteLength) {
        // and are byte-for-byte identical
        // time complexity: linear - O(n)
        for (let i = 0; i < a.byteLength; i++) {
          if (a.getInt8(i) !== b.getInt8(i)) {
            return false;
          }
        }
        return true;
      }
      return false;

    // Dates can be converted to milliseconds than are easily compared
    case 'Date':
      // time complexity: constant - O(1)
      return +a === +b;

    // Errors are only reasonably compared for equality based on developers
    // not messing with the prototype chain in a negative manner
    case 'Error':
      // time complexity: constant - O(1)
      return (
        a.name === b.name && a.message === b.message && typeof a === typeof b
      );

    // Converting these to strings allows for easy comparison
    case 'Function':
    case 'RegExp':
      // time complexity: constant - O(1)
      // loose equality check is required
      return `${a}` == `${b}`;

    // CAUTION: this is recursive for nested object values, may blow-up call stack
    case 'Object':
      // time complexity: linear - O(n)
      // - may be superlinear - O(n log n) if there are many thousands of properties
      const keysA = Object.keys(a);
      const keysB = Object.keys(b);

      // equal objects must have the same length of keys
      // time complexity: constant - O(1)
      if (keysA.length === keysB.length) {
        // sorting keys allows for comparison of the keys
        // time complexity: linear - O(n)
        keysA.sort();
        keysB.sort();

        // equal objects have the same keys
        // time complexity: linear - O(n)
        if (compare(keysA, keysB)) {
          // equal objects have the same key:value tuples
          // time complexity: linear - O(n)
          return !keysA.some((key) => !compare(a[key], b[key]));
        }
      }
      return false;

    // CAUTION: this is recursive for nested map values, may blow-up call stack
    case 'Map':
      // time complexity: constant - O(1)
      if (a.size !== b.size) {
        return false;
      }

      // compare key lengths
      // time complexity: linear - O(n)
      const mapKeysA = [...a.keys()];
      const mapKeysB = [...b.keys()];
      if (mapKeysA.length !== mapKeysB.length) {
        return false;
      }

      // compare keys
      // time complexity: linear - O(n)
      if (!compare(mapKeysA, mapKeysB)) {
        return false;
      }

      // compare values
      // time complexity: linear - O(n)
      const mapValsA = [...a.values()];
      const mapValsB = [...b.values()];
      return compare(mapValsA, mapValsB);

    // CAUTION: this is recursive for nested set values, may blow-up call stack
    case 'Set':
      // time complexity: linear - O(n)
      const arrA = [...a].sort();
      const arrB = [...b].sort();
      return compare(arrA, arrB);

    // Typed Arrays
    case 'BigInt64Array':
    case 'BigUint64Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'Int16Array':
    case 'Int32Array':
    case 'Int8Array':
    case 'Uint16Array':
    case 'Uint32Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
      // Typed Arrays can only be equal if they are of the same length
      // time complexity: constant - O(1)
      if (a.byteLength === b.byteLength) {
        // and are byte-for-byte identical
        // time complexity: linear - O(n)
        return a.every((value: number, ndx: number) => value === b[ndx]);
      }
      return false;

    // These values were correctly identified in the Object.is() block above
    case 'BigInt':
    case 'Number':
    case 'Promise':
    case 'String':
    case 'Generator':
      // time complexity: constant - O(1)
      return false;

    // These values (and any other unidentified types) cannot be compared
    case 'Symbol': // every symbol is unique by design
    case 'WeakMap': // cannot iterate, cannot compare
    case 'WeakSet': // cannot iterate, cannot compare
    case 'SharedArrayBuffer': // cannot iterate, cannot compare
    default:
      const error = new ZeroDepError(`Cannot compare ${typeA} values`);
      error.value = a;
      throw error;
  }
};

export const isEqual = (val1: unknown, val2: unknown): boolean => {
  try {
    return compare(val1, val2);
  } catch (err: unknown) {
    if (err instanceof ZeroDepError) {
      throw err;
    }
    // anything that isn't handled by the above code is definitely false
    return false;
  }
};
