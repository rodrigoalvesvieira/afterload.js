# afterload.js

A concept project on HTML image loading on responsive pages

[![Build Status](https://secure.travis-ci.org/rodrigoalvesvieira/afterload.js.png)](http://travis-ci.org/rodrigoalvesvieira/afterload.js)

## Motivation


## Build

The following commands solve the dependencies and generate its compressed version ready to distribution:

```shell
$ npm install   - Install all the dependencies via NPM

$ bower install - Install dependencies via Bower

$ npm run build - Run the build through Grunt.js and NPM
```

###### Code quality

The following command uses [JSHint] to alert the developer about potential problems in the code and it also
suggests improvements.

This command must **always** be successful, if it is not, then some wrong stuff has been added to the code
and must be fixed.


```shell
$ grunt lint
```

##### Generating a changeable build

If you want to generate a changeable build, that is, not a compressed file, run the following command:

```shell
$ grunt concat
```

Will generate a file in `dist/afterload.js`.

## Usage

First, declare the hash of device pixel ratios (`window.devicePixelRatio`) and their
correspondent image path in your app:

```javascript
var ratiosImages = {
  1: "1_0x",
  1.5: "1_5x",
  2: "2_0x",
  3: "3_0x"
};
```

Then you can call afterload.js via Jquery:

```javascript
$(document).ready(function () {
  var load = new afterload("data-image", ratiosImages);
}
```

Or via vanilla JavaScript:

```javascript
document.onreadystatechange = function () {
  if (state == 'complete') {
    var load = new afterload("data-image", ratiosImages);
  }
};
```

## Testing

afterload.js is tested with the [Jasmine] lib.

Before you run the test suite, make sure you build the project:

`$ npm run build`

Once the build has been done, to execute the test suite, just open the file `spec/afterloadSpec.html`.

## Author

* Rodrigo Alves <rodrigovieira1994@gmail.com>

## License

Released under the MIT License. See LICENSE.txt for details.

Copyright (c) 2012-2014 Rodrigo Alves.

[JSHint]: http://www.jshint.com/
[Grunt.js]: http://gruntjs.com/
[NPM]:https://www.npmjs.org/
[Jasmine]: http://jasmine.github.io/2.0/introduction.html
[uglify.js]: http://marijnhaverbeke.nl/uglifyjs
