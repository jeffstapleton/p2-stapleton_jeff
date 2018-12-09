'use strict';

var colors = document.querySelectorAll('.triangles p'); //this sets the trigger 1
var stepOneEffect = document.querySelector('.fortune-one');

var hideTwo = document.querySelector('.fortune-two');
var hideOne = document.querySelector('.fortune-one');

var triggerIndexNumbers = [11, 7];

hideTwo.style.display = "none";

function wrapper() {
  var _this = this;

  //this is bullet 1 running

  var animationOne = function animationOne() {
    stepOneEffect.classList.toggle('scale-one');
  };

  var loopThrough = function loopThrough() {
    var thisButtonText = _this.childNodes[0].nodeValue;
    var thisButtonLength = thisButtonText.length;

    var _loop = function _loop(i) {
      setTimeout(function () {
        animationOne();
        if (triggerIndexNumbers.includes(i)) {
          textChange();
        } else {}
      }, i * 400);
    };

    for (var i = 0; i < thisButtonLength * 2; i++) {
      _loop(i);
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