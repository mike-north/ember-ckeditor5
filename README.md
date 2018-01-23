# Ember CKEditor

[![Greenkeeper badge](https://badges.greenkeeper.io/mike-north/ember-ckeditor.svg)](https://greenkeeper.io/)

This library is a thin wrapper around the [CKEditor 5](https://docs.ckeditor.com/ckeditor5/latest/index.html) [balloon build](https://docs.ckeditor.com/ckeditor5/latest/builds/guides/overview.html#balloon-editor)

To install this addon, run 

```sh
ember install ember-ckeditor
```

and then use the `{{ck-editor}}` component in your app. You may also directly access the `Balloon Editor` module by importing it

```js
import { BalloonEditor } from 'ember-ckeditor'
```

# Addon Development

## Installation

* `git clone <repository-url>` this repository
* `cd ember-ckeditor`
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
