import { addressListDirectionals } from '../data/addressListDirectionals';

const getPrefix = (prefix: string) => {
  if (addressListDirectionals[prefix]) {
    return prefix;
  }

  for (const ndx of Object.keys(addressListDirectionals)) {
    if (addressListDirectionals[ndx].includes(prefix)) {
      return ndx;
    }
  }

  throw new Error(`Prefix "${prefix}" not found`);
};

// build the regex
const prefixes = Object.keys(addressListDirectionals)
  .concat(Object.values(addressListDirectionals).flat())
  .join('|');
const regex = new RegExp(`\\b(?<prefix>(${prefixes}))\\b`, 'gi');

interface IMatchGroup {
  prefix?: string;
}

interface AddressDirectional {
  directional: string;
  source: string;
  ndx: number;
  length: number;
}

export const addressDirectional = (address: string): AddressDirectional[] => {
  const directionals: AddressDirectional[] = [];

  // check for streets in the address
  for (const directional of Object.keys(addressListDirectionals)) {
    const regex1 = new RegExp(`\\b${directional}\\b`, 'gi');
    const matches1 = address.match(regex1);
    if (matches1) {
      directionals.push({
        directional,
        source: matches1[0],
        ndx: matches1.index ?? address.lastIndexOf(matches1[0]),
        length: matches1[0].length,
      });
    }

    // check for other spellings & abbreviations
    for (const val of addressListDirectionals[directional]) {
      const regex2 = new RegExp(`\\b${val}\\b`, 'gi');
      const matches2 = address.match(regex2);
      if (matches2) {
        for (const source of matches2) {
          directionals.push({
            directional,
            source,
            ndx: matches2.index ?? address.lastIndexOf(source),
            length: source.length,
          });
        }
      }
    }
  }

  // return in order of last street first
  if (directionals.length > 1) {
    directionals.sort((a, b) => (a.ndx > b.ndx ? 1 : -1));
  }

  return directionals;
};
