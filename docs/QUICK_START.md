# Quick Start

A guide for new contributors to the project.

## Steps to Get Started

The following steps are required to be able to contribute to the repository:

1. Clone the repo your local machine, checkout the `main` branch
2. Install software dependencies by running `npm install`
3. Familiarize yourself with the `scripts` section in the root `package.json` file
4. Run linting and unit tests to ensure a functioning system/clean slate

- `npm run lint:all`
- `npm run test:all`

5. Start crafting/improving code, testes and documentation

## Project Structure

The zerodep.app repository is a Typescript monorepo powered by [Nx](https://nx.dev). Understanding monorepo concepts and how Nx simplifies project development is a prerequisite to successful contribution to this repository.

**Top-Level Folder Overview**

```
.
├── .github
│    └─── workflows       # Github actions
├── docs                  # Code for the project website
├── dist                  # Directory of code built from source
└── packages              # Source code for all packages within the monorepo
```

## Barrel vs. Regular Packages

A "regular package" is just a typical NPM package. The zerodep.app project is a monorepo that publishes numerous, highly granular packages for ease of end-user consumption. As such, each independent pieces of functionality is likely in its own package.

A "barrel package" is a set of regular packages grouped together in a logical or semantically meaningful way. The zerodep.app project uses barrel packages compose combinations of functionality with minimal file sizes that end users may select from to best meet their needs.

Both regular and barrel packages have test files co-located with the source code.

## Coding Standards & Expectations

- **Typescript:** is the language of the project. Types should be used and/or configurable (via generics) as appropriate. Appropriate use of types is required.
- **Code Formatting:** is handled by Prettier. This project follows the default Prettier standards with the exception of a preference for single-quotes over double-quotes. Prettier may be run by calling: `npm run format:all`.
- **Linting:** is handled by Eslint. This project uses the default configs from Nx as well as Sonar to ensure common software errors are prevented and encourage good programming practices for ease of maintenance, testing and evolvability. Linting may be by calling `npm run lint:all`
- **Testing:** is handled by Jest. Test coverage of at least 85% is required for all code; efforts should be made to ensure edge cases are well tested, as well as the typical execution paths. Tests may be run by calling: `npm run test:all`; test coverage may be determined by calling `npm run coverage:all`.
