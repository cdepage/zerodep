import { addressListStreets } from '../data/addressListStreets';

export interface AddressStreet {
  streetType: string;
  source: string;
  ndx: number;
  length: number;
  sourceIsAbbr: boolean;
}

export const addressStreet = (address: string): AddressStreet[] => {
  const streets: AddressStreet[] = [];

  // check for streets in the address
  for (const streetType of Object.keys(addressListStreets)) {
    const regex1 = new RegExp(`\\b${streetType}\\b`, 'gi');
    const matches1 = address.match(regex1);
    if (matches1) {
      streets.push({
        streetType,
        source: matches1[0],
        ndx: matches1.index ?? address.lastIndexOf(matches1[0]),
        length: matches1[0].length,
        sourceIsAbbr: true,
      });
    }

    // check for other spellings & abbreviations
    for (const val of addressListStreets[streetType]) {
      const regex2 = new RegExp(`\\b${val}\\b`, 'gi');
      const matches2 = address.match(regex2);
      if (matches2) {
        for (const source of matches2) {
          streets.push({
            streetType,
            source,
            ndx: matches2.index ?? address.lastIndexOf(source),
            length: source.length,
            sourceIsAbbr: false,
          });
        }
      }
    }
  }

  // return in order of last street first
  if (streets.length > 1) {
    streets.sort((a, b) => (a.ndx > b.ndx ? 1 : -1));
  }

  return streets;
};
