# Module Methodology & Comparison

The @zerodep ecosystem has a lot of functionality to offer. Some projects only require a couple of string manipulation functions, others require more of the utility methods, whereas larger projects require even more. We've got you covered.

- Every function/capability is individually packaged
- Every logical grouping of functions/capabilities are also packaged together
- Every grouping of groupings also has a package available
- Every function and capability is also packaged into the top-level @zerodep/app package

Pick and choose the package or combination of packages best suited for your needs. Each one is tree shakable, so your build system should only ship required code.

## Functions by Package Matrix

| Function/Capability                        | app |     | parsers | utilities |     | address | cases | guards | is  | strings | to  |
| ------------------------------------------ | :-: | --- | :-----: | :-------: | --- | :-----: | :---: | :----: | :-: | :-----: | :-: |
| [addressState()](address/state.md)         |  ✓  |     |    ✓    |           |     |    ✓    |       |        |     |         |     |
| [addressNormalize()](address/normalize.md) |  ✓  |     |    ✓    |           |     |    ✓    |       |        |     |         |     |
| [addressParse()](address/parse.md)         |  ✓  |     |    ✓    |           |     |    ✓    |       |        |     |         |     |
| Function/Capability                        | app |     | parsers | utilities |     | address | cases | guards | is  | strings | to  |
| [caseCamel()](case/camel.md)               |  ✓  |     |         |     ✓     |     |         |   ✓   |        |     |         |     |
| [caseKebab()](case/kebab.md)               |  ✓  |     |         |     ✓     |     |         |   ✓   |        |     |         |     |
| [casePascal()](case/pascal.md)             |  ✓  |     |         |     ✓     |     |         |   ✓   |        |     |         |     |
| [caseSentence()](case/sentence.md)         |  ✓  |     |         |     ✓     |     |         |   ✓   |        |     |         |     |
| [caseSnake()](case/snake.md)               |  ✓  |     |         |     ✓     |     |         |   ✓   |        |     |         |     |
| Function/Capability                        | app |     | parsers | utilities |     | address | cases | guards | is  | strings | to  |
| [guardArray()](guard/array.md)             |  ✓  |     |         |     ✓     |     |         |       |   ✓    |     |         |     |
| [guardBigInt()](guard/bigint.md)           |  ✓  |     |         |     ✓     |     |         |       |   ✓    |     |         |     |
| [guardBoolean()](guard/boolean.md)         |  ✓  |     |         |     ✓     |     |         |       |   ✓    |     |         |     |
| [guardDate()](guard/date.md)               |  ✓  |     |         |     ✓     |     |         |       |   ✓    |     |         |     |
| [guardFloat()](guard/float.md)             |  ✓  |     |         |     ✓     |     |         |       |   ✓    |     |         |     |
| [guardFunction()](guard/function.md)       |  ✓  |     |         |     ✓     |     |         |       |   ✓    |     |         |     |
| [guardInteger()](guard/integer.md)         |  ✓  |     |         |     ✓     |     |         |       |   ✓    |     |         |     |
| [guardNumber()](guard/number.md)           |  ✓  |     |         |     ✓     |     |         |       |   ✓    |     |         |     |
| [guardObject()](guard/object.md)           |  ✓  |     |         |     ✓     |     |         |       |   ✓    |     |         |     |
| [guardPojo()](guard/pojo.md)               |  ✓  |     |         |     ✓     |     |         |       |   ✓    |     |         |     |
| [guardString()](guard/string.md)           |  ✓  |     |         |     ✓     |     |         |       |   ✓    |     |         |     |
| Function/Capability                        | app |     | parsers | utilities |     | address | cases | guards | is  | strings | to  |
| [isArray()](is/array.md)                   |  ✓  |     |         |     ✓     |     |         |       |        |  ✓  |         |     |
| [isBigInt()](is/bigint.md)                 |  ✓  |     |         |     ✓     |     |         |       |        |  ✓  |         |     |
| [isBoolean()](is/boolean.md)               |  ✓  |     |         |     ✓     |     |         |       |        |  ✓  |         |     |
| [isDate()](is/date.md)                     |  ✓  |     |         |     ✓     |     |         |       |        |  ✓  |         |     |
| [isEmpty()](is/empty.md)                   |  ✓  |     |         |     ✓     |     |         |       |        |  ✓  |         |     |
| [isEqual()](is/equal.md)                   |  ✓  |     |         |     ✓     |     |         |       |        |  ✓  |         |     |
| [isError()](is/error.md)                   |  ✓  |     |         |     ✓     |     |         |       |        |  ✓  |         |     |
| [isFloat()](is/float.md)                   |  ✓  |     |         |     ✓     |     |         |       |        |  ✓  |         |     |
| [isFunction()](is/function.md)             |  ✓  |     |         |     ✓     |     |         |       |        |  ✓  |         |     |
| [isInteger()](is/integer.md)               |  ✓  |     |         |     ✓     |     |         |       |        |  ✓  |         |     |
| [isIterable()](is/iterable.md)             |  ✓  |     |         |     ✓     |     |         |       |        |  ✓  |         |     |
| [isMap()](is/map.md)                       |  ✓  |     |         |     ✓     |     |         |       |        |  ✓  |         |     |
| [isNil()](is/nil.md)                       |  ✓  |     |         |     ✓     |     |         |       |        |  ✓  |         |     |
| [isNull()](is/null.md)                     |  ✓  |     |         |     ✓     |     |         |       |        |  ✓  |         |     |
| [isNumber()](is/number.md)                 |  ✓  |     |         |     ✓     |     |         |       |        |  ✓  |         |     |
| [isObject()](is/object.md)                 |  ✓  |     |         |     ✓     |     |         |       |        |  ✓  |         |     |
| [isPojo()](is/pojo.md)                     |  ✓  |     |         |     ✓     |     |         |       |        |  ✓  |         |     |
| [isPromise()](is/promise.md)               |  ✓  |     |         |     ✓     |     |         |       |        |  ✓  |         |     |
| [isRegex()](is/regex.md)                   |  ✓  |     |         |     ✓     |     |         |       |        |  ✓  |         |     |
| [isSet()](is/set.md)                       |  ✓  |     |         |     ✓     |     |         |       |        |  ✓  |         |     |
| [isString()](is/string.md)                 |  ✓  |     |         |     ✓     |     |         |       |        |  ✓  |         |     |
| [isSymbol()](is/symbol.md)                 |  ✓  |     |         |     ✓     |     |         |       |        |  ✓  |         |     |
| [isTypedArray()](is/typedArray.md)         |  ✓  |     |         |     ✓     |     |         |       |        |  ✓  |         |     |
| [isUndefined()](is/undefined.md)           |  ✓  |     |         |     ✓     |     |         |       |        |  ✓  |         |     |
| [isWeakMap()](is/weakMap.md)               |  ✓  |     |         |     ✓     |     |         |       |        |  ✓  |         |     |
| [isWeakSet()](is/weakSet.md)               |  ✓  |     |         |     ✓     |     |         |       |        |  ✓  |         |     |
| Function/Capability                        | app |     | parsers | utilities |     | address | cases | guards | is  | strings | to  |
| [stringDeburr()](string/deburr.md)         |  ✓  |     |         |     ✓     |     |         |       |        |     |    ✓    |     |
| [stringLowerFirst()](string/lowerFirst.md) |  ✓  |     |         |     ✓     |     |         |       |        |     |    ✓    |     |
| [stringPadLeft()](string/padleft.md)       |  ✓  |     |         |     ✓     |     |         |       |        |     |    ✓    |     |
| [stringPadRight()](string/padRight.md)     |  ✓  |     |         |     ✓     |     |         |       |        |     |    ✓    |     |
| [stringTitleCase()](string/titleCase.md)   |  ✓  |     |         |     ✓     |     |         |       |        |     |    ✓    |     |
| [stringTrim()](string/trim.md)             |  ✓  |     |         |     ✓     |     |         |       |        |     |    ✓    |     |
| [stringTrimLeft()](string/trimLeft.md)     |  ✓  |     |         |     ✓     |     |         |       |        |     |    ✓    |     |
| [stringTrimRight()](string/trimRight.md)   |  ✓  |     |         |     ✓     |     |         |       |        |     |    ✓    |     |
| [stringUpperFirst()](string/upperFirst.md) |  ✓  |     |         |     ✓     |     |         |       |        |     |    ✓    |     |
| [stringWords()](string/words.md)           |  ✓  |     |         |     ✓     |     |         |       |        |     |    ✓    |     |
| Function/Capability                        | app |     | parsers | utilities |     | address | cases | guards | is  | strings | to  |
| [toDate()](to/date.md)                     |  ✓  |     |         |     ✓     |     |         |       |        |     |         |  ✓  |
| [toInteger()](to/integer.md)               |  ✓  |     |         |     ✓     |     |         |       |        |     |         |  ✓  |
| [toNumber()](to/number.md)                 |  ✓  |     |         |     ✓     |     |         |       |        |     |         |  ✓  |
| [toPojo()](to/pojo.md)                     |  ✓  |     |         |     ✓     |     |         |       |        |     |         |  ✓  |
| [toString()](to/string.md)                 |  ✓  |     |         |     ✓     |     |         |       |        |     |         |  ✓  |
| Function/Capability                        | app |     | parsers | utilities |     | address | cases | guards | is  | strings | to  |
| [type literal unions](types.md)            |  ✓  |     |    ✓    |     ✓     |     |         |       |        |     |         |     |
