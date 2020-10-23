var car,wall;
var speed,weight;
var deformartion;



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed = random(55,90) 
  weight = random(400,1500)
  var car = createSprite(50,200,50,50);
  car.velocityX = speed;
  car.shapeColor =" red";
  wall= createSprite(1500,200,60,height/2)

}

function draw() {
  if (wall.x-car.x( car.width+wall.width/2))
  {
  car.velocityX = 0;
  var deformartion = 0.5  *weight* speed * speed/22509;
  if(deformartion<180 && deformartion>100){
  car.shapeColor = color(230,230,0);
  
  }
  if (deformartion<100){
  car.shapeColor = color(0,255,0);
  
  }
  
  } 
  

  background(255,255,255);  


  drawSprites();
}