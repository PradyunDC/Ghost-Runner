var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(300,300)
  ghost.addImage("ghost", ghostImg)
  ghost.scale = 0.3

  doorsGroup = createGroup()
  climbersGroup = createGroup()
  invisibleBlockGroup = createGroup()
  
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
    if(keyDown("left")){
      ghost.x = ghost.x - 3
    }
    
    if(keyDown("right")){
      ghost.x = ghost.x + 3
    }

    if(keyDown("space")){
      ghost.velocityY = -10 
    }
    
    ghost.velocityY = ghost.velocityY + 0.8
    if(ghost.isTouching(climbersGroup)){
      ghost.velocityY = 0
    }
    spawnDoors();
    drawSprites();
}
function spawnDoors(){
  if(frameCount % 300==0){
    door = createSprite(Math.round(random(150,500)),300)
    door.addImage("door",doorImg)
    door.velocityY = 1
    doorsGroup.add(door)

    climber = createSprite(door.x,door.y + 70)
    climber.addImage("climber",climberImg)
    climber.velocityY = 1
    climbersGroup.add(climber)

    invisibleBlock = createSprite(door.x,door.y + 90,75,10)
    invisibleBlock.visble = true
    invisibleBlock.velocityY = 1
    invisibleBlockGroup.add(invisibleBlock)

   
    ghost.depth = door.depth
    ghost.depth += 1

  }
 
  
}