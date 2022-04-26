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
    expect(err.message).toEqual('Value is out-of-range');
    expect(err.tax).toEqual('range');
    expect(err.source).toEqual('guard');
    expect(err.value).toEqual(undefined);
  });
});
