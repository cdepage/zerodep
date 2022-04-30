export const isSet = (value: any): boolean => {
  return Object.prototype.toString.call(value) === '[object Set]';
};
