
var trex ,trex_running;
function preload(){
 //animation is preloaded for trex
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  //canvas is created
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(50,160,20,50)
//animation is given to trex
  trex.addAnimation("run",trex_running)
//trex is resized
  trex.scale=0.5
//ground is created
  ground=createSprite(200,180,400,20)


}

function draw(){
  //background is given
  background("white")
 //trex is made to jump when space key is pressed
  if(keyDown("space")){
trex.velocityY=-7

 }
 
 //trex is made to fall on ground(gravity)
 trex.velocityY=trex.velocityY+0.5
 //trex is made to collide with ground
 trex.collide(ground)
 
  drawSprites();

}
