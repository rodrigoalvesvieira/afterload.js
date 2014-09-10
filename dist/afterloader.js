function getPixelRatio() {
  var baseImagePath;

  if (window.devicePixelRatio == 1) {
    baseImagePath = "1_0x";
  } else if (window.devicePixelRatio == 1.5) {
    baseImagePath = "1_5x";
  } else if (window.devicePixelRatio == 2) {
    baseImagePath = "2_0x";
  } else if (window.devicePixelRatio == 3) {
    baseImagePath = "3_0x";
  }

  return baseImagePath;
}

document.onreadystatechange = function () {
  var state = document.readyState;

  if (state == 'complete') {
    var images = document.getElementsByTagName("img");

    for (var i = 0; i < images.length; i++) {
      var fileFullPath = images[i].attr('data-image'),
          fileNameIndex = fileFullPath.lastIndexOf("/") + 1,
          filename = fileFullPath.substr(fileNameIndex),
          imageNewPath = "./images/" + getPixelRatio() + "/" + filename,
          imageFileName = images[i].attr('src', imageNewPath);
    }
  }
};
