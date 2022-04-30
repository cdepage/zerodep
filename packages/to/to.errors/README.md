# @zerodep/errors

All @zerodep/to packages throw `ZeroDepErrorTo` errors. This error extends the [ZeroDepError](https://github.com/cdepage/zerodep/blob/main/packages/errors/README.md).

The `ZeroDepErrorTo` is further subclassed with:

- `ZeroDepErrorToType` - for invalid types
- `ZeroDepErrorToRange` - for values that are outside of specific ranges

## Table of Contents

- [Tos & Errors](#tos--errors)
- [Installation Instructions](#install)
- [How to Use](#how-to-use)
- [ZeroDep Advantages](#advantages-of-zerodep-packages)
- [Support](#support)
- [Semver](#semver)
- [Resources](#resources)
- [License](#license)

## Tos & Errors

We [have an opinion](https://github.com/cdepage/zerodep/blob/main/packages/errors/README.md) about when appropriately throwing errors.

The spirit/intention of tos is to protect functions from incorrect runtime values that would otherwise cause defects in the software.

All tos will throw a `ZeroDepErrorTo` (or instance thereof) error when they encounter an invalid value.

### Extending Errors

The `ZeroDepErrorTo` object includes the standard `Error` fields (message, stack and name) as wel as:

- **tax** (short for taxonomy) of the error (`type`, `range`, `reference`, `syntax`, `uri`, or `general`)
- **source** of the error within the @zerodep ecosystem (a to, network, storage, etc)
- **value** of the problem (the string|number|array|object that caused the issue, if there is one. We have found this incredibly useful in Promise.all() and similar situations)

Why `tax` (short for taxonomy), you ask? The word `type` would be semantically most appropriate, followed closely by `class`. Typescript already has a `type` property on its errors. `class` is a reserved word. Some editors treat `type` in a special manner. We want to avoid collisions with other libraries.

We add the above fields to each of our errors, while ensuring the `message`, `stack` and `name` values of the `Error` work as expected to ensure any existing code works as expected. We also ALWAYS add a `message`, which should simplify error logging.

## Install

This package is available from three differently sized and tree shakeable, npm packages:

```
// entire zerodep utils suite
npm install @zerodep/utils

// all @zerodep/to utilities
npm install @zerodep/to

// all @zerodep/to errors
npm install @zerodep/to.errors
```

Of course, you may use `yarn`, `pnpm`, or the package manager of your choice. Only `npm` examples are shown for brevity.

For completeness, links to the @zerodep repositories with this function:

- [@zerodep/utils](https://github.com/cdepage/zerodep/tree/main/packages/utils)
- [@zerodep/errors](https://github.com/cdepage/zerodep/tree/main/packages/errors)

## How to Use

**To Error**

```typescript
import { ZeroDepErrorTo } from '@@zerodep/utils';
// or
import { ZeroDepErrorTo } from '@@zerodep/to';
// or
import { ZeroDepErrorTo } from '@@zerodep/to.errors';

// all arguments are optional
const error = new ZeroDepErrorToType();
error.value = 42;

// properties may be set after instantiation
console.log(error.message); // "Value is invalid"
console.log(error.tax); // "unknown"
console.log(error.source); // "to"
console.log(error.value); // 42
```

**To Type Error**

```typescript
import { ZeroDepErrorToType } from '@@zerodep/utils';
// or
import { ZeroDepErrorToType } from '@@zerodep/to';
// or
import { ZeroDepErrorToType } from '@@zerodep/to.errors';

// properties may be set after instantiation
const error = new ZeroDepErrorToType();
error.value = '42';

// error properties
console.log(error.message); // "Value is incorrect type"
console.log(error.tax); // "type"
console.log(error.source); // "to"
console.log(error.value); // "42"
```

**To Range Error**

```typescript
import { ZeroDepErrorToRange } from '@@zerodep/utils';
// or
import { ZeroDepErrorToRange } from '@@zerodep/to';
// or
import { ZeroDepErrorToRange } from '@@zerodep/to.errors';

// properties may be set after instantiation
const error = new ZeroDepErrorGuardType();
error.value = { answer: 42 };

// error properties
console.log(error.message); // "Value is out-of-range"
console.log(error.tax); // "range"
console.log(error.source); // "guard"
console.log(error.value); // { answer: 42 }
```

More information about error configuration can be found in the [@zerodep/errors](https://github.com/cdepage/zerodep/blob/main/packages/errors/README.md) documentation.

## Advantages of @zerodep Packages

- **Zero npm dependencies** - completely eliminates all risk of supply-chain attacks, decreases `node_modules` folder size
- **FP Inspired** - encourages the functional programming style for cleaner and more maintainable code
- **Fully typed** - typescript definitions are provided for every package for a better developer experience
- **ESM & CJS** - has both ecmascript modules and common javascript exports, both are fully tree-shakable
- **Intelligently Packaged** - multiple npm packages of different sizes available allowing an a-la-carte composition of capabilities
- **100% Tested** - all methods are fully unit tested
- **Semver** - predictably versioned for peace-of-mind upgrading
- **MIT Licensed** - permissively licensed for maximum usability

## Support

This package has been tested, and built for, the following platforms/browsers in both ESM and CJS formats:

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
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/guard.errors/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
