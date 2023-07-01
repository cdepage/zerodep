# NX Scripts

Some scripts to consistently create new packages.

### Case

```shell
# camel
npx nx g @nx/js:library --name=camel --directory=case --importPath=@zerodep/case_camel --bundler=rollup --minimal --publishable --testEnvironment=node --unitTestRunner=jest
```

```shell
# kebab
npx nx g @nx/js:library --name=kebab --directory=case --importPath=@zerodep/case_kebab --bundler=rollup --minimal --publishable --testEnvironment=node --unitTestRunner=jest
```

```shell
# pascal
npx nx g @nx/js:library --name=pascal --directory=case --importPath=@zerodep/case_pascal --bundler=rollup --minimal --publishable --testEnvironment=node --unitTestRunner=jest
```

```shell
# sentence
npx nx g @nx/js:library --name=sentence --directory=case --importPath=@zerodep/case_sentence --bundler=rollup --minimal --publishable --testEnvironment=node --unitTestRunner=jest
```

```shell
# snake
npx nx g @nx/js:library --name=snake --directory=case --importPath=@zerodep/case_snake --bundler=rollup --minimal --publishable --testEnvironment=node --unitTestRunner=jest
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
