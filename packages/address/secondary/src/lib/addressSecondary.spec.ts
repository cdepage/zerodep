import { addressSecondary } from './addressSecondary';

describe('addressSecondary', () => {
  it('should not find a secondary', () => {
    expect(addressSecondary('unknown')).toEqual([]);
  });

  it('should find the secondary at the start', () => {
    expect(
      addressSecondary('Apt 14 1234 Main Street East, Los Angeles CA, US')
    ).toEqual([
      {
        secondary: 'APT',
        source: 'Apt',
        ndx: 0,
        length: 3,
        hasUnit: true,
      },
    ]);
  });

  it('should find the secondary in the address', () => {
    expect(
      addressSecondary('1234 Main Street East Unit 14 Los Angeles CA, US')
    ).toEqual([
      {
        secondary: 'UNIT',
        source: 'Unit',
        ndx: 22,
        length: 4,
        hasUnit: true,
      },
    ]);
  });

  it('should find the secondary unprefixed at the start', () => {
    expect(
      addressSecondary('basement 1234 Main Street East Los Angeles CA, US')
    ).toEqual([
      {
        secondary: 'BSMT',
        source: 'basement',
        ndx: 0,
        length: 8,
        hasUnit: false,
      },
    ]);
  });

  it('should find both prefixed and unprefixed secondaries', () => {
    expect(
      addressSecondary('office 1234 Main Street East ph 4 Los Angeles CA, US')
    ).toEqual([
      {
        secondary: 'OFC',
        source: 'office',
        ndx: 0,
        length: 6,
        hasUnit: true,
      },
      {
        secondary: 'PH',
        source: 'ph',
        ndx: 29,
        length: 2,
        hasUnit: true,
      },
    ]);
  });
});
