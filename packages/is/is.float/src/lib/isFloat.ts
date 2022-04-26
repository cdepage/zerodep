export const isFloat = (value: any): boolean => {
  return (
    typeof value === 'number' &&
    !Number.isNaN(value) &&
    !Number.isInteger(value) &&
    Number.isFinite(value)
  );
};
