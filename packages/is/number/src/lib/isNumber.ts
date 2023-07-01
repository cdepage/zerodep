export const isNumber = (value: unknown): boolean => {
  return (
    Object.prototype.toString.call(value) === '[object Number]' &&
    Math.abs(value as number) !== Infinity &&
    !Number.isNaN(value)
  );
};
