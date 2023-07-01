import { ZeroDepError } from '@zerodep/errors';
import { caseSnake } from './caseSnake';

describe('caseSnake', () => {
  it('should convert a sentence case', () => {
    expect(caseSnake('From sentence case')).toEqual('from_sentence_case');
  });

  it('should convert a kebab case', () => {
    expect(caseSnake('from-kebab-case')).toEqual('from_kebab_case');
  });

  it('should convert a snake case', () => {
    expect(caseSnake('from_snake_case')).toEqual('from_snake_case');
  });

  it('should convert a Pascal case', () => {
    expect(caseSnake('FromPascalCase')).toEqual('from_pascal_case');
  });

  it('should convert a string with many spaces', () => {
    expect(caseSnake('__with    many --- spaces')).toEqual('with_many_spaces');
  });

  it('should convert a l33t sp34k string', () => {
    expect(caseSnake("I'm a sp3c!al $741ng")).toEqual('i_m_a_sp3c_al_741ng');
  });

  it('should strip leading numbers', () => {
    expect(caseSnake('12 monkeys see 6 bananas')).toEqual(
      'monkeys_see_6_bananas'
    );
  });

  it('should convert accented characters', () => {
    expect(caseSnake('àëîóüý Žøñç')).toEqual('aeiouy_zonc');
  });

  it('should convert a zero-length string', () => {
    expect(caseSnake('')).toEqual('');
  });

  it('should throw a ZeroDepError error when a string not provided', () => {
    // @ts-ignore
    const fn = () => caseSnake({ an: 'object' });
    expect(fn).toThrow(ZeroDepError);
    expect(fn).toThrow('Value is not a string');
  });
});
