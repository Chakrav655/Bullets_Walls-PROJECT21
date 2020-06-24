var thickness, wall;
var bullet,speed, weight;
var bulletRightEdge;
var wallLeftEdge;

function setup() {
  createCanvas(1600,400);
  //random values for speed,weigth,thickness
  thickness=random(22,83);
  speed = random(40,100);
  weight = random(30,52);
  //sprites
  bullet = createSprite(50,200,50,20);
  wall = createSprite(1000,200,50,height/2);
  //velocity
  bullet.velocityX = speed;
}

function draw() {
  background("coral");  
  bullet.velocityX = speed;  
    //collison and color of the wall after collison
    if(hasCollided(bullet,wall)){
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    bullet.velocityX=0;
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}

//collison function
function hasCollided(bullet2,wall2){
  bulletRightEdge = bullet2.x + bullet2.width;
  wallLeftEdge = wall2.x;
  if(bulletRightEdge>= wallLeftEdge){
    return true;
  }
  return false;
}