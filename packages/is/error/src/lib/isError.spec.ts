import { testData } from '../../../../testValues';
import { isError } from './isError';

const negativeCases = Object.values(testData).flat();

const positiveCases = [
  // error
  ['error', new Error('test error')],
];

class MyError extends Error {
  constructor(message?: string | undefined) {
    super(message);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
  }
}

class MySubError extends MyError {
  constructor(message?: string | undefined) {
    super(message);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
  }
}

class SimpleError extends Error {}

describe('isInteger', () => {
  // @ts-ignore
  test.each(positiveCases)('should return TRUE for a/an %s', (title, value) => {
    // @ts-ignore
    expect(isError(value)).toEqual(true);
  });

  // @ts-ignore
  test.each(negativeCases)(
    'should return FALSE for a/an %s',
    // @ts-ignore
    (title, value) => {
      // @ts-ignore
      expect(isError(value)).toEqual(false);
    }
  );

  it('should return TRUE for an error without a message', () => {
    const error = new Error();
    expect(isError(error)).toEqual(true);
  });

  it('should return FALSE for a non-string (numeric) error message', () => {
    const error = new Error();
    // @ts-ignore
    error.message = 123;
    expect(isError(error)).toEqual(false);
  });

  it('should return FALSE for a non-string (null) error message', () => {
    const error = new Error();
    // @ts-ignore
    error.message = null;
    expect(isError(error)).toEqual(false);
  });

  it('should return FALSE for a non-string (undefined) error message', () => {
    const error = new Error();
    // @ts-ignore
    error.message = undefined;
    expect(isError(error)).toEqual(false);
  });

  it("should return TRUE for an error with it's message removed", () => {
    const error = new Error('test');
    // @ts-ignore
    delete error.message;
    expect(isError(error)).toEqual(true);
  });

  it('should return FALSE for a non-string (object) error message', () => {
    const error = new Error();
    // @ts-ignore
    error.message = { an: 'object' };
    expect(isError(error)).toEqual(false);
  });

  it('should return FALSE for a non-string (array) error message', () => {
    const error = new Error();
    // @ts-ignore
    error.message = ['a', 'b'];
    expect(isError(error)).toEqual(false);
  });

  it('should return FALSE for a non-string (boolean true) error message', () => {
    const error = new Error();
    // @ts-ignore
    error.message = true;
    expect(isError(error)).toEqual(false);
  });

  it('should return FALSE for a non-string (boolean false) error message', () => {
    const error = new Error();
    // @ts-ignore
    error.message = false;
    expect(isError(error)).toEqual(false);
  });

  it('should return TRUE when simple instance types match parent', () => {
    const error = new SimpleError('some message');
    expect(isError(error, Error)).toEqual(true);
  });

  it('should return TRUE when simple instance types match', () => {
    const error = new SimpleError('some message');
    expect(isError(error, SimpleError)).toEqual(true);
  });

  it('should return TRUE when instance types match', () => {
    const error = new SyntaxError('some message');
    expect(isError(error, SyntaxError)).toEqual(true);
  });

  it('should return TRUE when subclassed instance types match', () => {
    const error = new MyError('some message');
    expect(isError(error, Error)).toEqual(true);
  });

  it('should return TRUE when sub-subclassed instance types match', () => {
    const error = new MySubError('some message');
    expect(isError(error, MyError)).toEqual(true);
  });

  it('should return FALSE when instance types do not match', () => {
    const error = new SyntaxError('some message');
    expect(isError(error, EvalError)).toEqual(false);
  });

  it('should return FALSE when subclass instance types do not match', () => {
    const error = new MySubError('some message');
    expect(isError(error, EvalError)).toEqual(false);
  });

  it('should return FALSE when two custom types differ', () => {
    class ErrorA extends Error {}
    class ErrorB extends Error {}
    expect(isError(new ErrorA('some message'), ErrorA)).toEqual(true);
    expect(isError(new ErrorA('some message'), ErrorB)).toEqual(false);
    expect(isError(new ErrorA('some message'), Error)).toEqual(true);
  });
});
