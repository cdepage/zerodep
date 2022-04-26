const objectConstructor = {}.constructor;

export const isObject = (value: any): boolean => {
  return typeof value === 'object' && value !== null && value.constructor === objectConstructor;
};
