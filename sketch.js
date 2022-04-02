var sea,ship;
var seaImg,shipImg;

function preload(){
  //add animation to ship 
  shipMoving = loadAnimation("ship-1.png","ship-2.png");

  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
    sea.scale=0.3;
  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("moving",shipMoving);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
 sea.velocityX = -3;
 //reset the background
 if(sea.x < 0){
  sea.x = sea.width/6.75;
  }
 
  drawSprites();
}