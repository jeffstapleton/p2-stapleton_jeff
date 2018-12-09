const colors = document.querySelectorAll('.triangles p'); //this sets the trigger 1
const stepOneEffect = document.querySelector('.fortune-one');

const hideTwo = document.querySelector('.fortune-two');
const hideOne = document.querySelector('.fortune-one');

const triggerIndexNumbers = [];

hideTwo.style.display="none";

function wrapper (){ //this is bullet 1 running
  
  const animationOne = () => {
    stepOneEffect.classList.toggle('scale-one');
  };
  
  const loopThrough = () => {
    let thisButtonText = this.childNodes[0].nodeValue;
    let thisButtonLength = thisButtonText.length;
    
    for (let i = 0; i < thisButtonLength *2; i++) {
      setTimeout(function() {
        animationOne();
        console.log(i);
    }, i * 400);
  }
  
  };
  
  const textChange = () => {
    hideTwo.style.display="block";
    hideOne.style.display="none";
  };
  
  loopThrough();


  
};



for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener('click', wrapper); //this pulls the trigger 1
} 