# @zerodep/to-boolean

[![version](https://img.shields.io/npm/v/@zerodep/to-boolean?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/to-boolean)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A utility to reliably convert a value to a boolean. Consideration for common boolean-like words and abbreviations are included. Values that cannot reliably be converted to a boolean will cause a `ZeroDepError` to be thrown.

This method behaves differently than the native `Boolean()` method. Full documentation is available at the [zerodep.app](http://zerodep.app/#/to/boolean) page.

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { toBoolean } from '@zerodep/to-boolean';

// CJS
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

// boolean-like numbers as strings are treated as numbers
toBoolean('1'); // true
toBoolean('0'); // false <-- number "0"
toBoolean('-0'); // false <-- number "0"

// numerical strings
toBoolean('171.3'); // true
toBoolean('3e8'); // true
toBoolean('8,675,309'); // true
toBoolean('8.675.309,123'); // true
toBoolean('-171.3'); // false
toBoolean('-3e8'); // false
toBoolean('-8,675,309'); // false
toBoolean('-8.675.309,123'); // false

// any string that isn't a number or BigInt or one of the keywords/letters above
toBoolean('string of any length'); // true

// numbers - positive numbers are truthy, negative numbers are falsy, zero is always falsy
toBoolean(1); // true
toBoolean(42); // true
toBoolean(3.14); // true
toBoolean(100e10); // true
toBoolean(0); // false
toBoolean(-0); // false
toBoolean(-42); // false
toBoolean(-3.14); // false
toBoolean(-100e10); // false
toBoolean(NaN); // // throws ZeroDepError: Cannot reliably convert to boolean

// bigint - positive values are truthy, negative values are falsy, zero is always falsy
toBoolean(1n); // true
toBoolean(42n); // true
toBoolean(0n); // false
toBoolean(-0n); // false
toBoolean(-42n); // false

// empty values
toBoolean(null); // false
toBoolean(undefined); // false

// dates
toBoolean(new Date('2022-04-22T10:30:00.000Z')); // throws ZeroDepError: Cannot reliably convert to boolean

// objects - empty are falsy, non-empty are truthy
toBoolean({}); // false
toBoolean({ an: 'object' }); // true

// arrats - empty are falsy, non-empty are truthy
toBoolean([]); // false
toBoolean(['an', 'array']); // true
toBoolean([false]); // true <-- CAUTION: content not evaluated

// sets - empty are falsy, non-empty are truthy
toBoolean(new Set()); // false
toBoolean(new Set([0, 1, 2])); // true
toBoolean(new Set([0])); // true <-- CAUTION: content not evaluated

// maps - empty are falsy, non-empty are truthy
toBoolean(new Map()); // false
toBoolean(new Map([['a', 'anything']])); // true
```

---

## ZeroDep Advantages

- **Zero npm dependencies** - completely eliminates all risk of supply-chain attacks, decreases node_modules folder size
- **ESM & CJS** - has both ecmascript modules and common javascript exports
- **Tree Shakable** - built to be fully tree shakable ensuring your packages are the smallest possible size
- **Fully typed** - typescript definitions are provided for every package for a better developer experience
- **Semantically named** - package and method names are easy to grok, remember, use, and read
- **Documented** - actually useful documentation with examples at [zerodep.app](https://zerodep.app)
- **Intelligently Packaged** - multiple npm packages of different sizes available allowing a menu or a-la-carte composition of capabilities
- **100% Tested** - all methods and packages are fully unit tested
- **Predictably Versioned** - semantically versioned for peace-of-mind upgrading, this includes changelogs
- **MIT Licensed** - permissively licensed for maximum usability
