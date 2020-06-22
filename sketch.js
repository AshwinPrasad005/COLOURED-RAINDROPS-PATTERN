var raindrop1,raindrop2,raindrop3,raindrop4,raindrop5,raindrop6,raindrop7,raindrop8,engine,world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  var canvas = createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  raindrop1 = new GreenRaindrops(random(0,800),random(0,800),1,1);
  raindrop2 = new RedRaindrops(random(0,800),random(0,800),1,1);
  raindrop3 = new BlueRaindrops(random(0,800),random(0,800),1,1);
  raindrop4 = new OrangeRaindrops(random(0,800),random(0,800),1,1);
  raindrop5 = new GreenRaindrops(random(0,800),random(0,800),1,1);
  raindrop6 = new RedRaindrops(random(0,800),random(0,800),1,1);
  raindrop7 = new BlueRaindrops(random(0,800),random(0,800),1,1);
  raindrop8 = new OrangeRaindrops(random(0,800),random(0,800),1,1);
}

function draw() {
  background(80,80,80);
  Engine.update(engine); 
  drawSprites();
  raindrop1.display();
  raindrop2.display();
  raindrop3.display();
  raindrop4.display();
  raindrop5.display();
  raindrop6.display();
  raindrop7.display();
  raindrop8.display();
}