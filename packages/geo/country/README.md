# @zerodep/geo-country

[![version](https://img.shields.io/npm/v/@zerodep/geo-country?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/geo-country)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A parser to get country ISO codes and information from a country name or abbreviation; it will throw a `ZeroDepError` on failure.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/geo/country) page.

### geoCountryIso Examples

```javascript
geoCountryIso('usa'); // 'US'
geoCountryIso('canada'); // 'CA'
geoCountryIso('great britain'); // 'GB'
```

### geoCountry Examples

```javascript
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
