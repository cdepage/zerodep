export type IListSecondaries = Record<string, string[]>;

export const secondariesWithUnits: IListSecondaries = {
  APT: ['APARTMENT', 'APARTMNT', 'APRTMNT'],
  BLDG: ['BUILDING'],
  DEPT: ['DEPARTMENT', 'DPRTMNT'],
  FL: ['FLOOR', 'FLR'],
  HNGR: ['HANGER'],
  KEY: [],
  LOT: [],
  OFC: ['OFFICE', 'OFFC'],
  PH: ['PENTHOUSE', 'PENT HOUSE'],
  PIER: [],
  RM: ['ROOM'],
  SLIP: [],
  SPC: ['SPACE'],
  STOP: [],
  STE: ['SUITE'],
  TRLR: ['TRAILER'],
  UNIT: ['UNT'],
};

export const secondariesWithoutUnits: IListSecondaries = {
  BSMT: ['BASEMENT', 'BSMNT'],
  FRNT: ['FRONT'],
  LBBY: ['LOBBY', 'LBY'],
  LOWR: ['LOWER'],
  REAR: [],
  SIDE: [],
  UPPR: ['UPPER', 'UPR'],
};
