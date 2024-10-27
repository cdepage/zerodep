import { ZeroDepError } from '@zerodep/errors';
import { caseCamel } from './caseCamel';

describe('caseCamel', () => {
  it('should convert a sentence case', () => {
    expect(caseCamel('From sentence case')).toEqual('fromSentenceCase');
  });
  it('should convert a sentence case', () => {
    expect(caseCamel('from.dot.case')).toEqual('fromDotCase');
  });

  it('should convert a camel case', () => {
    expect(caseCamel('fromDotCase')).toEqual('fromDotCase');
  });

  it('should convert a dot case', () => {
    expect(caseCamel('from.dot.case')).toEqual('fromDotCase');
  });

  it('should convert a kebab case', () => {
    expect(caseCamel('from-kebab-case')).toEqual('fromKebabCase');
  });

  it('should convert a snake case', () => {
    expect(caseCamel('from_snake_case')).toEqual('fromSnakeCase');
  });

  it('should convert a Pascal case', () => {
    expect(caseCamel('FromPascalCase')).toEqual('fromPascalCase');
  });

  it('should convert a string with many spaces', () => {
    expect(caseCamel('__with    many --- spaces')).toEqual('withManySpaces');
  });

  it('should convert a l33t sp34k string', () => {
    expect(caseCamel("I'm a sp3c!al $741ng")).toEqual('iMASp3cAl741ng');
  });

  it('should strip leading numbers', () => {
    expect(caseCamel('12 monkeys see 6 bananas')).toEqual('monkeysSee6Bananas');
  });

  it('should convert accented characters', () => {
    expect(caseCamel('àëîóüý Žøñç')).toEqual('aeiouyZonc');
  });

  it('should convert a zero-length string', () => {
    expect(caseCamel('')).toEqual('');
  });

  it('should throw a ZeroDepError error when a string not provided', () => {
    // @ts-ignore
    const fn = () => caseCamel({ an: 'object' });
    expect(fn).toThrow(ZeroDepError);
    expect(fn).toThrow('Value is not a string');
  });
});
