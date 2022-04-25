import { ZeroDepError } from '@zerodep/errors';
import { ZeroDepErrorGuard } from './ZeroDepErrorGuard';
import { ZeroDepErrorGuardRange } from './ZeroDepErrorGuardRange';

describe('ZeroDepErrorGuardRange', () => {
  let err: ZeroDepErrorGuardRange;

  beforeAll(() => {
    err = new ZeroDepErrorGuardRange();
  });

  it('should extend base ZeroDepErrorGuardRange', () => {
    expect(err).toBeInstanceOf(ZeroDepErrorGuard);
    expect(err).toBeInstanceOf(ZeroDepError);
    expect(err).toBeInstanceOf(Error);
  });

  it('should have the correct name', () => {
    expect(err.name).toEqual('ZeroDepErrorGuardRange');
  });

  it('should have default values', () => {
    expect(err.message).toEqual('An invalid value has been provided');
    expect(err.code).toEqual(400);
    expect(err.source).toEqual(undefined);
  });
});
