import { casePascal } from '@zerodep/case-pascal';
import { ZeroDepError } from '@zerodep/errors';
import { caseSentence } from './caseSentence';

describe('caseSentence', () => {
  it('should convert a sentence case', () => {
    expect(caseSentence('From sentence case')).toEqual('from sentence case');
  });

  it('should convert a camel case', () => {
    expect(caseSentence('fromCamelCase')).toEqual('from camel case');
  });

  it('should convert a dot case', () => {
    expect(caseSentence('from.dot.case')).toEqual('from dot case');
  });

  it('should convert a kebab case', () => {
    expect(caseSentence('from-kebab-case')).toEqual('from kebab case');
  });

  it('should convert a snake case', () => {
    expect(caseSentence('from_snake_case')).toEqual('from snake case');
  });

  it('should convert a Pascal case', () => {
    expect(caseSentence('FromPascalCase')).toEqual('from pascal case');
  });

  it('should convert a string with many spaces', () => {
    expect(caseSentence('__with    many --- spaces')).toEqual(
      'with many spaces'
    );
  });

  it('should convert a l33t sp34k string', () => {
    expect(caseSentence("I'm a sp3c!al $741ng")).toEqual('i m a sp3c al 741ng');
  });

  it('should strip leading numbers', () => {
    expect(caseSentence('12 monkeys see 6 bananas')).toEqual(
      'monkeys see 6 bananas'
    );
  });

  it('should convert accented characters', () => {
    expect(caseSentence('àëîóüý Žøñç')).toEqual('aeiouy zonc');
  });

  it('should convert a zero-length string', () => {
    expect(caseSentence('')).toEqual('');
  });

  it('should throw a ZeroDepError error when a string not provided', () => {
    // @ts-ignore
    const fn = () => caseSentence({ an: 'object' });
    expect(fn).toThrow(ZeroDepError);
    expect(fn).toThrow('Value is not a string');
  });
});
