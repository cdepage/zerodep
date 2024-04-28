export const isSet = (value: unknown): boolean => {
  return Object.prototype.toString.call(value) === '[object Set]';
};
