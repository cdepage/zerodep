import { ZeroDepError } from './ZeroDepError';
import { ZeroDepGuardError } from './ZeroDepGuardError';

describe('ZeroDepGuardError', () => {
  let err: ZeroDepGuardError;

  beforeAll(() => {
    err = new ZeroDepGuardError();
  });

  it('should be an instance of Error', () => {
    expect(err).toBeInstanceOf(Error);
    expect(err).toBeInstanceOf(ZeroDepError);
  });

  it('should have the correct name', () => {
    expect(err.name).toEqual('ZeroDepGuardError');
  });

  it('should have default values', () => {
    expect(err.message).toEqual('Guard Error');
  });
});
