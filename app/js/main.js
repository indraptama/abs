var galThumbs = document.querySelectorAll('.galThumb');
var Main = document.querySelector('Main');
var mainDiv = Main.querySelectorAll('div');





//   window.addEventListener('scroll', function(){
//
//     for (var i = 0; i < mainDiv.length; i++) {
//       var theDiv = mainDiv[i];
//         Velocity(theDiv, { translateY: 10 }, 100);
//         Velocity(theDiv, { reverse: true }, 100);
//     }
//
//     console.log('this');
//   }, false)
//

for (var i = 0; i < galThumbs.length; i++) {
  var galThumb = galThumbs[i];
  var galThumbCont = galThumb.querySelector('.galThumb-container');

  MouseHover(galThumbCont);
  //MouseHover(galThumbCont);
};
//
//
// // Event function
//
//
function MouseHover(elem) {
  elem.addEventListener('mouseenter', function(){
    Velocity(this.querySelector('.galThumb-img'), { translateX: 30 }, 250);
    Velocity(this.querySelector('.galThumb-desc'), { translateX: 30 }, {delay: 20}, 250);
  },false);

  elem.addEventListener('mouseleave', function(){
    Velocity(this.querySelector('.galThumb-img'), { translateX: 0 }, {delay: 20}, 250);
    Velocity(this.querySelector('.galThumb-desc'), { translateX: 0 }, 250);
  },false);
}

var Test =  document.querySelector('.animWrap');

// Velocity(Test,{maxWidth:1000},{loop:true},1000);


// for (var i = 0; i < galThumbs.length; i++) {
//   var galThumb = galThumbs[i];
//   var galThumbCont = galThumb.querySelector('.galThumb-container');
//
//   //animeMouseHover(galThumbCont);
//   MouseHover(galThumbCont);
// };
//
// function animeMouseHover(elem) {
//   var galThumbImg = elem.querySelector('.galThumb-img');
//   var galThumbDesc = elem.querySelector('.galThumb-desc');
//
//   elem.addEventListener('mouseenter', function(){
//     anime({
//       targets: [galThumbImg, galThumbDesc],
//       translateX: 30,
//       duration: 1000,
//       delay: function(el, index) {
//         return index * 100;
//       }
//     })
//   }, false);
//
//   elem.addEventListener('mouseleave', function(){
//     anime({
//       targets: [galThumbImg, galThumbDesc],
//       translateX: 0,
//       duration: 1000,
//       delay: function(el, index) {
//         return index * 100;
//       }
//     })
//   }, false);
//
// }
