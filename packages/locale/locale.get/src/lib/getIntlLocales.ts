export const getIntlLocales = (): string[] => {
  const locale = Intl.DateTimeFormat().resolvedOptions().locale;
  return [locale];
};
