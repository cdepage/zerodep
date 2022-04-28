import { isArray } from '@zerodep/is.array';
import { isBigInt } from '@zerodep/is.bigint';
import { isBoolean } from '@zerodep/is.boolean';
import { isDate } from '@zerodep/is.date';
import { isNil } from '@zerodep/is.nil';
import { isNumber } from '@zerodep/is.number';
import { isObject } from '@zerodep/is.object';
import { isString } from '@zerodep/is.string';
import { isSymbol } from '@zerodep/is.symbol';

export function toString(value: any): string {
  if (isString(value)) {
    return value;
  }

  if (isNil(value)) {
    return '';
  }

  if (isNumber(value)) {
    return `${value}`;
  }

  if (isBigInt(value)) {
    return value.toString();
  }

  if (isArray(value)) {
    return `${value.map((item: any) => toString(item))} `.trim();
  }

  if (isObject(value)) {
    return JSON.stringify(value);
  }

  if (isBoolean(value)) {
    return value ? 'true' : 'false';
  }

  if (isDate(value)) {
    return value.toISOString();
  }

  if ((typeof value === 'object' && 'toString' in value) || isSymbol(value)) {
    return value.toString();
  }

  const result = JSON.stringify(value);
  return result === 'null' ? '' : result;
}
