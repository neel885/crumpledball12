
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;
var Ground;
var Dustbin;

function preload()
{
  	
}

function setup() {
	createCanvas(1000,700);

	 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
     
	Engine.run(engine);

	paperObject = new paper(100,height-55,30 );
	Ground = new ground(width/2,height-35,width,10);
	Dustbin = new dustbin(100,300);


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  keyPressed();

  paperObject.display();
  Ground.display();
  Dustbin.display();
   
  drawSprites();
 
}
function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
	  Matter.Body.applyForce(paperObject.body , paperObject.body.position , {x:85 , y:-85});
	}
}



