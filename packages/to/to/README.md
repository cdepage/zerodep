# @zerodep/to

A set of utility methods to convert a value to a specific data type (or throw an error while trying).

This is a barrel package of all `@zerodep/to.*` utility packages within the @zerodep monorepo.

Works in the browser and on the server. Includes typescript definitions as well as tree-shakable CJS and ESM exports. Works out-of-the-box; may be configured as required.

## tl;dr

A quick howto by examples for quick reference:

```typescript
import { toString } from '@zerodep/to';

toString(42); // 42
toString(Symbol); // throws a ZeroDepErrorTo error
```

Definitions:

**Barrel Package:** "barrel" is a way to rollup exports from several modules into a single convenient module. The barrel itself is a module file that re-exports selected exports of other modules.

**HOF:** a Higher Order Function, a function-that-returns-a-function.

## Table of Contents

- [Installation Instructions](#install)
- [Included Packages](#included-packages)
- [How to Use](#how-to-use)
- [ZeroDep Advantages](#advantages-of-zerodep-packages)
- [Support](#support)
- [Semver](#semver)
- [Resources](#resources)
- [License](#license)

## Install

```
npm install @zerodep/to
```

Of course, you may use `yarn`, `pnpm`, or the package manager of your choice. Only `npm` examples are shown for brevity.

## Included Packages

This barrel package includes all `@zerodep/to.*` packages:

| Method Name | Package | Purpose |
| --- | --- | --- |
| toJSON | [to.json](https://www.npmjs.com/package/@zerodep/to.json) | A configurable HOF to convert a value to a JSON object |
| toNumber | [to.number](https://www.npmjs.com/package/@zerodep/to.number) | A configurable HOF to convert a value to a number |
| toString | [to.string](https://www.npmjs.com/package/@zerodep/to.string) | A configurable HOF to convert a value to a string |
| ZeroDepErrorTo | [to.errors](https://www.npmjs.com/package/@zerodep/to.errors) | The error type thrown by `@zerodep/to.*` methods, they all subclass the `ZeroDepError` object |

## How to Use

For specific details and configuration options, see the specific package.

```typescript
import { toString, toJSON } from '@zerodep/to';

toString(42); // 42
toString(Symbol); // throws ZeroDepErrorTo

toJSON({ bigint: 8675309n }); // { bigint: "8675309" }
toJSON(new Set(['a', 1, true])); // ["a", 1, true]
toJSON(new WeakMap()); // throws ZeroDepErrorTo
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
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/to/to/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
