# @zerodep/to-boolean

[![version](https://img.shields.io/npm/v/@zerodep/to-boolean?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/to-boolean)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A utility to reliably convert a value to a boolean. Consideration for common boolean-like words and abbreviations are included. Values that cannot reliably be converted to a boolean will cause a `ZeroDepError` to be thrown.

This method behaves differently than the native `Boolean()` method. Full documentation is available at the [zerodep.app](http://zerodep.app/#/to/boolean) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { toBoolean } from '@zerodep/to-boolean';
// or
const { toBoolean } = require('@zerodep/to-boolean');
```

### Use Cases

```javascript
// booleans
toBoolean(true); // true
toBoolean(false); // false

// boolean-like strings (case insensitive, includes English, Spanish & French terms)
toBoolean('true'); // true
toBoolean('t'); // true
toBoolean('yes'); // true
toBoolean('y'); // true
toBoolean('cierto'); // true
toBoolean('c'); // true
toBoolean('verdadero'); // true
toBoolean('vrais'); // true
toBoolean('v'); // true
toBoolean('si'); // true
toBoolean('sí'); // true
toBoolean('s'); // true
toBoolean('oui'); // true
toBoolean('ouais'); // true
toBoolean('o'); // true <-- letter "o"

toBoolean('false'); // false
toBoolean('falso'); // false
toBoolean('faux'); // false
toBoolean('f'); // false
toBoolean('no'); // false
toBoolean('non'); // false
toBoolean('n'); // false
toBoolean(''); // false

// boolean-like numbers as strings
toBoolean('1'); // true
toBoolean('0'); // false <-- number "0"
toBoolean('-0'); // false <-- number "0"
toBoolean('2'); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean('-1'); // throws ZeroDepError: Cannot reliably convert to boolean

// numbers
toBoolean(1); // true
toBoolean(0); // false
toBoolean(-0); // false
toBoolean(42); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean(3.14); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean(100e10); // throws ZeroDepError: Cannot reliably convert to boolean

// bigint
toBoolean(1n); // true
toBoolean(0n); // false
toBoolean(-0n); // false
toBoolean(42n); // throws ZeroDepError: Cannot reliably convert to boolean

// empty values
toBoolean(null); // false
toBoolean(undefined); // false

// numerical strings
toBoolean('-171.3'); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean('3e8'); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean('8,675,309'); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean('8.675.309,123'); // throws ZeroDepError: Cannot reliably convert to boolean

// dates
toBoolean(new Date('2022-04-22T10:30:00.000Z')); // throws ZeroDepError: Cannot reliably convert to boolean

// objects
toBoolean({}); // false
toBoolean({ an: 'object' }); // true

toBoolean([]); // false
toBoolean(['an', 'array']); // true
toBoolean([true]); // false <-- CAUTION: content not evaluated

toBoolean(new Set()); // false
toBoolean(new Set([0, 1, 2])); // true
toBoolean(new Set([0])); // true <-- CAUTION: content not evaluated

toBoolean(new Map()); // false
toBoolean(new Map([['a', 'anything']])); // true
```
