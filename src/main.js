const color = document.querySelectorAll('.fortune p');
const pickOne = document.querySelector('.two');

function wrapper() {
  
  const collapse = () => {
    pickOne.classList.toggle('one-click');
    pickOne.classList.toggle('two-click');
  };
  
  const loopThrough = () => {
    let thisButtonText = this.childNodes[0].nodeValue;
    let thisButtonLength = thisButtonText.length;
    
    for (let i = 0; i < thisButtonLength *2; i++) {
      setTimeout(function() {
        collapse();
    }, i * 500);
  }

  };
  loopThrough();
};

for(let i = 0; i < color.length; i++) {
  color[i].addEventListener('click', wrapper);
};
