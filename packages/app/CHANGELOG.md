# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.6.2] - 2022-05-07

### Changed

- Typo in build folder name

## [0.6.1] - 2022-05-07

### Changed

- Incorrect repo setting in package.json

## [0.6.0] - 2022-05-07

### Added

- Introduce the `is.equal` utility
- UMD file export for CDNs
- Add a few badges to the README

### Changed

- Refactor ZeroDepError classes

## [0.5.0] - 2022-05-03

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

## [0.4.0] - 2022-05-02

### Changed

- Fix casing of the exported `isJSON` and `toJSON` utilities, included associated documentation

## [0.3.1] - 2022-05-02

### Changed

- Updated README to be more comprehensive

## [0.3.0] - 2022-05-02

### Added

- Introduce the `guard.function` utility
- Introduce the `guard.json` utility

## [0.2.0] - 2022-05-01

### Added

- Introduce the `is.json` utility
- Introduce the `is.promise` utility
- Introduce the `is.typedarray` utility
- Introduce the `ZeroDepErrorTo` class
- Introduce the `to.json` converter
- Introduce the `types.locales` type declaration
- Introduce the `types.timezones` type declaration

### Changed

- Simplify the `guardXxxx` and `guardXxxxHOF` methods for all guards
- Enhance the `to.string` detection and formatting algorithm
- Performance improvements to `is.*` algorithms
- Fixed "How to Use" examples for arrays
- ZeroDepError `tax` value renamed to `category` for clarity

## [0.1.0] - 2022-04-28

### Added

- Introduce the `app` barrel package
