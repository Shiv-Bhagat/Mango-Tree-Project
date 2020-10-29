
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var Boyimg,Treeimg;
function preload()
{
	Boyimg=loadImage("boy.png")
	Treeimg=loadImage("tree.png")
}

function setup() {
	createCanvas(1300, 600);
	background(0,0,50)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	G1=new Ground(650,580,width,20)
	mango1=new mango(1100,100,30); 
	mango2=new mango(1170,130,30); 
	mango3=new mango(1010,140,30); 
	mango4=new mango(1000,70,30); 
	mango5=new mango(1100,70,30); 
	mango6=new mango(1000,230,30); 
	mango7=new mango(900,230,40); 
	mango8=new mango(1140,150,40); 
	mango9=new mango(1100,230,40); 
	mango10=new mango(1200,200,40); 
	mango11=new mango(1120,50,40); 
	mango12=new mango(900,160,40);
	S1=new stone(280,460,30,30)
	C1=new strg(S1.body,{x:240,y:450})




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  imageMode (CENTER)
  image(Boyimg,280,500,200,200)
  image(Treeimg,1000,300,700,700)
  G1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  S1.display();
  C1.display();
  detectollision(S1,mango1);
  detectollision(S1,mango2);
  detectollision(S1,mango3);
  detectollision(S1,mango4);
  detectollision(S1,mango5);
  detectollision(S1,mango6);
  detectollision(S1,mango7);
  detectollision(S1,mango8);
  detectollision(S1,mango9);
  detectollision(S1,mango10);
  detectollision(S1,mango11);
  detectollision(S1,mango12);
  drawSprites();
 
}
function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}
}
function keyPressed(){
	if (keyCode===32){
		C1.attach(S1.body)
	}
}

function mouseDragged(){
	Matter.Body.setPosition(S1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	C1.fly();
}

