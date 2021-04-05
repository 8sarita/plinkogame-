var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  
 
  //create 1st row of plinko objects
  for (var j = 15; j <=width-10; j=j+50) { 
    
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 15; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 15; j <=width-10; j=j+50) { 
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects

  for (var j = 15; j <=width-10; j=j+50) { 
    plinkos.push(new Plinko(j,375));
  }

 
  //create particle objects
  
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  stroke(random(0,255),random(0,255),random(0,255));
  strokeWeight(random(1,4));
  fill(random(0,255),random(0,255),random(0,255));
  text("SCORE: " + score,350,450);
  noStroke();
  
  if(frameCount %60===0){
    particles.push(new Particle(random(10,700),10,10));
  }
  //display the plinkos 
  
 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  
  //display the paricles 
  for (var g = 0; g < particles.length; g++) {
    particles[g].display();
  }
}