# @zerodep/to-string

[![version](https://img.shields.io/npm/v/@zerodep/to-string?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/to-string)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A utility to convert stringifiable values to a string; this will use native `toString()` capabilities, if available. Invalid values will cause a `ZeroDepError` to be thrown.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/to/string) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { toString } from '@zerodep/to-string';
// or
const { toString } = require('@zerodep/to-string');
```

### Use Cases

```javascript
// booleans
toString(true); // "true"
toString(false); // "false"

// numbers
toString(42); // "42"
toString(3.14); // "3.14"
toString(100e10); // "1000000000000"
toString(Number.NaN); // "NaN"
toString(Number.POSITIVE_INFINITY); // "Infinity"

// bigint
toString(8675309n); // "8675309"

// strings
toString('Some string'); // "Some string"

// null + undefined
toString(null); // ""
toString(undefined); // ""

// objects
toString({}); // "{}";
toString({ a: 'a', b: 'b' }); // "{\"a\":\"a\",\"b\":\"b\"}"

// arrays
toString([]); // "[]"
toString(['a', 'b', 'c']); // "[\"a\",\"b\",\"c\"]"

// dates
toString(new Date('2022-02-24')); // "2022-02-24T00:00:00.000Z"

// Sets
toString(new Set()); // "[]"
toString(new Set([1, 2, 3])); // "[1, 2, 3]"

// Maps
toString(new Map()); // "{}"
toString(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // "{\"a\":1, \"b\":2 }

// invalid values
toString(new Promise()); // throws ZeroDepError: Cannot convert to JSON
```
