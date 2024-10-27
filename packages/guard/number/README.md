# @zerodep/guard-number

[![version](https://img.shields.io/npm/v/@zerodep/guard-number?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-number)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A run-time guard to require a value to be a number; it will throw a `ZeroDepError` if the guard fails.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/guard/number) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { guardNumber } from '@zerodep/guard-number';
// or
const { guardNumber } = require('@zerodep/guard-number');
```

### Successful Cases

```javascript
guardNumber(3.14); // void
guardNumber(42); // void
```

### Unsuccessful Cases

```javascript
guardNumber([]); // throws ZeroDepError: Value is not a number
guardNumber(['a', 'b', 'c']); // throws ZeroDepError: Value is not a number
guardNumber(1000n); // throws ZeroDepError: Value is not a number
guardNumber(true); // throws ZeroDepError: Value is not a number
guardNumber(new Date()); // throws ZeroDepError: Value is not a number
guardNumber(''); // throws ZeroDepError: Value is not a number
guardNumber(new Error('message')); // throws ZeroDepError: Value is not a number
guardNumber(() => 'function'); // throws ZeroDepError: Value is not a number
guardNumber(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // throws ZeroDepError: Value is not a number
guardNumber(null); // throws ZeroDepError: Value is not a number
guardNumber({ an: 'object' }); // throws ZeroDepError: Value is not a number
guardNumber(new Promise(() => {})); // throws ZeroDepError: Value is not a number
guardNumber(/[regex]+/gi); // throws ZeroDepError: Value is not a number
guardNumber(new Set([1, 2, 3])); // throws ZeroDepError: Value is not a number
guardNumber('a string'); // throws ZeroDepError: Value is not a number
guardNumber(Symbol()); // throws ZeroDepError: Value is not a number
guardNumber(new Int32Array(2)); // throws ZeroDepError: Value is not a number
guardNumber(undefined); // throws ZeroDepError: Value is not a number
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
