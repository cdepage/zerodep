/* eslint-disable @typescript-eslint/ban-ts-comment */
const objectConstructor = {}.constructor;

export const isObject = (value: unknown): boolean => {
  try {
    return (
      Object.prototype.toString.call(value) === '[object Object]' &&
      value !== null &&
      // @ts-ignore
      value.constructor === objectConstructor
    );
  } catch {
    // anything that isn't handled by the above code is definitely false
    return false;
  }
};
