import { eventEmitterFactory } from './eventEmitterFactory';

const emitterFactory = () => {
  const emitterMethods = eventEmitterFactory();
  return {
    ...emitterMethods,
  };
};
const emitter = emitterFactory();

const EVENT_1 = 'someEvent';
const EVENT_2 = 'anotherEvent';

describe('structEventEmitterFactory', () => {
  const listener1 = jest.fn();
  const listener2 = jest.fn();
  const listener3 = jest.fn();

  afterEach(() => {
    emitter.removeAllListeners();
    listener1.mockReset();
    listener2.mockReset();
    listener3.mockReset();
  });

  it('should be able to subscribe to a single event and receive notifications', () => {
    emitter.on(EVENT_1, listener1);

    const event1 = { ts: Date.now() };
    emitter.emit(EVENT_1, event1);
    expect(listener1).toHaveBeenCalledWith(event1);

    const event2 = { ts: Date.now() };
    emitter.emit(EVENT_1, event2);
    expect(listener1).toHaveBeenCalledWith(event2);
  }, 10);

  it('should not receive any events when not subscribed', () => {
    const event = { ts: Date.now() };
    emitter.emit(EVENT_1, event);

    expect(listener1).toHaveBeenCalledTimes(0);
    expect(listener2).toHaveBeenCalledTimes(0);
  });

  it('should subscribe for a single event only', () => {
    emitter.once(EVENT_1, listener2);

    const event1 = { ts: Date.now() };
    emitter.emit(EVENT_1, event1);
    const event2 = { ts: Date.now() };
    emitter.emit(EVENT_1, event2);

    expect(listener2).toHaveBeenCalledTimes(1);
  });

  it('should be able to subscribe and then unsubscribe', () => {
    emitter.on(EVENT_1, listener1);

    // make sure we're subscribed
    const event1 = { ts: Date.now(), e: 1 };
    emitter.emit(EVENT_1, event1);
    expect(listener1).toHaveBeenCalledWith(event1);

    emitter.off(EVENT_1, listener1);

    // make sure we're unsubscribed
    const event2 = { ts: Date.now(), e: 2 };
    emitter.emit(EVENT_1, event2);
    expect(listener1).not.toHaveBeenCalledWith(event2);

    expect(listener1).toHaveBeenCalledTimes(1);
  });

  it('should be able to subscribe to multiple different events', () => {
    emitter.on(EVENT_1, listener1);

    const event1 = { ts: Date.now(), e: 1 };
    emitter.emit(EVENT_1, event1);
    expect(listener1).toHaveBeenCalledWith(event1);

    const event2 = { ts: Date.now(), e: 2 };
    emitter.emit(EVENT_2, event2);
    expect(listener1).not.toHaveBeenCalledWith(event2); // <-- not subscribed

    emitter.on(EVENT_2, listener1);

    const event3 = { ts: Date.now(), e: 3 };
    emitter.emit(EVENT_1, event3);
    expect(listener1).toHaveBeenCalledWith(event3);
  });

  it('should all multiple subscriptions to the same event', () => {
    emitter.on(EVENT_1, listener1);
    emitter.on(EVENT_1, listener1);

    const event = { ts: Date.now() };
    emitter.emit(EVENT_1, event);
    expect(listener1).toHaveBeenCalledWith(event);
    expect(listener1).toHaveBeenCalledTimes(2);
  });

  it('should call subscribers in order', () => {
    emitter.on(EVENT_1, () => {
      expect(listener2).toHaveBeenCalledTimes(0);
    });
    emitter.on(EVENT_1, listener2);

    const event1 = { ts: Date.now() };
    emitter.emit(EVENT_1, event1);
    expect(listener2).toHaveBeenCalledWith(event1);
  });

  it('should allow subscribers to be the first one called', () => {
    emitter.on(EVENT_1, listener1);
    emitter.first(EVENT_1, () => {
      expect(listener1).toHaveBeenCalledTimes(0);
    });

    const event = { ts: Date.now() };
    emitter.emit(EVENT_1, event);
    expect(listener1).toHaveBeenCalledWith(event);
  });

  it('should allow multiple subscribers to be first, last one wins', () => {
    emitter.first(EVENT_1, listener1);
    emitter.first(EVENT_1, () => {
      expect(listener1).toHaveBeenCalledTimes(0);
    });

    const event = { ts: Date.now() };
    emitter.emit(EVENT_1, event);
    expect(listener1).toHaveBeenCalledWith(event);
  });

  it('should be able to subscribe to a single event once and receive only one notification', () => {
    emitter.once(EVENT_1, listener2);

    const event1 = { ts: Date.now(), e: 1 };
    emitter.emit(EVENT_1, event1);

    const event2 = { ts: Date.now(), e: 2 };
    emitter.emit(EVENT_1, event2);

    expect(listener2).toHaveBeenCalledTimes(1);
  }, 10);

  it('should be possible to unsubscribe without being subscribed', () => {
    emitter.off(EVENT_1, listener1);

    const event = { ts: Date.now() };
    emitter.emit(EVENT_1, event);

    expect(listener1).toHaveBeenCalledTimes(0);
  });

  it('should be possible to remove subscribers for a single event', () => {
    emitter.on(EVENT_1, listener1);
    emitter.on(EVENT_2, listener1);

    emitter.removeAllListeners(EVENT_1);

    const event1 = { ts: Date.now(), e: 1 };
    emitter.emit(EVENT_1, event1);
    const event2 = { ts: Date.now(), e: 2 };
    emitter.emit(EVENT_2, event2);

    expect(listener1).toHaveBeenCalledWith(event2);
    expect(listener1).toHaveBeenCalledTimes(1);
  });
});
