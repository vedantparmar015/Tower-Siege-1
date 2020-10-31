function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  ground= new Ground(600,200,160,50);
  //Level 1
  block1= new Box(575,210,20,20);
  block2= new Box(600,210,20,20);
  block3= new Box(615,210,20,20);
  block4= new Box(630,210,20,20);
  block5= new Box(645,210,20,20);
  block6= new Box(660,210,20,20);
  block7= new Box(675,210,20,20);
  // Level 2
  block8= new Box(590,230,20,20);
  block9= new Box(605,230,20,20);
  block10= new Box(620,230,20,20);
  block11= new Box(635,230,20,20);
  block12= new Box(650,230,20,20);
  // Level 3
  block13 = new Box(600,250,20,20);
  block14 = new Box(615,250,20,20);
  block15 = new Box(630,250,20,20);
  //Level 4
  block16 = new Box(620,270,20,20);
  block17 = new Box(635,270,20,20);
  //Level 5
  block18 = new Box(630,290,20,20);




  drawSprites();
}