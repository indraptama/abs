var galThumbs = document.querySelectorAll('.galThumb');



for (var i = 0; i < galThumbs.length; i++) {
  var galThumb = galThumbs[i];
  var galThumbCont = galThumb.querySelector('.galThumb-container');

  galThumbCont.addEventListener('mouseover', function(){
    Velocity(this.querySelector('.galThumb-img'), { translateX: 50 }, 500);
    Velocity(this.querySelector('.galThumb-desc'), { translateX: 50 }, {delay: 150}, 500);
  },false);

  galThumbCont.addEventListener('mouseleave', function(){
    Velocity(this.querySelector('.galThumb-img'), { translateX: 0 }, {delay: 150}, 500);
    Velocity(this.querySelector('.galThumb-desc'), { translateX: 0 }, 500);
  },false);
  //MouseHover(galThumbCont);

  galThumbCont.addEventListener('focus', function(){
    Velocity(this.querySelector('.galThumb-img'), { translateX: 50 }, 500);
    Velocity(this.querySelector('.galThumb-desc'), { translateX: 50 }, {delay: 150}, 500);
  },false);

  galThumbCont.addEventListener('blur', function(){
    Velocity(this.querySelector('.galThumb-img'), { translateX: 0 }, {delay: 150}, 500);
    Velocity(this.querySelector('.galThumb-desc'), { translateX: 0 }, 500);
  },false);

};


// Event function


function MouseHover(elem) {
  elem.addEventListener('mouseover', function(){
    Velocity(this, { translateX: 50 }, [ 500, 20 ]);
  },false);

  elem.addEventListener('mouseleave', function(){
    Velocity(this, { translateX: 0 }, [ 500, 20 ]);
  },false);
}
