# NX Scripts

Some scripts to consistently create new packages.

### Barrels

```shell
# is
npx nx g @nx/js:library --name=is --directory=barrel --importPath=@zerodep/is --bundler=rollup --minimal --publishable --testEnvironment=node --unitTestRunner=jest
```

```shell
# guard
npx nx g @nx/js:library --name=guard --directory=barrel --importPath=@zerodep/guards --bundler=rollup --minimal --publishable --testEnvironment=node --unitTestRunner=jest
```

```shell
# case
npx nx g @nx/js:library --name=case --directory=barrel --importPath=@zerodep/case --bundler=rollup --minimal --publishable --testEnvironment=node --unitTestRunner=jest
```

```shell
# string
npx nx g @nx/js:library --name=string --directory=barrel --importPath=@zerodep/string --bundler=rollup --minimal --publishable --testEnvironment=node --unitTestRunner=jest
```

```shell
# to
npx nx g @nx/js:library --name=to --directory=barrel --importPath=@zerodep/to --bundler=rollup --minimal --publishable --testEnvironment=node --unitTestRunner=jest
```

```shell
# types
npx nx g @nx/js:library --name=types --directory=barrel --importPath=@zerodep/types --bundler=rollup --minimal --publishable --testEnvironment=node --unitTestRunner=jest
```

Dev Reminder:

Add the following to each `project.json` build script options:

```
  "buildableProjectDepsInPackageJsonType": "dependencies",
  "format": ["esm", "cjs"]
```

Add the following to each `.swcrc` file:

```
  "minify": true,
  "jsc": {
    "minify": {
      "compress":  true,
      "format": {
        "comments": false
      }
    },
    "target": "es2020",
```
