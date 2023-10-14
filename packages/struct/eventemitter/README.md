# @zerodep/struct-eventemitter

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/struct-eventemitter?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/struct-eventemitter)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/struct-eventemitter?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/struct-eventemitter)
[![version](https://img.shields.io/npm/v/@zerodep/struct-eventemitter?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/struct-eventemitter)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

**A factory function to add fully typed event emitter functionality to any object literal factory.**

Full documentation is available at the [zerodep.app](http://zerodep.app/#/to/string) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { eventEmitterFactory } from '@zerodep/struct-eventemitter';
// or
const { eventEmitterFactory } = require('@zerodep/struct-eventemitter');
```

### Use Case

```typescript
// define event:payload mapping
interface EventMap {
  userAdded: string;
  userRemoved: string;
}

// add the typed event emitter to your function factory
const userFactory = () => {
  // create the event emitter with the map
  const { on, first, once, off, emit } = eventEmitterFactory<EventMap>();

  return {
    addUser(userName: string) {
      // ... your logic do something with user (add to DB, etc...)

      // notify subscribers
      emit('userAdded', userName);
    },

    // add the event emitter methods
    on,
    once,
    off,
  };
};
const user = userFactory();

const myFunction = (data: string) => {
  console.log(data); // "janedoe"
};

user.on('userAdded', myFunction);
user.addUser('janedoe');
```
