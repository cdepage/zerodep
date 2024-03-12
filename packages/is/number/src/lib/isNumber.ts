export const isNumber = (value: unknown): boolean => {
  try {
    return (
      Object.prototype.toString.call(value) === '[object Number]' &&
      Math.abs(value as number) !== Infinity &&
      !Number.isNaN(value)
    );
  } catch {
    // anything that isn't handled by the above code is definitely false
    return false;
  }
};
