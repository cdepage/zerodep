# @zerodep/is.regex

A utility that determines if a value is a regex.

## Table of Contents

- [Installation Instructions](#install)
- [How to Use](#how-to-use)
- [ZeroDep Advantages](#advantages-of-zerodep-packages)
- [Support](#support)
- [Semver](#semver)
- [Resources](#resources)
- [License](#license)

## Install

```
// entire zerodep utils suite
npm install @zerodep/utils

// all @zerodep is utilities
npm install @zerodep/is

// only the is.string
npm install @zerodep/is.regex
```

Of course, you may use `yarn` or `pnpm` or the package manager of your choice. Only `npm` examples are shown for clarity.

For completeness, links to the @zerodep repositories with this regex:

- [@zerodep/utils](https://github.com/cdepage/zerodep/tree/main/packages/utils)
- [@zerodep/is](https://github.com/cdepage/zerodep/tree/main/packages/ss)
- [@zerodep/is.string](https://github.com/cdepage/zerodep/tree/main/packages/is.string)

## How to Use

```typescript
import { isRegex } from '@zerodep/utils';
// or
import { isRegex } from '@zerodep/is';
// or
import { isRegex } from '@zerodep/is.regex';

isRegex(/^\d{7}$/gi); // true

isRegex(42); // false
isRegex(3.14); // false
isRegex(100n); // false
isRegex('2022-04-15'); // false
isRegex(true); // false
isRegex(['a', 'b', 'c']); // false
isRegex({ an: 'object' }); // false
```

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
- Android - last 2 major versions
- iOS - last 2 major versions

**Node**

- v16.x - Gallium LTS
- v14.x - Fermium LTS

It is likely the package will work on other technologies and version, however development and testing effort is only spent on the above.

## Semver

All [@zerodep](https://github.com/cdepage/zerodep) packages, including this one, adhere to Semantic Versioning practices:

- **major versions**: correlates with breaking changes to one or more method signatures
- **minor versions**: includes addition of new regexality or backwards-compatible software improvements
- **patch versions**: are reserved for copy changes and bug fixes

The above said, a security best practice is to pin your software packages to specific versions and only upgrade to more recent releases after careful inspection of both the [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/is.regex/CHANGELOG.md) and any associated software changes.

## Resources

- [Security Policy](https://github.com/cdepage/zerodep/blob/main/SECURITY.md)
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/is.regex/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
