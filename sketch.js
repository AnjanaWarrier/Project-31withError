const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var maxDrops = 100;
var drops=[];
var thunder, thunder1, thunder2, thunder3, thunder4;

function preload(){
thunder1 = loadImage("thunderbolt/1.png")
thunder2 = loadImage("thunderbolt/2.png")
thunder3 = loadImage("thunderbolt/3.png")
thunder4 = loadImage("thunderbolt/4.png")
    
}

function setup(){
    var canvas = createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;
    
   //ground = new Ground(200,700,700,5);
    
   thunder=createSprite(200,50,20,20) ;
  
   if(frameCount % 60===0){
    for(var i=0; i<maxDrops; i=i+1){
        drops.push(new Drops(random(0,400), random(0,400)))
    }
   }
   /* */
  
    
}

function draw(){
    background(0);
    Engine.update(engine);

  
       
        for(var i=0; i<maxDrops; i=i+1){
           drops[i].display();
          drops[i].update();
        }

    //drops.display();
    //ground.display();
    Thunder();
   
}   

function Thunder(){
    if(frameCount%60===0){
        var rand = Math.round(random(1,4));
    switch(rand) {
    case 1: thunder.addImage(thunder1);
          break;
     case 2: thunder.addImage(thunder2);
          break;
     case 3: thunder.addImage(thunder3);
          break;
     case 4: thunder.addImage(thunder4);
          break;
     default: break;
    }
  }
}