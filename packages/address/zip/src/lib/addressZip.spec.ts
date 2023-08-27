import { addressZip } from './addressZip';

describe('addressZip', () => {
  it('should not find a zip code', () => {
    expect(addressZip('unknown')).toEqual([]);
  });

  it('should find an extended US zip code', () => {
    expect(addressZip('12345 Main St, Los Angeles CA, US 90210-1234')).toEqual([
      {
        zip: '90210',
        zipExt: '1234',
        countryIso2s: ['US'],
        source: '90210-1234',
        ndx: 34,
        length: 10,
      },
      {
        zip: '12345',
        zipExt: undefined,
        countryIso2s: ['US'],
        source: '12345',
        ndx: 0,
        length: 5,
      },
    ]);
  });

  it('should find a US zip code', () => {
    expect(
      addressZip('12345 Main Street, Los Angeles CA, United States 90210')
    ).toEqual([
      {
        zip: '90210',
        zipExt: undefined,
        countryIso2s: ['US'],
        source: '90210',
        ndx: 49,
        length: 5,
      },
      {
        zip: '12345',
        zipExt: undefined,
        countryIso2s: ['US'],
        source: '12345',
        ndx: 0,
        length: 5,
      },
    ]);
  });

  it('should find a space-separated CA postal code', () => {
    expect(addressZip('12345 Main Street, Toronto ON, Canada M4A 3B6')).toEqual(
      [
        {
          zip: 'M4A 3B6',
          zipExt: undefined,
          countryIso2s: ['CA'],
          source: 'M4A 3B6',
          ndx: 38,
          length: 7,
        },
        {
          zip: '12345',
          zipExt: undefined,
          countryIso2s: ['US'],
          source: '12345',
          ndx: 0,
          length: 5,
        },
      ]
    );
  });

  it('should find a hyphen-separated CA postal code', () => {
    expect(addressZip('12345 Main Street, Toronto ON, Canada M4A-3B6')).toEqual(
      [
        {
          zip: 'M4A 3B6',
          zipExt: undefined,
          countryIso2s: ['CA'],
          source: 'M4A-3B6',
          ndx: 38,
          length: 7,
        },
        {
          zip: '12345',
          zipExt: undefined,
          countryIso2s: ['US'],
          source: '12345',
          ndx: 0,
          length: 5,
        },
      ]
    );
  });

  it('should find an un-separated CA postal code', () => {
    expect(addressZip('12345 Main Street, Toronto ON, Canada M4A3B6')).toEqual([
      {
        zip: 'M4A 3B6',
        zipExt: undefined,
        source: 'M4A3B6',
        countryIso2s: ['CA'],
        ndx: 38,
        length: 6,
      },
      {
        zip: '12345',
        zipExt: undefined,
        source: '12345',
        countryIso2s: ['US'],
        ndx: 0,
        length: 5,
      },
    ]);
  });
});
