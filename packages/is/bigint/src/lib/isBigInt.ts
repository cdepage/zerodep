export const isBigInt = (value: unknown): boolean => {
  try {
    return typeof value === 'bigint';
  } catch {
    // anything that isn't handled by the above code is definitely false
    return false;
  }
};
