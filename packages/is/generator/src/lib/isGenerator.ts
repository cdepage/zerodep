export const isGenerator = (value: unknown): boolean => {
  try {
    const type = Object.prototype.toString.call(value);
    return type === '[object Generator]' || type === '[object AsyncGenerator]';
  } catch {
    // anything that isn't handled by the above code is definitely false
    return false;
  }
};
