import * as packages from './index';

const keys = Object.keys(packages).sort();
describe('"Is" barrel package', () => {
  it('should export specific packages and interfaces', () => {
    expect(keys).toEqual([
      'isArray',
      'isAsync',
      'isBigInt',
      'isBoolean',
      'isDate',
      'isEmpty',
      'isEqual',
      'isError',
      'isFloat',
      'isFunction',
      'isGenerator',
      'isInteger',
      'isIterable',
      'isMap',
      'isNil',
      'isNull',
      'isNumber',
      'isObject',
      'isPojo',
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
    expect(['function', 'object', 'undefined']).toContain(
      // @ts-ignore
      typeof packages[name]
    );
  });
});
