function setup()
{
    createCanvas(500,600);
}

function draw()
{
    background(120);
    // upper border
    noStroke();
    fill(51,0,102);
    rect(0,0,600,25);
    // left border
    rect(0,25,25,600);
    // bottom border
    rect(25,575,600,25);
    // right border
    rect(475,25,25,575);

// shape 1
fill(255,255,0);
circle(80,80,100);



}