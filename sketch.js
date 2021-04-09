var player;
var ground;
var fly, flyGroup;
var obstacles, obstaclesGroup;



function preload(){
  
}

function setup(){
  createCanvas(1400, 700);
  //player's sprite
  player = createSprite(100, 600,40,40);
player.shapeColor = "white";
//ground's sprite
ground = createSprite(600,650,1400,30);
ground.velocityX = -4;

flyGroup = new Group();
obstaclesGroup = new Group();

}


function draw(){
background(0);
//infinite scrolling effect
if(ground.x<0){
  ground.x = 700;
}

//making player jump
if(keyDown("up")){
  player.velocityY = -10;
}
player.velocityY = player.velocityY + 0.05;
//making the player move left and right
if(keyDown("left")){
  player.x = player.x-5;
}
if(keyDown("right")){
  player.x = player.x+5;
}
spawnfly();
spawnobstacles();
player.collide(ground);
drawSprites();
}

function spawnfly(){
if(frameCount%60 === 0){
  fly= createSprite(1370, 100, 10, 10);
  fly.velocityX = -3;
  fly.lifetime= 500;
  fly.y = Math.round(random(20,400));
  fly.depth = player.depth;
  player.depth = player.depth+ 1;
  flyGroup.add(fly);
}
}

function spawnobstacles(){
  if(frameCount%60 === 0){
    obstacles= createSprite(1370, 600, 40, 10);
    obstacles.velocityX = -6;
    obstacles.lifetime= 500;
    obstaclesGroup.add(obstacles);
  }
}