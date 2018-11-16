'use strict';

var color = document.querySelectorAll('.fortune p');
var navBar = document.querySelector('#navbar');

function wrapper() {
  var _this = this;

  var changeColor = function changeColor() {
    navBar.classList.toggle('red');
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

for (var i = 0; i < color.length; i++) {
  color[i].addEventListener('click', wrapper);
};