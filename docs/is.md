# "Is" Barrel Package

[![version](https://img.shields.io/npm/v/@zerodep/is?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

The @zerodep ecosystem has a variety of packages of different sizes and capabilities to allow the right-sizing of package selection for your application.

This is the _is_ package: it includes all tree-shakeable functions that return a boolean response based on what it is checking for. Check out the [module matrix](/) for a full overview of what function/capability is in which packages.

**To Install**

```bash
npm i @zerodep/is
```

## Available Functions

- [isArray()](is/array.md)
- [isAsync()](is/async.md)
- [isBigInt()](is/bigint.md)
- [isBoolean()](is/boolean.md)
- [isDate()](is/date.md)
- [isEmpty()](is/empty.md)
- [isEqual()](is/equal.md)
- [isError()](is/error.md)
- [isFloat()](is/float.md)
- [isFunction()](is/function.md)
- [isGenerator()](is/generator.md)
- [isInteger()](is/integer.md)
- [isIterable()](is/iterable.md)
- [isMap()](is/map.md)
- [isNil()](is/nil.md)
- [isNull()](is/null.md)
- [isNumber()](is/number.md)
- [isObject()](is/object.md)
- [isPojo()](is/pojo.md)
- [isPromise()](is/promise.md)
- [isRegex()](is/regex.md)
- [isSet()](is/set.md)
- [isString()](is/string.md)
- [isSymbol()](is/symbol.md)
- [isTypedArray()](is/typedArray.md)
- [isUndefined()](is/undefined.md)
- [isWeakMap()](is/weakMap.md)
- [isWeakSet()](is/weakSet.md)

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### Release 2.2.x

**Added**

- added the `isAsync()` method
- added the `isGenerator()` method

**Fixed**

- the `isEqual()` method to properly handle Map keys ordering, Set value ordering, and array item ordering

**Updated**

- the documentation for every `is` package and method with better descriptions and examples
