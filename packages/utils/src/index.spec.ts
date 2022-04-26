import * as utils from './index';

describe('Utils barrel package', () => {
  it('should export specific packages and interfaces', () => {
    // console.log(Object.keys(utils))
    expect(Object.keys(utils)).toEqual([
      'ZeroDepError',
      'ZeroDepErrorGuard',
      'ZeroDepErrorGuardType',
      'ZeroDepErrorGuardRange',
      'guardArray',
      'guardBigint',
      'guardBoolean',
      'guardDate',
      'guardFloat',
      'guardInteger',
      'guardNumber',
      'guardObject',
      'guardString',
      'isArray',
      'isBigint',
      'isBoolean',
      'isDate',
      'isError',
      'isFloat',
      'isFunction',
      'isInteger',
      'isMap',
      'isNull',
      'isNumber',
      'isObject',
      'isRegex',
      'isSet',
      'isString',
      'isSymbol',
      'isUndefined',
      'isWeakMap',
      'isWeakSet',
    ]);
  });
});
