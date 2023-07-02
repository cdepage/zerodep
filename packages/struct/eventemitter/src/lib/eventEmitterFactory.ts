/* eslint-disable @typescript-eslint/ban-ts-comment, prefer-rest-params, @typescript-eslint/no-non-null-assertion */
import { guardFunction } from '@zerodep/guard-function';
import { guardString } from '@zerodep/guard-string';

type EventMap = Record<string, any>;
type EventKey<T extends EventMap> = string & keyof T;
type EventCallback<T> = (params: T) => void;

export interface StructEventEmitter<T extends EventMap> {
  on<K extends EventKey<T>>(event: K, fn: EventCallback<T[K]>): void;
  first<K extends EventKey<T>>(event: K, fn: EventCallback<T[K]>): void;
  once<K extends EventKey<T>>(event: K, fn: EventCallback<T[K]>): void;
  off<K extends EventKey<T>>(event: K, fn: EventCallback<T[K]>): void;
  removeAllListeners<K extends EventKey<T>>(event?: K): void;
  emit<K extends EventKey<T>>(event: K, params: T[K]): void;
}

export const eventEmitterFactory = <
  T extends EventMap
>(): StructEventEmitter<T> => {
  let events: {
    [K in keyof EventMap]?: Array<(p: EventMap[K]) => void>;
  } = {};

  return {
    // AKA addListener / subscribe / register
    // - time complexity: constant - O(1)
    on(event, fn) {
      guardString(event);
      guardFunction(fn);
      events[event] = events[event] || [];
      events[event]!.push(fn);
    },

    // AKA prependListener / subscribeFirst / registerFirst
    // - time complexity: linear - O(n)
    first(event, fn) {
      guardString(event);
      guardFunction(fn);
      events[event] = events[event] || [];
      events[event]!.unshift(fn);
    },

    // AKA subscribeOnce
    // - time complexity: constant - O(1)
    once(event, fn) {
      guardString(event);
      guardFunction(fn);
      const fnOnce = () => {
        // @ts-ignore
        fn.apply(this, arguments);
        this.off(event, fnOnce);
      };
      events[event] = events[event] || [];
      events[event]!.push(fnOnce);
    },

    // AKA removeListener / unsubscribe / unregister
    // - time complexity: linear - O(n)
    off(event, fn) {
      guardString(event);
      guardFunction(fn);
      events[event] = events[event] || [];
      events[event] = events[event]!.filter((f) => f !== fn);
    },

    // - time complexity: constant - O(1)
    removeAllListeners(event) {
      if (event) {
        guardString(event);
        events[event] = []; // O(1)
      } else {
        events = {};
      }
    },

    // AKA publish / notify
    // - time complexity: linear - O(n)
    emit(event, data) {
      guardString(event);
      events[event] = events[event] || [];
      for (const fn of events[event]!) {
        fn(data);
      }
    },
  };
};
