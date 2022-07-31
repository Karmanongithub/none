
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ball;
var botGround;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball_options={
		isStatic: false,
		restitution: 0.2,
		friction:0,
		density:0.7,
	}

	ball= Bodies.circle(100,30,25,ball_options);
	World.add(world,ball);

	botGround= new Ground(width/2,670,width,20);
	leftGround= new Ground(520,600,20,120);
	rightGround= new Ground(720,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background(0);

  push()
  fill("yellow")
  botGround.display();
  leftGround.display();
  rightGround.display();
  pop();

  push();
  fill("white");
  ellipse(ball.position.x,ball.position.y,25);
  pop();
  
  if (keyCode === UP_ARROW){
	Force();
  }
  
  
  drawSprites();
 
}

function Force(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:1.2,y:-1.2});
}


