# addressNormalize()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/address-normalize?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/address-normalize)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/address-normalize?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/address-normalize)
[![version](https://img.shields.io/npm/v/@zerodep/address-normalize?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/address-normalize)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A utility that normalizes an address string for ease of parsing.

## Documentation

This is a standalone package export from the `@zerodep` ecosystem.

Full documentation for this method may be found at the [zerodep.app](https://zerodep.app/#/address/normalize) website.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { addressNormalize } from '@zerodep/address-normalize';
// or
const { addressNormalize } = require('@zerodep/address-normalize');
```

## How to Use

```javascript
addressNormalize('1234 Main Street S.West apt # 14-a');
addressNormalize('1234 Main Street south-west apt 14-a');
// "1234 MAIN STREET SW APT 14-A"

addressNormalize('apartment 3c, southeast cloverfield ave, manville nj 08835');
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
