import { ZeroDepError } from '@zerodep/errors';
import { casePascal } from './casePascal';

describe('casePascal', () => {
  it('should convert a sentence case', () => {
    expect(casePascal('From sentence case')).toEqual('FromSentenceCase');
  });

  it('should convert a camel case', () => {
    expect(casePascal('fromCamelCase')).toEqual('FromCamelCase');
  });

  it('should convert a dot case', () => {
    expect(casePascal('from.dot.case')).toEqual('FromDotCase');
  });

  it('should convert a kebab case', () => {
    expect(casePascal('from-kebab-case')).toEqual('FromKebabCase');
  });

  it('should convert a snake case', () => {
    expect(casePascal('from_snake_case')).toEqual('FromSnakeCase');
  });

  it('should convert a Pascal case', () => {
    expect(casePascal('FromPascalCase')).toEqual('FromPascalCase');
  });

  it('should convert a string with many spaces', () => {
    expect(casePascal('__with    many --- spaces')).toEqual('WithManySpaces');
  });

  it('should convert a l33t sp34k string', () => {
    expect(casePascal("I'm a sp3c!al $741ng")).toEqual('IMASp3cAl741ng');
  });

  it('should strip leading numbers', () => {
    expect(casePascal('12 monkeys see 6 bananas')).toEqual(
      'MonkeysSee6Bananas'
    );
  });

  it('should convert accented characters', () => {
    expect(casePascal('àëîóüý Žøñç')).toEqual('AeiouyZonc');
  });

  it('should convert a zero-length string', () => {
    expect(casePascal('')).toEqual('');
  });

  it('should throw a ZeroDepError error when a string not provided', () => {
    // @ts-ignore
    const fn = () => casePascal({ an: 'object' });
    expect(fn).toThrow(ZeroDepError);
    expect(fn).toThrow('Value is not a string');
  });
});
