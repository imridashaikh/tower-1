const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;

var holder,bal,ground;
var stand1,stand2;
var ball;
var slingshot;
var polyimg;


function preload(){
    polygon_img=loadImage("polygyon.png");

}
  
function setup(){
    engine= Engine.create();
    world=engine.world;

createCanvas(900,500);
ground=new Ground();
stand1=new Stand(380,300,270,10);
stand2=new Stand(700,200,200,10);

block1=new Block(280,275,30,40);
block2=new Block(310,275,30,40);
block3=new Block(340,275,30,40);
block4=new Block(370,275,30,40);
block5=new Block(400,275,30,40);
block6=new Block(430,275,30,40);
block7=new Block(460,275,30,40);
block8=new Block(490,275,30,40);

block9=new Block(310,235,30,40);
block10=new Block(340,235,30,40);
block11=new Block(370,235,30,40);
block12=new Block(400,235,30,40);
block13=new Block(430,235,30,40);
block14=new Block(460,235,30,40);

block15=new Block(340,196,30,40);
block16=new Block(370,196,30,40);
block17=new Block(400,196,30,40);
block18=new Block(430,196,30,40);

block19=new Block(400,156,30,40);
block20=new Block(430,156,30,40);

block21=new Block(385,116,30,40);

block1=new Block(640,175,30,40);
block2=new Block(670,175,30,40);
block3=new Block(700,175,30,40);
block4=new Block(730,175,30,40);
block5=new Block(760,175,30,40);
block6=new Block(670,135,30,40);
block7=new Block(700,135,30,40);
block8=new Block(730,135,30,40);
block9=new Block(700,95,30,40);

ball=Bodies.circle(50,200,20);
World.add(world,ball);

slingshot=new Slingshot(this.ball,{x:200,y:200})
}
function draw(){
    background("white")
    Engine.updatew(engine);

    strokeWeight(2);
    stroke(15);

     stand1.display();
     stand2.dispaly();

     stroke(15);
     fill("black")
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
stroke(15)
fill("orange")
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
stroke(15)
fill("violet")
block15.display();
block16.display();
block17.display();
block18.display();


block19.display();
mlemfl;      






}
