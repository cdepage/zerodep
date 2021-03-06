# @zerodep/errors

[![min](https://img.shields.io/bundlephobia/min/@zerodep/errors?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/errors) [![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/errors?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/errors) [![tree shaking](https://img.shields.io/badge/tree%20shaking-supported-blue?style=flat-square)](https://bundlephobia.com/package/@zerodep/errors) ![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square) ![types](https://badgen.net/npm/types/@zerodep/errors?style=flat-square)

![coverage](https://img.shields.io/badge/coverage-100%25-green?style=flat-square) ![last commit](https://img.shields.io/github/last-commit/cdepage/zerodep?style=flat-square) ![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@zerodep/errors?style=flat-square)

[![app](https://img.shields.io/badge/app-%40zerodep-orange?style=flat-square)](https://www.npmjs.com/package/@zerodep/app) [![version](https://img.shields.io/npm/v/@zerodep/errors?style=flat-square&color=orange)](https://www.npmjs.com/package/@zerodep/errors)

**The ZeroDepError class all @zerodep packages use/extend. This error extends the base `Error`.**

## Table of Contents

- [Errors & Extending Errors](#errors--extending-errors)
- [Installation Instructions](#install)
- [How to Use](#how-to-use)
  - [Signature](#signature)
  - [Examples](#examples)
- [ZeroDep Advantages](#advantages-of-zerodep-packages)
- [Support](#support)
- [Semver](#semver)
- [Resources](#resources)
- [License](#license)

## Errors & Extending Errors

### To Throw or Not to Throw

In software design there are many opinions about when to throw what type of errors. We subscribe to the school of thought that says errors should be thrown when something unexpected happens at runtime, not as a mechanism to handle negative business logic.

> Try to keep business logic completely separate from the mechanism that handles out-of-memory, network, filesystem and other unexpected runtime issues.

Examples of business logic that should **NOT** be handled by throwing errors:

- a user not providing a valid data
- database/storage system returning an empty result
- cache misses
- requesting data from an API with a missing or expired JWT or session cookie

Examples of conditions that **SHOULD** throw an error:

- unable to connect to the database / storage system / cache / microservice
- network requests timing-out
- invalid arguments passed to functions

**Disclaimer:** As always, there are exceptions to every rule. Situational context, logic and common sense should be appropriately utilized. The above is intended as a guideline, not doctrine.

### Extending Errors

We subclass the root `Error` object to make it easier for developers to elegantly identify the :

- **category** of the error (`type`, `range`, `reference`, `syntax`, `uri`, or `unknown`)
- **source** of the error within the @zerodep ecosystem (a guard, network, storage, etc)
- **value** of the problem (the string|number|array|object that caused the issue, if there is one. We have found this incredibly useful in Promise.all() and similar situations involving data iteration)

Why `category`, you ask? The word `type` would be semantically most appropriate, followed closely by `class`. Typescript already has a `type` property on its errors. `class` is a reserved word. Some editors treat `type` in a special manner. We want to avoid collisions with other libraries.

We add the above fields to each of our errors, while ensuring the `message`, `stack` and `name` values of the `Error` work as expected to ensure any existing code works as expected. We also ALWAYS add a `message`, which should simplify error logging.

Most @zerodep packages will further subclass the `ZeroDepError` to provide even more granularity and specificity to thrown errors while ensuring the `category` and `source` fields are appropriately populated. Some even add additional properties.

**Limitation** JavaScript only supports single-inheritance. This means that all subclasses of our `ZeroDepError` will be instances of the root `Error` and never of a `TypeError`, `RangeError` or other native error type. It is due to this limitation that the `category` property was added.

## Install

This utility is available from multiple @zerodep packages, enabling developers to select the most appropriately sized package (for both kb and capability) for different use cases. We believe one size does not fit all or most. See [@zerodep/app](https://www.npmjs.com/package/@zerodep/app) and [@zerodep/utils](https://www.npmjs.com/package/@zerodep/utils) .

### For Server & Build Tooling

For Node, or when compiling via babel, rollup, swc, tsc, webpack, etc... these are the instructions for you.

```
// all @zerodep features, capabilities and utilities
npm install @zerodep/app

// entire set of @zerodep utilities
npm install @zerodep/utils

// only the errors package
npm install @zerodep/errors
```

Of course, you may use `yarn`, `pnpm`, or the package manager of your choice. Only `npm` examples are shown for brevity.

### Browser Direct

If you are using the script directly in a browser via a `<script>` tag or importing it into your own scripts, these are the instructions for you. We support both ESM and UMD formats.

```html
<!-- for ES Modules (ESM) -->
<script type="module">
  import { ZeroDepError } from 'https://cdn.jsdelivr.net/npm/@zerodep/errors/esm.js';
  // ...your code here
</script>

<!--  OR  -->

<!--  for Universal Modules (UMD) - all @zerodep functions are in the global "zd" namespace -->
<script src="https://cdn.jsdelivr.net/npm/@zerodep/errors/umd.js"></script>
<script>
  // example of "zd" prefix

  throw new zd.ZeroDepError('my message');
</script>
```

This package may be found on both [jsDelivr](https://cdn.jsdelivr.net/npm/@zerodep/errors/umd.js) and [unpkg](https://unpkg.com/@zerodep/errors/umd.js) in UMD, ESM and CJS formats.

## How to Use

This package exports the following error classes:

- **ZeroDepError** - base namespace of all ZeroDep error objects
- **ZeroDepErrorFormat**
- **ZeroDepErrorGuard** - further subclassed by:
  - **ZeroDepErrorGuardType**
  - **ZeroDepErrorGuardRange**
- **ZeroDepErrorTo**

### Signature

Typescript declarations:

```typescript
declare class ZeroDepError extends Error {
  category: ZeroDepErrorCategory;
  source: ZeroDepErrorSource;
  value: any;

  constructor(
    message?: string,
    category?: ZeroDepErrorCategory,
    source?: ZeroDepErrorSource,
    value?: any
  );
}

// types (intent is to have this field map to native Error types)
type ZeroDepErrorCategory = 'type' | 'range' | 'reference' | 'syntax' | 'uri' | 'unknown';

// sources (new values will be added as capabilities are added)
type ZeroDepErrorSource = 'format' | 'guard' | 'is' | 'to' | 'unknown';
```

### Examples

All examples assume ESM or CJS packages. If using a UMD package remember to prefix with the **zd** namespace, e.g. `zd.ZeroDepError(...)`.

**Throwing**

```typescript
// import from the most appropriate @zerodep package for your needs / specific use case (see the Install section above)
import { ZeroDepError } from '@zerodep/errors';

// all arguments are optional
const error1 = new ZeroDepError('Integer expected', 'range', 'guard', 42);
const error2 = new ZeroDepError('Integer expected', 'type', 'guard');
const error3 = new ZeroDepError('Integer expected', 'syntax');
const error4 = new ZeroDepError('Integer expected');
const error5 = new ZeroDepError();

// error.message
console.log(error1.message); // "Integer expected"
console.log(error5.message); // "An unknown error has occurred"

// error.category
console.log(error1.category); // "range"
console.log(error5.category); // "unknown"

// error.source
console.log(error1.source); // "guard"
console.log(error5.source); // "unknown"

// error.value
console.log(error1.value); // 42
console.log(error5.value); // undefined
```

**Handling By Type**

```typescript
import { ZeroDepError } from '@zerodep/utils';
// or
import { ZeroDepError } from '@zerodep/errors';

try {
  throw new ZeroDepError('Integer expected', 'range', 'guard');
} catch (error: any) {
  if (error instanceof ZeroDepError) {
    // custom code
  } else {
    // fallback code
  }
}
```

**Handling By Error Property**

```typescript
import { ZeroDepError } from '@zerodep/utils';
// or
import { ZeroDepError } from '@zerodep/errors';

try {
  throw new ZeroDepError('Integer expected', 'range', 'guard');
} catch (error: any) {
  switch (error.category) {
    case 'type':
      // custom code
      break;

    case 'range':
      // custom code
      break;

    default:
      // fallback code
      break;
  }
}
```

## Advantages of @zerodep Packages

We help make source code more readable, more secure, faster to craft, less likely to have hidden defects, and easier to maintain.

- **Zero npm dependencies** - completely eliminates all risk of supply-chain attacks, decreases `node_modules` folder size
- **Fully typed** - typescript definitions are provided for every package for a better developer experience
- **Semantically named** - package and method names are easy to grok, remember, use, and read
- **Documented** - actually useful documentation with examples and helpful tips
- **Intelligently Packaged** - multiple npm packages of different sizes available allowing a menu or a-la-carte composition of capabilities
- **100% Tested** - all methods and packages are fully unit tested
- **ESM & CJS** - has both ecmascript modules and common javascript exports, both are fully tree-shakable
- **CDN Available** - available on fast content delivery networks in UMD, CJS and ESM formats
- **FP Inspired** - gently opinionated to encourage functional programming style for cleaner and more maintainable software
- **Predictably Versioned** - semantically versioned for peace-of-mind upgrading, this includes changelogs
- **MIT Licensed** - permissively licensed for maximum usability

## Support

All @zerodep packages are built for the ES2020 specification. Should you need to support older environments you will need to add appropriate [polyfills](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill). All packages are tested on the following platforms/browsers:

**Browsers**

- Chrome - last 2 major versions
- Firefox - last 2 major versions
- Safari - last 2 major versions
- Edge - last 2 major versions
- Android - last 2 major versions
- iOS - last 2 major versions

**Node**

- v16.x - Gallium LTS
- v14.x - Fermium LTS

It is likely the package will work on other technologies and version, however development and testing effort is only spent on the above.

## Semver

All [@zerodep](https://github.com/cdepage/zerodep) packages, including this one, adhere to Semantic Versioning practices:

- **major versions**: correlates with breaking changes to one or more method signatures
- **minor versions**: includes addition of new functionality or backwards-compatible software improvements
- **patch versions**: are reserved for copy changes, documentation enhancements and bug fixes

The above said, a security best practice is to pin your software packages to specific versions and only upgrade to more recent releases after careful inspection of any CHANGELOG, release notes and all software changes.

## Resources

- [Security Policy](https://github.com/cdepage/zerodep/blob/main/SECURITY.md)
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/errors/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
