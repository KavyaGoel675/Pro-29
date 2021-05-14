const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
  createCanvas(1200,600);
 

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine)

  ground = new Ground(600,580,1200,20);

  ground2 = new Ground(450,360,360,20);
  ground3 = new Ground(900,400,200,10);

  polygon = new Polygon(150,200,40,40);

  launcher = new Slingshot(polygon.body,{x:150, y:110})
  
  
  block1 = new Block(370,275,40,50);
  block2 = new Block(410,275,40,50);
  block3 = new Block(450,275,40,50);
  block4 = new Block(490,275,40,50);
  block5 = new Block(530,275,40,50);
  block6 = new Block(330,275,40,50);
  block7 = new Block(570,275,40,50);
  block8 = new Block(370,235,40,50);
  block9 = new Block(410,235,40,50);
  block10 = new Block(450,235,40,50);
  block11 = new Block(490,235,40,50);
  block12 = new Block(530,235,40,50);
  block13 = new Block(410,195,40,50);
  block14 = new Block(450,195,40,50);
  block15 = new Block(490,195,40,50);
  block16 = new Block(450,155,40,50);

  b1 = new Block(900,275,30,40);
  b2 = new Block(900,315,30,40);
  b3 = new Block(870,315,30,40);
  b4 = new Block(930,315,30,40);
  b5 = new Block(900,355,30,40);
  b6 = new Block(870,355,30,40);
  b7 = new Block(840,355,30,40);
  b8 = new Block(930,355,30,40);
  b9 = new Block(960,355,30,40);
  


}

function draw() {
  background(55,43,43);
  ground.display();
  ground2.display();
  ground3.display();
  fill("cyan");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("red");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
fill("white");
  block13.display();
  block14.display();
  block15.display();
  fill("yellow");
  block16.display(); 

fill("white")
  b1.display();
  fill("green")
  b2.display();
  b3.display();
  b4.display();
  fill("yellow")
  b5.display();
 
  b6.display();
  b7.display();
  b8.display();

  b9.display();

  polygon.display();

  launcher.display();
  drawSprites();
}

function mouseDragged()  {
  Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY})
}

function mouseReleased()  {
  launcher.fly()
  

}

function keyPressed()  {
  if(keyCode===32)  {
    Matter.Body.setPosition(polygon.body,{x:150, y:200})
    launcher.attach(polygon.body);

  }

}