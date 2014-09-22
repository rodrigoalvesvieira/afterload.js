/**
 * afterload.js
 *
 * Copyright 2014, Rodrigo Alves
 * Licensed under MIT
 *
*/
function afterload(dataSelector, _ratios, _basePath) {
  this.dataSelector = dataSelector;
  this.path = undefined;
  this.ratiosImages = _ratios;
  this.basePath = _basePath || "images";

  var self = this;

  this.getPixelRatio = function() {
    var baseImagePath;
    var ratios = Object.keys(self.ratiosImages);

    for (var i = 0; i < ratios.length; i++) {
      var index = ratios[i];

      if (window.devicePixelRatio === parseInt(ratios[i])) {
        baseImagePath = self.ratiosImages[index];
        this.path = baseImagePath;
        return self.ratiosImages[index];
      }
    }
  };

  this.init = function() {
    var images = document.getElementsByTagName("img");

    for (var i = 0; i < images.length; i++) {
      var image = images[i];

      var fileFullPath = image.getAttribute(this.dataSelector),
          fileNameIndex = fileFullPath.lastIndexOf("/") + 1,
          filename = fileFullPath.substr(fileNameIndex),
          imageNewPath = "./" + self.basePath + "/" + this.getPixelRatio() + "/" + filename,
          imageFileName = image.setAttribute('src', imageNewPath);
    }
  };

  this.init();
  return this;
}
