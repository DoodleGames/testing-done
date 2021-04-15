const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myworld, myengine, ground, ball;


function setup() {
  createCanvas(400,400);
  myengine = Engine.create();
  myworld = myengine.world;
  var groundOptions = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,380,400,10,groundOptions);
  World.add(myworld,ground);
  var ballOptions = {restitution: 1.5}
  ball = Bodies.circle(200,200,30,ballOptions);
  World.add(myworld,ball);
}

function draw() {
  background("black");  
  Engine.update(myengine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS);
  fill ("red");
  ellipse(ball.position.x,ball.position.y,30,30);
}