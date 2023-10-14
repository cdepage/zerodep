# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

### [2.6.1] - 2023-10-14

**Changed**

- zerodep.app website url routing to hash-based schema
- internal tooling updates
- add support for Node v20 (Iron LTS)
- update build to ES2022 spec (previously E2020)

### [2.6.0] - 2023-08-29

**Added**

- added the `@zerodep/struct-tree` package, included it in the `@zerodep/app` and `@zerodep/struct` barrel packages

### [2.5.0] - 2023-08-28

**Added**

- added the `@zerodep/struct-linkedlist` package, included it in the `@zerodep/app` and `@zerodep/struct` barrel packages

### [2.4.0] - 2023-08-27

**Added**

- added the `@zerodep/struct-queue` package, included it in the `@zerodep/app` and `@zerodep/struct` barrel packages

### [2.3.0] - 2023-07-03

**Added**

- added the `@zerodep/geo-data` package, included it in the `@zerodep/app`, `@zerodep/parsers` and `@zerodep/geo` barrel packages
- added the `@zerodep/address` barrel package
- added the `@zerodep/address-zip` parser, included it in the `@zerodep/app`, `@zerodep/parsers` and `@zerodep/address` barrel packages
- added the `@zerodep/address-country` parser, included it in the `@zerodep/app`, `@zerodep/parsers` and `@zerodep/address` barrel packages
- added the `@zerodep/address-state` parser, included it in the `@zerodep/app`, `@zerodep/parsers` and `@zerodep/address` barrel packages
- added the `@zerodep/address-directional` parser, included it in the `@zerodep/app`, `@zerodep/parsers` and `@zerodep/address` barrel packages
- added the `@zerodep/address-secondary` parser, included it in the `@zerodep/app`, `@zerodep/parsers` and `@zerodep/address` barrel packages
- added the `@zerodep/address-normalize` parser, included it in the `@zerodep/app`, `@zerodep/parsers` and `@zerodep/address` barrel packages

**Updated**

- refactor the `@zerodep/geo-country` and `@zerodep/geo-state` packages to use the new `@zerodep/geo-data` package

### [2.2.0] - 2023-07-03

**Added**

- added the `StateCa`, `StateCaAbbr`, `StateUs` and `StateUsAbbr` type definitions and `geoState()`, `geoStateIso()`, `geoCountry()`, and `geoCountryIso()`functions to the `@zerodep/types`, `@zerodep/app`, `@zerodep/parsers` and `@zerodep/utilities` packages
- added the `@zerodep/geo`, `@zerodep/geo-country` and`@zerodep/geo-state` packages

## [2.1.0] - 2023-07-02

### Added

- Added the `@zerodep/struct` data structures barrel package
- Added the `@zerodep/struct-collection` data structure package
- Added the `@zerodep/struct-stack` data structure package

### Updated

- Added the `@zerodep/struct-collection` data structure to the `@zerodep/app` barrel package
- Added the `@zerodep/struct-stack` data structure to the `@zerodep/app` barrel package

## [2.0.0] - 2023-05-21

### Breaking

- Discontinued support and testing for Node v14.x
- Renamed all individual-function packages to use dashes instead of dot or underscore separators, e.g. `@zerodep/xx.xxxx` or `@zerodep/xx_xxxx` to `@zerodep/xx-xxxx`
- Renamed `guardJSON()` to `guardPojo()` for greater semantic naming clarity
- Renamed `isJSON()` to `isPojo()` for greater semantic naming clarity
- Renamed `toJSON()` to `toPojo()` for greater semantic naming clarity
- Pluralized large barrel package names (where grammatically and semantically possible), e.g. `@zerodep/utility` becomes `@zerodep/utilities`
- Removed UMD packages in favor of ES modules

### Added

