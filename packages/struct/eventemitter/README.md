# @zerodep/struct-eventemitter

[![version](https://img.shields.io/npm/v/@zerodep/struct-eventemitter?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/struct-eventemitter)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

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
