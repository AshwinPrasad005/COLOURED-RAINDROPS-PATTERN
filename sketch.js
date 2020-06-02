var raindrop1,raindrop2,raindrop3,raindrop4,raindrop5,raindrop6,raindrop7,raindrop8,engine,world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  raindrop1 = new GreenRaindrops(50,50,10,70);
  raindrop2 = new RedRaindrops(50,150,10,70);
  raindrop3 = new BlueRaindrops(50,250,10,70);
  raindrop4 = new OrangeRaindrops(50,350,10,70);
  raindrop5 = new GreenRaindrops(100,50,10,70);
  raindrop6 = new RedRaindrops(100,150,10,70);
  raindrop7 = new BlueRaindrops(100,250,10,70);
  raindrop8 = new OrangeRaindrops(100,350,10,70);
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