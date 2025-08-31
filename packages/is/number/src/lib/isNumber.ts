export const isNumber = (value: unknown): value is number => {
  return (
    Object.prototype.toString.call(value) === '[object Number]' &&
    Math.abs(value as number) !== Infinity &&
    !Number.isNaN(value)
  );
};
