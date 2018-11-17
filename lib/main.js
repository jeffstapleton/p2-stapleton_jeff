'use strict';

var color = document.querySelectorAll('.fortune p');
var pick = document.querySelector('.one, .two, .three, .four');

function wrapper() {
  var _this = this;

  var collapse = function collapse() {
    pick.classList.toggle('one-click');
    pick.classList.toggle('two-click');
  };

  var loopThrough = function loopThrough() {
    var thisButtonText = _this.childNodes[0].nodeValue;
    var thisButtonLength = thisButtonText.length;

    for (var i = 0; i < thisButtonLength * 2; i++) {
      setTimeout(function () {
        collapse();
      }, i * 500);
    }
  };
  loopThrough();
};

for (var i = 0; i < color.length; i++) {
  color[i].addEventListener('click', wrapper);
};