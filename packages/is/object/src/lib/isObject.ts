/* eslint-disable @typescript-eslint/ban-ts-comment */
const objectConstructor = {}.constructor;

export const isObject = (value: unknown): boolean => {
  return (
    Object.prototype.toString.call(value) === '[object Object]' &&
    value !== null &&
    // @ts-ignore
    value.constructor === objectConstructor
  );
};
