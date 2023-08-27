import { addressDirectional } from './addressDirectional';

describe('addressDirectional', () => {
  it('should not find a directional', () => {
    expect(addressDirectional('unknown')).toEqual([]);
  });

  it('should find the directional iso code at the end', () => {
    expect(
      addressDirectional('1234 Main Street East, Los Angeles CA, US')
    ).toEqual([
      {
        directional: 'E',
        source: 'East',
        ndx: 17,
        length: 4,
      },
    ]);
  });
});
