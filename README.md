# localforage-esm #

the "localForage" library bundled as an ECMAscript module

This repository provides the [localForage](https://github.com/localForage/localForage) library as an ECMAScript module (ESM).

## Background ##

If you are used to importing external modules - even within browser scripts (e.g., in a no-build environment) - using the localForage library becomes difficult (see issues [#831](https://github.com/localForage/localForage/issues/831) and [#976](https://github.com/localForage/localForage/issues/976)). And since the attempts to made relevant changes broke installations of existing users, all activities in that direction seem to have been stopped (see issues [#940](https://github.com/localForage/localForage/issues/940) and  [#977](https://github.com/localForage/localForage/pull/977)).

This repository therefore **copies the source code of the original** distribution **and bundles it into an ECMAScript module** - nothing else.

But now you can easily `import localforage from 'localforage'` (or `import localForage from 'localforage'` if you prefer that capitalisation) as shown below

## Usage ##

```
<script type="importmap">
  {
    "imports": {
      "localforage":"https://rozek.github.io/localforage-esm/dist/localforage.esm.js"
    }
  }
</script>

<script type="module">
  import localforage from 'localforage'
  ...
</script>
```

## Build Instructions ##

You may easily build this module yourself.

Just install [NPM](https://docs.npmjs.com/) according to the instructions for your platform and follow these steps:

1. either clone this repository using [git](https://git-scm.com/) or [download a ZIP archive](https://github.com/rozek/localforage-esm/archive/refs/heads/main.zip) with its contents to your disk and unpack it there 
2. open a shell and navigate to the root directory of this repository
3. run `npm install` in order to install the complete build environment
4. execute `npm run build` to create a new build

That's it!

## License ##

Please note, that the original source code is licensed under Apache 2.0 - and since I simply copy it and just build the library in a different way, this repository has that license as well.
