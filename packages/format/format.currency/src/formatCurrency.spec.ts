import {
  formatCurrencyCADen,
  formatCurrencyCADfr,
  formatCurrencyEURde,
  formatCurrencyEURfr,
  formatCurrencyGBP,
  formatCurrencyHOF,
  formatCurrencyUSD,
} from './formatCurrency';

describe('formatCurrency', () => {
  describe('as USD in the default locale', () => {
    const convert = formatCurrencyHOF({ currency: 'USD' });

    it('should format a string', () => {
      expect(convert('1234567')).toEqual('$1,234,567.00');
    });

    it('should format a negative number', () => {
      expect(convert(-2.5e3)).toEqual('-$2,500.00');
    });

    it('should format a BigInt', () => {
      expect(convert(8675309n)).toEqual('$8,675,309.00');
    });

    it('should NOT format a non-numeric string', () => {
      const fn = () => convert('-e,rtx');
      expect(fn).toThrow('Cannot format value to currency');
    });
  });

  describe('as CAD in English', () => {
    const convert = formatCurrencyHOF({ locale: 'en-CA', currency: 'CAD' });

    it('should format a string', () => {
      expect(convert('1234567')).toEqual('$1,234,567.00');
    });

    it('should format a negative number', () => {
      expect(convert(-2.5e3)).toEqual('-$2,500.00');
    });

    it('should format a BigInt', () => {
      expect(convert(8675309n)).toEqual('$8,675,309.00');
    });
  });

  describe('as CAD in French', () => {
    const convert = formatCurrencyHOF({ locale: 'fr-CA', currency: 'CAD' });

    it('should format a string', () => {
      expect(convert('1234567')).toEqual('1 234 567,00 $');
    });

    it('should format a negative number', () => {
      expect(convert(-2.5e3)).toEqual('-2 500,00 $');
    });

    it('should format a BigInt', () => {
      expect(convert(8675309n)).toEqual('8 675 309,00 $');
    });
  });

  describe('as GBP in UK', () => {
    const convert = formatCurrencyHOF({ locale: 'en-GB', currency: 'GBP' });

    it('should format a string', () => {
      expect(convert('1234567')).toEqual('£1,234,567.00');
    });

    it('should format a negative number', () => {
      expect(convert(-2.5e3)).toEqual('-£2,500.00');
    });

    it('should format a BigInt', () => {
      expect(convert(8675309n)).toEqual('£8,675,309.00');
    });
  });

  describe('as EUR in France', () => {
    const convert = formatCurrencyHOF({ locale: 'fr-FR', currency: 'EUR' });

    it('should format a string', () => {
      expect(convert('1234567')).toEqual('1 234 567,00 €');
    });

    it('should format a negative number', () => {
      expect(convert(-2.5e3)).toEqual('-2 500,00 €');
    });

    it('should format a BigInt', () => {
      expect(convert(8675309n)).toEqual('8 675 309,00 €');
    });
  });

  describe('with the prepared formatters', () => {
    it('should display in USD', () => {
      expect(formatCurrencyUSD(1234567.89)).toEqual('$1,234,567.89');
    });
    it('should display in CADen', () => {
      expect(formatCurrencyCADen(1234567.89)).toEqual('$1,234,567.89');
    });
    it('should display in CADfr', () => {
      expect(formatCurrencyCADfr(1234567.89)).toEqual('1 234 567,89 $');
    });
    it('should display in GBP', () => {
      expect(formatCurrencyGBP(1234567.89)).toEqual('£1,234,567.89');
    });
    it('should display in EURde', () => {
      expect(formatCurrencyEURde(1234567.89)).toEqual('1.234.567,89 €');
    });
    it('should display in EURfr', () => {
      expect(formatCurrencyEURfr(1234567.89)).toEqual('1 234 567,89 €');
    });
  });
  describe('example values', () => {
    const format = formatCurrencyHOF({ locale: 'en-US', currency: 'USD' });

    it('should display "99.99"', () => {
      expect(format('99.99')).toEqual('$99.99');
    });

    it('should display "$ 1,000,000"', () => {
      expect(format('$ 1,000,000')).toEqual('$1,000,000.00');
    });

    it('should display "9.876.543,21"', () => {
      expect(format('9.876.543,21')).toEqual('$9,876,543.21');
    });

    it('should display "555 234 5678"', () => {
      expect(format('555 234 5678')).toEqual('$5,552,345,678.00');
    });

    it('should display 42', () => {
      expect(format(42)).toEqual('$42.00');
    });

    it('should display 3e8', () => {
      expect(format(3e8)).toEqual('$300,000,000.00');
    });

    it('should display -273.15', () => {
      expect(format(-273.15)).toEqual('-$273.15');
    });

    it('should display Math.PI', () => {
      expect(format(Math.PI)).toEqual('$3.14');
    });

    it('should display 8675309n', () => {
      expect(format(8675309n)).toEqual('$8,675,309.00');
    });

    it('should format en-US with symbol', () => {
      const customFormat = formatCurrencyHOF({
        locale: 'en-US',
        currency: 'USD',
        currencyDisplay: 'symbol',
      });
      expect(customFormat(1234567.89)).toEqual('$1,234,567.89');
    });

    it('should format en-US with no fractional digits', () => {
      const customFormat = formatCurrencyHOF({
        locale: 'en-US',
        currency: 'USD',
        fractionDigits: 'hide',
      });
      expect(customFormat(1234567.89)).toEqual('$1,234,568');
    });

    it('should format en-US with narrowSymbol', () => {
      const customFormat = formatCurrencyHOF({
        locale: 'en-US',
        currency: 'USD',
        currencyDisplay: 'narrowSymbol',
      });
      expect(customFormat(1234567.89)).toEqual('$1,234,567.89');
    });

    it('should format en-US with code', () => {
      const customFormat = formatCurrencyHOF({
        locale: 'en-US',
        currency: 'USD',
        currencyDisplay: 'code',
      });
      expect(customFormat(1234567.89)).toEqual('USD 1,234,567.89');
    });

    it('should format en-US with name', () => {
      const customFormat = formatCurrencyHOF({
        locale: 'en-US',
        currency: 'USD',
        currencyDisplay: 'name',
      });
      expect(customFormat(1234567.89)).toEqual('1,234,567.89 US dollars');
    });

    it('should format fr-FR with symbol', () => {
      const customFormat = formatCurrencyHOF({
        locale: 'fr-FR',
        currency: 'EUR',
        currencyDisplay: 'symbol',
      });
      expect(customFormat(1234567.89)).toEqual('1 234 567,89 €');
    });

    it('should format fr-FR with symbol, no cents', () => {
      const customFormat = formatCurrencyHOF({
        locale: 'fr-FR',
        currency: 'EUR',
        currencyDisplay: 'symbol',
        fractionDigits: 'hide',
      });
      expect(customFormat(1234567.89)).toEqual('1 234 568 €');
    });

    it('should format fr-FR with narrowSymbol', () => {
      const customFormat = formatCurrencyHOF({
        locale: 'fr-FR',
        currency: 'EUR',
        currencyDisplay: 'narrowSymbol',
      });
      expect(customFormat(1234567.89)).toEqual('1 234 567,89 €');
    });

    it('should format fr-FR with code', () => {
      const customFormat = formatCurrencyHOF({
        locale: 'fr-FR',
        currency: 'EUR',
        currencyDisplay: 'code',
      });
      expect(customFormat(1234567.89)).toEqual('1 234 567,89 EUR');
    });

    it('should format fr-FR name code', () => {
      const customFormat = formatCurrencyHOF({
        locale: 'fr-FR',
        currency: 'EUR',
        currencyDisplay: 'name',
      });
      expect(customFormat(1234567.89)).toEqual('1 234 567,89 euros');
    });

    it('should format fr-FR name code', () => {
      const customFormat = formatCurrencyHOF({
        locale: 'fr-FR',
        currency: 'EUR',
        currencyDisplay: 'code',
        fractionDigits: 'hide',
      });
      expect(customFormat(1234567.89)).toEqual('1 234 568 EUR');
    });
  });
});
