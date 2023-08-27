import { addressState } from './addressState';

describe('addressState', () => {
  it('should not find a state', () => {
    expect(addressState('unknown')).toEqual([]);
  });

  it('should find the state iso code at the end', () => {
    expect(addressState('1234 Main Street, Los Angeles CA')).toEqual([
      {
        stateAbbr: 'CA',
        source: 'CA',
        ndx: 30,
        length: 2,
      },
    ]);
  });

  it('should find the state name at the end', () => {
    expect(addressState('1234 Main Street, Los Angeles California')).toEqual([
      {
        stateAbbr: 'CA',
        source: 'California',
        ndx: 30,
        length: 10,
      },
    ]);
  });

  it('should find the state iso code at the middle', () => {
    expect(addressState('1234 Main Street, Los Angeles CA, 90210')).toEqual([
      {
        stateAbbr: 'CA',
        source: 'CA',
        ndx: 30,
        length: 2,
      },
    ]);
  });

  it('should find the state name at the middle', () => {
    expect(
      addressState('1234 Main Street, Los Angeles California, 90210')
    ).toEqual([
      {
        stateAbbr: 'CA',
        source: 'California',
        ndx: 30,
        length: 10,
      },
    ]);
  });

  it('should find multiple states', () => {
    expect(addressState('#4 Washington Street, Portland OR 97603')).toEqual([
      {
        stateAbbr: 'OR',
        source: 'OR',
        ndx: 31,
        length: 2,
      },
      {
        stateAbbr: 'WA',
        source: 'Washington',
        ndx: 3,
        length: 10,
      },
    ]);
  });

  it('should find a single province', () => {
    expect(addressState('13375 rue rita pierrefonds quebec h8z1j3')).toEqual([
      {
        length: 6,
        ndx: 27,
        source: 'quebec',
        stateAbbr: 'QC',
      },
    ]);
  });

  it('should find both states and provinces', () => {
    expect(addressState('1234 oregon street, toronto ont')).toEqual([
      {
        stateAbbr: 'ON',
        source: 'ont',
        ndx: 28,
        length: 3,
      },
      {
        stateAbbr: 'OR',
        source: 'oregon',
        ndx: 5,
        length: 6,
      },
    ]);
  });

  it('should find a state with a space', () => {
    expect(addressState('1234 main street, green bay new york')).toEqual([
      {
        stateAbbr: 'NY',
        source: 'new york',
        ndx: 28,
        length: 8,
      },
    ]);
  });
});
