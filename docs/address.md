# "Address" Barrel Package

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/address?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/address)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/address?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/address)
[![version](https://img.shields.io/npm/v/@zerodep/address?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/address)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

The @zerodep ecosystem has a variety of packages of different sizes and capabilities to allow the right-sizing of package selection for your application.

This is the _address_ package: it includes all tree-shakeable parsing functionality ,data normalization capabilities and types related to addresses. Check out the [module matrix](/) for a full overview of what function/capability is in which packages.

**To Install**

```bash
npm i @zerodep/address
```

## Package Includes

All of the following functions are available in this package:

- [addressNormalize()](address/normalize.md)
- [addressParse()](address/parse.md)
- [addressState()](address/state.md) - A utility to get information about a state from a state name or abbreviation.

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.1.0] - 2023-06-29

**Added**

- added the `addressState()` function

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed all snake_case, kebab-case and dot.case packages to camelCase
