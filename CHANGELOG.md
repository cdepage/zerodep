# Changelog

All notable changes to all projects in this monorepo will be documented in this file. Please note each package also has its own specific changelog.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

### Release 2.10.0

**Added**

- added the `isAsync()` function and the `@zerodep/is-async` package
- added the `isGenerator()` function and the `@zerodep/is-generator` package
- added the functions above to the appropriate barrel packages
- earned the "Open Source Software Foundation's Best Practices" badge
- add a [Project Roadmap](ROADMAP.md) file

**Fixed**

- the `isEqual()` function to ignore Map keys ordering, Set value ordering, and handle array item ordering
- the `isFloat()` function to properly handle zero values
- the `toPojo()` function throws a ZeroDepError when a `Date` is provided as the function argument
- updated the functions above in appropriate barrel packages

**Updated**

- improve the documentation for every `address`, `case`, `guard`, `is`, `string`, and `to` function/converter/factory with better descriptions and examples

---

### Release 2.9.3

**Fixed**

- build system bug published `src` files to npm instead of the properly built, minified and packaged CJS and ESM files from the `dist` folder - this required a patch-bump of every package in the monorepo [tx @moltar]

---

### Release 2.9.x

**Added**

- added the `toBoolean()` function and the `@zerodep/to-boolean` package
- added the `toBoolean()` to the appropriate barrel packages

**Fixed**

- type definitions were not properly being exported for both ESM and CJS packages [tx @rzyns]

---

### Release 2.8.x

Skipped due to an internal tooling hiccup.

---

### Release 2.7.3

**Fixed**

- resolved an issue with the `isPojo()` and a circular dependency [tx @chrisjameslennon]
- updated the `isPojo()` in the appropriate barrel packages

**Changed**

- updated 1@zerodep/types1 timezones
- internal tooling and dependency updates
- removed support for Node v16 as it is beyond end of life

---

### Release 2.7.2

**Fixed**

- fixed a bug across all packages when importing into projects with `"type": "module"` in their `package.json`

---

### Release 2.7.1

**Fixed**

- ~~fixed~~ tried to fix a bug where named imports did not work as expected for both `cjs` and `esm` packages, with or without Typescript

**Changed**

- added a LICENSE.md and SECURITY.md files to every package on `npm.js`
- removed `bundlephobia` package size buttons/links in README files as they were no longer functional

---

#### Release 2.7.0

**Added**

- added the `caseDot()` function and the `@zerodep/case-dot` package
- added the `caseDot()` to the appropriate barrel packages

**Changed**

- added an optional error subclass/type check to the `isError()` function
- added a check to the `isError()` function to ensure the error's `message` property is a string (if it exists)

---

### Release 2.6.2

**Changed**

- added a max length check the `addressNormalize()` function to prevent ReDoS attacks
- added the `addressNormalize()` in the appropriate address and barrel packages

---

### Release 2.6.1

**Changed**

- zerodep.app website url routing to hash-based schema
- internal tooling updates
- add support for Node v20 (Iron LTS)
- update build to ES2022 spec (previously E2020)

---

### Release 2.6.0

**Added**

- added the `structTreeFactory()` data structure factory and the `@zerodep/struct-tree` package
- added the `structTreeFactory()` to the appropriate barrel packages

---

### Release 2.5.0

**Added**

- added the `structLinkedListFactory()` data structure factory and the `@zerodep/struct-linkedlist` package
- added the `structLinkedListFactory()` to the appropriate barrel packages

---

### Release 2.4.0

**Added**

- added the `structQueueFactory()` data structure factory and the `@zerodep/struct-queue` package
- added the `structQueueFactory()` to the appropriate barrel packages

---

### Release 2.3.0

**Added**

- added the `@zerodep/address` barrel package
- added the `addressZip()` parser and `@zerodep/address-zip` package
- added the `addressCountry()` parser and `@zerodep/address-country` package
- added the `addressState()` parser and `@zerodep/address-state` package
- added the `addressDirectional()` parser and `@zerodep/address-directional` package
- added the `addressSecondary()` parser and `@zerodep/address-secondary` package
- added the `addressNormalize()` parser and `@zerodep/address-normalize` package
- added all of the functions above to the appropriate barrel packages
- added the `@zerodep/geo-data` package

**Changed**

- updated the `geoCountry` and `geoState` packages to use the new `@zerodep/geo-data` package

---

### Release 2.2.0

**Added**

- added the `@zerodep/geo` barrel package
- added the `StateCa`, `StateCaAbbr`, `StateUs` and `StateUsAbbr` type definitions
- added the `geoState()` and `geoStateIso` parsers and `@zerodep/geo-state` package
- added the `geoCountry()` and `geoCountryIso` parsers and `@zerodep/geo-country` package
- added the functions above to the appropriate barrel packages

---

### Release 2.1.0

**Added**

- added the `@zerodep/struct` barrel package
- added the `structCollectionFactory()` parser and `@zerodep/struct-collection` package
- added the `structStackFactory()` parser and `@zerodep/struct-stack` package
- added the functions above to the appropriate barrel packages

---

### Release 2.0.0

**Breaking**

- renamed ALL individual-function packages to use kebab-case names instead of dot- or snake-case names
  - e.g. `@zerodep/xx.xxxx` or `@zerodep/xx_xxxx` to `@zerodep/xx-xxxx`
- renamed `guardJSON()` to `guardPojo()` for greater semantic naming clarity
- renamed `isJSON()` to `isPojo()` for greater semantic naming clarity
- renamed `toJSON()` to `toPojo()` for greater semantic naming clarity
- updated the functions above in barrel packages appropriately
- pluralized barrel package names (where grammatically and semantically possible), e.g. `@zerodep/utility` becomes `@zerodep/utilities`
- removed UMD packages in favor of ES modules
- discontinued support and testing for Node v14.x

**Added**

- launched the [zerodep.app](https://zerodep.app) website
- added the `@zerodep/case` barrel package
- added the `caseCamel()` function and the `@zerodep/case-camel` package
- added the `caseKebab()` function and the `@zerodep/case-kebab` package
- added the `casePascal()` function and the `@zerodep/case-pascal` package
- added the `caseSentence()` function and the `@zerodep/case-sentence` package
- added the `caseSnake()` function and the `@zerodep/case-snake` package
- added the `stringTrim()` function and the `@zerodep/string-trim` package
- added the `stringTrimLeft()` function and the `@zerodep/string-trimleft` package
- added the `stringTrimRight()` function and the `@zerodep/string-trimright` package
- added the `toDate()` function and the `@zerodep/to-date` package
- added the `toInteger()` function and the `@zerodep/to-integer` package
- added the `addressNormalize()` function and the `@zerodep/address-normalize` package
- added the functions above to the appropriate barrel packages
- added support and testing for Node 18.x

**Changed**

- added run-time type checking to `guardArray()` function
- improved the `addressParse()` algorithm
- upgraded internal monorepo build system, shrinking package sizes

**Removed**

- stopped support for all localization-specific functions
