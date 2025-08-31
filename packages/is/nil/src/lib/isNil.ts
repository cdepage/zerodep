export const isNil = (value: unknown): boolean => {
  return value === null || typeof value === 'undefined';
};
