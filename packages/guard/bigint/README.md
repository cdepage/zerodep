# @zerodep/guard-bigint

[![version](https://img.shields.io/npm/v/@zerodep/guard-bigint?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-bigint)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A run-time guard to require a value to be a BigInt; it will throw a `ZeroDepError` if the guard fails.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/guard/array) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { guardBigInt } from '@zerodep/guard-bigint';
// or
const { guardBigInt } = require('@zerodep/guard-bigint');
```

### Successful Cases

```javascript
guardBigInt(1000n); // void
```

### Unsuccessful Cases

```javascript
guardBigInt([]); // throws ZeroDepError: Value is not a BigInt
guardBigInt(['a', 'b', 'c']); // throws ZeroDepError: Value is not a BigInt
guardBigInt(true); // throws ZeroDepError: Value is not a BigInt
guardBigInt(new Date()); // throws ZeroDepError: Value is not a BigInt
guardBigInt(''); // throws ZeroDepError: Value is not a BigInt
guardBigInt(new Error('message')); // throws ZeroDepError: Value is not a BigInt
guardBigInt(3.14); // throws ZeroDepError: Value is not a BigInt
guardBigInt(() => 'function'); // throws ZeroDepError: Value is not a BigInt
guardBigInt(42); // throws ZeroDepError: Value is not a BigInt
guardBigInt(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // throws ZeroDepError: Value is not a BigInt
guardBigInt(null); // throws ZeroDepError: Value is not a BigInt
guardBigInt({ an: 'object' }); // throws ZeroDepError: Value is not a BigInt
guardBigInt(new Promise(() => {})); // throws ZeroDepError: Value is not a BigInt
guardBigInt(/[regex]+/gi); // throws ZeroDepError: Value is not a BigInt
guardBigInt(new Set([1, 2, 3])); // throws ZeroDepError: Value is not a BigInt
guardBigInt('a string'); // throws ZeroDepError: Value is not a BigInt
guardBigInt(Symbol()); // throws ZeroDepError: Value is not a BigInt
guardBigInt(new Int32Array(2)); // throws ZeroDepError: Value is not a BigInt
guardBigInt(undefined); // throws ZeroDepError: Value is not a BigInt
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
