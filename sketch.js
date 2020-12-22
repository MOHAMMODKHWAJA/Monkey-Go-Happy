 
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime;
var ground;
function preload(){
   createCanvas(600, 600);
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 obstacleGroup = new Group();
}



function setup() {
  createCanvas(600, 600);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("run",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
}


function draw() {
  background(260);
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("survivalTime:"+survivalTime,100,50);
  
 obstacles();
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")) {
       monkey.velocityY = -12;
  } 
     
      monkey.velocityY =  monkey .velocityY + 0.5;
  monkey.collide(ground);
  
 
 Food();

drawSprites();
}


function obstacles(){

   if(World.frameCount%200===0){
  var obstacles = createSprite(400,310,10,10); 
 
  obstacles.velocityX = -3;
     var rand = Math.round(random(1,1));
    switch(rand) {
      case 1: obstacles .addImage(obstacleImage);
    }
  obstacles.scale = 0.2;
   obstacles.lifetime=150;
     
   obstacleGroup.add(obstacles);
  
     
   }   
 
}

function Food(){
  if(World.frameCount%200===0){
  banana = createSprite(590,150,10,10);
     banana.velocityX = -3;
     banana.scale = 0.1;
   //  banana .lifetime=300;
     var rand = Math.round(random(1,1));
    switch(rand) {
      case 1:banana.addImage("banana",bananaImage);
    }
  }
}








