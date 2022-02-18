var x = 1200;
var y = 1200;
var size = 50;
var speed = 0;
var speed_x = 0;
var speed_y = 0;
var timerValue = 10;
var startButton;
var characterX = 100;
var characterY = 500;

// define the key codes for each letter

var w = 87; 

var s = 83;

var a = 65;

var d = 68;

//var for tree trunks
var trees = [125, 200, 375, 425, 475];




//alien, sky,  & font preloads
let myfont;
var img;
function preload() {
  img = loadImage('assets/AlienKC.jpg');
  sky = loadImage('assets/nightsky.jpg'); 
  myfont = loadFont('assets/SyneTactile-Regular.ttf');
 
}

function windowResized() {
resizeCanvas(windowWidth - 20, windowHeight - 20);

}




function setup()
{

    createCanvas(windowWidth - 20,windowHeight - 20);
    speed_x = random(5, 10);
    speed_y = random(5, 10);
 
  //timer
  textAlign(CENTER);
  setInterval(timeIt, 1000);
    
}





function draw()
{
    background (sky,displayWidth,displayHeight);
    img.resize(50, 100);
    image(img, 200, 200);
    characterMovement();
    drawCharacter();
   


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
image(img, y, size);
fill(255,0,127);
circle(x, y, size);
//x++;
if (x >= 1100 || x <=0) {
speed_x = random(3, 10);
speed_x = -speed_x;
} 
else if(x <10)
{
speed_x = random(3, 10);
}
else if (y >=1100){
speed_y = random(3, 10);
speed_y = -speed_y;
}
else if(y <0)
{ 
speed_y = random(3, 10);
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
function character(x,y)
 {
characterX = x;
characterY = y;

fill(255,40,123);
ellipse(characterX, characterY, 60, 100); 
}
function drawCharacter()
{
fill(255,40,123);
ellipse(characterX, characterY, 60, 100); 
}

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
}

function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}
// handle the keys
 function characterMovement()

{

if(keyIsDown(w))
{
characterY -= 10; 
//console.log("movement: " + characterY);
}

if(keyIsDown(s))

{

characterY += 10; 
//console.log("movement: " + characterY);
}

if(keyIsDown(a))

{

characterX -= 10; 
//console.log("movement: " + characterX);
}

if(keyIsDown(d))

{

characterX += 10; 
//console.log("movement: " + characterX);
}








}