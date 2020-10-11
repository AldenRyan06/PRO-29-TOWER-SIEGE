
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	bg = loadImage("bg.png")
}

function setup() {
	createCanvas(1600, 700);

    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(600,300,500,10);
  ground1 = new Ground(1200,500,500,10);
	shooter = new Shooter(100,265)
    slingShot = new SlingShot(shooter.body,{x:100,y:265});


   box1 = new Box(500,290)
   box2 = new Box(550,290)
   box3 = new Box(600,290)
   box4 = new Box(650,290)
   box5 = new Box(700,290)
   
   box6 = new Box1(555,280)
   box7 = new Box1(605,280)
   box8 = new Box1(655,280)

   box9 = new Box2(575,270)
   box10 = new Box2(625,270)
 
   box11 = new Box3(600,260)
  
   box12 = new Box(1100,490)
   box13 = new Box(1150,490)
   box14 = new Box(1200,490)
   box15 = new Box(1250,490)
   box16 = new Box(1300,490)

   box17 = new Box1(1155,480)
   box18 = new Box1(1205,480)
   box19 = new Box1(1255,480)

   box20 = new Box2(1175,470)
   box21 = new Box2(1225,470)

   box22 = new Box3(1200,460)


	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(bg);
  ground.display();
  ground1.display()
  shooter.display()
  slingShot.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()
  box22.display()
  
  
  drawSprites();
  
  
}
function mouseDragged(){
	Matter.Body.setPosition(shooter.body,{x:mouseX,y:mouseY});
 
  }
  function mouseReleased(){
   slingShot.fly()
  
  }
  function keyPressed(){
    if (keyCode === 32){
      slingShot = new SlingShot(shooter.body,{x:175,y:465});
    }
  }
 