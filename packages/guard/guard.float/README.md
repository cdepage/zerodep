# @zerodep/guard.float

A higher-order function / defensive programming utility to guard against non-float arguments.

- on success, it returns the float
- on fail, it throws a `ZeroDepErrorGuardType` or `ZeroDepErrorGuardRange` error

## tl;dr

A quick howto by examples for quick reference:

```typescript
import { GuardFloatOptions, guardFloat } from '@zerodep/guard.array';

const options: GuardFloatOptions = { min: 0, max: 1 };
guardFloat(options)(0.5); // 0.5
guardFloat(options)('a string'); // throws ZeroDepErrorGuard
```

## Table of Contents

- [Installation Instructions](#install)
- [How to Use](#how-to-use)
  - [Signature](#signature)
  - [Examples](#examples)
- [Related Packages](#related-packages)
- [Guards & Defensive Programming](#guards--defensive-programming)
- [ZeroDep Advantages](#advantages-of-zerodep-packages)
- [Support](#support)
- [Semver](#semver)
- [Resources](#resources)
- [License](#license)

## Install

This utility is available from multiple @zerodep packages, enabling developers to select the most appropriately sized package (for both kb and capability) for different use cases. We believe one size does not fit all or most. See [@zerodep/utils](https://www.npmjs.com/package/@zerodep/utils) and [@zerodep/is](https://www.npmjs.com/package/@zerodep/guards).

```
// entire set of @zerodep utilities
npm install @zerodep/utils

// all @zerodep "guard" utilities
npm install @zerodep/guard

// only the guard.float utility
npm install @zerodep/guard.float
```

Of course, you may use `yarn`, `pnpm`, or the package manager of your choice. Only `npm` examples are shown for brevity.

## How to Use

### Signature

```typescript
// typescript declaration
declare const guardFloat: (options?: GuardArrayOptions) => (value: any) => number;

// optional configuration
interface GuardFloatOptions {
  min?: number;
  max?: number;
}
```

### Examples

**Simple Example**

```typescript
// import from the most appropriate @zerodep package for your needs / specific use case (see the Install section above)
import { guardFloat } from '@zerodep/guard.float';

// configure, returns a function
const guard = guardFloat();

// use, returns a number or throws
guard(3.14); // 3.14
guard('not a float'); // throws a ZeroDepErrorGuardType
```

**With Configuration Example**

```typescript
// import from the most appropriate @zerodep package for your needs / specific use case (see the Install section above)
import { GuardFloatOptions, guardFloat } from '@zerodep/guard.float';

// configure, returns a function
const options: GuardFloatOptions = { min: 0, max: 1 };
const customGuard = guardFloat(options);

// use, returns a number or throws
customGuard(0.08); // 0.08
customGuard(18); // throws a ZeroDepErrorGuardRange
```

**Error Example**

```typescript
// import from the most appropriate @zerodep package for your needs / specific use case (see the Install section above)
import { GuardFloatOptions, guardFloat } from '@zerodep/guard.float';

try {
  guardFloat()('not a float');
} catch (error: any) {
  console.log(error.message); // "Value is not an float"
  console.log(error.tax); // "type"
  console.log(error.source); // "guard"
  console.log(error.value); // "not a float" <-- value that caused the error

  // inheritance chain
  error instanceof ZeroDepErrorGuardRange; // false in this case
  error instanceof ZeroDepErrorGuardType; // true
  error instanceof ZeroDepErrorGuard; // true
  error instanceof ZeroDepError; // true
  error instanceof Error; // true
}
```

## Related Packages

The following @zerodep packages may be helpful or more appropriate for your specific case:

- [@zerodep/is.float](https://www.npmjs.com/package/@zerodep/is.float) - checks if a value is a float

## Guards & Defensive Programming

Defensive programming promotes the practice of never trusting input to your function/method by placing "guards at the gate" of your function. These guards serve as pre-conditions that must be validated for your code to execute thereby preventing unexpected conditions from occurring.

A guard stops code execution by throwing an error when invalid data is provided. The spirit/intention of guards is to protect at the smaller function-level, not at the macro gateway level checking user input. Be conscientious of where and why you are using guards in your code.

Guards are intended for runtime safety, which is very different from Typescript/strong typing which handles compile time issues.

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

The above said, a security best practice is to pin your software packages to specific versions and only upgrade to more recent releases after careful inspection of both the [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/is.float/CHANGELOG.md) and any associated software changes.

## Resources

- [Security Policy](https://github.com/cdepage/zerodep/blob/main/SECURITY.md)
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/guard/guard.float/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
