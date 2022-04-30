export const isNumber = (value: any): boolean => {
  return (
    Object.prototype.toString.call(value) === '[object Number]' &&
    Math.abs(value) !== Infinity &&
    !Number.isNaN(value)
  );
};
