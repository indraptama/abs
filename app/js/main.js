var galThumbs = document.querySelectorAll('.galThumb');
var Main = document.querySelector('Main');
var mainDiv = Main.querySelectorAll('div');





  window.addEventListener('scroll', function(){

    for (var i = 0; i < mainDiv.length; i++) {
      var theDiv = mainDiv[i];
        Velocity(theDiv, { translateY: 10 }, 100);
        Velocity(theDiv, { reverse: true }, 100);
    }

    console.log('this');
  }, false)

for (var i = 0; i < galThumbs.length; i++) {
  var galThumb = galThumbs[i];
  var galThumbCont = galThumb.querySelector('.galThumb-container');

  MouseHover(galThumbCont);
  //MouseHover(galThumbCont);
};


// Event function


function MouseHover(elem) {
  elem.addEventListener('mouseenter', function(){
    Velocity(this.querySelector('.galThumb-img'), { translateX: 30 }, 500);
    Velocity(this.querySelector('.galThumb-desc'), { translateX: 30 }, {delay: 150}, 500);
  },false);

  elem.addEventListener('mouseleave', function(){
    Velocity(this.querySelector('.galThumb-img'), { translateX: 0 }, {delay: 150}, 500);
    Velocity(this.querySelector('.galThumb-desc'), { translateX: 0 }, 500);
  },false);
}
