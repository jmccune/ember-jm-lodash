# ember-lodash

[![Build Status](https://travis-ci.org/mike-north/ember-lodash.svg?branch=master)](https://travis-ci.org/mike-north/ember-lodash)
[![Dependency Status](https://david-dm.org/mike-north/ember-lodash.svg)](https://david-dm.org/mike-north/ember-lodash)
[![devDependency Status](https://david-dm.org/mike-north/ember-lodash/dev-status.svg)](https://david-dm.org/mike-north/ember-lodash#info=devDependencies)
[![Ember Observer Score](http://emberobserver.com/badges/ember-lodash.svg)](http://emberobserver.com/addons/ember-lodash)
[![npm version](https://badge.fury.io/js/ember-lodash.svg)](http://badge.fury.io/js/ember-lodash)
[![Code Climate](https://codeclimate.com/github/mike-north/ember-lodash/badges/gpa.svg)](https://codeclimate.com/github/mike-north/ember-lodash)

This ember addon allows consumption of the [lodash](https://lodash.com/) library (its [ES6 module variant](https://github.com/lodash/lodash/tree/es)) in [ember-cli](http://ember-cli.com) apps.

# Adapted from Mike North's version, but upgraded to ES4.0
## Use

After installing, testing this code,
you can publish the code to NPM.

Then in your target code you would:
```ember install ember-jm-lodash```

And then in your ember.js app, you can import individual lodash modules freely

    //YourFile.js
    import _string from 'lodash/string';

    let truncatedString = _string.trunc(rawString);


Additionally, if you wish to work with the entire lodash library on a single namespace, you have the option of importing that as well

    //YourFile.js
    import _ from 'lodash/lodash';

    let truncatedString = _.trunc(rawString);


## Installation

* `git clone` this repository
* `npm install`
* `bower install`
* `ember install ember-polyfill-for-tests`   # Installs polyfills that allow the test to work in PHANTOMJS 


## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

![Analytics](https://ga-beacon.appspot.com/UA-66610985-1/mike-north/ember-lodash/readme)
