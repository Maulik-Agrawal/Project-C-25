
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject = new Paper(200,450,60);
	groundObject = new Ground(width/2,670,width,20);
	dustbinBottom = new Dustbin(1400,650,200,20);
	dustbinLeft = new Dustbin(1390,536,20,130);
	dustbinRight = new Dustbin(1580,536,20,130);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(180);
  
  paperObject.display();
  groundObject.display();
  dustbinBottom.display();
  dustbinLeft.display();
  dustbinRight.display();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:50,y:-50})
	}
}

