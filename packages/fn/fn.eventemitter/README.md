# @zerodep/fn.eventemitter

[![min](https://img.shields.io/bundlephobia/min/@zerodep/fn.eventemitter?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/fn.eventemitter) [![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/fn.eventemitter?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/fn.eventemitter) [![tree shaking](https://img.shields.io/badge/tree%20shaking-supported-blue?style=flat-square)](https://bundlephobia.com/package/@zerodep/fn.eventemitter) ![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square) ![types](https://badgen.net/npm/types/@zerodep/can?style=flat-square)

![coverage](https://img.shields.io/badge/coverage-100%25-green?style=flat-square) ![last commit](https://img.shields.io/github/last-commit/cdepage/zerodep?style=flat-square) ![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@zerodep/can?style=flat-square)

[![app](https://img.shields.io/badge/app-%40zerodep-orange?style=flat-square)](https://www.npmjs.com/package/@zerodep/app) [![version](https://img.shields.io/npm/v/@zerodep/fn.eventemitter?style=flat-square&color=orange)](https://www.npmjs.com/package/@zerodep/fn.eventemitter)

**A factory function to add event emitter functionality to any object literal factory.**

## tl;dr

A short explanation / quick reference:

```typescript
import { fnEventEmitterFactory } from '@zerodep/fn.eventemitter';

// event:payload mapping
interface Events {
  addedUser: string;
  removedUser: string;
}

// add the typed event emitter to your function factory
const userFactory = () => {
  const { on, first, once, off, emit } = fnEventEmitterFactory<Events>();
  return {
    addUser(user: string) {
      // ... your logic do something with user (add to DB, etc...)

      // notify subscribers
      emit('addedUser', user);
    },

    // event emitter methods
    on,
    once,
    off,
  };
};
const user = userFactory();

const myFunction = (data: string) => {
  console.log(data);
};

user.on('addedUser', myFunction);
user.addUser('Jane Doe');
```

## Table of Contents

- [Installation Instructions](#install)
- [How to Use](#how-to-use)
  - [Signature](#signature)
  - [Examples](#examples)
- [ZeroDep Advantages](#advantages-of-zerodep-packages)
- [Support](#support)
- [Semver](#semver)
- [Resources](#resources)
- [License](#license)

## Install

This utility is available from multiple @zerodep packages, enabling developers to select the most appropriately sized package (for both kb and capability) for different use cases. We believe one size does not fit all or most. See [@zerodep/app](https://www.npmjs.com/package/@zerodep/app), [@zerodep/utils](https://www.npmjs.com/package/@zerodep/utils) and [@zerodep/fns](https://www.npmjs.com/package/@zerodep/fns).

### For Server & Build Tooling

For Node, or when compiling via babel, rollup, swc, tsc, webpack, etc... these are the instructions for you.

```
// all @zerodep features, capabilities and utilities
npm install @zerodep/app

// all @zerodep data fn factories
npm install @zerodep/fn

// only the fn.eventemitter package
npm install @zerodep/fn.eventemitter
```

Of course, you may use `yarn`, `pnpm`, or the package manager of your choice. Only `npm` examples are shown for brevity.

### Browser Direct

If you are using the script directly in a browser via a `<script>` tag or importing it into your own scripts, these are the instructions for you. We support both ESM and UMD formats.

```html
<!-- for ES Modules (ESM) -->
<script type="module">
  import { fnEventEmitterFactory } from 'https://cdn.jsdelivr.net/npm/@zerodep/fn.eventemitter/esm.js';
  // ...your code here
</script>

<!--  OR  -->

<!--  for Universal Modules (UMD) - all @zerodep functions are in the global "zd" namespace -->
<script src="https://cdn.jsdelivr.net/npm/@zerodep/fn.eventemitter/umd.js"></script>
<script>
  // example of "zd" prefix
  const emitter = zd.fnEventEmitterFactory();
</script>
```

This package may be found on both [jsDelivr](https://cdn.jsdelivr.net/npm/@zerodep/fn.eventemitter/umd.js) and [unpkg](https://unpkg.com/@zerodep/fn.eventemitter/umd.js) in UMD, ESM and CJS formats.

## How to Use

This package exports the following:

- **Functions**
  - `fnEventEmitterFactory` - a typed factory function that returns an event emitter instance
- **Interface**
  - `FnEventEmitter` - the typed methods available on the event emitter

### Signature

Typescript declarations:

```typescript
declare const fnEventEmitterFactory: <T extends EventMap>() => FnEventEmitter<T>;

interface FnEventEmitter<T extends EventMap> {
  on<K extends EventKey<T>>(event: K, fn: EventCallback<T[K]>): void;
  first<K extends EventKey<T>>(event: K, fn: EventCallback<T[K]>): void;
  once<K extends EventKey<T>>(event: K, fn: EventCallback<T[K]>): void;
  off<K extends EventKey<T>>(event: K, fn: EventCallback<T[K]>): void;
  removeAllListeners<K extends EventKey<T>>(event?: K): void;
  emit<K extends EventKey<T>>(event: K, params: T[K]): void;
}

// you can customize this for strong typing
type EventMap = Record<string, any>;
```

### Interface Options

**on**

- Adds a callback for a specific event
- Added callbacks are called in the order they are added

**first**

- Adds a callback for a specific event to the beginning of the list
- Calling `first` multiple times will result in the last call being at the front of the list

**once**

- Adds a callback for a specific event that will only happen once

**off**

- Removes a listener for an event

**removeAllListeners**

- Will remove all listeners for:
  - a single event if an event is specified
  - all events if no event is provided

**emit**

- Triggers calling all the registered callbacks for a specific event with the provided payload

### Examples

```typescript
import { fnEventEmitterFactory } from '@zerodep/fn.eventemitter';

// create the typescript definitions of your events name and body
interface MyEvent {
  message: {
    ts: number;
    value: any;
  };
}

// create the typescript interface of your pubSub service
interface PubSub extends Pick<FnEventEmitter, 'on', 'once', 'off'> {
  publish: {
    eventName: string;
    value: any;
  };
}

// create a factory function that will use the event emitter
const pubSubFactory = (): PubSub => {
  // load the methods you need from the event emitter
  const { on, off, once, emit } = fnEventEmitterFactory<MyEvent>();

  // public/external methods
  return {
    publish(value: any) {
      emit('message', { ts: Date.now(), value });
    },

    // expose the event emitter methods to be publicly available
    on,
    once,
    off,
  };
};

// create an instance of the factory
const pubSub = pubSubFactory();

// an example of a message handler
const messageHandler = (data) => {
  // ...your code here
};

// pubSub integration
pubSub.on('message', messageHandler); // will receive all messages
pubSub.once('message', messageHandler); // will recieve only one message
pubSub.first('message', messageHandler); // will add the handler as the first handler (assuming more than one)
pubSub.off('message', messageHandler); // stop receiving messages

// send a message
pubSub.publish('my message will go here'); // { "ts": 1652038561894, "value": "my message will go here" }
```

## Advantages of @zerodep Packages

We help make source code more readable, more secure, faster to craft, less likely to have hidden defects, and easier to maintain.

- **Zero npm dependencies** - completely eliminates all risk of supply-chain attacks, decreases `node_modules` folder size
- **Fully typed** - typescript definitions are provided for every package for a better developer experience
- **Semantically named** - package and method names are easy to grok, remember, use, and read
- **Documented** - actually useful documentation with examples and helpful tips
- **Intelligently Packaged** - multiple npm packages of different sizes available allowing a menu or a-la-carte composition of capabilities
- **100% Tested** - all methods and packages are fully unit tested
- **ESM & CJS** - has both ecmascript modules and common javascript exports, both are fully tree-shakable
- **CDN Available** - available on fast content delivery networks in UMD, CJS and ESM formats
- **FP Inspired** - gently opinionated to encourage functional programming style for cleaner and more maintainable software
- **Predictably Versioned** - semantically versioned for peace-of-mind upgrading, this includes changelogs
- **MIT Licensed** - permissively licensed for maximum usability

## Support

All @zerodep packages are built for the ES2020 specification. Should you need to support older environments you will need to add appropriate [polyfills](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill). All packages are tested on the following platforms/browsers:

**Browsers**

- Chrome - last 2 major versions
- Firefox - last 2 major versions
- Safari - last 2 major versions
- Edge - last 2 major versions
- Android - last 2 major versions
- iOS - last 2 major versions

**Node**

- v16.x - Gallium LTS
- v14.x - Fermium LTS

It is likely the package will work on other technologies and version, however development and testing effort is only spent on the above.

## Semver

All [@zerodep](https://github.com/cdepage/zerodep) packages, including this one, adhere to Semantic Versioning practices:

- **major versions**: correlates with breaking changes to one or more method signatures
- **minor versions**: includes addition of new functionality or backwards-compatible software improvements
- **patch versions**: are reserved for copy changes, documentation enhancements and bug fixes

The above said, a security best practice is to pin your software packages to specific versions and only upgrade to more recent releases after careful inspection of any CHANGELOG, release notes and all software changes.

## Resources

- [Security Policy](https://github.com/cdepage/zerodep/blob/main/SECURITY.md)
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/fn/fn.eventemitter/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
