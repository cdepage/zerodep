# addressNormalize()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/address-normalize?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/address-normalize)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/address-normalize?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/address-normalize)
[![version](https://img.shields.io/npm/v/@zerodep/address-normalize?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/address-normalize)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A utility that normalizes an address string for ease of parsing.

This will:

- deburr and uppercase text
- convert compound directionals to their abbreviations (e.g. north west => NW)
- normalize incorrect abbreviations & misspellings (e.g. pob => PO BOX)
- convert unabbreviated values to preferred values (e.g. department => DEPT)
- strip unnecessary characters and punctuation

Normalization is done in accordance with USPS and Canada Post addressing standards.

## Signature

```typescript
addressNormalize: (value: string) => string;
```

## How to Use

```javascript
addressNormalize('1234 Main Street S.West apt # 14-a');
addressNormalize('1234 Main Street south-west apt 14-a');
// "1234 MAIN STREET SW APT 14-A"

addressNormalize('apartment 3c, south-east cloverfield ave, manville nj 08835');
addressNormalize('apmt 3c se cloverfield ave manville nj 08835');
// "APT 3C SE CLOVERFIELD AVE MANVILLE NJ 08835"

addressNormalize('p.o.b 1234');
addressNormalize('po box 1234');
// "PO BOX 1234"

addressNormalize('rural route 2 box 3');
// "RR 2 BOX 3"

addressNormalize('hiway contract 68 box 23-a');
// "HC 68 BOX 23-A"

addressNormalize('priv mailbox 234');
// "PMB 234"
```

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](/) for more information.

```shell
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "parsers" packages
import { addressNormalize } from '@zerodep/parsers';

// all @zerodep address functions
import { addressNormalize } from '@zerodep/address';

# only this @zerodep package
import { addressNormalize } from '@zerodep/address-normalize';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-07-03

**Added**

- added the `addressNormalize()` function
