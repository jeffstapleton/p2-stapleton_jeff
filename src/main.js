const colors = document.querySelectorAll('.triangles p'); //this sets the trigger 1
const nums = document.querySelectorAll('.fortune-two p');
const stepOneEffect = document.querySelector('.fortune-one');
const stepTwoEffect = document.querySelector('.fortune-two');

const hideTwo = document.querySelector('.fortune-two');
const hideOne = document.querySelector('.fortune-one');

hideTwo.style.display="none";

function wrapper (){ //this is bullet 1 running
  
  const animationOne = () => {
    stepOneEffect.classList.toggle('scale-one');
  };
  
  const animationTwo = () => {
    stepTwoEffect.classList.toggle('scale-two');
  };
  
  const loopOne = () => {
    let thisButtonText = this.childNodes[0].nodeValue;
    let thisButtonLength = thisButtonText.length;
    
    for (let i = 0; i < thisButtonLength *2; i++) {
      setTimeout(function() {
        animationOne();
      }, i * 400);
      setTimeout(function() {
        textChange();
      }, thisButtonLength * 800);
    }
  };
  
  const textChange = () => {
    hideTwo.style.display="block";
    hideOne.style.display="none";
  };
  
  loopOne();
};

for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener('click', wrapper); //this pulls the trigger 1
} 