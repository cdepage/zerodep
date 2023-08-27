import { addressCountry } from './addressCountry';

describe('addressFindCountry', () => {
  it('should not find a country', () => {
    expect(addressCountry('unknown')).toEqual([]);
  });

  it('should find the country iso code at the end', () => {
    expect(addressCountry('1234 Main Street, Los Angeles CA, US')).toEqual([
      {
        countryIso2: 'US',
        source: 'US',
        ndx: 34,
        length: 2,
      },
    ]);
  });

  it('should find the country name at the end', () => {
    expect(addressCountry('1234 Main Street, Los Angeles CA, America')).toEqual(
      [
        {
          countryIso2: 'US',
          source: 'America',
          ndx: 34,
          length: 7,
        },
      ]
    );
  });

  it('should NOT find the country iso code in the middle', () => {
    expect(
      addressCountry('1234 Main Street, Los Angeles CA, US 90210')
    ).toEqual([]);
  });

  it('should NOT find the country name code in the middle', () => {
    expect(
      addressCountry('1234 Main Street, Los Angeles CA, United States 90210')
    ).toEqual([]);
  });

  it('should find the country iso code in the middle', () => {
    expect(
      addressCountry('1234 Main Street, Los Angeles CA, US 90210', true)
    ).toEqual([
      {
        countryIso2: 'US',
        source: 'US',
        ndx: 34,
        length: 2,
      },
      {
        countryIso2: 'CA',
        source: 'CA',
        ndx: 30,
        length: 2,
      },
    ]);
  });

  it('should NOT find the country name code in the middle', () => {
    expect(
      addressCountry(
        '1234 Main Street, Los Angeles CA, United States 90210',
        true
      )
    ).toEqual([
      {
        countryIso2: 'US',
        source: 'United States',
        ndx: 34,
        length: 13,
      },
      {
        countryIso2: 'CA',
        source: 'CA',
        ndx: 30,
        length: 2,
      },
    ]);
  });
});
