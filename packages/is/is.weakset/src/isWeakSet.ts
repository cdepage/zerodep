export const isWeakSet = (value: any): boolean => {
  return Object.prototype.toString.call(value) === '[object WeakSet]';
};
