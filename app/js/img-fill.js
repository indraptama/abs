(function() {
  var test = document.querySelectorAll('.img-fill');
  var imgContainer = document.querySelectorAll('.img-fill');

  function addClassFull(imgContainer) {
    var cssAttr = "background-size: cover; background-position: center; background-repeat: no-repeat";
    for (var i = 0; i < imgContainer.length; i++) {
      imgContainer[i].style.cssText += cssAttr;
    }
  };


  function hideImgElem(imgContainer) {
    for (var i = 0; i < imgContainer.length; i++) {
      var imgSrc = imgContainer[i].querySelector('img');
      imgSrc.style.display = 'none';
    }
  };

  function applyImgBackground(imgContainer){
    for (var i = 0; i < imgContainer.length; i++) {
      var imgSrc = imgContainer[i].querySelector('img').src;
      imgContainer[i].style.backgroundImage += "url('"+ imgSrc +"')";
    }
  }

  function imgFill(imgContainer) {
    addClassFull(imgContainer)
    hideImgElem(imgContainer)
    applyImgBackground(imgContainer)
  }

  imgFill(test)
}());
