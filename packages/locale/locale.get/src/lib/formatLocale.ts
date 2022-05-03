export const formatLocale = (locale: string) => {
  const [lang, region, ...rest] = locale.split('-');

  return [lang.toLowerCase(), region.toUpperCase(), ...rest].filter((v) => v).join('-');
};
