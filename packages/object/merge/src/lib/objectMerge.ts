import { guardPojo } from '@zerodep/guard-pojo';
import { isObject } from '@zerodep/is-object';

export const objectMerge = (
  obj1: Record<string, any>,
  obj2: Record<string, any>
): Record<string, any> => {
  guardPojo(obj1);
  guardPojo(obj2);

  // get a deep copy of the first object, we do not want to alter the original object
  const mergedObj = structuredClone(obj1);

  for (const key in obj2) {
    if (isObject(obj2[key])) {
      if (!(key in mergedObj) || !isObject(mergedObj[key])) {
        mergedObj[key] = obj2[key];
      } else {
        mergedObj[key] = objectMerge(mergedObj[key], obj2[key]);
      }
    } else {
      mergedObj[key] = obj2[key];
    }
  }

  return mergedObj;
};
