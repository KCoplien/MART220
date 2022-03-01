
var x = 600;
var y = 600;
var size = 50;
var speed = 3;
var speed_x = 0;
var speed_y = 0;
var timerValue = 10;
var startButton;

//Run Objects
var predatorObjects = [];
var predatorRunObjects = [];
var predatorRunLeftObjects = [];
var currentObjects;


//Run Animation
var animation = [];
var runanimation = [];
var leftrunanimation = [];
var currentAnimation;

// Define all the variables that will hold the strings read in from a file
var result;
var runresult;
var runresultleft;

// Define the variable that will iterate over the animation and objects
var counter = 0;

// Define the variable that will be used when creating an interval
var myInterval;

// Define a variable for to slow the movement animations down
var index = 0;

//var for tree trunks
var trees = [125, 200, 375, 425, 475];




//alien, sky,  & font preloads
let myfont;
var img;
function preload() {
  result = loadStrings('assets/Images/predatoridle (1).png');
  runresult = loadStrings('assets/Images/predator (1).png');
  runresultleft = loadStrings('assets/predatorrun (1).png');

  sky = loadImage('assets/Images/nightsky.jpg');
  //myfont = loadFont('assets/SyneTactile-Regular.ttf');
 
}



function windowResized() {
resizeCanvas(windowWidth - 20,windowHeight - 20);
}


function setup()
{

    createCanvas(windowWidth - 20,windowHeight - 20);
    speed_x = random(1, 10);
    speed_y = random(1, 10);
 
  //timer
  textAlign(CENTER);
  setInterval(timeIt, 1000);

//Predator Idle

 for (var i = 0; i < result.length; i++) 
  {
    predatoridleObjects.push(new imageclass('assets/' + result[i], 0, 0));
    animation[i] = predatoridleObjects[i].getImage();
  }

// create both movement to the right and left and the animations in this for loop
  for (var i = 0; i < runresult.length; i++) 
  {
    predatorRunObjects.push(new imageclass('assets/' + runresult[i], 0, 0));
    runanimation[i] = predatorRunObjects[i].getImage();
    predatorRunLeftObjects.push(new imageclass('assets/' + runresultleft[i], 0, 0));
    leftrunanimation[i] = predatorRunLeftObjects[i].getImage();
    
}





function draw()
{
    background (sky,displayWidth,displayHeight);
    img.resize(50, 100);
    image(img, 200, 200);

    // upper border
    //noStroke();
    //fill(51,0,102);
    //rect(0,0,525,25);
    // left border
    //rect(0,25,25,600);
    // bottom border
    //rect(25,600,500,25);
    // right border
    //rect(500,25,25,600);


// Moon shape
fill(255,255,0);
circle(80,80,100);

// tree trunks & branches
stroke(102,51,0);
strokeWeight(14);
line(75, 200, 75, 500);
line(200, 225, 200, 475);
line(325, 200, 325, 550);
line(400, 100, 400, 500);
line(450, 200, 300, 100);
line(450, 220, 225, 130);
line(430, 240, 330, 245);
// tree shapes

for (var i = 0; i < 5; i++) {
fill(0, 153, 0);
triangle(i * 100, 300, 320, 200, trees[i], trees[i]);
}

//porcupine
fill(255,0,127);
circle(x, y, size);
//x++;
if (x >= windowWidth || x <=0) {
speed_x = random(1, 10);
speed_x = -speed_x;
} 
else if(x <10)
{
speed_x = random(1, 10);
}
else if (y >=600){
speed_y = random(1, 10);
speed_y = -speed_y;
}
else if(y <0)
{ 
speed_y = random(1, 10);
}
x = x + speed_x;
y = y + speed_y;
text(x, 400, 400);
//print(x); 
//if (x >= 575 || x <=10) { 
//speed = -speed;


//else if (x <=10) {
//x++; //move to the right

//rotate
//hedgehog
{
fill(165,42,42)
arc
}

  // assign the generic animation and object variables Predator
      currentAnimation = runanimation;
      currentObjects = predatorRunObjects;

      // make sure we don't go over the size of the arrays
      // keep in mind the idle has 10 and the movement has 8
      if (counter >= currentAnimation.length) 
      {
        counter = 0;
      }

      // move the animation by updating the x component
      currentObjects[counter].setX(currentObjects[counter].getX() + 2);


  fill(0);
    textFont(myfont);
    textSize(25);
    text("Kim Coplien",50,550);
    text("Moonlit Forest",175,50);

//timer
 if (timerValue >= 10) {
    text("0:" + timerValue, width / 2, height / 2);
  }
  if (timerValue < 10) {
    text('0:0' + timerValue, width / 2, height / 2);
  }
  if (timerValue == 0) {
    text('game over', width / 2, height / 2 + 15);
  }


function timeIt() {
  if (timerValue > 0) 

    timerValue--;

}










}