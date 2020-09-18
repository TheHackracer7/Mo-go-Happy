var monkey,monkeyImg;//monkey
    
var ground;//ground

var obstacle1,obstacleImg;//Obstacle

var bananna,bananaImg;//bananna 
    
var obstacleGrp,banannaGrp;//groups

var bg,bgImg;//background 

var score;//score

var PLAY=1,END=0,gamestate=PLAY;//gamesates


function preload()
{


monkeyImg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png" );//loading monkey animation

  bgImg=loadImage("jungle.jpg");//loading background image
  
  obstacleImg=loadImage("stone.png");//loading stone image
  
  bananaImg=loadImage("banana.png");  //loading bannana image
  
  obstacleGrp = new Group();//adding obstacle group
  banannaGrp=new Group();//adding bananna group

}






function setup() {
  createCanvas(400, 400);//canvas size
  
  bg=createSprite(200,200,20,20);//background sprite 
  bg.addImage(bgImg);//background animation
  bg.x=bg.width/2;
  bg.velocityX=-5;
  
  monkey=createSprite(80,350,10,10);//monkey sprite
  monkey.addAnimation("monkey",monkeyImg);//monkey animation
  monkey.scale=0.1;//monkey animation scale
  
  ground=createSprite(14,387,900,10);//ground animation
  ground.visible=false;//making ground invisible
  score=0;//seting score initial value as 0
  
}

function draw() {
  background(220);
  
  monkey.collide(ground);//making monkey collide with ground
  
  
  monkey.velocityY=monkey.velocityY+1.0;//gravity
  
  
  if(bg.x<=0)
  {
  
  
  bg.x=bg.width/2;
  
  
  }
   
  if(keyDown("space") && monkey.y>=330 && gamestate===PLAY)
  {
  
  
 monkey.velocityY=-13.5;// jump
  
  
  }
  
  if(monkey.isTouching(banannaGrp)&& gamestate===PLAY)
  {
  
  
  score=score+1;//score+1
    banannaGrp.destroyEach();//destroying banannaGroup
  
  
  }

  if(monkey.isTouching(obstacleGrp)&& gamestate===PLAY)
  {
  
  
    monkey.scale=0.05; //monkey animation scale decreased
    obstacleGrp.destroyEach();//obstacleGroup destryed
  
  
  }
  
  switch(score)
  {
  

    case 10:monkey.scale=0.11;//if score is 10 monkey scale 0.11
      break;//take the control out of the block
    case 20:monkey.scale=0.12;//if score is 20 monkey scale 0.12
      break;//take the control out of the block
    case 40:monkey.scale=0.13;//if score is 40 monkey scale 0.13
      break;//take the control out of the block
      case 50:monkey.scale=0.14;//if score is 50 monkey scale 0.14
      break;//take the control out of the block
    case 60:monkey.scale=0.15;//if score is 60 monkey scale 0.15
      break;//take the control out of the block
    default:break;//take the control out of the block
  }
  
  spawnobstacle();//spawnobstacles() called
  
  spawnbananna();;//spawnbananna() called


  
  drawSprites();
  textSize(20);
  text("Score:"+score,300,55);//displaying scores
}

function spawnobstacle()
{
  
  if(frameCount % 300 === 0 )
  {
    
    obstacle();
    
  

    
  }
  
}
function spawnbananna()
{

if(frameCount % 80 === 0 )
{

  banana();
  
}
}


function obstacle()
{
  
   obstacle1=createSprite(500 ,350,10,10);//created obstacle1 sprite
  obstacle1.addAnimation("obstacle", obstacleImg);//added obstacle animation
 obstacle1.scale=0.175;
 obstacle1.velocityX=-5;
 obstacle1.lifetime=100;
 
 obstacle1.setCollider("rectangle",0,0,9,9);
 obstacleGrp.add(obstacle1);
 
  
}


function banana()
{
  
   bananna=createSprite(500,200,10,10);//created bananna sprite
  bananna.addAnimation("banana",bananaImg);//added bananna animation
  bananna.velocityX=-5;
  bananna.scale=0.05;
  bananna.y=Math.round(random(200,280));
  bananna.lifetime=100;
  banannaGrp.add(bananna);
  
  
  
}