var x = 10;
var y = 500;
var size = 50;
var speed = 3;
var speed_x = 0;
var speed_y = 0;
var timerValue = 10;
var startButton;

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






function setup()
{

    createCanvas(displayWidth,displayHeight);
    speed_x = random(1, 10);
    speed_y = random(1, 10);
 
  //timer
  textAlign(CENTER);
  setInterval(timeIt, 1000);
    
}





function draw()
{
    background (sky,displayWidth,displayHeight);
    img.resize(50, 100);
    image(img, 200, 200);

    // upper border
    noStroke();
    fill(51,0,102);
    rect(0,0,525,25);
    // left border
    rect(0,25,25,600);
    // bottom border
    rect(25,600,500,25);
    // right border
    rect(500,25,25,600);


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
if (x >= 500 || x <=0) {
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