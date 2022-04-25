# @zerodep

A monorepo of zero-dependency, utility-focused capabilities for both Node and browser environments.

## Table of Contents

- [Advantages of @zerodep Packages](#advantages-of-zerodep-packages)
- [Available Packages](#available-packages)
  - [Utilities Barrel Package](#utilities-package)
  - [Guards Barrel Package](#guards-package)
  - [Independent Packages](#independent-packages)
- [Support](#support)
- [Semver](#semver)
- [Resources](#resources)
- [License](#license)

## Advantages of @zerodep Packages

- **Zero npm dependencies** - completely eliminates all risk of supply-chain attacks, decreases `node_modules` folder size
- **FP Inspired** - encourages the functional programming style for cleaner and more maintainable code
- **Fully typed** - typescript definitions are provided for every package for a better developer experience
- **ESM & CJS** - has both ecmascript modules and common javascript exports, both are fully tree-shakable
- **Intelligently Packaged** - multiple npm packages of different sizes available allowing an a-la-carte composition of capabilities
- **100% Tested** - all methods are fully unit tested
- **Semver** - predictably versioned for peace-of-mind upgrading
- **MIT Licensed** - permissively licensed for maximum usability

## Available Packages

The @zerodep ecosystem is made up of numerous independent packages and barrel-packages (packages that logically or semantically group packages together).

### Utilities Package

```
npm install @zerodep/utils
```

Of course, you may use `yarn` or `pnpm` or the package manager of your choice. Only `npm` examples are shown for clarity.

#### Includes

| Package Name | Purpose |
| --- | --- |
| [@zerodep/errors](https://github.com/cdepage/zerodep/tree/main/packages/errors) | The ZeroDepError upon which all other errors are subclassed |
| [@zerodep/guards](https://github.com/cdepage/zerodep/tree/main/packages/guards) | A barrel-package of all guards (see below) |

### Guards Package

```typescript
npm install @zerodep/guards
```

Of course, you may use `yarn` or `pnpm` or the package manager of your choice. Only `npm` examples are shown for clarity.

#### Includes

| Package Name | Purpose |
| --- | --- |
| [@zerodep/guards.errors](https://github.com/cdepage/zerodep/tree/main/packages/guards.errors) | The ZeroDepErrorGuard that all guard packages use |
| [@zerodep/guards.float](https://github.com/cdepage/zerodep/tree/main/packages/guards.float) | Guards against the use of non-float values |
| [@zerodep/guards.integer](https://github.com/cdepage/zerodep/tree/main/packages/guards.integer) | Guards against the use of non-integer values |
| [@zerodep/guards.number](https://github.com/cdepage/zerodep/tree/main/packages/guards.number) | Guards against the use of non-numeric values |
| [@zerodep/guards.string](https://github.com/cdepage/zerodep/tree/main/packages/guards.string) | Guards against the use of non-string values |

### Independent Packages

Any of the packages included in the barrel-packages above may be installed in independently:

```
npm install @zerodep/[package-name]
```

Documentation for each can be found in the appropriate [packages folder](https://github.com/cdepage/zerodep/tree/main/packages) on github.

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
- **minor versions**: includes addition of new functionality or backwards-compatible software improvements
- **patch versions**: are reserved for copy changes and bug fixes

The above said, a security best practice is to pin your software packages to specific versions and only upgrade to more recent releases after careful inspection of both the [Changelog](https://github.com/cdepage/zerodep/blob/main/CHANGELOG.md) and any associated software changes.

## Resources

- [Security Policy](https://github.com/cdepage/zerodep/blob/main/SECURITY.md)
- [Changelog](https://github.com/cdepage/zerodep/blob/main/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
