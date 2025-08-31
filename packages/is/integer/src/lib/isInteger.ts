export const isInteger = (value: unknown): value is number => {
  if (typeof value !== 'number') {
    return false;
  }

  return (value as number) % 1 === 0;
};