- Added support and testing for Node 18.x
- Launched [zerodep.app](https://zerodep.app) website
- Added run-time type checking to `guardArray()` function
- Added the `case` package with the `caseCamel()`, `caseKebab()`, `casePascal()`, `caseSentence()` and `caseSnake()` conversion functions
- Added `stringTrim()`, `stringTrimLeft()`, and `stringTrimRight()` manipulation functions
- Added `toDate()` and `toInteger()` conversion functions
- Added `addressNormalize()` function

### Changed

- Improved the `addressParse()` algorithm
- Upgraded internal monorepo build system, shrinking package sizes

### Removed

- Removed all localization-specific functions

## [1.x.x] - 2022-00-00

### Unknown

- The entire 1.x.x changeset has disappeared

## [0.11.0] - 2022-12-21

### Added

- added the `address-parse()` parser to identify the components of US and Canadian addresses

## [0.9.0] - 2022-05-07

### Added

- UMD file export for CDNs for all packages

### Changed

- Add a few badges to the README files
- Refactor ZeroDepError classes
- Quashed a couple of typo-related bugs

## [0.8.0] - 2022-05-03

### Added

- Added the `format` barrel package
- Added the `format.currency` formatter
- Added the `locale` barrel package
- Added the `locale.get` utility
- Added the `locale.settings` manager
- Added the `types.currencies` type declaration
- Added the `types.units` type declaration
- Added the `to.number` converter
- Added the `locale` barrel package
- Added the `locale.get` helper
- Added the `locale.settings` helper

### Changed

- README updates

## [0.7.0] - 2022-05-02

### Changed

- Fix casing of the exported `isJSON()` and `toJSON()` utilities, included associated documentation
- Harmonize README documentation

## [0.6.0] - 2022-05-02

### Changed

- Update monorepo management and build tooling npm packages

## [0.5.0] - 2022-05-02

### Added

- Added the `guard-function()` utility
- Added the `guard_json()` utility

### Changed

- Export error classes thrown by `guard_*` packages

## [0.4.0] - 2022-05-01

### Added

- Added the `is_json()` utility
- Added the `is-promise()` utility
- Added the `is-typedarray()` utility
- Added the `to.json()` converter
- Added the `types.locales` declaration
- Added the `types.timezones` declaration

### Changed

- Simplify the `guardXxxx()` and `guardXxxxHOF()` methods for all `guard_*` packages
- Enhance the `to.string()` detection and formatting algorithm
- Performance improvements to the `is_*()` utilities
- Fixed "How to Use" examples for arrays
- ZeroDepError `tax` value renamed to `category` for clarity

## [0.3.0] - 2022-04-28

### Added

- Added the `is_iterable()` utility
- Added the `can.iterate()` utility
- Added the `app` barrel package
- Added the `can` barrel package

### Changed

- Improve README files in all packages with better structure and examples
- Add link to source code to the minified, distributed packages
- Remove the CHANGELOG.md file from the distributed packages
- Add more types and constructs to unit tests for all packages

## [0.2.0] - 2022-04-26

### Changed

- Documentation enhancements
- Update all `guard` packages to leverage the `is` utilities

### Added

- Added the `utils` barrel packages
- Added the `guard` barrel packages
- Added the `is.array()` utility
- Added the `is.bigint()` utility
- Added the `is.boolean()` utility
- Added the `is.date()` utility
- Added the `is.float()` utility
- Added the `is.function()` utility
- Added the `is.integer()` utility
- Added the `is.iterable()` utility
- Added the `is.map()` utility
- Added the `is.nil()` utility
- Added the `is.null()` utility
- Added the `is.number()` utility
- Added the `is.object()` utility
- Added the `is.regex()` utility
- Added the `is.set()` utility
- Added the `is.string()` utility
- Added the `is.symbol()` utility
- Added the `is.undefined()` utility
- Added the `is.weakmap()` utility
- Added the `is.weakset()` utility

## [0.2.0] - 2022-04-25

### Added

- Added the `guard` barrel packages
- Added the `guard.array()` utility
- Added the `guard.bigint()` utility
- Added the `guard.boolean()` utility
- Added the `guard.date()` utility
- Added the `guard.object()` utility

## [0.1.0] - 2022-04-25

### Added

- Added the `ZeroDepError` base error class
- Added the `guard.strings()` utility
- Added the `guard.float()` utility
- Added the `guard.integer()` utility
- Added the `guard.number()` utility
