const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg;

var ground;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;

var ball, rope;
function preload() {
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(3800,800);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(800, 700, 1600, 30);

    box1 =  new Box(1100, 100, 50, 50);
    box2 =  new Box(1100, 100, 50, 50);
    box3 =  new Box(1100, 100, 50, 50);
    box4 =  new Box(1100, 100, 50, 50);
    box5 =  new Box(1100, 100, 50, 50);
    box6 =  new Box(1100, 100, 50, 50);

    box7 =  new Box(1000, 100, 50, 50);
    box8 =  new Box(1000, 100, 50, 50);
    box9 =  new Box(1000, 100, 50, 50);
    box10 =  new Box(1000, 100, 50, 50);
    box11 =  new Box(1000, 100, 50, 50);
    box12 =  new Box(1000, 100, 50, 50);
    box13 =  new Box(1000, 100, 50, 50);

    box14 =  new Box(1200, 100, 50, 50);
    box15 =  new Box(1200, 100, 50, 50);
    box16 =  new Box(1200, 100, 50, 50);
    box17 =  new Box(1200, 100, 50, 50);
    box18 =  new Box(1200, 100, 50, 50);
    box19 =  new Box(1200, 100, 50, 50);
    box20 =  new Box(1200, 100, 50, 50);

    ball = new WBall(500, 300, 90);

    rope = new Rope(ball.body,{x:700, y:50});
}


function draw(){

    // add condition to check if any background image is there to add
    background(255);

    Engine.update(engine);

    // write code to display time in correct format here
    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();


    ball.display();
    
    rope.display();

}

function mouseDragged() {
    Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
}
