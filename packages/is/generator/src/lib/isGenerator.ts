const generatorTypes = new Set([
  '[object Generator]',
  '[object AsyncGenerator]',
]);

export const isGenerator = (value: unknown): boolean => {
  try {
    const internalType = Object.prototype.toString.call(value);
    return generatorTypes.has(internalType);
  } catch {
    // anything that isn't handled by the above code is definitely false
    return false;
  }
};
