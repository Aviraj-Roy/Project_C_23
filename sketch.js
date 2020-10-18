var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;

var w1,w2,w3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() 
{
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

    w1=createSprite(width/2, height-50, 200, 20);
    w1.shapeColor=color("red");

    w2=createSprite(300, height-90, 20, 100);
    w2.shapeColor=color("red");

    w3=createSprite(500, height-90, 20, 100);
    w3.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
    
    w1 = Bodies.rectangle(width/2, 650, 200, 20 , {isStatic:true} );
    World.add(world, w1);
    
    w2 = Bodies.rectangle(300, height-90, 20, 100 , {isStatic:true} );
    World.add(world, w2);
    
    w3 = Bodies.rectangle(500, height-90, 20, 100 , {isStatic:true} );
	World.add(world, w3);

	Engine.run(engine);
 
	console.log(packageBody);
}


function draw() 
{
  rectMode(CENTER);
  background(0);
  
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y; 

  drawSprites();
  
  keyPressed();
}

function keyPressed() 
{
 if (keyCode === DOWN_ARROW) 
 {
    // Look at the hints in the document and understand how to make the package body fall only on
    Body.setStatic(packageBody,false);
 }
}


/*const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup()
{
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    
    var ball_options={
        restitution: 3
    }

    ball = Bodies.circle(200,200,20,ball_options);
    World.add(world,ball);

    console.log(ground);
    console.log(ball);
}

function draw()
{
    background(0);
    Engine.update(engine);

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 30 , 30);
}*/
