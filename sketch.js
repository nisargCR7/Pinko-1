const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine
var world
var particles = [];
var plinkos = [];
var col = 5;
var row = 10;
var ground;
var rand = random(100,500)


function setup(){
  createCanvas(600,800);
  
  engine = Engine.create();
  world = engine.world;
  
  ground = new Roof(300,height,600,100);

newpar();

var spacing = width /row;
for (var j = 0;j< row;j++){
for (var i = 0;i< col;i++){
var x =  + i*spacing
if(j%2==0){
  x+= spacing/2
}
var y = spacing*5- j*spacing
var p = new Plinko(y,x,10)
plinkos.push(p);
}}
}


function draw(){
  background(51);
  Engine.update(engine);
 
  ground.display();
  
  if(frameCount % 20 ===  0){
    newpar();
  }
  
  
 console.log(rand)
  

for(var i=0 ; i<particles.length;i++){
  particles[i]. display();


}

for(var i=0 ; i<plinkos.length;i++){
  plinkos [i]. display();


} 


}


function newpar(){
  var p = new Particle(130,0,10)

  particles.push(p)
  
}
