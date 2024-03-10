/* eslint-disable @typescript-eslint/ban-ts-comment */

import { isArray } from '@zerodep/is-array';
import { isNull } from '@zerodep/is-null';

export const objectClone = <T>(obj: T | T[]): T | T[] => {
  // handles array values
  if (isNull(obj) || typeof obj !== 'object') {
    return obj;
  }

  if (isArray(obj)) {
    // @ts-ignore
    return obj.map((subObj) => objectClone(subObj));
  }

  const clonedObj: Record<string, any> = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // @ts-ignore
      clonedObj[key] = objectClone(obj[key]);
    }
  }

  // @ts-ignore
  return clonedObj;
};
