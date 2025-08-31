import { ZeroDepError } from './ZeroDepError';
import { ZeroDepTypeError } from './ZeroDepTypeError';

describe('ZeroDepTypeError', () => {
  let err: ZeroDepError;

  beforeAll(() => {
    err = new ZeroDepTypeError();
  });

  it('should be an instance of Error', () => {
    expect(err).toBeInstanceOf(Error);
    expect(err).toBeInstanceOf(ZeroDepError);
  });

  it('should have the correct name', () => {
    expect(err.name).toEqual('ZeroDepTypeError');
  });

  it('should have default values', () => {
    expect(err.message).toEqual('Invalid Type');
  });
});
