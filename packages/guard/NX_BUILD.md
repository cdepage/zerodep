# NX Scripts

Some scripts to consistently create new packages.

### Is

```shell
# guard-array
npx nx g @nx/js:library --name=array --directory=guard --importPath=@zerodep/guard-array --bundler=rollup --minimal --publishable --testEnvironment=node --unitTestRunner=jest
```

```shell
# guard-bigint
npx nx g @nx/js:library --name=bigint --directory=guard --importPath=@zerodep/guard-bigint --bundler=rollup --minimal --publishable --testEnvironment=node --unitTestRunner=jest
```

```shell
# guard-boolean
npx nx g @nx/js:library --name=boolean --directory=guard --importPath=@zerodep/guard-boolean --bundler=rollup --minimal --publishable --testEnvironment=node --unitTestRunner=jest
```

```shell
# guard-date
npx nx g @nx/js:library --name=date --directory=guard --importPath=@zerodep/guard-date --bundler=rollup --minimal --publishable --testEnvironment=node --unitTestRunner=jest
```

```shell
# guard-float
npx nx g @nx/js:library --name=float --directory=guard --importPath=@zerodep/guard-float --bundler=rollup --minimal --publishable --testEnvironment=node --unitTestRunner=jest
```

```shell
# guard-function
npx nx g @nx/js:library --name=function --directory=guard --importPath=@zerodep/guard-function --bundler=rollup --minimal --publishable --testEnvironment=node --unitTestRunner=jest
```

```shell
# guard-integer
npx nx g @nx/js:library --name=integer --directory=guard --importPath=@zerodep/guard-integer --bundler=rollup --minimal --publishable --testEnvironment=node --unitTestRunner=jest
```

```shell
# guard-number
npx nx g @nx/js:library --name=number --directory=guard --importPath=@zerodep/guard-number --bundler=rollup --minimal --publishable --testEnvironment=node --unitTestRunner=jest
```

```shell
# guard-object
npx nx g @nx/js:library --name=object --directory=guard --importPath=@zerodep/guard-object --bundler=rollup --minimal --publishable --testEnvironment=node --unitTestRunner=jest
```

```shell
# guard-pojo
npx nx g @nx/js:library --name=pojo --directory=guard --importPath=@zerodep/guard-pojo --bundler=rollup --minimal --publishable --testEnvironment=node --unitTestRunner=jest
```

```shell
# guard-string
npx nx g @nx/js:library --name=string --directory=guard --importPath=@zerodep/guard-string --bundler=rollup --minimal --publishable --testEnvironment=node --unitTestRunner=jest
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
