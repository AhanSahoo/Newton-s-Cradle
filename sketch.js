
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,200,400,30)
	bob = new Bob(250,450,20)
	bob1 = new Bob(300,450,20)
	bob2 = new Bob(350,450,20)
	bob3 = new Bob(400,450,20)
	bob4 = new Bob(450,450,20)
	bob5 = new Bob(500,450,20)
	bob6 = new Bob(550,450,20)
	Engine.run(engine);
   rop1 = new Rope(bob.body,roof.body,{x:-6,y:0})
   rop2 = new Rope(bob1.body,roof.body,{x:-4,y:0})
   rop3 = new Rope(bob2.body,roof.body,{x:-2,y:0})
   rop4 = new Rope(bob3.body,roof.body,{x:0,y:0})
   rop5 = new Rope(bob4.body,roof.body,{x:2,y:0})
   rop6 = new Rope(bob5.body,roof.body,{x:4,y:0})
   rop7 = new Rope(bob6.body,roof.body,{x:6,y:0})
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  roof.display();
  bob.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  rop1.display()
  rop2.display()
  rop3.display()
  rop4.display()
  rop5.display()
  rop6.display()
  rop7.display()
}
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(bob.body,bob.body.position,{x:10,y:-50})
	}
}



