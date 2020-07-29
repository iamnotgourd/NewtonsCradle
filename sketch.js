
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(600,200,400,20)
	bob1 = new Bob(450,500,40)
	bob2 = new Bob(530,500,40)
	bob3 = new Bob(610,500,40)
	bob4 = new Bob(690,500,40)
	bob5 = new Bob(770,500,40)
	string1 = new String(bob1.body,{x:450,y:200})
	string2 = new String(bob2.body,{x:530,y:200})
	string3 = new String(bob3.body,{x:610,y:200})
	string4 = new String(bob4.body,{x:690,y:200})
	string5 = new String(bob5.body,{x:770,y:200})
    


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  string1.display()
  string2.display()
  string3.display()
  string4.display()
  string5.display()
  roof.display()
  bob1.display()
  bob2.display();
  bob3.display()
  bob4.display()
  bob5.display()
  
 // console.log(mouseX)
  //console.log(mouseY)
  drawSprites();
 
}
function keyPressed(){
	console.log("hello")
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-505,y:-5})
		
	}
}




