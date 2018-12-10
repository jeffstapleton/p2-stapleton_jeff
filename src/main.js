const fortuneAPI = [{"message":"A friend's frown is better than a fool's smile.","id":"5403c81dc2fea4020029ab34"},{"message":"A friend in need is a friend indeed.","id":"5403c81dc2fea4020029ab35"},{"message":"A friend is easier lost than found.","id":"5403c81dc2fea4020029ab36"},{"message":"A friend to everybody is a friend to nobody.","id":"5403c81dc2fea4020029ab37"},{"message":"A problem shared is a problem halved.","id":"5403c81dc2fea4020029ab38"},{"message":"A true friend is someone who reaches for your hand, but touches your heart.","id":"5403c81dc2fea4020029ab39"},{"message":"False friends are worse than open enemies.","id":"5403c81dc2fea4020029ab3a"},{"message":"Flattery is all right so long as you don't inhale.","id":"5403c81dc2fea4020029ab3b"},{"message":"Give credit where credit is due.","id":"5403c81dc2fea4020029ab3c"},{"message":"Grief divided is made lighter.","id":"5403c81dc2fea4020029ab3d"},{"message":"Memory is the treasure of the mind.","id":"5403c81dc2fea4020029ab3e"},{"message":"Nothing dries sooner than a tear.","id":"5403c81dc2fea4020029ab3f"},{"message":"Old friends and old wine are best.","id":"5403c81dc2fea4020029ab40"},{"message":"The best of friends must part.","id":"5403c81dc2fea4020029ab41"},{"message":"The best things are not bought and sold.","id":"5403c81dc2fea4020029ab42"},{"message":"There is no better looking-glass than an old friend.","id":"5403c81dc2fea4020029ab43"},{"message":"To err is human (To forgive divine).","id":"5403c81dc2fea4020029ab44"},{"message":"Two cannot fall out if one does not choose.","id":"5403c81dc2fea4020029ab45"},{"message":"A loveless life is a living death.","id":"5403c81dc2fea4020029ab46"},{"message":"Absence makes the heart grow fonder.","id":"5403c81dc2fea4020029ab47"},{"message":"All's fair in love and war.","id":"5403c81dc2fea4020029ab48"},{"message":"Beauty is in the eye of the beholder.","id":"5403c81dc2fea4020029ab49"},{"message":"Before you meet the handsome prince you have to kiss a lot of toads.","id":"5403c81dc2fea4020029ab4a"},{"message":"Better to have loved and lost, than to have never loved at all.","id":"5403c81dc2fea4020029ab4b"},{"message":"Cold hands, warm heart.","id":"5403c81dc2fea4020029ab4c"},{"message":"Distance makes the heart grow fonder.","id":"5403c81dc2fea4020029ab4d"},{"message":"Faint heart never won fair lady.","id":"5403c81dc2fea4020029ab4e"},{"message":"First impressions are the most lasting.","id":"5403c81dc2fea4020029ab4f"},{"message":"Hatred is as blind as love.","id":"5403c81dc2fea4020029ab50"},{"message":"Love and a cough cannot be hid.","id":"5403c81dc2fea4020029ab51"},{"message":"Love does much but money does all.","id":"5403c81dc2fea4020029ab52"},{"message":"Love levels all inequalities.","id":"5403c81dc2fea4020029ab53"},{"message":"Love makes a good eye squint.","id":"5403c81dc2fea4020029ab54"},{"message":"Love sees no faults.","id":"5403c81dc2fea4020029ab55"},{"message":"Love sought is good, but given unsought is better.","id":"5403c81dc2fea4020029ab56"},{"message":"Love to live and live to love.","id":"5403c81dc2fea4020029ab57"},{"message":"Love with life is heaven; and life unloving, hell.","id":"5403c81dc2fea4020029ab58"},{"message":"Man is the head but woman turns it.","id":"5403c81dc2fea4020029ab59"},{"message":"Marry in haste, repent at leisure.","id":"5403c81dc2fea4020029ab5a"},{"message":"The course of love never did run smooth.","id":"5403c81dc2fea4020029ab5b"},{"message":"The Lord loveth a cheerful liar.","id":"5403c81dc2fea4020029ab5c"},{"message":"There is a thin line between love and hate.","id":"5403c81dc2fea4020029ab5d"},{"message":"To eat one's heart out.","id":"5403c81dc2fea4020029ab5e"},{"message":"True beauty lies within.","id":"5403c81dc2fea4020029ab5f"},{"message":"You can't live on bread alone.","id":"5403c81dc2fea4020029ab60"},{"message":"A good friend is one's nearest relation.","id":"5403c81dc2fea4020029ab61"},{"message":"A man is known by the company he keeps.","id":"5403c81dc2fea4020029ab62"},{"message":"A man of straw needs a woman of gold.","id":"5403c81dc2fea4020029ab63"},{"message":"A wink is as good as a nod, to a blind man.","id":"5403c81dc2fea4020029ab64"},{"message":"An injury is forgiven better than an injury revenged.","id":"5403c81dc2fea4020029ab65"},{"message":"Anger and hate hinder good counsel.","id":"5403c81dc2fea4020029ab66"},{"message":"Appearances are deceptive.","id":"5403c81dc2fea4020029ab67"},{"message":"At a round table there's no dispute about the place.","id":"5403c81dc2fea4020029ab68"},{"message":"Attack is the best form of defense","id":"5403c81dc2fea4020029ab69"},{"message":"Be slow in choosing, but slower in changing.","id":"5403c81dc2fea4020029ab6a"},{"message":"Behind every great man stands a strong woman.","id":"5403c81dc2fea4020029ab6b"},{"message":"Blood is thicker than water.","id":"5403c81dc2fea4020029ab6c"},{"message":"Cheerfulness smooths the road of life.","id":"5403c81dc2fea4020029ab6d"},{"message":"Confess and be hanged.","id":"5403c81dc2fea4020029ab6e"},{"message":"Conscience makes cowards of us all.","id":"5403c81dc2fea4020029ab6f"},{"message":"Don't blow your own trumpet.","id":"5403c81dc2fea4020029ab70"},{"message":"Do as you would be done by.","id":"5403c81dc2fea4020029ab71"},{"message":"Do unto others as you would have them do to you.","id":"5403c81dc2fea4020029ab72"},{"message":"Grow angry slowly; there's plenty of time.","id":"5403c81dc2fea4020029ab73"},{"message":"He bears misery best that hides it most.","id":"5403c81dc2fea4020029ab74"},{"message":"He that hurts another, hurts himself.","id":"5403c81dc2fea4020029ab75"},{"message":"He who wronged you will hate you.","id":"5403c81dc2fea4020029ab76"},{"message":"Heavy givers are light complainers.","id":"5403c81dc2fea4020029ab77"},{"message":"I am rubber and you are glue. Your words bounce off me and stick to you.","id":"5403c81dc2fea4020029ab78"},{"message":"If you lose your temper, don't look for it.","id":"5403c81dc2fea4020029ab79"},{"message":"It's not over till it's over.","id":"5403c81dc2fea4020029ab7a"},{"message":"Joy shared is double joy; grief shared is (only) half grief.","id":"5403c81dc2fea4020029ab7b"},{"message":"Laugh and the world laughs with you. Cry and you cry alone.","id":"5403c81dc2fea4020029ab7c"},{"message":"Never let the sun go down on your anger.","id":"5403c81dc2fea4020029ab7e"},{"message":"Never let the sun set on thy wrath.","id":"5403c81dc2fea4020029ab7f"},{"message":"Never let the sun set on angry heart.","id":"5403c81dc2fea4020029ab7d"},{"message":"Never quarrel with one's bread and butter.","id":"5403c81dc2fea4020029ab80"},{"message":"No man or woman is worth your tears, and the one who is, won't make you cry.","id":"5403c81dc2fea4020029ab81"},{"message":"Open confession is good for the soul.","id":"5403c81dc2fea4020029ab82"},{"message":"Out of sight, out of mind.","id":"5403c81dc2fea4020029ab83"},{"message":"Patience is a virtue.","id":"5403c81dc2fea4020029ab84"},{"message":"Persuasion is better than force.","id":"5403c81dc2fea4020029ab85"},{"message":"Spare the rod and spoil the child.","id":"5403c81dc2fea4020029ab86"},{"message":"Temper is so good a thing that we should never lose it.","id":"5403c81dc2fea4020029ab87"},{"message":"To the world you may be one person, but to one person, you may be the world.","id":"5403c81dc2fea4020029ab88"},{"message":"Wondrous is the strength of cheerfulness.","id":"5403c81dc2fea4020029ab89"},{"message":"You made your bed, now you must lie in it.","id":"5403c81dc2fea4020029ab8a"},{"message":"A bully is always a coward.","id":"5403c81dc2fea4020029ab8b"},{"message":"A handsome shoe often pinches the foot.","id":"5403c81dc2fea4020029ab8c"},{"message":"A good thing is all the sweeter when won with pain.","id":"5403c81dc2fea4020029ab8d"},{"message":"A man too careful of danger lives in continual torment.","id":"5403c81dc2fea4020029ab8e"},{"message":"A miss is as good as a mile.","id":"5403c81dc2fea4020029ab8f"},{"message":"Adversity flatters no man","id":"5403c81dc2fea4020029ab90"},{"message":"Adversity and loss make a man wise","id":"5403c81dc2fea4020029ab91"},{"message":"All promises are either broken or kept.","id":"5403c81dc2fea4020029ab92"},{"message":"All things come to those that wait.","id":"5403c81dc2fea4020029ab93"},{"message":"An eye for an eye and a tooth for a tooth.","id":"5403c81dc2fea4020029ab94"},{"message":"An open door may tempt a saint.","id":"5403c81dc2fea4020029ab95"},{"message":"As one door closes, another always opens.","id":"5403c81dc2fea4020029ab96"},{"message":"As you go through life, make this your goal, watch the doughnut and not the hole.","id":"5403c81dc2fea4020029ab97"}]

