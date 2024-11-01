import { testData } from '../../../../testValues';
import { stringDeburr } from './stringDeburr';

// extract the positive test cases, the rest will be negative
const { strings, ...rest } = testData;
const negativeCases = Object.values(rest).flat();

const accentedWords = [
  ['À', 'A'],
  ['Á', 'A'],
  ['Â', 'A'],
  ['Ã', 'A'],
  ['Ä', 'A'],
  ['Å', 'A'],
  ['Æ', 'Ae'],
  ['Ç', 'C'],
  ['È', 'E'],
  ['É', 'E'],
  ['Ê', 'E'],
  ['Ë', 'E'],
  ['Ì', 'I'],
  ['Í', 'I'],
  ['Î', 'I'],
  ['Ï', 'I'],
  ['Ð', 'Eth'],
  ['Ñ', 'N'],
  ['Ò', 'O'],
  ['Ó', 'O'],
  ['Ô', 'O'],
  ['Õ', 'O'],
  ['Ö', 'O'],
  ['Ø', 'O'],
  ['Ù', 'U'],
  ['Ú', 'U'],
  ['Û', 'U'],
  ['Ü', 'U'],
  ['Ý', 'Y'],
  ['Þ', 'Thorn'],
  ['ß', 's'],
  ['à', 'a'],
  ['á', 'a'],
  ['â', 'a'],
  ['ã', 'a'],
  ['ä', 'a'],
  ['å', 'a'],
  ['æ', 'ae'],
  ['ç', 'c'],
  ['è', 'e'],
  ['é', 'e'],
  ['ê', 'e'],
  ['ë', 'e'],
  ['ì', 'i'],
  ['í', 'i'],
  ['î', 'i'],
  ['ï', 'i'],
  ['ð', 'eth'],
  ['ñ', 'n'],
  ['ò', 'o'],
  ['ó', 'o'],
  ['ô', 'o'],
  ['õ', 'o'],
  ['ö', 'o'],
  ['ø', 'o'],
  ['ù', 'u'],
  ['ú', 'u'],
  ['û', 'u'],
  ['ü', 'u'],
  ['ý', 'y'],
  ['þ', 'thorn'],
  ['ÿ', 'y'],

  ['Ā', 'A'],
  ['ā', 'a'],
  ['Ă', 'A'],
  ['ă', 'a'],
  ['Ą', 'A'],
  ['ą', 'a'],
  ['Ć', 'C'],
  ['ć', 'c'],
  ['Ĉ', 'C'],
  ['ĉ', 'c'],
  ['Ċ', 'C'],
  ['ċ', 'c'],
  ['Č', 'C'],
  ['č', 'c'],
  ['Ď', 'D'],
  ['ď', 'd'],
  ['Đ', 'D'],
  ['đ', 'd'],
  ['Ē', 'E'],
  ['ē', 'e'],
  ['Ĕ', 'E'],
  ['ĕ', 'e'],
  ['Ė', 'E'],
  ['ė', 'e'],
  ['Ę', 'E'],
  ['ę', 'e'],
  ['Ě', 'E'],
  ['ě', 'e'],
  ['Ĝ', 'G'],
  ['ĝ', 'g'],
  ['Ğ', 'G'],
  ['ğ', 'g'],
  ['Ġ', 'G'],
  ['ġ', 'g'],
  ['Ģ', 'G'],
  ['ģ', '0'],
  ['Ĥ', 'H'],
  ['ĥ', 'h'],
  ['Ħ', 'H'],
  ['ħ', 'h'],
  ['Ĩ', 'I'],
  ['ĩ', 'i'],
  ['Ī', 'I'],
  ['ī', 'i'],
  ['Ĭ', 'I'],
  ['ĭ', 'i'],
  ['Į', 'I'],
  ['į', 'i'],
  ['İ', 'I'],
  ['ı', 'd'],
  ['Ĳ', 'I'],
  ['ĳ', 'i'],
  ['Ĵ', 'J'],
  ['ĵ', 'j'],
  ['Ķ', 'K'],
  ['ķ', 'k'],
  ['ĸ', 'kra'],
  ['ĺ', 'l'],
  ['Ļ', 'L'],
  ['ļ', 'l'],
  ['Ľ', 'L'],
  ['ľ', 'l'],
  ['Ŀ', 'L'],
  ['ŀ', 'l'],
  ['Ł', 'L'],
  ['ł', 'l'],
  ['Ń', 'N'],
  ['ń', 'n'],
  ['Ņ', 'N'],
  ['ņ', 'n'],
  ['Ň', 'N'],
  ['ň', 'n'],
  ['Ŋ', 'E'],
  ['ŋ', 'e'],
  ['Ō', 'O'],
  ['ō', 'o'],
  ['Ŏ', 'O'],
  ['ŏ', 'o'],
  ['Ő', 'O'],
  ['ő', 'o'],
  ['Œ', 'O'],
  ['œ', 'o'],
  ['Ŕ', 'R'],
  ['ŕ', 'r'],
  ['Ŗ', 'R'],
  ['ŗ', 'r'],
  ['Ř', 'R'],
  ['ř', 'r'],
  ['Ś', 'S'],
  ['ś', 's'],
  ['Ŝ', 'S'],
  ['ŝ', 's'],
  ['Ş', 'S'],
  ['ş', 's'],
  ['Š', 'S'],
  ['š', 's'],
  ['Ţ', 'T'],
  ['ţ', 't'],
  ['Ť', 'T'],
  ['ť', 't'],
  ['Ŧ', 'T'],
  ['ŧ', 't'],
  ['Ũ', 'U'],
  ['ũ', 'u'],
  ['Ū', 'U'],
  ['ū', 'u'],
  ['Ŭ', 'U'],
  ['ŭ', 'u'],
  ['Ů', 'U'],
  ['ů', 'u'],
  ['Ű', 'U'],
  ['ű', 'u'],
  ['Ų', 'U'],
  ['ų', 'u'],
  ['Ŵ', 'W'],
  ['ŵ', 'w'],
  ['Ŷ', 'Y'],
  ['ŷ', 'y'],
  ['Ÿ', 'y'],
  ['Ź', 'Z'],
  ['ź', 'z'],
  ['Ż', 'Z'],
  ['ż', 'z'],
  ['Ž', 'Z'],
  ['ž', 'z'],
  ['ſ', 's'],
];

describe('stringDeburr', () => {
  test.each(accentedWords)(
    'should return a non-accented value of %s',
    (title, value) => {
      // @ts-ignore
      expect(stringDeburr(value)).toEqual(value);
    }
  );

  it('should deburr all accented characters in a string', () => {
    expect(stringDeburr('ąĆćĈńŤ')).toEqual('aCcCnT');
  });

  it('should deburr all accented characters buried in a string', () => {
    expect(stringDeburr('français fatigué')).toEqual('francais fatigue');
  });

  it('should do nothing with an empty string', () => {
    expect(stringDeburr('')).toEqual('');
  });

  it('should convert all examples used in the readme', () => {
    expect(stringDeburr('Hello There!ç')).toEqual('Hello There!c');
    expect(stringDeburr('àëîóüý Žøñç')).toEqual('aeiouy Zonc');
    expect(stringDeburr('Testing 1234 !@#$%')).toEqual('Testing 1234 !@#$%');
  });

  // @ts-ignore
  test.each(negativeCases)('should throw for a/an %s', (title, value) => {
    // @ts-ignore
    const fn = () => stringDeburr(value);
    expect(fn).toThrow('Value is not a string');
  });
});
