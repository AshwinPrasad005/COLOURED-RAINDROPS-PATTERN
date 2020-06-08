var raindrop1,raindrop2,raindrop3,raindrop4,raindrop5,raindrop6,raindrop7,raindrop8,engine,world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  var canvas = createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  raindrop1 = new GreenRaindrops(0,0,1,1);
  raindrop1.x = random(50,750);
  raindrop1.y = random(50,750);
  raindrop2 = new RedRaindrops(0,0,1,1);
  raindrop2.x = random();
  raindrop2.y = random(50,750);
  raindrop3 = new BlueRaindrops(0,0,1,1);
  raindrop3.x = random(50,750);
  raindrop3.y = random(50,750);
  raindrop4 = new OrangeRaindrops(0,0,1,1);
  raindrop4.x = random(50,750);
  raindrop4.y = random(50,750);
  raindrop5 = new GreenRaindrops(0,0,1,1);
  raindrop5.x = random(50,750);
  raindrop5.y = random(50,750);
  raindrop6 = new RedRaindrops(0,0,1,1);
  raindrop6.x = random(50,750);
  raindrop6.y = random(50,750);
  raindrop7 = new BlueRaindrops(0,0,1,1);
  raindrop7.x = random(50,750);
  raindrop7.y = random(50,750);
  raindrop8 = new OrangeRaindrops(0,0,1,1);
  raindrop8.x = random(50,750);
  raindrop8.y = random(50,750);
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