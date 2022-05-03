# @zerodep/errors

All @zerodep/format packages throw `ZeroDepErrorFormat` errors. This error extends the [ZeroDepError](https://github.com/cdepage/zerodep/blob/main/packages/errors/README.md).

## Table of Contents

- [Tos & Errors](#tos--errors)
- [Installation Instructions](#install)
- [How to Use](#how-to-use)
- [ZeroDep Advantages](#advantages-of-zerodep-packages)
- [Support](#support)
- [Semver](#semver)
- [Resources](#resources)
- [License](#license)

### Extending Errors

The `ZeroDepErrorFormat` object includes the standard `Error` fields (message, stack and name) as wel as:

- **category** of the error (`type`, `range`, `reference`, `syntax`, `uri`, or `unknown`)
- **source** of the error within the @zerodep ecosystem (a to, network, storage, etc)
- **value** of the problem (the string|number|array|object that caused the issue, if there is one. We have found this incredibly useful in Promise.all() and similar situations)

Why `category`, you ask? The word `type` would be semantically most appropriate, followed closely by `class`. Typescript already has a `type` property on its errors. `class` is a reserved word. Some editors treat `type` in a special manner. We want to avoid collisions with other libraries.

We add the above fields to each of our errors, while ensuring the `message`, `stack` and `name` values of the `Error` work as expected to ensure any existing code works as expected. We also ALWAYS add a `message`, which should simplify error logging.

## Install

This package is available from three differently sized and tree shakeable, npm packages:

```
// entire zerodep utils suite
npm install @zerodep/utils

// all @zerodep/format utilities
npm install @zerodep/format

// all @zerodep/format errors
npm install @zerodep/format.errors
```

## How to Use

**Format Error**

```typescript
import { ZeroDepErrorFormat } from '@@zerodep/format.errors';

// properties may be set after instantiation
const error = new ZeroDepErrorFormatType();
error.value = '42';

// error properties
console.log(error.message); // "Value is incorrect type"
console.log(error.category); // "unknown"
console.log(error.source); // "format"
console.log(error.value); // "42"
```

More information about error configuration can be found in the [@zerodep/errors](https://github.com/cdepage/zerodep/blob/main/packages/errors/README.md) documentation.

## Advantages of @zerodep Packages

We help make source code more readable, more secure, faster to craft, less likely to have hidden defects, and easier to maintain.

- **Zero npm dependencies** - completely eliminates all risk of supply-chain attacks, decreases `node_modules` folder size
- **Fully typed** - typescript definitions are provided for every package for a better developer experience
- **Semantically named** - package and method names are easy to grok, remember, use, and read
- **Documented** - actually useful documentation with examples and helpful tips
- **Intelligently Packaged** - multiple npm packages of different sizes available allowing a menu or a-la-carte composition of capabilities
- **100% Tested** - all methods and packages are fully unit tested
- **ESM & CJS** - has both ecmascript modules and common javascript exports, both are fully tree-shakable
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
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/format.errors/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
