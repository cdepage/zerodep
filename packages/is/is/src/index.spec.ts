import * as packages from './index';

const keys = Object.keys(packages).sort();
describe('"App" barrel package', () => {
  it('should export specific packages and interfaces', () => {
    expect(keys).toEqual([
      'isArray',
      'isBigInt',
      'isBoolean',
      'isDate',
      'isEqual',
      'isError',
      'isFloat',
      'isFunction',
      'isInteger',
      'isJSON',
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
      'isTypedArray',
      'isUndefined',
      'isWeakMap',
      'isWeakSet',
    ]);
  });

  // contrived test for barrel-file
  test.each(keys)('should have %s', (name) => {
    // @ts-ignore
    expect(['function', 'object', 'undefined']).toContain(typeof packages[name]);
  });
});
