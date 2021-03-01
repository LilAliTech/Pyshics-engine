
// World, Bodies, Engine

// MAtter.Engine, Matter.World,Matter.Bodies

// Namespacing - nicknames

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,box,ground;
var ground_options;
var box_options;
var Circle;
var Circle_options;

function setup() {

  createCanvas(1200,800);

  engine = Engine.create(); // Matter.Engine.create()
  world = engine.world;

  // JSON Format 
  ground_options = {
    isStatic : true
  }
  
  box_options = {
    restitution : 2.5
  }

  Circle_options = {
    restitution : 2.5
  }
  ground = Bodies.rectangle(600,650,1200,10,ground_options); // x,y,width,height
  World.add(world,ground); 
box = Bodies.rectangle(100,200,30,30,box_options);
World.add(world,box);
Circle = Bodies.circle(160,200,30, Circle_options);
World.add(world, Circle);
  console.log(ground);
  
}


function draw() {
  background(0); 
  Engine.update(engine); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1200,10);
  rect(box.position.x,box.position.y,30,30);
  ellipseMode(CENTER);
  ellipse(Circle.position.x, Circle.position.y,30,30);
}