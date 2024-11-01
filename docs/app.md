# App Barrel Package

[![version](https://img.shields.io/npm/v/@zerodep/app?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/app)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

The @zerodep ecosystem has a variety of packages of different sizes and capabilities to allow the right-sizing of package selection for your application. This one is a package of every @zerodep utility, parser, algorithm and capability.

This is the _kitchen sink_ package: it includes all tree-shakeable functions, parsers, capabilities, types and data from the @zerodep ecosystem.

**To Install**

```bash
npm i @zerodep/app
```

## Package Includes

All of the following are available in this package:

- [Every Address Function](address.md)
- [Every Case Converter](case.md)
- [Every Guard Function](guard.md)
- [Every Is Function](is.md)
- [Every String Function](string.md)
- [Every Struct Factory](struct.md)
- [Every To Converter](to.md)
- [Every Type Literal Union](types.md)

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### Release 2.10.x

**Added**

- added the `isAsync()` method
- added the `isGenerator()` method
- added the `toBoolean()` method

**Fixed**

- the `isEqual()` method to properly handle Map keys ordering, Set value ordering, and array item ordering

**Updated**

- the documentation for every `is` package and method with better descriptions and examples
