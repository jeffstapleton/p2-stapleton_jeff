const colors = document.querySelectorAll('.triangles p'); //this sets the trigger 1
const stepOneEffect = document.querySelector('.fortune-one');

const hideTwo = document.querySelector('.fortune-two');
const hideOne = document.querySelector('.fortune-one');

hideTwo.style.display="none";

function wrapper (){ //this is bullet 1 running
  
  const animationOne = () => {
    stepOneEffect.classList.toggle('scale-one');
  };
  
  const textChange = () => {
    hideTwo.style.display="block";
    
  }
  
  const loopThrough = () => {
    let thisButtonText = this.childNodes[0].nodeValue;
    let thisButtonLength = thisButtonText.length;
    
    for (let i = 0; i < thisButtonLength *2; i++) {
      setTimeout(function() {
        animationOne();
        textChange();
    }, i * 400);
  }

  };
  
  loopThrough();

  
};



for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener('click', wrapper); //this pulls the trigger 1
} 