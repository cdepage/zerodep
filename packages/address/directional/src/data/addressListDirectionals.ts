export type IListDirectionals = Record<string, string[]>;

/**
 * A map of directionals to their:
 * - full name (with correct punctuation/capitalization)
 * - optional additional synonyms and mis-spellings
 *
 * Order should have the most likely matches first, so north american followed
 * by european countries so the matcher iterates less
 */
export const addressListDirectionals: IListDirectionals = {
  NW: ['NORTH WEST', 'N W', 'N.W.', 'NOR OESTE', 'NORTHWEST', 'NOROESTE'],
  NO: ['NORD OUEST', 'N O', 'NORDOUEST'],
  NE: [
    'NORTH EAST',
    'N E',
    'NORD EST',
    'NOR ESTE',
    'NORTHEAST',
    'NORDEST',
    'NORESTE',
  ],
  SE: [
    'SOUTH EAST',
    'S E',
    'SUD EST',
    'SUR ESTE',
    'SOUTHEAST',
    'SUDEST',
    'SURESTE',
  ],
  SW: ['SOUTH WEST', 'S W', 'SUR OESTE', 'SOUTHWEST', 'SUROESTE'],
  SO: ['SUD OUEST', 'S O', 'SUDOUEST'],

  N: ['NORTH', 'NORD', 'NORTE'],
  E: ['EAST', 'EST', 'ESTE'],
  S: ['SOUTH', 'SUD', 'SUR'],
  W: ['WEST', 'OESTE'],
  O: ['OUEST'],
};

export type IDirectional = keyof typeof addressListDirectionals;

export const getDirectionalNameFromAbbr = (abbr: string) => {
  return addressListDirectionals[abbr.toUpperCase()]?.[0] ?? undefined;
};
