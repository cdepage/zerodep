export const formatLocale = (locale: string) => {
  let [lang, region, ...rest] = locale.split('-');

  return [lang.toLowerCase(), region.toUpperCase(), ...rest].filter((v) => v).join('-');
};
