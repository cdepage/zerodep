# @zerodep/guards.errors

A defensive programming utility to guard against the use of non-integers / allow only integers.

- on success it returns the integer
- on fail it throws a `ZeroDepErrorGuard` error

## Table of Contents

- [Guards & Defensive Programming](#guards--defensive-programming)
- [Installation Instructions](#install)
- [How to Use](#how-to-use)
  - [Signature](#signature)
  - [Examples](#examples)
- [ZeroDep Advantages](#zerodep-advantages)
- [Support](#support)
- [Semver](#semver)
- [Resources](#resources)
- [License](#license)

## Guards & Defensive Programming

Defensive programming promotes the practice of never trusting input to your function/method by placing "guards at the gate" of your code. These guards serve as pre-conditions that must be validated for your code to execute thereby reducing code defects.

A guard stops code execution by throwing an error when invalid data is provided. The spirit/intention of guards is to protect at the smaller function-level, not at the macro gateway level checking user input. Be conscientious of where and why you are using guards in your code.

TODO: something about the neverthrow concept, once that exists in this monorepo // see https://github.com/supermacro/neverthrow

## Install

This package is available from three differently sized and tree shakeable, npm packages:

```
// entire zerodep suite
npm install @zerodep/utility

// all @zerodep guards
npm install @zerodep/guards

// only the integer guard
npm install @zerodep/guards.errors
```

Of course, you may use `yarn` or `pnpm` or the package manager of your choice. Only `npm` examples are shown for clarity.

## How to Use

### Signature

```typescript
// configure function => use function => number
const configureGuard = (options?: IOptionsGuardInteger) => (value: any) => number;

// configuration options
interface IOptionsGuardInteger {
  min?: number; // the minimum value to accept
  max?: number; // the maximum value to accept
}
```

### Examples

**Simple Example**

```typescript
import { IOptionsGuardInteger, guardInteger } from '@zerodep/utils';
// or
import { IOptionsGuardInteger, guardInteger } from '@zerodep/guards';
// or
import { IOptionsGuardInteger, guardInteger } from '@zerodep/guards.errors';

// configure, returns a function
const intGuard = guardInteger();

// use, returns a number or throws
intGuard(2022); // 2022
intGuard(3.14); // throws a ZeroDepError
intGuard('not an integer'); // throws a ZeroDepError
```

**Custom Example**

```typescript
import { IOptionsGuardInteger, guardInteger } from '@zerodep/utils';
// or
import { IOptionsGuardInteger, guardInteger } from '@zerodep/guards';
// or
import { IOptionsGuardInteger, guardInteger } from '@zerodep/guards.errors';

// configure, returns a function
const options: IOptionsGuardInteger = {
  message: 'Value of error message, if thrown',
  code: 400,
};
const customGuard = guardInteger(options);

// use, returns a number or throws
customGuard(options)(2022); // 2022
customGuard(options)(3.14); // throws a ZeroDepError
customGuard(options)('not an integer'); // throws a ZeroDepErrorGuard
```

**Error Example**

```typescript
import { IOptionsGuardInteger, guardInteger } from '@zerodep/utils';
// or
import { IOptionsGuardInteger, guardInteger } from '@zerodep/guards';
// or
import { IOptionsGuardInteger, guardInteger } from '@zerodep/guards.errors';

try {
  configureGuard()(3.14);
} catch (error) {
  console.log(error.message); // "Provided value not a number"
  console.log(error.code); // 400
  console.log(error.source); // 3.14 <-- value that caused the error

  // inheritance chain
  error instanceof ZeroDepErrorGuard; // true
  error instanceof ZeroDepError; // false <--- CAUTION
  error instanceof TypeError; // true
  error instanceof Error; // true
}
```

## @zerodep Advantages:

- **Zero npm dependencies** - completely eliminates all risk of supply-chain attacks, decreases `node_modules` folder size
- **FP Style** - encourages the functional programming "configure & use" style for cleaner and more maintainable code
- **Fully typed** - typescript definitions are provided for every package for a better developer experience
- **ESM & CJS** - has both ecmascript modules and common javascript exports, both are fully tree-shakable
- **100% Tested** - all methods are fully unit tested

## Support

This package has been tested, and built for, the following platforms/browsers in both ESM and CJS formats:

**Browsers**

- Chrome - last 2 major versions
- Firefox - last 2 major versions
- Safari - last 2 major versions
- Android - last 2 major versions
- iOS - last 2 major versions

**Node**

- v14.8.x - Fermium LTS
- v16.x - Gallium LTS

It is likely the package will work on other browsers and node versions, however development and testing effort is only spent on the above.

## Semver

All [@zerodep](https://github.com/cdepage/zerodep) packages, including this one, adhere to Semantic Versioning practices:

- **major versions**: correlates with breaking changes to one or more method signatures
- **minor versions**: includes addition of new functionality or backwards-compatible software improvements
- **patch versions**: are reserved for copy changes and bug fixes

The above said, a security best practice is to pin your software packages to specific versions and only upgrade to more recent releases after careful inspection of both the [Changelog](https://github.com/cdepage/zerodep/packages/guards.errors/CHANGELOG.md) and any associated software changes.

## Resources

- [Security Policy](https://github.com/cdepage/zerodep/blob/main/SECURITY.md)
- [Changelog](https://github.com/cdepage/zerodep/packages/guards.errors/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
