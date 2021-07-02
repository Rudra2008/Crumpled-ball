var box1,box2,box3;
var paper;
var engine,world;
var ground
var paper,trashcan;
var paperimage,trashcanimage;
function preload()
{
	paperimage=loadImage("paper.png");
  trashcanimage=loadImage("trashcan.png");
}

function setup() {
	createCanvas(800, 700);
  engine=Matter.Engine.create();
  world=engine.world;
  
	//Create the Bodies Here.
  var option={
	  isStatic:true
	  

  }
  ground=Matter.Bodies.rectangle(400,700,800,10,option)
Matter.World.add(world,ground)
	
var toption={
  isStatic:true
  

}
trashcan=Matter.Bodies.rectangle(500,650,20,20,toption)
Matter.World.add(world,trashcan)

  var options={
	  isStatic:false,
	  density:1.7

  }
  paper=Matter.Bodies.rectangle(20,600,20,20,options)
Matter.World.add(world,paper)
	
  
}


function draw() {
	Matter.Engine.update(engine)
  
  background("white");
  imageMode(CENTER)
  image(paperimage,paper.position.x,paper.position.y,40,40);
  image(trashcanimage,trashcan.position.x,trashcan.position.y,150,150);
  fill("brown")
  rect(ground.position.x,ground.position.y,800,10);
  
  
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper,paper.position,{x:16,y:-50})
  }
}



