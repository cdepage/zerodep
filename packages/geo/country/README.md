# @zerodep/geo-country

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/geo-country?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/geo-country)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/geo-country?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/geo-country)
[![version](https://img.shields.io/npm/v/@zerodep/geo-country?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/geo-country)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A run-time geo to require a value to be a COUNTRY (plain old javascript object); it will throw a `ZeroDepError` if the geo fails.

Full documentation is available at the [zerodep.app](http://zerodep.app/geo/country) page.

### Successful Cases

```javascript
geoCountryIso('usa'); // 'US'
geoCountryIso('canada'); // 'CA'
geoCountryIso('great britain'); // 'GB'

geoCountry(['es']);
// {
//   countryName: 'Spain',
//   countryIso2: 'ES',
//   countryIso3: 'ESP',
//   countryCode: 724,
// }
```

### Unsuccessful Cases

```javascript
geoCountryIso('unknown'); // thows ZeroDepError: Could not find a country for "UNKNOWN"

geoCountry('unknown'); // thows ZeroDepError: Could not find a country for "UNKNOWN"
```
