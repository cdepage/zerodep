# @zerodep/guard

A set of utility higher order functions that guard for specific data types

This is a barrel package of all `@zerodep/guard.*` utility packages within the @zerodep monorepo.

## tl;dr

A quick howto by examples for quick reference:

```typescript
import { guardString, guardInteger } from '@zerodep/guard';

guardString('a string'); // true
guardString([1, 2, 3]); // false

guardInteger(42); // true
guardInteger(3.14); // false
```

In case you were wondering, a "barrel" is a way to rollup exports from several modules into a single convenient module. The barrel itself is a module file that re-exports selected exports of other modules.

Barrel packages group semantically or logically similar functionally together resulting in package size savings and fewer imports for the development to manage compared to installing each package individually.

## Table of Contents

- [Installation Instructions](#install)
- [The `guard` Family](#the-guard-family)
  - [Signature](#signature)
  - [List of Packages](#list-of-packages)
- [Guards & Defensive Programming](#guards--defensive-programming)
- [ZeroDep Advantages](#advantages-of-zerodep-packages)
- [Support](#support)
- [Semver](#semver)
- [Resources](#resources)
- [License](#license)

## Install

This utility is available from multiple @zerodep packages, enabling developers to select the most appropriately sized package (for both kb and capability) for different use cases. We believe one size does not fit all or most. See [@zerodep/utils](https://www.npmjs.com/package/@zerodep/utils).

```
// entire set of @zerodep utilities
npm install @zerodep/utils

// all @zerodep "guard" utilities
npm install @zerodep/guard
```

Of course, you may use `yarn`, `pnpm`, or the package manager of your choice. Only `npm` examples are shown for brevity.

## The `guard` Family

### Signature

All `guard` packages have the same signature, where "guardXxxx" is the method name and "OptionsGuardXxxx" are the optional configurations.

```typescript
// typescript declaration
declare const guardXxxx: (options: OptionsGuardXxxx) => (value: any) => [guarded type];
```

### List of Packages

The following methods/packages are included in this barrel package.

| Method Name | Brief Description | Approx Size <br /> CJS / ESM |
| --- | --- | --- |
| [guardArray](https://www.npmjs.com/package/@zerodep/is.array) | Guards against non-array values | 1.9kb / 1.8kb |
| [guardBigInt](https://www.npmjs.com/package/@zerodep/is.bigint) | Guards against non-BigInt values | 1.8kb / 1.8kb |
| [guardBoolean](https://www.npmjs.com/package/@zerodep/is.boolean) | Guards against non-boolean values | 1.2kb / 1.1kb |
| [guardDate](https://www.npmjs.com/package/@zerodep/is.date) | Guards against non-Date values | 1.9kb / 1.8kb |
| [guardFloat](https://www.npmjs.com/package/@zerodep/is.float) | Guards against non-float values | 1.9kb / 1.8kb |
| [guardInteger](https://www.npmjs.com/package/@zerodep/is.integer) | Guards against non-integer values | 1.9kb / 1.8kb |
| [guardNumber](https://www.npmjs.com/package/@zerodep/is.number) | Guards against non-float and non-integer values | 1.9kb / 1.8kb |
| [guardObject](https://www.npmjs.com/package/@zerodep/is.object) | Guards against non-object literal values | 2.1kb / 2.0kb |
| [guardString](https://www.npmjs.com/package/@zerodep/is.string) | Guards against non-string values | 1.9kb / 1.9kb |
|  | Sum of all individual package sizes | **16.5kb** / **15.8kb** |
|  |  |
|  | **This barrel package** | **7.1kb** / **6.7kb** |
|  | size difference | _9.4kb_ / _9.1kb_ |

Above measurements are for the unpacked size of the minified javascript file (the part your build system will use and tree-shake). Of course given the included README and Typescript declarations the packages downloaded to the development machine or build server will be larger.

Additional information for each guard can be found on the respective package page.

## Guards & Defensive Programming

Defensive programming promotes the practice of never trusting input to your function/method by placing "guards at the gate" of your code. These guards serve as pre-conditions that must be validated for your code to execute thereby reducing code defects.

A guard stops code execution by throwing an error when invalid data is provided. The spirit/intention of guards is to protect at the smaller function-level, not at the macro gateway level checking user input. Be conscientious of where and why you are using guards in your code.

## Advantages of @zerodep Packages

We help make source code more readable, more secure, faster to craft, less likely to have hidden defects, and easier to maintain.

- **Zero npm dependencies** - completely eliminates all risk of supply-chain attacks, decreases `node_modules` folder size
- **Fully typed** - typescript definitions are provided for every package for a better developer experience
- **Semantically named** - package and method names are easy to grok, remember, use, and read
- **Documented** - actually useful documentation with examples and helpful tips
- **Intelligently Packaged** - multiple npm packages of different sizes available allowing an a-la-carte composition of capabilities
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

The above said, a security best practice is to pin your software packages to specific versions and only upgrade to more recent releases after careful inspection of both the [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/guard/CHANGELOG.md) and any associated software changes.

## Resources

- [Security Policy](https://github.com/cdepage/zerodep/blob/main/SECURITY.md)
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/guard/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
