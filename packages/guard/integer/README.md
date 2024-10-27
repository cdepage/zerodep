# @zerodep/guard-integer

[![version](https://img.shields.io/npm/v/@zerodep/guard-integer?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-integer)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A run-time guard to require a value to be an integer; it will throw a `ZeroDepError` if the guard fails.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/guard/integer) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { guardInteger } from '@zerodep/guard-integer';
// or
const { guardInteger } = require('@zerodep/guard-integer');
```

### Successful Cases

```javascript
guardInteger(42); // void
```

### Unsuccessful Cases

```javascript
guardInteger([]); // throws ZeroDepError: Value is not an integer
guardInteger(['a', 'b', 'c']); // throws ZeroDepError: Value is not an integer
guardInteger(1000n); // throws ZeroDepError: Value is not an integer
guardInteger(true); // throws ZeroDepError: Value is not an integer
guardInteger(new Date()); // throws ZeroDepError: Value is not an integer
guardInteger(''); // throws ZeroDepError: Value is not an integer
guardInteger(new Error('message')); // throws ZeroDepError: Value is not an integer
guardInteger(3.14); // throws ZeroDepError: Value is not an integer
guardInteger(() => 'function'); // throws ZeroDepError: Value is not an integer
guardInteger(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // throws ZeroDepError: Value is not an integer
guardInteger(null); // throws ZeroDepError: Value is not an integer
guardInteger({ an: 'object' }); // throws ZeroDepError: Value is not an integer
guardInteger(new Promise(() => {})); // throws ZeroDepError: Value is not an integer
guardInteger(/[regex]+/gi); // throws ZeroDepError: Value is not an integer
guardInteger(new Set([1, 2, 3])); // throws ZeroDepError: Value is not an integer
guardInteger('a string'); // throws ZeroDepError: Value is not an integer
guardInteger(Symbol()); // throws ZeroDepError: Value is not an integer
guardInteger(new Int32Array(2)); // throws ZeroDepError: Value is not an integer
guardInteger(undefined); // throws ZeroDepError: Value is not an integer
```

---

## ZeroDep Advantages

- **Zero npm dependencies** - completely eliminates all risk of supply-chain attacks, decreases node_modules folder size
- **ESM & CJS** - supports both ECMAScript modules and common JavaScript exports
- **Tree Shakable** - built to be fully tree shakable ensuring your packages are the smallest possible size
- **Fully Typed** - typescript definitions are provided/built-in to every package for a superior developer experience
- **Semantically Named** - package and method names are easy to grok, remember, use, and read
- **Documented** - actually useful documentation with examples at [zerodep.app](https://zerodep.app)
- **Intelligently Packaged** - multiple npm packages of different sizes available allowing a menu or a-la-carte composition of capabilities
- **100% Tested** - all methods and packages are fully unit tested
- **Predictably Versioned** - semantically versioned for peace-of-mind upgrading, valuable changelogs for understand changes
- **MIT Licensed** - permissively licensed for maximum usability
