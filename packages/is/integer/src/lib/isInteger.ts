export const isInteger = (value: unknown): boolean => {
  return (
    Object.prototype.toString.call(value) === '[object Number]' &&
    (value as number) % 1 === 0
  );
};
