const objectConstructor = {}.constructor;

export const isObject = (value: any): boolean => {
  return (
    Object.prototype.toString.call(value) === '[object Object]' &&
    value !== null &&
    value.constructor === objectConstructor
  );
};
