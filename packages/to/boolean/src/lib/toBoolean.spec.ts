import {
  testClassInstance1,
  testData,
  testDate1,
  testFunction1,
  testGenerator,
  testPromise1,
  testPromiseResolved1,
  testRegex1,
  testSymbol1,
  testTypedArray1,
  testWeakMap,
  testWeakSet,
} from '../../../../testValues';
import { toBoolean } from './toBoolean';

describe('toBoolean', () => {
  const handledCases = [
    ['true', true, true],
    ['1', 1, true],
    ['1n', 1n, true],
    ['"true"', 'true', true],
    ['"t"', 't', true],
    ['"yes"', 'yes', true],
    ['"y"', 'y', true],
    ['"cierto"', 'cierto', true],
    ['"c"', 'c', true],
    ['"verdadero"', 'verdadero', true],
    ['"vrais"', 'vrais', true],
    ['"v"', 'v', true],
    ['"si"', 'si', true],
    ['"sí"', 'sí', true],
    ['"s"', 's', true],
    ['"oui"', 'oui', true],
    ['"ouais"', 'ouais', true],
    ['"o"', 'o', true],
    ['2', 2, true],
    ['2n', 2n, true],
    ['"3"', '3', true],
    ['"3n"', '3n', true],
    ['"8.675.309,123"', '8.675.309,123', true],
    ['"any other big string"', 'any other big string', true],
    ['"12D"', '12D', true], // not a number, should be treated as a string
    ['"-12D"', '-12D', true], // not a number, should be treated as a string
    ['"3.14x"', '3.14x', true], // not a number, should be treated as a string
    ['"-3.14x"', '-3.14x', true], // not a number, should be treated as a string
    ['"a12"', 'a12', true], // not a number, should be treated as a string
    ['"-a12"', '-a12', true], // not a number, should be treated as a string
    ['"a3.14"', 'a3.14', true], // not a number, should be treated as a string
    ['"-a3.14"', '-a3.14', true], // not a number, should be treated as a string

    ['false', false, false],
    ['0', 0, false],
    ['-0', -0, false],
    ['0n', 0n, false],
    ['-0n', -0n, false],
    ['"false"', 'false', false],
    ['"falso"', 'falso', false],
    ['"faux"', 'faux', false],
    ['"f"', 'f', false],
    ['"no"', 'no', false],
    ['"non"', 'non', false],
    ['"n"', 'n', false],
    ['-2', -2, false],
    ['-2n', -2n, false],
    ['"-3"', '-3', false],
    ['"-3n"', '-3n', false],
    ['"-8.675.309,123"', '-8.675.309,123', false],
    ['""', '', false],
    ['null', null, false],
    ['undefined', undefined, false],
    ['Pojo (empty)', {}, false],
    ['Pojo (non-empty)', { an: 'object' }, true],
    ['Array (empty)', [], false],
    ['Array (non-empty)', ['a', 'b'], true],
    ['Set (empty)', testData.sets[0][1], false],
    ['Map (empty)', testData.maps[0][1], false],
    ['Set (non-empty)', testData.sets[1][1], true],
    ['Map (non-empty)', testData.maps[1][1], true],
  ];
  // @ts-ignore
  test.each(handledCases)('should convert %s', (title, value, result) => {
    // @ts-ignore
    expect(toBoolean(value)).toEqual(Boolean(result));
  });

  const exceptionCases = [
    ['Date', testDate1],
    ['Symbol', testSymbol1],
    ['Promise (unresolved)', testPromise1],
    ['Promise (resolved)', testPromiseResolved1],
    ['Class', testClassInstance1],
    ['WeakMap', testWeakMap],
    ['WeakSet', testWeakSet],
    ['TypedArray', testTypedArray1],
    ['Generator', testGenerator],
    ['Function', testFunction1],
    ['RegExp', testRegex1],
    ['NaN', NaN],
  ];
  // @ts-ignore
  test.each(exceptionCases)('should not convert a %s', (title, value) => {
    // @ts-ignore
    const fn = () => toBoolean(value);
    expect(fn).toThrow('Cannot reliably convert to boolean');
  });
});
