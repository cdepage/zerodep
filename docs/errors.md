# @zerodep/errors

[![version](https://img.shields.io/npm/v/@zerodep/errors?color=blue)](https://www.npmjs.com/package/@zerodep/errors)
![language](https://img.shields.io/badge/typescript-100%25-blue)
![types](https://img.shields.io/badge/types-included-blue)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)
![coverage](https://img.shields.io/badge/coverage-100%25-42b983)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

The error classes thrown by @zerodep functions:

- `ZeroDepError` - extends the base Error, used by all ZeroDep packages
- `ZeroDepGuardError` - extends the ZeroDepError, thrown when a guard function throws
- `ZeroDepTypeError` - extends the ZeroDepError, thrown when invalid types detected

Any @zerodep package will throw an instance of one of the above errors allowing ease of catching specific error types based upon your needs.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
// ESM
import { ZeroDepError, ZeroDepGuardError, ZeroDepTypeError } from '@zerodep/errors';

// CJS
const { ZeroDepError, ZeroDepGuardError, ZeroDepTypeError } = require('@zerodep/errors');
```

```javascript
// catching a @zerodep error
try {

  // some code that throws a ZeroDepError

} catch (err: unknown) {
  if (err instanceof ZeroDepGuardError) {
    // logic for guard errors
    return;
  }

  if (err instanceof ZeroDepTypeError) {
    // logic for type errors
    return;
  }

  if (err instanceof ZeroDepError) {
    // logic for any other @zerodep error
    return;
  }

  // logic for non-ZeroDep errors
  // or
  // rethrow as a different type of exception
  throw new Error('optional new message', { cause: err })
}
```

---

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](https://zerodep.app/#/) for more information.

Any @zerodep package that throws an error will also export the error.

```
# all @zerodep packages
npm i @zerodep/app

# just this package
npm i @zerodep/errors
```

---

## Versions

- all notable changes are documented in the [Release Notes](https://github.com/cdepage/zerodep/releases)

### v3.x

- supports Node v20, v22 & v24
- built with Typescript v5.8.x

### v2.x

- supports Node v18, v20, & v22
- built with Typescript v5.5.x

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
