'use strict';

var colors = document.querySelectorAll('.triangles p'); //this sets the trigger 1
var stepOneEffect = document.querySelector('.fortune-one');
var stepTwoEffect = document.querySelector('.fortune-two');

var hideTwo = document.querySelector('.fortune-two');
var hideOne = document.querySelector('.fortune-one');

hideTwo.style.display = "none";

function wrapper() {
  var _this = this;

  //this is bullet 1 running

  var animationOne = function animationOne() {
    stepOneEffect.classList.toggle('scale-one');
  };

  var animationTwo = function animationTwo() {
    stepTwoEffect.classList.toggle('scale-two');
  };

  var loopThrough = function loopThrough() {
    var thisButtonText = _this.childNodes[0].nodeValue;
    var thisButtonLength = thisButtonText.length;

    for (var i = 0; i < thisButtonLength * 2; i++) {
      setTimeout(function () {
        animationOne();
      }, i * 400);
      setTimeout(function () {
        textChange();
      }, thisButtonLength * 800);
    }
  };

  var textChange = function textChange() {
    hideTwo.style.display = "block";
    hideOne.style.display = "none";
  };

  loopThrough();
};

for (var i = 0; i < colors.length; i++) {
  colors[i].addEventListener('click', wrapper); //this pulls the trigger 1
}