export const isDate = (value: any): boolean => {
  return typeof value === 'object' && value instanceof Date;
};
