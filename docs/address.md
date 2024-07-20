# "Address" Barrel Package

[![version](https://img.shields.io/npm/v/@zerodep/address?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/address)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

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
