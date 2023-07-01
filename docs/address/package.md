# Address Barrel Package

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/address?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/address) [![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/address?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/address) [![tree shaking](https://img.shields.io/badge/tree%20shaking-supported-blue?style=flat-square)](https://bundlephobia.com/package/@zerodep/address) ![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square) ![types](https://badgen.net/npm/types/@zerodep/address?style=flat-square)

![coverage](https://img.shields.io/badge/coverage-100%25-green?style=flat-square) ![last commit](https://img.shields.io/github/last-commit/cdepage/zerodep?style=flat-square) ![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@zerodep/address?style=flat-square) [![version](https://img.shields.io/npm/v/@zerodep/address?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/address)

The @zerodep ecosystem has a variety of packages of different sizes and capabilities to allow the right-sizing of package selection for your application. This one is a package of all `address` functions.

## About Address Methods

Address methods provide information about address components (cities, counties, states, countries) and capabilities to normalize a mailing address or component of an an address.

## Available Functions

All of the following functions are available in this package:

- [addressNormalize()](address/normalize.md)
- [addressParse()](address/parse.md)
- [addressState()](address/state.md) - A utility to get information about a state from a state name or abbreviation.

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking, all packages are available in ESM or CJS formats.

```shell
# all @zerodep packages - largest file size
npm i @zerodep/app

# all @zerodep address functions - medium file size
npm i @zerodep/address
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.1.0] - 2023-06-29

**Added**

- added the `addressState()` function

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed all snake_case, kebab-case and dot.case packages to camelCase
