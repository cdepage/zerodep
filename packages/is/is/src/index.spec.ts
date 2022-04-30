import * as guards from './index';

describe('Guards barrel package', () => {
  it('should export specific packages and interfaces', () => {
    expect(Object.keys(guards)).toEqual([
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
    ]);
  });
});
