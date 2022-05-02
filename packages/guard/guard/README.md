# @zerodep/guard

A set of utility higher order functions that guard for specific data types

This is a barrel package of all `@zerodep/can.*` utility packages within the @zerodep monorepo.

## tl;dr

A quick howto by examples for quick reference:

```typescript
import { guardString, guardInteger } from '@zerodep/guard';

guardString('a string'); // true
guardString([1, 2, 3]); // false

guardInteger(42); // true
guardInteger(3.14); // false
```

Definitions:

**Barrel Package:** "barrel" is a way to rollup exports from several modules into a single convenient module. The barrel itself is a module file that re-exports selected exports of other modules.

**HOF:** a Higher Order Function, a function-that-returns-a-function.

## Table of Contents

- [Installation Instructions](#install)
- [Included Packages](#included-packages)
- [How to Use](#how-to-use)
- [Guards & Defensive Programming](#guards--defensive-programming)
- [ZeroDep Advantages](#advantages-of-zerodep-packages)
- [Support](#support)
- [Semver](#semver)
- [Resources](#resources)
- [License](#license)

## Install

```
npm install @zerodep/guard
```

Of course, you may use `yarn`, `pnpm`, or the package manager of your choice. Only `npm` examples are shown for brevity.

## Included Packages

This barrel package includes all `@zerodep/guard.*` packages:

| Method Name | Package | Purpose |
| --- | --- | --- |
| ZeroDepError | [errors](https://www.npmjs.com/package/@zerodep/errors) | A namespaced subclass of the `Error` object with additional properties, used by all @zerodep methods |
|  |  |
| guardArray | [guard.array](https://www.npmjs.com/package/@zerodep/guard.array) | A configurable HOF to guard against non-array arguments |
| guardBigInt | [guard.bigint](https://www.npmjs.com/package/@zerodep/guard.bigint) | A configurable HOF to guard against non-BigInt arguments |
| guardBoolean | [guard.boolean](https://www.npmjs.com/package/@zerodep/guard.boolean) | A configurable HOF to guard against non-boolean arguments |
| guardDate | [guard.date](https://www.npmjs.com/package/@zerodep/guard.date) | A configurable HOF to guard against non-Date arguments |
| guardFloat | [guard.float](https://www.npmjs.com/package/@zerodep/guard.float) | A configurable HOF to guard against non-float arguments |
| guardFunction | [guard.float](https://www.npmjs.com/package/@zerodep/guard.function) | A configurable HOF to guard against non-function arguments |
| guardInteger | [guard.integer](https://www.npmjs.com/package/@zerodep/guard.integer) | A configurable HOF to guard against non-integer arguments |
| guardJSON | [guard.json](https://www.npmjs.com/package/@zerodep/guard.json) | A configurable HOF to guard against non-JSON object arguments |
| guardNumber | [guard.number](https://www.npmjs.com/package/@zerodep/guard.number) | A configurable HOF to guard against non-float/non-integer arguments |
| guardObject | [guard.object](https://www.npmjs.com/package/@zerodep/guard.object) | A configurable HOF to guard against non-object literal arguments |
| guardString | [guard.string](https://www.npmjs.com/package/@zerodep/guard.string) | A configurable HOF to guard against non-string arguments |
| ZeroDepErrorGuard, <br />ZeroDepErrorGuardType, <br />ZeroDepErrorGuardRange | [guard.errors](https://www.npmjs.com/package/@zerodep/guard.errors) | The error types thrown by @zerodep/guard methods, they all subclass the `ZeroDepError` class, some with additional properties |

## How to Use

For specific details and configuration options, see the specific package.

```typescript
import { guardArray } from '@zerodep/guard';

// guards are HOFs - these examples use the default options
guardArray()(['a', 'b', 'c']); // ["a", "b", "c"]
guardArray()('a string'); // throws ZeroDepErrorGuardType
```

## Guards & Defensive Programming

Defensive programming promotes the practice of never trusting input to your function/method by placing "guards at the gate" of your code. These guards serve as pre-conditions that must be validated for your code to execute thereby reducing code defects.

A guard stops code execution by throwing an error when invalid data is provided. The spirit/intention of guards is to protect at the smaller function-level, not at the macro gateway level checking user input. Be conscientious of where and why you are using guards in your code.

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
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/guard/guard/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
