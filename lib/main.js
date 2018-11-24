'use strict';

var colors = document.querySelectorAll('#colors li'); //this sets the trigger 1
var stepOneEffect = document.querySelectorAll('.triangles');

function wrapper() {
  var _this = this;

  //this is bullet 1 running

  var changeColor = function changeColor() {
    stepOneEffect.classList.toggle('hidden');
  };

  var loopThrough = function loopThrough() {
    var thisButtonText = _this.childNodes[0].nodeValue;
    var thisButtonLength = thisButtonText.length;

    for (var i = 0; i < thisButtonLength * 2; i++) {
      setTimeout(function () {
        changeColor();
      }, i * 1000);
    }
  };
  loopThrough();
};

for (var i = 0; i < colors.length; i++) {
  colors[i].addEventListener('click', wrapper); //this pulls the trigger 1
}