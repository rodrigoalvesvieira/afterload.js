# afterload.js

A concept project on HTML image loading on responsive pages

[![Build Status](https://secure.travis-ci.org/rodrigoalvesvieira/afterload.js.png)](http://travis-ci.org/rodrigoalvesvieira/afterload.js)
[![DevDependencies Status](http://img.shields.io/david/dev/rodrigoalvesvieira/afterload.js.svg?style=flat)](https://david-dm.org/rodrigoalvesvieira/afterload.js#info=devDependencies)

## Motivation

We needed to make sure the browser would always render the correct images depending on the current browser's
`window.devicePixelRatio`.

## The Idea

Load your stylesheets, render all your image tags with their `src` attributes blank,
and attach a `data` attribute to each one of your `img` tags, where the value of this attribute is the
actual image file name.

Now, in your app's assets directory, separate in directories the images for every device type. Now create a hash mapping the `window.devicePixelRation` values to the directories in your app's assets path.

Initialize afterload.js with whatever data attribute you're using and pass your ration/path hash too!
afterload.js will do the magic!

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
  new afterload("data-image", ratiosImages);
}
```

Or via vanilla JavaScript:

```javascript
(function() {
  new afterload("data-src", ratiosImages);
})();
```

###### Changing where to look for the images

By default, afterload.js assumes the base path for the images is `images`. So if your images live in `http://yourapp.com/images` you're fine.
If that is not the case, you must tell afterload.js to use the correct path:

```javascript
// Suppose the images in your app are in /assets/pictures instead of /images

(function() {
  new afterload("data-src", ratiosImages, "assets/pictures"); // Will look for images in http://yourapp.com/assets/pictures
})();
```

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

## Support

afterload.js has been tested in the following browsers in their respective versions. Perhaps (most certainly, in fact)
the library works for even older versions of these browsers.

* Chrome 38+
* Safari 7.0.6+
* Firefox 32.0.2+
* Opera 24.0+
* Internet Explorer 10+

## Testing

afterload.js is tested with the [Jasmine] lib.

Before you run the test suite, make sure you build the project:

`$ npm run build`

Once the build has been done, to execute the test suite, just open the file `spec/afterloadSpec.html`.

## Who's using it?

* In Loco Media http://www.inlocomedia.com/

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
