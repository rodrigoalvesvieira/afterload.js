function afterload(dataSelector, _ratios) {
  this.dataSelector = dataSelector;
  this.path = undefined;
  this.ratiosImages = _ratios;

  var self = this;

  this.getPixelRatio = function() {
    var baseImagePath;
    var ratios = Object.keys(self.ratiosImages);

    for (var i = 0; i < ratios.length; i++) {
      var index = ratios[i];

      if (window.devicePixelRatio === Number.parseInt(ratios[i])) {
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
          imageNewPath = "./images/" + this.getPixelRatio() + "/" + filename,
          imageFileName = image.setAttribute('src', imageNewPath);
    }
  };

  this.init();
  return this;
}
