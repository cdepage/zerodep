import { ZeroDepError } from '@zerodep/errors';
import { guardIntegerHOF } from '@zerodep/guard-integer';
import { guardString } from '@zerodep/guard-string';
import { isBigInt } from '@zerodep/is-bigint';
import { isNumber } from '@zerodep/is-number';
import { isString } from '@zerodep/is-string';

const guardInteger = guardIntegerHOF({ min: 1 });

export const stringPadRight = (
  value: string | number | bigint,
  size: number,
  character = ' '
): string => {
  if (!isString(value) && !isNumber(value) && !isBigInt(value)) {
    throw new ZeroDepError('Value is not a string, number or BigInt');
  }
  guardInteger(size);
  guardString(character);

  const val = (isString(value) ? value : value.toString()) as string;

  return val.padEnd(size, character);
};
