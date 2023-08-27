import {
  secondariesWithoutUnits,
  secondariesWithUnits,
} from '../data/addressListSecondaries';

interface AddressSecondary {
  secondary: string;
  source: string;
  ndx: number;
  length: number;
  hasUnit: boolean;
}

export const addressSecondary = (address: string): AddressSecondary[] => {
  const secondaries: AddressSecondary[] = [];

  // check for secondaries with units in the address
  for (const secondary of Object.keys(secondariesWithUnits)) {
    const regex1 = new RegExp(`\\b${secondary}\\b`, 'gi');
    const matches1 = address.match(regex1);
    if (matches1) {
      secondaries.push({
        secondary,
        source: matches1[0],
        ndx: matches1.index ?? address.lastIndexOf(matches1[0]),
        length: matches1[0].length,
        hasUnit: true,
      });
    }

    // check for other spellings & abbreviations
    for (const val of secondariesWithUnits[secondary]) {
      const regex2 = new RegExp(`\\b${val}\\b`, 'gi');
      const matches2 = address.match(regex2);
      if (matches2) {
        for (const source of matches2) {
          secondaries.push({
            secondary,
            source,
            ndx: matches2.index ?? address.lastIndexOf(source),
            length: source.length,
            hasUnit: true,
          });
        }
      }
    }
  }
  // check for secondaries with units in the address
  for (const secondary of Object.keys(secondariesWithoutUnits)) {
    const regex1 = new RegExp(`\\b${secondary}\\b`, 'gi');
    const matches1 = address.match(regex1);
    if (matches1) {
      secondaries.push({
        secondary,
        source: matches1[0],
        ndx: matches1.index ?? address.lastIndexOf(matches1[0]),
        length: matches1[0].length,
        hasUnit: false,
      });
    }

    // check for other spellings & abbreviations
    for (const val of secondariesWithoutUnits[secondary]) {
      const regex2 = new RegExp(`\\b${val}\\b`, 'gi');
      const matches2 = address.match(regex2);
      if (matches2) {
        for (const source of matches2) {
          secondaries.push({
            secondary,
            source,
            ndx: matches2.index ?? address.lastIndexOf(source),
            length: source.length,
            hasUnit: false,
          });
        }
      }
    }
  }

  // return in order of last street first
  if (secondaries.length > 1) {
    secondaries.sort((a, b) => (a.ndx > b.ndx ? 1 : -1));
  }

  return secondaries;
};
