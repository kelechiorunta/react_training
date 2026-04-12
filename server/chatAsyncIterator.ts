import { EventEmitter } from "events";

export class chatEmitter extends EventEmitter {
  myAsyncIterator(eventName: string): AsyncIterableIterator<unknown> {
    const ee = this;
    let listening = true;
    let listener: (payload: unknown) => Promise<void> | void = () => {};

    return {
      async next(): Promise<IteratorResult<unknown>> {
        if (listening) {
          return new Promise((resolve) => {
            listener = (payload: unknown) => {
              ee.removeListener(eventName, listener);
              if (payload) {
                resolve({ value: payload, done: false });
              }
            };
            ee.on(eventName, listener);
          });
        }
        if (!listening) {
          ee.removeListener(eventName, listener);
          return { value: undefined, done: true };
        }
        // ee.on(eventName, listener);
        ee.removeListener(eventName, listener);
        return { value: undefined, done: true };
      },
      async return(): Promise<IteratorResult<unknown>> {
        listening = false;
        ee.removeListener(eventName, listener);
        return {
          value: undefined,
          done: true,
        };
      },
      async throw(error: unknown): Promise<IteratorResult<unknown>> {
        listening = false;
        ee.removeListener(eventName, listener);
        return Promise.reject(error instanceof Error ? error.message : error);
      },

      [Symbol.asyncIterator]() {
        return this;
      },
    };
  }
}

export default chatEmitter;
