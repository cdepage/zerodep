# NX Scripts

Some scripts to consistently create new packages.

### To

```shell
# to_date
npx nx g @nx/js:library --name=date --directory=to --importPath=@zerodep/to_date --bundler=rollup --minimal --publishable --testEnvironment=node --unitTestRunner=jest
```

```shell
# to_integer
npx nx g @nx/js:library --name=integer --directory=to --importPath=@zerodep/to_integer --bundler=rollup --minimal --publishable --testEnvironment=node --unitTestRunner=jest
```

```shell
# to_number
npx nx g @nx/js:library --name=number --directory=to --importPath=@zerodep/to_number --bundler=rollup --minimal --publishable --testEnvironment=node --unitTestRunner=jest
```

```shell
# to_pojo
npx nx g @nx/js:library --name=pojo --directory=to --importPath=@zerodep/to_pojo --bundler=rollup --minimal --publishable --testEnvironment=node --unitTestRunner=jest
```

```shell
# to_string
npx nx g @nx/js:library --name=string --directory=to --importPath=@zerodep/to_string --bundler=rollup --minimal --publishable --testEnvironment=node --unitTestRunner=jest
```

Dev Reminder:

Add the following to each `project.json` build script options:

```
  "format": [ "esm", "cjs"]
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
