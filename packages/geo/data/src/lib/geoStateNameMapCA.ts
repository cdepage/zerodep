import { StateNameMap } from './StateNameType';

/**
 * DEVELOPER NOTE:
 * - ISO2 code is always uppercase
 * - all other values are always lowercase without diacritics
 */
export const geoStateNameMapCA: StateNameMap = new Map([
  ['ON', ['ontario', 'ont']],
  ['QC', ['quebec']],
  ['BC', ['british columbia', 'cb']],
  ['AB', ['alberta', 'alta', 'alb']],
  ['MB', ['manitoba', 'man']],
  ['SK', ['saskatchewan', 'sask']],
  ['NS', ['nova scotia', 'ne']],
  ['NB', ['new brunswick']],
  ['NL', ['newfoundland', 'nfld', 'lab', 'tnl']],
  ['PE', ['prince edward island', 'pei', 'ipe']],
  ['NT', ['northwest territories', 'tno']],
  ['YT', ['yukon', 'yn']],
  ['NU', ['nunavut']],
]);
