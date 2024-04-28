export const isDate = (value: unknown): boolean => {
  if (Object.prototype.toString.call(value) !== '[object Date]') {
    return false;
  }

  // since invalid strings & numbers can be used to create a date, check that the date works
  const ms = (value as Date).getTime();
  if (Number.isNaN(ms)) {
    return false;
  }
  return true;
};
