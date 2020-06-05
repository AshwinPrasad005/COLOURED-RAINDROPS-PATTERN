var raindrop1,raindrop2,raindrop3,raindrop4,raindrop5,raindrop6,raindrop7,raindrop8,engine,world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  raindrop1 = new GreenRaindrops(50,50,1,1);
  raindrop1.x = random(200,200);
  raindrop1.y = random(200,200);
  raindrop2 = new RedRaindrops(50,150,1,1);
  raindrop2.x = random(200,200);
  raindrop2.y = random(200,200);
  raindrop3 = new BlueRaindrops(50,250,1,1);
  raindrop3.x = random(200,200);
  raindrop3.y = random(200,200);
  raindrop4 = new OrangeRaindrops(50,350,1,1);
  raindrop4.x = random(200,200);
  raindrop4.y = random(200,200);
  raindrop5 = new GreenRaindrops(100,50,1,1);
  raindrop5.x = random(200,200);
  raindrop5.y = random(200,200);
  raindrop6 = new RedRaindrops(100,150,1,1);
  raindrop6.x = random(200,200);
  raindrop6.y = random(200,200);
  raindrop7 = new BlueRaindrops(100,250,1,1);
  raindrop7.x = random(200,200);
  raindrop7.y = random(200,200);
  raindrop8 = new OrangeRaindrops(100,350,1,1);
  raindrop8.x = random(200,200);
  raindrop8.y = random(200,200);
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