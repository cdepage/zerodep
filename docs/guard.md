# "Guard" Barrel Package

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/guard?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/guard)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/guard?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/guard)
[![version](https://img.shields.io/npm/v/@zerodep/guard?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

The @zerodep ecosystem has a variety of packages of different sizes and capabilities to allow the right-sizing of package selection for your application.

This is the _guard_ package: it includes all tree-shakeable guards.

Guards are functions designed for _run-time_ use. They require a provided value to be of a specific type. Guards are intended for use by the paranoid programmer for internal application functions. Check out the [module matrix](/) for a full overview of what function/capability is in which packages.

**To Install**

```bash
npm i @zerodep/guard
```

## Available Functions

All of the following functions are available in this package:

- [guardArray()](guard/array.md)
- [guardBigInt()](guard/bigint.md)
- [guardBoolean()](guard/boolean.md)
- [guardDate()](guard/date.md)
- [guardFloat()](guard/float.md)
- [guardFunction()](guard/function.md)
- [guardInteger()](guard/integer.md)
- [guardNumber()](guard/number.md)
- [guardObject()](guard/object.md)
- [guardPojo()](guard/pojo.md)
- [guardString()](guard/string.md)
