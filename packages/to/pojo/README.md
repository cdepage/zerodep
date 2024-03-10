# @zerodep/to-pojo

[![version](https://img.shields.io/npm/v/@zerodep/to-pojo?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/to-pojo)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A utility to convert serializable objects or arrays of serializable values or objects to a Plain Old Javascript Object (POJO); this will use native `toJSON()` capabilities, if available. Invalid values will cause a `ZeroDepError` to be thrown.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/to/pojo) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { toPojo } from '@zerodep/to-pojo';
// or
const { toPojo } = require('@zerodep/to-pojo');
```

### Use Cases

```javascript
toPojo({}); // {}
toPojo({ a: 'one', b: 'two' }); // { "a": 'one', "b": 'two' }

toPojo([]); // []
toPojo([1, 2, 3]); // [1, 2, 3]
toPojo(['a', 'b', 'c']); // ["a", "b", "c"]

// Sets are converted to arrays
toPojo(new Set()); // []
toPojo(new Set([1, 2, 3])); // [1, 2, 3]

// Maps are converted to nested arrays
toPojo(new Map()); // []
toPojo(new Map([['a', 1]])); // [["a", 1]]

toPojo(null); // null
toPojo(undefined); // null

toPojo({
  string: 'a string',
  date: new Date('2022-02-24'),
  int: 42,
  float: 3.14,
  bigInt: 8675309n,
  boolT: true,
  boolF: false,
});
// {
//   "string": "a string",
//   "date": "2022-02-24T00:00:00.000Z", <-- CAUTION: Dates are converted to ISO-8601 format
//   "int": 42,
//   "float": 3.14,
//   "bigInt": "8675309", <-- CAUTION: BigInts are converted to strings
//   "boolT": true,
//   "boolF": false,
// }

// invalid values
toPojo('a string'); // throws ZeroDepError: Cannot convert to JSON
```
