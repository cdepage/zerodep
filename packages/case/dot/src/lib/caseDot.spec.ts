import { ZeroDepError } from '@zerodep/errors';
import { caseDot } from './caseDot';

describe('caseDot', () => {
  it('should convert a sentence case', () => {
    expect(caseDot('From sentence case')).toEqual('from.sentence.case');
  });
  it('should convert a sentence case', () => {
    expect(caseDot('from.dot.case')).toEqual('from.dot.case');
  });

  it('should convert a camel case', () => {
    expect(caseDot('fromCamelCase')).toEqual('from.camel.case');
  });

  it('should convert a dot case', () => {
    expect(caseDot('from.dot.case')).toEqual('from.dot.case');
  });

  it('should convert a kebab case', () => {
    expect(caseDot('from-kebab-case')).toEqual('from.kebab.case');
  });

  it('should convert a snake case', () => {
    expect(caseDot('from_snake_case')).toEqual('from.snake.case');
  });

  it('should convert a Pascal case', () => {
    expect(caseDot('FromPascalCase')).toEqual('from.pascal.case');
  });

  it('should convert a string with many spaces', () => {
    expect(caseDot('__with    many --- spaces')).toEqual('with.many.spaces');
  });

  it('should convert a l33t sp34k string', () => {
    expect(caseDot("I'm a sp3c!al $741ng")).toEqual('i.m.a.sp3c.al.741ng');
  });

  it('should strip leading numbers', () => {
    expect(caseDot('12 monkeys see 6 bananas')).toEqual(
      'monkeys.see.6.bananas'
    );
  });

  it('should convert accented characters', () => {
    expect(caseDot('àëîóüý Žøñç')).toEqual('aeiouy.zonc');
  });

  it('should convert a zero-length string', () => {
    expect(caseDot('')).toEqual('');
  });

  it('should throw a ZeroDepError error when a string not provided', () => {
    // @ts-ignore
    const fn = () => caseDot({ an: 'object' });
    expect(fn).toThrow(ZeroDepError);
    expect(fn).toThrow('Value is not a string');
  });
});
