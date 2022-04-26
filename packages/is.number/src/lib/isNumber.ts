export const isNumber = (value: any): boolean => {
  return typeof value === 'number' && Number.isFinite(value) && !Number.isNaN(value);
};
