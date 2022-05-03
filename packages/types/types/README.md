# @zerodep/to

A useful set of typescript type declarations.

This is a barrel package of all `@zerodep/types.*` typescript type declarations within the @zerodep monorepo.

## tl;dr

A quick howto by examples for quick reference:

```typescript
import { TypesLocales, TypesTimeZones } from '@zerodep/types';

interface MyInterface {
  locale: TypesLocales | TypesLocales[];
  timezone: TypesTimeZones;
}
```

Definitions:

**Barrel Package:** "barrel" is a way to rollup exports from several modules into a single convenient module. The barrel itself is a module file that re-exports selected exports of other modules.

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
npm install @zerodep/types
```

Of course, you may use `yarn`, `pnpm`, or the package manager of your choice. Only `npm` examples are shown for brevity.

## Included Packages

This barrel package includes all `@zerodep/to.*` packages:

| Type Name | Package | Purpose |
| --- | --- | --- |
| TypesCurrencies &<br>TypesCurrenciesCrypto | [types.currencies](https://www.npmjs.com/package/@zerodep/types.currencies) | Typescript `type` declaration of currencies and crypto-currencies |
| TypesLocales | [types.locales](https://www.npmjs.com/package/@zerodep/types.locales) | Typescript `type` declaration of locales |
| TypesTimeZones | [types.timezones](https://www.npmjs.com/package/@zerodep/types.timezones) | Typescript `type` declaration of time zones |
| TypesUnits | [types.units](https://www.npmjs.com/package/@zerodep/types.units) | Typescript `type` declaration of supported units of measure |

## How to Use

For specific details and configuration options, see the specific package.

```typescript
import { TypesLocales, TypesTimeZones } from '@zerodep/types';

interface AnIntlInterface {
  locale: TypesLocales | TypesLocales[];
  timezone: TypesTimeZones;
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
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/types/types/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
