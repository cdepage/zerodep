/* eslint-disable no-case-declarations */
import {ZeroDepError} from '@zerodep/errors';

const getType = Object.prototype.toString;

export const isEqual = (val1: unknown, val2: unknown): boolean => {
  try {
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
            // equal arrays have to have the same values (optionally in a different order)
            // - sorting the arrays makes the nested loops below faster
            // time complexity: linear - O(n)
            // - may be linearithmic - O(n log n) if there are many thousands of values or deep nesting (this is a language issue when sorting)
            const aClone = [...a].sort();
            const bClone = [...b].sort();

            // time complexity: linearithmic - O(n log n)
            for (const aVal of aClone) {
              for (const bNdx in bClone) {
                if (compare(aVal, bClone[bNdx])) {
                  bClone.splice(Number(bNdx), 1);
                  break;
                }
              }
            }
            // any remaining bClone values means a did not find all of its values in b
            return bClone.length === 0;
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
            a.name === b.name &&
            a.message === b.message &&
            typeof a === typeof b
          );

        // Converting these to strings allows for easy comparison
        case 'Function':
        case 'RegExp':
          // time complexity: constant - O(1)
          return `${a}` === `${b}`;

        // CAUTION: this is recursive for nested object values, may blow-up call stack
        case 'Object':
          // time complexity: linear - O(n)
          // - may be superlinear - O(n log n) if there are many thousands of properties
          const keysA = Object.keys(a);
          const keysB = Object.keys(b);

          // equal objects must have the same length of keys
          // time complexity: constant - O(1)
          if (keysA.length === keysB.length) {
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
          // time complexity: linear - O(n)
          const objA = Object.fromEntries(a);
          const objB = Object.fromEntries(b);
          return compare(objA, objB);

        // CAUTION: this is recursive for nested set values, may blow-up call stack
        case 'Set':
          // time complexity: linear - O(n)
          const arrA = [...a];
          const arrB = [...b];
          return compare(arrA, arrB);

        // Typed Arrays
        case 'Int8Array':
        case 'Uint8Array':
        case 'Uint8ClampedArray':
        case 'Int16Array':
        case 'Uint16Array':
        case 'Int32Array':
        case 'Uint32Array':
        case 'Float32Array':
        case 'Float64Array':
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
          // time complexity: constant - O(1)
          return false;

        // These values (and any other unidentified types) cannot be compared
        case 'Symbol': // every symbol is unique by design
        case 'WeakMap': // cannot iterate, cannot compare
        case 'WeakSet': // cannot iterate, cannot compare
        default:
          const error = new ZeroDepError(`Cannot compare ${typeA} values`);
          error.value = a;
          throw error;
      }
    };

    return compare(val1, val2);
  } catch (err: unknown) {
    if (err instanceof ZeroDepError) {
      throw err;
    }
    // anything that isn't handled by the above code is definitely false
    return false;
  }
};
