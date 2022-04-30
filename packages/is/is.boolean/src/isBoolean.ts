export const isBoolean = (value: any): boolean => {
  return Object.prototype.toString.call(value) === '[object Boolean]';
};
