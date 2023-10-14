# @zerodep/to-integer

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/to-integer?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/to-integer)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/to-integer?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/to-integer)
[![version](https://img.shields.io/npm/v/@zerodep/to-integer?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/to-integer)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A utility to convert values to an integer. Invalid values will cause a `ZeroDepError` to be thrown.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/to/integer) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { toNumber } from '@zerodep/to-integer';
// or
const { toNumber } = require('@zerodep/to-integer');
```

### Use Cases

```javascript
// numbers
toInteger(42); // 42
toInteger(100e10); // 1000000000000

// floats
toInteger(3.14); // 3
toInteger(-171.3); // -171

// strings
toInteger('42'); // 24
toInteger('3e8'); // 300000000
toInteger('8,675,309'); // 8675309  <-- thousand separators are commas
toInteger('8.675.309,123'); // 8675309  <-- thousand separators are decimal points

// bigint
toInteger(8675309n); // 8675309

// booleans
toInteger(true); // 1
toInteger(false); // 0

// dates
toInteger(new Date('2022-04-22T10:30:00.000Z')); // 1650623400000

// invalid values
toInteger(null); // throws ZeroDepError: Cannot convert to number
toInteger('asdf'); // throws ZeroDepError: Cannot convert to number
toInteger({ not: 'a number' }); // throws ZeroDepError: Cannot convert to number
```
