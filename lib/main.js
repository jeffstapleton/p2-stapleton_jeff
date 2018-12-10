'use strict';

var colors = document.querySelectorAll('.fortune-one p'); //this sets the trigger 1
var nums = document.querySelectorAll('.fortune-two p');

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

  var loopOne = function loopOne() {
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

  var loopTwo = function loopTwo() {
    var thisButtonValue = _this.childNodes[0].nodeValue;
    var thisButtonLength = thisButtonValue.length;
    for (var i = 0; i < thisButtonValue * 2; i++) {
      setTimeout(function () {
        animationTwo();
      }, i * 400);
    }
  };

  var textChange = function textChange() {
    hideTwo.style.display = "block";
    hideOne.style.display = "none";
  };

  loopOne();
  loopTwo();
};

for (var i = 0; i < colors.length; i++) {
  colors[i].addEventListener('click', wrapper);
};
for (var _i = 0; _i < nums.length; _i++) {
  nums[_i].addEventListener('click', wrapper);
};