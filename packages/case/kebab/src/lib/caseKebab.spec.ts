import { ZeroDepError } from '@zerodep/errors';
import { caseKebab } from './caseKebab';

describe('caseKebab', () => {
  it('should convert a sentence case', () => {
    expect(caseKebab('From sentence case')).toEqual('from-sentence-case');
  });
  it('should convert a sentence case', () => {
    expect(caseKebab('from.dot.case')).toEqual('from-dot-case');
  });

  it('should convert a camel case', () => {
    expect(caseKebab('fromCamelCase')).toEqual('from-camel-case');
  });

  it('should convert a dot case', () => {
    expect(caseKebab('from.dot.case')).toEqual('from-dot-case');
  });

  it('should convert a kebab case', () => {
    expect(caseKebab('from-kebab-case')).toEqual('from-kebab-case');
  });

  it('should convert a snake case', () => {
    expect(caseKebab('from_snake_case')).toEqual('from-snake-case');
  });

  it('should convert a Pascal case', () => {
    expect(caseKebab('FromPascalCase')).toEqual('from-pascal-case');
  });

  it('should convert a string with many spaces', () => {
    expect(caseKebab('__with    many --- spaces')).toEqual('with-many-spaces');
  });

  it('should convert a l33t sp34k string', () => {
    expect(caseKebab("I'm a sp3c!al $741ng")).toEqual('i-m-a-sp3c-al-741ng');
  });

  it('should strip leading numbers', () => {
    expect(caseKebab('12 monkeys see 6 bananas')).toEqual(
      'monkeys-see-6-bananas'
    );
  });

  it('should convert accented characters', () => {
    expect(caseKebab('àëîóüý Žøñç')).toEqual('aeiouy-zonc');
  });

  it('should convert a zero-length string', () => {
    expect(caseKebab('')).toEqual('');
  });

  it('should throw a ZeroDepError error when a string not provided', () => {
    // @ts-ignore
    const fn = () => caseKebab({ an: 'object' });
    expect(fn).toThrow(ZeroDepError);
    expect(fn).toThrow('Value is not a string');
  });
});
