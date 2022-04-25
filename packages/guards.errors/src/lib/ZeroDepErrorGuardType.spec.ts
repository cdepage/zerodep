import { ZeroDepError } from '@zerodep/errors';
import { ZeroDepErrorGuard } from './ZeroDepErrorGuard';
import { ZeroDepErrorGuardType } from './ZeroDepErrorGuardType';

describe('ZeroDepErrorGuardType', () => {
  let err: ZeroDepErrorGuardType;

  beforeAll(() => {
    err = new ZeroDepErrorGuardType();
  });

  it('should extend base ZeroDepErrorGuardType', () => {
    expect(err).toBeInstanceOf(ZeroDepErrorGuard);
    expect(err).toBeInstanceOf(ZeroDepError);
    expect(err).toBeInstanceOf(Error);
  });

  it('should have the correct name', () => {
    expect(err.name).toEqual('ZeroDepErrorGuardType');
  });

  it('should have default values', () => {
    expect(err.message).toEqual('Value is incorrect type');
    expect(err.tax).toEqual('type');
    expect(err.source).toEqual('guard');
    expect(err.value).toEqual(undefined);
  });
});
