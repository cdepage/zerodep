# zerodep.app

@zerodep is a library of modern, fully typed utilities, parsers, data structures and other capabilities to help with creating application functionality with no third-party dependencies.

This site provides full documentation for each method, structure, algorithm and capability.

For all functionality offered by @zerodep:

```
npm i @zerodep/app
```

## Module Matrix

Each piece of functionality is published to `npm` both individually and in barrel packages by use-case allowing for the selection of the most appropriate package for your needs. Of course, each package is fully tree-shakeable.

Barrel packages provide more functionality per byte than adding each package individually.

This table shows which functions are in what barrel package.

|                                                   | [app](app.md) |     | [parsers](parsers.md) | [utilities](utilities.md) |     | [address](address.md) | [case](case.md) | [geo](geo.md) | [guard](guard.md) | [is](is.md) | [string](string.md) | [struct](struct.md) | [to](to.md) |
| ------------------------------------------------- | :-----------: | --- | :-------------------: | :-----------------------: | --- | :-------------------: | :-------------: | :-----------: | :---------------: | :---------: | :-----------------: | :-----------------: | :---------: |
| [addressCountry()](address/country.md)            |       ✓       |     |           ✓           |                           |     |           ✓           |                 |               |                   |             |                     |                     |             |
| [addressDirectional()](address/directional.md)    |       ✓       |     |           ✓           |                           |     |           ✓           |                 |               |                   |             |                     |                     |             |
| [addressNormalize()](address/normalize.md)        |       ✓       |     |           ✓           |                           |     |           ✓           |                 |               |                   |             |                     |                     |             |
| [addressParse()](address/parse.md)                |       ✓       |     |           ✓           |                           |     |           ✓           |                 |               |                   |             |                     |                     |             |
| [addressSecondary()](address/secondary.md)        |       ✓       |     |           ✓           |                           |     |           ✓           |                 |               |                   |             |                     |                     |             |
| [addressState()](address/state.md)                |       ✓       |     |           ✓           |                           |     |           ✓           |                 |               |                   |             |                     |                     |             |
| [addressStreet()](address/street.md)              |       ✓       |     |           ✓           |                           |     |           ✓           |                 |               |                   |             |                     |                     |             |
| [addressZip()](address/zip.md)                    |       ✓       |     |           ✓           |                           |     |           ✓           |                 |               |                   |             |                     |                     |             |
|                                                   | [app](app.md) |     | [parsers](parsers.md) | [utilities](utilities.md) |     | [address](address.md) | [case](case.md) | [geo](geo.md) | [guard](guard.md) | [is](is.md) | [string](string.md) | [struct](struct.md) | [to](to.md) |
| [caseCamel()](case/camel.md)                      |       ✓       |     |                       |             ✓             |     |                       |        ✓        |               |                   |             |                     |                     |             |
| [caseKebab()](case/kebab.md)                      |       ✓       |     |                       |             ✓             |     |                       |        ✓        |               |                   |             |                     |                     |             |
| [casePascal()](case/pascal.md)                    |       ✓       |     |                       |             ✓             |     |                       |        ✓        |               |                   |             |                     |                     |             |
| [caseSentence()](case/sentence.md)                |       ✓       |     |                       |             ✓             |     |                       |        ✓        |               |                   |             |                     |                     |             |
| [caseSnake()](case/snake.md)                      |       ✓       |     |                       |             ✓             |     |                       |        ✓        |               |                   |             |                     |                     |             |
|                                                   | [app](app.md) |     | [parsers](parsers.md) | [utilities](utilities.md) |     | [address](address.md) | [case](case.md) | [geo](geo.md) | [guard](guard.md) | [is](is.md) | [string](string.md) | [struct](struct.md) | [to](to.md) |
| [geo Data Maps](geo/data.md)                      |       ✓       |     |           ✓           |                           |     |                       |                 |       ✓       |                   |             |                     |                     |             |
| [geoState()](geo/state.md)                        |       ✓       |     |           ✓           |                           |     |                       |                 |       ✓       |                   |             |                     |                     |             |
| [geoStateIso()](geo/state.md)                     |       ✓       |     |           ✓           |                           |     |                       |                 |       ✓       |                   |             |                     |                     |             |
| [geoCountry()](geo/country.md)                    |       ✓       |     |           ✓           |                           |     |                       |                 |       ✓       |                   |             |                     |                     |             |
| [geoCountryIso()](geo/country.md)                 |       ✓       |     |           ✓           |                           |     |                       |                 |       ✓       |                   |             |                     |                     |             |
|                                                   | [app](app.md) |     | [parsers](parsers.md) | [utilities](utilities.md) |     | [address](address.md) | [case](case.md) | [geo](geo.md) | [guard](guard.md) | [is](is.md) | [string](string.md) | [struct](struct.md) | [to](to.md) |
| [guardArray()](guard/array.md)                    |       ✓       |     |                       |             ✓             |     |                       |                 |               |         ✓         |             |                     |                     |             |
| [guardBigInt()](guard/bigint.md)                  |       ✓       |     |                       |             ✓             |     |                       |                 |               |         ✓         |             |                     |                     |             |
| [guardBoolean()](guard/boolean.md)                |       ✓       |     |                       |             ✓             |     |                       |                 |               |         ✓         |             |                     |                     |             |
| [guardDate()](guard/date.md)                      |       ✓       |     |                       |             ✓             |     |                       |                 |               |         ✓         |             |                     |                     |             |
| [guardFloat()](guard/float.md)                    |       ✓       |     |                       |             ✓             |     |                       |                 |               |         ✓         |             |                     |                     |             |
| [guardFunction()](guard/function.md)              |       ✓       |     |                       |             ✓             |     |                       |                 |               |         ✓         |             |                     |                     |             |
| [guardInteger()](guard/integer.md)                |       ✓       |     |                       |             ✓             |     |                       |                 |               |         ✓         |             |                     |                     |             |
| [guardNumber()](guard/number.md)                  |       ✓       |     |                       |             ✓             |     |                       |                 |               |         ✓         |             |                     |                     |             |
| [guardObject()](guard/object.md)                  |       ✓       |     |                       |             ✓             |     |                       |                 |               |         ✓         |             |                     |                     |             |
| [guardPojo()](guard/pojo.md)                      |       ✓       |     |                       |             ✓             |     |                       |                 |               |         ✓         |             |                     |                     |             |
| [guardString()](guard/string.md)                  |       ✓       |     |                       |             ✓             |     |                       |                 |               |         ✓         |             |                     |                     |             |
|                                                   | [app](app.md) |     | [parsers](parsers.md) | [utilities](utilities.md) |     | [address](address.md) | [case](case.md) | [geo](geo.md) | [guard](guard.md) | [is](is.md) | [string](string.md) | [struct](struct.md) | [to](to.md) |
| [isArray()](is/array.md)                          |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |      ✓      |                     |                     |             |
| [isBigInt()](is/bigint.md)                        |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |      ✓      |                     |                     |             |
| [isBoolean()](is/boolean.md)                      |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |      ✓      |                     |                     |             |
| [isDate()](is/date.md)                            |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |      ✓      |                     |                     |             |
| [isEmpty()](is/empty.md)                          |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |      ✓      |                     |                     |             |
| [isEqual()](is/equal.md)                          |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |      ✓      |                     |                     |             |
| [isError()](is/error.md)                          |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |      ✓      |                     |                     |             |
| [isFloat()](is/float.md)                          |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |      ✓      |                     |                     |             |
| [isFunction()](is/function.md)                    |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |      ✓      |                     |                     |             |
| [isInteger()](is/integer.md)                      |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |      ✓      |                     |                     |             |
| [isIterable()](is/iterable.md)                    |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |      ✓      |                     |                     |             |
| [isMap()](is/map.md)                              |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |      ✓      |                     |                     |             |
| [isNil()](is/nil.md)                              |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |      ✓      |                     |                     |             |
| [isNull()](is/null.md)                            |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |      ✓      |                     |                     |             |
| [isNumber()](is/number.md)                        |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |      ✓      |                     |                     |             |
| [isObject()](is/object.md)                        |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |      ✓      |                     |                     |             |
| [isPojo()](is/pojo.md)                            |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |      ✓      |                     |                     |             |
| [isPromise()](is/promise.md)                      |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |      ✓      |                     |                     |             |
| [isRegex()](is/regex.md)                          |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |      ✓      |                     |                     |             |
| [isSet()](is/set.md)                              |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |      ✓      |                     |                     |             |
| [isString()](is/string.md)                        |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |      ✓      |                     |                     |             |
| [isSymbol()](is/symbol.md)                        |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |      ✓      |                     |                     |             |
| [isTypedArray()](is/typedArray.md)                |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |      ✓      |                     |                     |             |
| [isUndefined()](is/undefined.md)                  |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |      ✓      |                     |                     |             |
| [isWeakMap()](is/weakMap.md)                      |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |      ✓      |                     |                     |             |
| [isWeakSet()](is/weakSet.md)                      |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |      ✓      |                     |                     |             |
|                                                   | [app](app.md) |     | [parsers](parsers.md) | [utilities](utilities.md) |     | [address](address.md) | [case](case.md) | [geo](geo.md) | [guard](guard.md) | [is](is.md) | [string](string.md) | [struct](struct.md) | [to](to.md) |
| [stringDeburr()](string/deburr.md)                |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |             |          ✓          |                     |             |
| [stringLowerFirst()](string/lowerFirst.md)        |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |             |          ✓          |                     |             |
| [stringPadLeft()](string/padleft.md)              |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |             |          ✓          |                     |             |
| [stringPadRight()](string/padRight.md)            |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |             |          ✓          |                     |             |
| [stringTitleCase()](string/titleCase.md)          |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |             |          ✓          |                     |             |
| [stringTrim()](string/trim.md)                    |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |             |          ✓          |                     |             |
| [stringTrimLeft()](string/trimLeft.md)            |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |             |          ✓          |                     |             |
| [stringTrimRight()](string/trimRight.md)          |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |             |          ✓          |                     |             |
| [stringUpperFirst()](string/upperFirst.md)        |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |             |          ✓          |                     |             |
| [stringWords()](string/words.md)                  |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |             |          ✓          |                     |             |
|                                                   | [app](app.md) |     | [parsers](parsers.md) | [utilities](utilities.md) |     | [address](address.md) | [case](case.md) | [geo](geo.md) | [guard](guard.md) | [is](is.md) | [string](string.md) | [struct](struct.md) | [to](to.md) |
| [structCollectionFactory()](struct/collection.md) |       ✓       |     |                       |                           |     |                       |                 |               |                   |             |                     |          ✓          |             |
| [structQueueFactory()](struct/queue.md)           |       ✓       |     |                       |                           |     |                       |                 |               |                   |             |                     |          ✓          |             |
| [structStackFactory()](struct/stack.md)           |       ✓       |     |                       |                           |     |                       |                 |               |                   |             |                     |          ✓          |             |
|                                                   | [app](app.md) |     | [parsers](parsers.md) | [utilities](utilities.md) |     | [address](address.md) | [case](case.md) | [geo](geo.md) | [guard](guard.md) | [is](is.md) | [string](string.md) | [struct](struct.md) | [to](to.md) |
| [toDate()](to/date.md)                            |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |             |                     |                     |      ✓      |
| [toInteger()](to/integer.md)                      |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |             |                     |                     |      ✓      |
| [toNumber()](to/number.md)                        |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |             |                     |                     |      ✓      |
| [toPojo()](to/pojo.md)                            |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |             |                     |                     |      ✓      |
| [toString()](to/string.md)                        |       ✓       |     |                       |             ✓             |     |                       |                 |               |                   |             |                     |                     |      ✓      |
|                                                   | [app](app.md) |     | [parsers](parsers.md) | [utilities](utilities.md) |     | [address](address.md) | [case](case.md) | [geo](geo.md) | [guard](guard.md) | [is](is.md) | [string](string.md) | [struct](struct.md) | [to](to.md) |
| [type literal unions](types.md)                   |       ✓       |     |           ✓           |             ✓             |     |                       |                 |               |                   |             |                     |                     |             |

