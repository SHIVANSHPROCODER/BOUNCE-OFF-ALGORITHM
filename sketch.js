var fixedrect ;
var movingrect;
var object1 ; 
var object2 ;
function setup() {
  createCanvas(800,400);
fixedrect = createSprite(400,200,50,50);
fixedrect.shapeColor = "blue"
 movingrect = createSprite(400,200,50,40);
movingrect.shapeColor = "blue"
movingrect.velocityY = 5;
fixedrect.velocityY = -5;
}
function draw() {
  background(255,255,255); 
   //movingrect.x = mouseX;
   //movingrect.y = mouseY;
  bounceOff(movingrect,fixedrect)
  drawSprites();
}
