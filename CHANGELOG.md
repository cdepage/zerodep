# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

This is a rollup of all CHANGELOG files in the monorepo. Each package also has its own CHANGELOG.

## [Unreleased]

### Added

- Introduce the `format` barrel package
- Introduce the `format.currency` formatter
- Introduce the `locale` barrel package
- Introduce the `locale.get` utility
- Introduce the `locale.settings` manager
- Introduce the `types.currencies` type declaration
- Introduce the `types.units` type declaration
- Introduce the `to.number` converter
- Introduce the `locale` barrel package
- Introduce the `locale.get` helper
- Introduce the `locale.settings` helper

## [0.7.0] - 2022-05-02

### Changed

- Fix casing of the exported `isJSON` and `toJSON` utilities, included associated documentation
- Harmonize README documentation

## [0.6.0] - 2022-05-02

### Changed

- Update monorepo management and build tooling npm packages

## [0.5.0] - 2022-05-02

### Added

- Introduce the `guard.function` utility
- Introduce the `guard.json` utility

### Changed

- Export error classes thrown by `guard.*` packages

## [0.4.0] - 2022-05-01

### Added

- Introduce the `is.json` utility
- Introduce the `is.promise` utility
- Introduce the `is.typedarray` utility
- Introduce the `ZeroDepErrorTo` class
- Introduce the `to.json` converter
- Introduce the `types.locales` declaration
- Introduce the `types.timezones` declaration

### Changed

- Simplify the `guardXxxx` and `guardXxxxHOF` methods for all `guard.*` packages
- Enhance the `to.string` detection and formatting algorithm
- Performance improvements to the `is.*` utilities
- Fixed "How to Use" examples for arrays
- ZeroDepError `tax` value renamed to `category` for clarity

## [0.3.0] - 2022-04-28

### Added

- Introduce the `is.iterable` utility
- Introduce the `can.iterate` utility
- Introduce the `app` barrel package
- Introduce the `can` barrel package

### Changed

- Improve README files in all packages with better structure and examples
- Add link to source code to the minified, distributed packages
- Remove the CHANGELOG.md file from the distributed packages
- Add more types and constructs to unit tests for all packages

## [0.2.3] - 2022-04-26

### Changed

- Documentation enhancements

## [0.2.2] - 2022-04-26

### Changed

- Update all `guard` packages to leverage the `is` utilities

## [0.2.1] - 2022-04-26

### Added

- Introduce the `utils` barrel packages
- Introduce the `guard` barrel packages
- Introduce the `is.array` utility
- Introduce the `is.bigint` utility
- Introduce the `is.boolean` utility
- Introduce the `is.date` utility
- Introduce the `is.float` utility
- Introduce the `is.function` utility
- Introduce the `is.integer` utility
- Introduce the `is.iterable` utility
- Introduce the `is.map` utility
- Introduce the `is.nil` utility
- Introduce the `is.null` utility
- Introduce the `is.number` utility
- Introduce the `is.object` utility
- Introduce the `is.regex` utility
- Introduce the `is.set` utility
- Introduce the `is.string` utility
- Introduce the `is.symbol` utility
- Introduce the `is.undefined` utility
- Introduce the `is.weakmap` utility
- Introduce the `is.weakset` utility

## [0.2.0] - 2022-04-25

### Added

- Introduce the `guard` barrel packages
- Introduce the `guard.array` utility
- Introduce the `guard.bigint` utility
- Introduce the `guard.boolean` utility
- Introduce the `guard.date` utility
- Introduce the `guard.object` utility

## [0.1.0] - 2022-04-25

### Added

- Introduce the `ZeroDepError` base error class
- Introduce the `guard.strings` utility
- Introduce the `guard.float` utility
- Introduce the `guard.integer` utility
- Introduce the `guard.number` utility
