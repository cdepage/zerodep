import * as utils from './index';

describe('Utils barrel package', () => {
  it('should export specific packages and interfaces', () => {
    // console.log(Object.keys(utils))
    expect(Object.keys(utils).sort()).toStrictEqual([
      'ZeroDepError',
      'ZeroDepErrorGuard',
      'ZeroDepErrorGuardRange',
      'ZeroDepErrorGuardType',
      'ZeroDepErrorTo',
      'canIterate',
      'guardArray',
      'guardBigInt',
      'guardBoolean',
      'guardDate',
      'guardFloat',
      'guardInteger',
      'guardNumber',
      'guardObject',
      'guardString',
      'isArray',
      'isBigInt',
      'isBoolean',
      'isDate',
      'isError',
      'isFloat',
      'isFunction',
      'isInteger',
      'isJson',
      'isMap',
      'isNil',
      'isNull',
      'isNumber',
      'isObject',
      'isPromise',
      'isRegex',
      'isSet',
      'isString',
      'isSymbol',
      'isUndefined',
      'isWeakMap',
      'isWeakSet',
      'toJson',
      'toString',
    ]);
  });
});
