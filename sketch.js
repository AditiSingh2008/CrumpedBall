
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,dustbin2,dustbin3,paper,ground;

function preload(){
	
}

function setup() {
	createCanvas(800, 600);
	engine = Engine.create();
	world = engine.world;
dustbin1=new Dustbin(600,480,150,20);
dustbin2=new Dustbin(535,420,20,100);
dustbin3=new Dustbin(665,420,20,100);
ground=new Ground(400,500,800,20);
	Engine.run(engine);
  paper=new Paper(100,450,50)
}


function draw() {
  rectMode(CENTER)
  background(0);
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}



