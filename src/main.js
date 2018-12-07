const colors = document.querySelectorAll('.triangles p'); //this sets the trigger 1
const stepOneEffect = document.querySelector('.fortune-one');

const stepOneText = document.querySelectorAll('.step-one p');
const stepTwoText = document.querySelectorAll('.step-two');


function wrapper (){ //this is bullet 1 running
  
  const animationOne = () => {
    stepOneEffect.classList.toggle('scale-one');
  };
  const textSwap = () => {
    stepOneText.classList.toggle('hidden');
  };
  
  const loopThrough = () => {
    let thisButtonText = this.childNodes[0].nodeValue;
    let thisButtonLength = thisButtonText.length;
    
    for (let i = 0; i < thisButtonLength *2; i++) {
      setTimeout(function() {
        animationOne();
    }, i * 400);
  }

  };

  
  loopThrough();
  textSwap();
  
};



for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener('click', wrapper); //this pulls the trigger 1
} 