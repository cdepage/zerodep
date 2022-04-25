export class ZeroDepError extends Error {
  public code: number;
  public source: any;

  constructor(message = 'An unexpected error has occurred', code = 500, source?: any) {
    super(message);
    this.code = code;
    this.source = source;

    // ensure the name matches the class
    this.name = this.constructor.name;

    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
  }
}
