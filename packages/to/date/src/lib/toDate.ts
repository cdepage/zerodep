/* eslint-disable sonarjs/cognitive-complexity, @typescript-eslint/no-non-null-assertion */
import { ZeroDepError } from '@zerodep/errors';
import { isBigInt } from '@zerodep/is-bigint';
import { isDate } from '@zerodep/is-date';
import { isNumber } from '@zerodep/is-number';
import { isString } from '@zerodep/is-string';
import { stringDeburr } from '@zerodep/string-deburr';
import { stringPadLeft } from '@zerodep/string-padleft';

const errMessage = 'Invalid Date';

export const toDate = (value: string | number | bigint | Date): Date => {
  // short-circuit if we have a date
  if (isDate(value)) {
    return value as Date;
  }

  // only strings & numbers have any hope of becoming dates
  if (!isString(value) && !isNumber(value) && !isBigInt(value)) {
    throw new ZeroDepError(errMessage, 'type', 'to');
  }

  // a BigInt must be converted to a string before they can be used
  // a Number must be converted to milliseconds since the unix epoch
  if (isBigInt(value) || isNumber(value)) {
    let val = value.toString();

    // check for a length indicative of the number of seconds since the unix epoch and convert to ms
    if (val.length <= 10) {
      val += '000';
    }

    try {
      const date = new Date(Number(val));
      if (isDate(date)) {
        return date;
      }
      throw new ZeroDepError(errMessage, 'type', 'to');
    } catch (err: any) {
      throw err instanceof ZeroDepError
        ? err
        : new ZeroDepError(errMessage, 'unknown', 'to');
    }
  }

  try {
    // create a date from the string or number, check that it is a real date
    const date = new Date(value as string);
    if (isDate(value)) {
      return date;
    }

    // parse the date if it's a string
    if (isString(value)) {
      return breakDateIntoPieces(value as string);
    }

    throw new ZeroDepError(errMessage, 'type', 'to');
  } catch (err: any) {
    throw err instanceof ZeroDepError
      ? err
      : new ZeroDepError(errMessage, 'unknown', 'to');
  }
};

const monthMap: Record<string, number> = {
  jan: 1,
  january: 1,
  feb: 2,
  february: 2,
  mar: 3,
  march: 3,
  apr: 4,
  april: 4,
  may: 5,
  jun: 6,
  june: 6,
  jul: 7,
  july: 7,
  aug: 8,
  august: 8,
  sep: 9,
  sept: 9,
  september: 9,
  oct: 10,
  october: 10,
  nov: 11,
  november: 11,
  dec: 12,
  december: 12,

  // Spanish
  ene: 1,
  enero: 1,
  febrero: 2,
  marzo: 3,
  abr: 4,
  abril: 4,
  mayo: 5,
  junio: 6,
  julio: 7,
  ago: 8,
  agosto: 8,
  set: 9,
  septiembre: 9,
  octubre: 10,
  noviembre: 11,
  diciembre: 12,

  // French
  janv: 1,
  janvier: 1,
  fev: 2,
  fevr: 2,
  fevrier: 2,
  mars: 3,
  avr: 4,
  avril: 4,
  mai: 5,
  juin: 6,
  juil: 7,
  juillet: 7,
  aout: 8,
  septembre: 9,
  octobre: 10,
  novembre: 11,
  decembre: 12,
};

const breakDateIntoPieces = (value: string) => {
  const [dateString] = value.split('T');
  const datePieces = stringDeburr(dateString)
    .toLowerCase()
    .replace(/[/. ]/g, '-')
    .split('-');

  let yyyy: number | string = 0;
  let mm: number | string = 0;
  let dd: number | string = 0;
  let hr: number | string = 0;
  let min: number | string = 0;
  let sec: number | string = 0;
  let msec: number | string = 0;
  const tz = 'Z';

  // find obvious pieces
  const remainderDatePieces: number[] = [];
  for (const piece of datePieces) {
    // find months as text
    if (monthMap[piece]) {
      mm = monthMap[piece];
      continue;
    }

    // find obvious years and days
    const val = Number(piece);
    if (val > 31) {
      yyyy = val;
      continue;
    }
    if (yyyy && val > 12) {
      dd = val;
      continue;
    }

    remainderDatePieces.push(val);
  }

  if (!mm) {
    mm = remainderDatePieces.shift()!;
  }
  if (!dd && remainderDatePieces.length) {
    dd = remainderDatePieces.shift()!;
  }
  if (!yyyy && remainderDatePieces.length) {
    yyyy = remainderDatePieces.shift()!;
  }

  if (yyyy && mm && dd) {
    mm = stringPadLeft(mm, 2, '0');
    dd = stringPadLeft(dd, 2, '0');
    hr = stringPadLeft(hr, 2, '0');
    min = stringPadLeft(min, 2, '0');
    sec = stringPadLeft(sec, 2, '0');
    msec = stringPadLeft(msec, 3, '0');
    if (String(yyyy).length <= 2) {
      const prefix = Number(yyyy) < 70 ? 20 : 19;
      yyyy = `${prefix}${stringPadLeft(yyyy, 2, '0')}`;
    }

    return new Date(`${yyyy}-${mm}-${dd}T${hr}:${min}:${sec}.${msec}${tz}`);
  }

  throw new ZeroDepError(errMessage, 'unknown', 'to');
};
