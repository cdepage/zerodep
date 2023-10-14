# @zerodep/to-number

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/to-number?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/to-number)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/to-number?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/to-number)
[![version](https://img.shields.io/npm/v/@zerodep/to-number?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/to-number)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A utility to convert values to a number. Invalid values will cause a `ZeroDepError` to be thrown.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/to/number) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { toNumber } from '@zerodep/to-number';
// or
const { toNumber } = require('@zerodep/to-number');
```

### Use Cases

```javascript
// numbers
toNumber(42); // 42
toNumber(3.14); // 3.14
toNumber(100e10); // 1000000000000

// strings
toNumber('-171.3'); // -171.3
toNumber('3e8'); // 300000000
toNumber('8,675,309'); // 8675309  <-- thousand separators are commas
toNumber('8.675.309,123'); // 8675309.123  <-- thousand separators are decimal points

// bigint
toNumber(8675309n); // 8675309

// booleans
toNumber(true); // 1
toNumber(false); // 0

// dates
toNumber(new Date('2022-04-22T10:30:00.000Z')); // 1650623400000

// invalid values
toNumber(null); // throws ZeroDepError: Cannot convert to number
toNumber('asdf'); // throws ZeroDepError: Cannot convert to number
toNumber({ not: 'a number' }); // throws ZeroDepError: Cannot convert to number
```
