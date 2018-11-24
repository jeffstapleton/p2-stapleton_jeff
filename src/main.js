const colors = document.querySelectorAll('.triangles p'); //this sets the trigger 1
const stepOneEffect = document.querySelector('.fortune');


function wrapper (){ //this is bullet 1 running
  
  const changeColor = () => {
    stepOneEffect.classList.toggle('scale-one');
  };
  
  const loopThrough = () => {
    let thisButtonText = this.childNodes[0].nodeValue;
    let thisButtonLength = thisButtonText.length;
    
    for (let i = 0; i < thisButtonLength *2; i++) {
      setTimeout(function() {
        changeColor();
    }, i * 400);
  }

  };
  loopThrough();
};

for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener('click', wrapper); //this pulls the trigger 1
} 