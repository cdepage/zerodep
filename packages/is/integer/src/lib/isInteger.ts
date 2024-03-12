export const isInteger = (value: unknown): boolean => {
  try {
    return (
      Object.prototype.toString.call(value) === '[object Number]' &&
      (value as number) % 1 === 0
    );
  } catch {
    // anything that isn't handled by the above code is definitely false
    return false;
  }
};
