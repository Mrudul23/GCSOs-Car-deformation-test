var car ,black,green,red,yellow
var wall;
var speed,weight;
var start,startImage;
var reset,resetImage;
var sample1,sample2,sample3;
var sample1Image,sample2Image,sample3Image;

function preload(){
black=loadImage("black.png")
red=loadImage("red.png")
yellow=loadImage("yellow.png")
green=loadImage("green.png")
startImage=loadImage("start.png")
resetImage=loadImage("Reset.png")
sample1Image=loadImage("red.png")
sample2Image=loadImage("yellow.png")
sample3Image=loadImage("green.png")
}
function setup() {
  createCanvas(1500,400);
  speed=random(55,120)
  weight=random(400,1500)
  car =createSprite(50,200)
  car.addImage(black)
  car.rotation=90
  car.scale=0.5
  wall=createSprite(1400,200,60,height/2)
  wall.shapeColor="red"
  start=createSprite(250,350)
  start.addImage(startImage)
  start.scale=0.1
  reset=createSprite(450,350)
  reset.addImage(resetImage)
  reset.scale=0.3
  sample1=createSprite(40,20)
  sample1.addImage(sample1Image)
  sample1.scale=0.5
  sample1.rotation=90
  sample2=createSprite(240,20)
  sample2.addImage(sample2Image)
  sample2.scale=0.5
  sample2.rotation=90
  sample3=createSprite(440,20)
  sample3.addImage(sample3Image)
  sample3.scale=0.5
  sample3.rotation=90
}

function draw() {
  background("grey");
  for(var i=0;i<=1600;i=i+20){
    stroke("white")
    line(i,200,i+10,200);
  }

  if(mousePressedOver(start)){
    car.velocityX=speed;
  }
  if(mousePressedOver(reset)){
    wall.visible=true
    car.x=50;
    car.y=200;
    car.addImage(black);
    speed=random(55,120)
    weight=random(400,1400)
  }
  if(wall.x-car.x<car.width/2+wall.width/2){
    wall.visible=false;
    car.velocityX=0
      var deformation=0.5*weight*speed*speed/22509;
      if(deformation>180){
        car.addImage(red)
      }
      if(deformation<180 && deformation>100){
        car.addImage(yellow)
      }
      if(deformation<100){
        car.addImage(green)
      }

  }
  drawSprites();
  textSize(20);
  stroke("black");
  fill("black");
  text("→ lethal",80,25);
  text("→ average",280,25);
  text("→ safe",480,25);
  textSize(40);
  stroke("red");
  strokeWeight(10);
  fill("orange");
  text("Car Deformation Test",680,40);
}