# @zerodep

![license](https://img.shields.io/github/license/cdepage/zerodep?color=emerald&style=flat-square)
![last commit](https://img.shields.io/github/last-commit/cdepage/zerodep?olor=emerald&style=flat-square)
![coverage](https://img.shields.io/badge/coverage-100%25-emerald?style=flat-square)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/cdepage/zerodep/ci.yml?style=flat-square&label=build%20status)

![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)
![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/cdepage/zerodep/main?style=flat-square&label=version&color=blue)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A modern library/monorepo of high-quality, zero-dependency, fully typed, fully tested, tree-shakeable utilities, parsers, data structure factories, converters and other capabilities to help you create quality Node.js and JavaScript/TypeScript applications quickly.

All packages are published to `npm` both individually and logically/semantically grouped in barrel packages.

## Documentation

Full documentation is available at [https://zerodep.app](https://zerodep.app) or in the `/docs` folder.

## Support

All @zerodep packages are built for the ES2022 specification. Should you need to support older environments you may need to add appropriate [polyfills](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill). All packages are tested on the following platforms/browsers:

**Node**

- v20.x - Iron LTS
- v18.x - Hydrogen LTS

**Browsers**

- Chrome - last 2 major versions
- Firefox - last 2 major versions
- Safari - last 2 major versions
- Edge - last 2 major versions
- Android - last 2 major versions
- iOS - last 2 major versions

It is likely the package will work on other technologies and version, however development and testing effort is only spent on the above.

## Semver

All [@zerodep](https://github.com/cdepage/zerodep) packages, including this one, adhere to Semantic Versioning practices:

- **major versions**: correlates with breaking changes to one or more method signatures
- **minor versions**: includes addition of new functionality or backwards-compatible software improvements
- **patch versions**: are reserved for copy changes, documentation enhancements and bug fixes

The above said, a security best practice is to pin your software packages to specific versions and only upgrade to more recent releases after careful inspection of both the [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/errors/CHANGELOG.md) and any associated software changes.

## Resources

- [Security Policy](https://github.com/cdepage/zerodep/blob/main/SECURITY.md)
- [Changelog](https://github.com/cdepage/zerodep/blob/main/docs/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
