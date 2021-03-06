# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.9.2] - 2022-05-07

### Changed

- Typo in build folder name

## [0.9.1] - 2022-05-07

### Changed

- Incorrect repo setting in package.json

## [0.9.0] - 2022-05-07

### Added

- Introduce the `is.equal` utility
- UMD file export for CDNs
- Add a few badges to the README

### Changed

- Refactor ZeroDepError classes

## [0.8.0] - 2022-05-03

### Added

- Introduce the `format` barrel package
- Introduce the `format.currency` formatter
- Introduce the `locale` barrel package
- Introduce the `locale.get` utility
- Introduce the `locale.settings` manager
- Introduce the `to.number` converter

## [0.7.0] - 2022-05-02

### Changed

- Fix casing of the exported `isJSON` and `toJSON` utilities, included associated documentation

## [0.6.0] - 2022-05-02

### Added

- Introduce the `guard.function` utility
- Introduce the `guard.json` utility

## [0.5.0] - 2022-05-01

### Added

- Introduce the `is.json` utility
- Introduce the `is.promise` utility
- Introduce the `is.typedarray` utility
- Introduce the `ZeroDepErrorTo` class
- Introduce the `to.json` converter

### Changed

- Simplify the `guardXxxx` and `guardXxxxHOF` methods for all guards
- Enhance the `to.string` detection and formatting algorithm
- Performance improvements to `is.*` algorithms
- ZeroDepError `tax` value renamed to `category` for clarity

## [0.4.0] - 2022-04-28

### Added

- Introduce the `is.iterable` utility
- Introduce the `can` barrel package
- Introduce the `can.iterate` utility

### Changed

- Improve README with better structure and examples
- Add link to source code to the minified, distributed packages
- Remove the CHANGELOG.md file from the distributed packages
- Add more types and constructs to unit tests

## [0.3.x] - 2022-04-26

### Added

- Introduce the `is.nil` utility

## [0.2.x] - 2022-04-26

### Added

- Introduce the `guard.boolean` utility
- Introduce the `guard.bigint` utility
- Introduce the `guard.date` utility
- Introduce the `is` barrel package

## [0.1.0] - 2022-04-25

### Added

- Introduce the `guard` barrel package
- Introduce the `guard.string` utility
- Introduce the `guard.float` utility
- Introduce the `guard.integer` utility
- Introduce the `guard.number` utility
