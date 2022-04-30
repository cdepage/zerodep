export const isDate = (value: any): boolean => {
  return Object.prototype.toString.call(value) === '[object Date]';
};