## Advantages of @zerodep Packages

- **Zero npm dependencies** - completely eliminates all risk of supply-chain attacks, decreases node_modules folder size
- **ESM & CJS** - has both ecmascript modules and common javascript exports, both are fully tree-shakable
- **Fully typed** - typescript definitions are provided for every package for a better developer experience
- **Semantically named** - package and method names are easy to grok, remember, use, and read
- **Documented** - actually useful documentation with examples
- **Intelligently Packaged** - multiple npm packages of different sizes available allowing a menu or a-la-carte composition of capabilities
- **100% Tested** - all methods and packages are fully unit tested
- **CDN Available** - available on fast content delivery networks in CJS and ESM formats
- **Predictably Versioned** - semantically versioned for peace-of-mind upgrading, this includes changelogs
- **MIT Licensed** - permissively licensed for maximum usability

## Support

All @zerodep packages are built for the ES2020 specification. Should you need to support older environments you may need to add appropriate [polyfills](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill). All packages are tested on the following platforms/browsers:

### Browsers

All functionality is tested on:

- Chrome - last 2 major versions
- Firefox - last 2 major versions
- Safari - last 2 major versions
- Edge - last 2 major versions
- Android - last 2 major versions
- iOS - last 2 major versions

### Node

All functionality is tested on:

- v18.x - Hydrogen LTS
- v16.x - Gallium LTS

## Semver

All @zerodep packages adhere to Semantic Versioning practices:

- **major versions:** correlates with breaking changes that will require updating existing code
- **minor versions:** includes addition of new functionality or backwards-compatible software improvements
- **patch versions:** are reserved for copy changes, documentation enhancements and bug fixes

The above said, a security best practice is to pin your software packages to specific versions and only upgrade to more recent releases after careful inspection of any [CHANGELOG](CHANGELOG.md), release notes and all software changes.
