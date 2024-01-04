# localforage-esm #

the "localForage" library as an ECMAscript module

This repository provides the [localForage](https://github.com/localForage/localForage) library as an ECMAScript module (ESM).

## Background ##

If you are used to importing modules - even within browser scripts (e.g., in a no-build environment) - using the localForage library becomes difficult (see issues [#831](https://github.com/localForage/localForage/issues/831) and [#976](https://github.com/localForage/localForage/issues/976)). And since the attempts to made relevant changes broke installations of existing users, all activities in that direction seem to have been stopped (see issues [#940](https://github.com/localForage/localForage/issues/940) and  [#977](https://github.com/localForage/localForage/pull/977)).

This repository therefore **copies the source code of the original** distribution **and bundles it into an ECMAScript module** - nothing else.

But now you can easily `import localforage from 'localforage'` (or `import localForage from 'localforage'` if you prefer that capitalisation) and work with it as usual:

```
<script type="importmap">
  {
    "imports": {
      "localforage":"/js/localforage.esm.js"
    }
  }
</script>

<script type="module">
  import localforage from 'localforage'
  ...
</script>
```

## License ##

Please note, that the original source code is licensed under Apache 2.0 - and since I simply copy it and just build the library in a different way, this repository has that license as well.
