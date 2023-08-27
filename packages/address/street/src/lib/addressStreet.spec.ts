import { addressStreet } from './addressStreet';

describe('addressStreet', () => {
  it('should find the street code in the middle', () => {
    expect(addressStreet('1234 Main St, Los Angeles CA, US 90210')).toEqual([
      {
        streetType: 'ST',
        source: 'St',
        ndx: 10,
        length: 2,
        sourceIsAbbr: true,
      },
    ]);
  });

  it('should find the street name in the middle', () => {
    expect(
      addressStreet('1234 Main Street, Los Angeles CA, United States 90210')
    ).toEqual([
      {
        streetType: 'ST',
        source: 'Street',
        ndx: 10,
        length: 6,
        sourceIsAbbr: false,
      },
    ]);
  });

  it('should find multiple streets', () => {
    expect(addressStreet('36 trail street, edmonton ab')).toEqual([
      {
        streetType: 'TR',
        source: 'trail',
        ndx: 3,
        length: 5,
        sourceIsAbbr: false,
      },
      {
        streetType: 'ST',
        source: 'street',
        ndx: 9,
        length: 6,
        sourceIsAbbr: false,
      },
    ]);
  });
});
