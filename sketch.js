var  rock,rockimage, monkey,monkeyimage,banana,bananaimage,ground, groundimage, backround,backgroundimage,gameover,gameoverimage, restart,restartimage;

var bananagroup
var obstaclegroup
var score = 0;

function preload (){
rockimage = loadImage("stone.png");
  
monkeyimage = loadAnimation("Monkey_01.png","Monkey_02.png", "Monkey_03.png","Monkey_04.png","Monkey_05.png", "Monkey_06.png","Monkey_07.png","Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
  bananaimage = loadImage("banana.png");
 // groundimage =loadImage("ground.jpg");
  backgroundimage = loadImage("jungle.jpg"); 
//  gameoverimage = loadImage ("gameOver.png");
 // restartimage = loadImage("restart.png");

  
}


function setup() {
  createCanvas(400, 400);
  
  bananagroup = new Group();
  
  obstaclegroup = new Group();
  
   backround = createSprite(0,0,400,400);
  backround.addImage(backgroundimage);
  backround.scale = 1.5;
  backround.velcotiyX=-4;
  backround.x = backround.width/2;
  
  
  monkey = createSprite(50,310,10,10);
  monkey.addAnimation("running",monkeyimage);
  monkey.scale= 0.1;
  
  
  ground = createSprite(400, 350,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible=false;
  
 
  
  
  
}


function draw() {
  background(220);
  if(ground.x<0){
  ground.x=ground.width/2;
  
  }
  
   if(backround.x<100){
  backround.x=backround.width/2;
  
  }
  if(bananagroup.isTouching(monkey)){
    bananagroup.destroyEach();
    score = score+2;
  }
  if(obstaclegroup.isTouching(monkey)){
   monkey.scale=0.08; 
  }
    switch (score){
      case 10:monkey.scale=0.12
             break;
        case 20:monkey.scale=0.12
             break;     
    case 30:monkey.scale=0.12
             break;
     case 40:monkey.scale=0.12
             break;   
             default:break;
        
        
        
    }
  if(keyDown("space") && monkey.y>=300){
     monkey.velocityY = -12;
  }
  monkey.velocityY=monkey.velocityY+0.5;
  monkey.collide(ground);
  spawnfood();
  spawnobstacles();
  drawSprites();
  fill("white")
  text("Score: "+score, 350,50);
  }

function spawnfood(){
if (World.frameCount%80===0) {
  var banana = createSprite(380,200,10,10);
  banana.addImage(bananaimage);
  banana.y=random(120,200);
  banana.velocityX=-10;
  banana.lifetime=150;
  banana.scale=0.05;
  bananagroup.add(banana);
  monkey.depth=banana.depth+1;
  }
  
}
function spawnobstacles(){
  if (World.frameCount%300===0) {
  var obstacle = createSprite(390,350,20,20);
  obstacle.addImage(rockimage);
  obstacle.velocityX=-5; 
  obstacle.scale=0.2;
  obstacle.lifetime=150;
  obstaclegroup.add(obstacle);
  
    
  }
  
  
}