const colors = document.querySelectorAll('.fortune-one p'); //this sets the trigger 1
const nums = document.querySelectorAll('.fortune-two p');
const fortune = document.querySelectorAll('.fortune-three p');

const stepOneEffect = document.querySelector('.fortune-one');
const stepTwoEffect = document.querySelector('.fortune-two');

const hideTwo = document.querySelector('.fortune-two');
const hideOne = document.querySelector('.fortune-one');
const hideThree = document.querySelector('.fortune-three');

const startOver = document.querySelector('.button');

hideTwo.style.display="none";
hideThree.style.display="none";

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
  
  const loopTwo = () => {
    let thisButtonValue = this.childNodes[0].nodeValue;
    let thisButtonLength = thisButtonValue.length;
    for (let i = 0; i < thisButtonValue *2; i++) {
      setTimeout(function() {
        animationTwo();
      }, i * 400);
      setTimeout(function() {
        textChangeTwo();
      }, thisButtonValue * 800);
    }
  };
  
  const textChange = () => {
    hideTwo.style.display="block";
    hideOne.style.display="none";
  };
  
  const textChangeTwo = () => {
    hideTwo.style.display="none";
    hideThree.style.display="block";
  };
  
  loopOne();
  loopTwo();
};

function refresh() {
  location.reload();
};

for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener('click', wrapper);
};
for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener('click', wrapper);
};

startOver.addEventListener('click', refresh)