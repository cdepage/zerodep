export const isWeakMap = (value: any): boolean => {
  return Object.prototype.toString.call(value) === "[object WeakMap]"
};
