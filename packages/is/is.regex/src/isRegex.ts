export const isRegex = (value: any): boolean => {
  return Object.prototype.toString.call(value) === '[object RegExp]';
};
