# Babel Plugin Relative Import

[![Build Status](https://travis-ci.org/mgcrea/babel-plugin-relative-import.svg?branch=master)](https://travis-ci.org/mgcrea/babel-plugin-relative-import)
[![Dependency Status](https://david-dm.org/mgcrea/babel-plugin-relative-import.svg)](https://david-dm.org/mgcrea/babel-plugin-relative-import)
[![devDependency Status](https://david-dm.org/mgcrea/babel-plugin-relative-import/dev-status.svg)](https://david-dm.org/mgcrea/babel-plugin-relative-import#info=devDependencies)
[![https://github.com/mgcrea/babel-plugin-relative-import](https://img.shields.io/npm/dm/babel-plugin-relative-import.svg)](https://www.npmjs.com/package/babel-plugin-relative-import)

Import files for tests as easy if they are in the same folder as the tested.
give your folder structure
```
src/
  component/
   fileTotest.js

__tests__/
  component/
    fileTotest.test.js
```
in your fileTotest.test.js
```js
import componentTotest from '$/fileTotest.js';
// Gets compiled to:
import fooHelper from './../../src/fileTotest.js';
// No more relative path mess!
```

## Quickstart

```
npm install babel-plugin-relative-import --save-dev
```

Add a `.babelrc` file and write:
```js
{
  "plugins": [
    "babel-plugin-reflexive-import"
  ]
}
```

## Options

You can use a custom root with the `testPathFolder` option.
And you can set the off set between your source and test.

```js
{
  "plugins": [
    ["babel-plugin-relative-import", {
      "testFolder": "__tests__",
      "srcFolder": "src"
    }]
  ]
}
```

## Inspiration

Inspired by the [babel-relative-import](https://github.com/mgcrea/babel-plugin-relative-import) from Olivier Louvignes.
