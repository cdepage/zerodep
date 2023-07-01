import { StateNameMap } from './types';

/**
 * DEVELOPER NOTE:
 * - ISO2 code is always uppercase
 * - all other values are always lowercase without diacritics
 */
export const stateNamesCA: StateNameMap = new Map([
  ['ON', ['ontario', 'ont']],
  ['QC', ['quebec']],
  ['BC', ['british columbia', 'cb']],
  ['AB', ['alberta', 'alta', 'alb']],
  ['MB', ['manitoba', 'man']],
  ['SK', ['saskatchewan', 'sask']],
  ['NS', ['nova scotia', 'ne']],
  ['NB', ['new brunwsick']],
  ['NL', ['newfoundland', 'nfld', 'lab', 'tnl']],
  ['PE', ['prince edward island', 'pei', 'ipe']],
  ['NT', ['northwest territories', 'tno']],
  ['YT', ['yukon', 'yn']],
  ['NU', ['nunavut']],
]);
