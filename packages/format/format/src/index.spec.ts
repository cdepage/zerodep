import * as formatters from './index';

describe('Formats barrel package', () => {
  it('should export specific packages and interfaces', () => {
    expect(Object.keys(formatters).sort()).toStrictEqual([
      'formatCurrency',
      'formatCurrencyCADen',
      'formatCurrencyCADfr',
      'formatCurrencyEURde',
      'formatCurrencyEURfr',
      'formatCurrencyGBP',
      'formatCurrencyHOF',
      'formatCurrencyUSD',
    ]);
  });
});
