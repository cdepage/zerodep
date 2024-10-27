# @zerodep/color-hex2hsl

[![version](https://img.shields.io/npm/v/@zerodep/color-hex2hsl?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/color-hex2hsl)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A run-time color to require a value to be a Hex2hsl; it will throw a `ZeroDepError` if the color fails.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/color/array) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { colorHex2hsl } from '@zerodep/color-hex2hsl';
// or
const { colorHex2hsl } = require('@zerodep/color-hex2hsl');
```

### Successful Cases

```javascript
colorHex2hsl(1000n); // void
```

### Unsuccessful Cases

```javascript
colorHex2hsl([]); // throws ZeroDepError: Value is not a Hex2hsl
colorHex2hsl(['a', 'b', 'c']); // throws ZeroDepError: Value is not a Hex2hsl
colorHex2hsl(true); // throws ZeroDepError: Value is not a Hex2hsl
colorHex2hsl(new Date()); // throws ZeroDepError: Value is not a Hex2hsl
colorHex2hsl(''); // throws ZeroDepError: Value is not a Hex2hsl
colorHex2hsl(new Error('message')); // throws ZeroDepError: Value is not a Hex2hsl
colorHex2hsl(3.14); // throws ZeroDepError: Value is not a Hex2hsl
colorHex2hsl(() => 'function'); // throws ZeroDepError: Value is not a Hex2hsl
colorHex2hsl(42); // throws ZeroDepError: Value is not a Hex2hsl
colorHex2hsl(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // throws ZeroDepError: Value is not a Hex2hsl
colorHex2hsl(null); // throws ZeroDepError: Value is not a Hex2hsl
colorHex2hsl({ an: 'object' }); // throws ZeroDepError: Value is not a Hex2hsl
colorHex2hsl(new Promise(() => {})); // throws ZeroDepError: Value is not a Hex2hsl
colorHex2hsl(/[regex]+/gi); // throws ZeroDepError: Value is not a Hex2hsl
colorHex2hsl(new Set([1, 2, 3])); // throws ZeroDepError: Value is not a Hex2hsl
colorHex2hsl('a string'); // throws ZeroDepError: Value is not a Hex2hsl
colorHex2hsl(Symbol()); // throws ZeroDepError: Value is not a Hex2hsl
colorHex2hsl(new Int32Array(2)); // throws ZeroDepError: Value is not a Hex2hsl
colorHex2hsl(undefined); // throws ZeroDepError: Value is not a Hex2hsl
```
