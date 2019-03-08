# embroider-eyeglass-reproduction [![Build Status](https://travis-ci.com/stefanpenner/embroider-eyeglass-reproduction.svg?branch=master)](https://travis-ci.com/stefanpenner/embroider-eyeglass-reproduction)

Reproduction of ember-cli-eyeglass + embroider being un-happy

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd embroider-eyeglass-reproduction`
* `yarn install`

## Running / Development

* `ember build`

Results in:

```js
Build Error (EyeglassCompiler) in /var/folders/4r/whc65vwj1xggvvky3yy1cp9m000mw4/T/broccoli-2069962fsd5l7Ddk4/out-085-funnel/app.scss:1:9

`_from-app-styles` was not found in any of the following locations:
  /var/folders/4r/whc65vwj1xggvvky3yy1cp9m000mw4/T/broccoli-2069962fsd5l7Ddk4/out-085-funnel/_from-app-styles.scss
  /var/folders/4r/whc65vwj1xggvvky3yy1cp9m000mw4/T/broccoli-2069962fsd5l7Ddk4/out-085-funnel/_from-app-styles.sass
  /var/folders/4r/whc65vwj1xggvvky3yy1cp9m000mw4/T/broccoli-2069962fsd5l7Ddk4/out-085-funnel/_from-app-styles.css
  /var/folders/4r/whc65vwj1xggvvky3yy1cp9m000mw4/T/broccoli-2069962fsd5l7Ddk4/out-085-funnel/_from-app-styles/index.scss
  /var/folders/4r/whc65vwj1xggvvky3yy1cp9m000mw4/T/broccoli-2069962fsd5l7Ddk4/out-085-funnel/_from-app-styles/index.sass
  /var/folders/4r/whc65vwj1xggvvky3yy1cp9m000mw4/T/broccoli-2069962fsd5l7Ddk4/out-085-funnel/_from-app-styles/index.css
  /var/folders/4r/whc65vwj1xggvvky3yy1cp9m000mw4/T/broccoli-2069962fsd5l7Ddk4/out-085-funnel/_from-app-styles/_index.scss
  /var/folders/4r/whc65vwj1xggvvky3yy1cp9m000mw4/T/broccoli-2069962fsd5l7Ddk4/out-085-funnel/_from-app-styles/_index.sass
  /var/folders/4r/whc65vwj1xggvvky3yy1cp9m000mw4/T/broccoli-2069962fsd5l7Ddk4/out-085-funnel/_from-app-styles/_index.css
    at /var/folders/4r/whc65vwj1xggvvky3yy1cp9m000mw4/T/broccoli-2069962fsd5l7Ddk4/out-085-funnel/app.scss:1:9
```

### Running Tests

There are tests that should pass if this is functioning: 

* `ember test`
* `ember test --server`

see: https://github.com/stefanpenner/embroider-eyeglass-reproduction/blob/master/tests/acceptance/app-test.js
