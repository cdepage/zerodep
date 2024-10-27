export const testDate0 = new Date();
export const testDate1 = new Date('1999-12-31T23:59:59.999Z');
export const testDate2 = new Date('2022-04-27T18:02:36.634Z');

export const testError = new Error('message');
export const testAggregateError = new AggregateError(
  [new Error('err1'), new Error('err2')],
  'message'
);

export const testFunction = () => {
  return 'a';
};
export const testFunctionAsync = async () => {
  return 'b';
};
export const testFunctionGenerator = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();
export const testFunctionGeneratorAsync = (async function* () {
  yield 1;
  yield 2;
  yield 3;
})();

export const testMapEmpty = new Map();
export const testMapNumbers = new Map([['key', 123]]);
export const testMapStrings = new Map([['key', 'abc']]);

export const testSetEmpty = new Set();
export const testSetNumbers = new Set([1, 2, 3]);
export const testSetStrings = new Set(['a', 'b', 'c']);

export const testPromise1 = new Promise(() => {});
export const testPromise2 = new Promise(() => {});

export const testPromiseAll = Promise.all([]);
export const testPromiseAllSettled = Promise.allSettled([]);
export const testPromiseRace = Promise.race([]);

export const testPromiseResolved1 = Promise.resolve();
export const testPromiseResolved2 = Promise.resolve();

export const testSymbol1 = Symbol();
export const testSymbol2 = Symbol('description');

export const testRexExp1 = /[aeiou]+/gi;
export const testRexExp2 = new RegExp('aeiou', 'gi');

export class TestClass1 {
  public a: any;

  constructor(prop1: any) {
    this.a = prop1;
  }

  toString() {
    return this.a;
  }

  toJSON() {
    return { a: this.a };
  }
}

export class TestClass2 {
  public b: any;

  constructor(prop2: any) {
    this.b = prop2;
  }
}

export const testClassInstance1 = new TestClass1(1);
export const testClassInstance2 = new TestClass2(2);

export const testWeakMap = new WeakMap();
const wmObj1 = {};
const wmObj2 = () => ({});
testWeakMap.set(wmObj1, 37);
testWeakMap.set(wmObj2, 'qwerty');

export const testWeakSet = new WeakSet();
const wsObj1 = {};
const wsObj2 = {};
testWeakSet.add(wsObj1);
testWeakSet.add(wsObj2);
