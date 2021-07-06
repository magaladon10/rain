const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world,maxdrops = 200
var drops = []
function preload(){
thunder1=loadImage("1.png") 
thunder2=loadImage("2.png")    
thunder3=loadImage("3.png")
thunder4=loadImage("4.png")

}

function setup(){
engine = Engine.create()    
world = engine.world
createCanvas(500,1200)
if(frameCount%100===0){
 for(var i=0;i<maxdrops;i++ ){
 drops.push(new Drops(random(40,460),random(40,460)))
 }

}
man = new Umbrella(200,500)

}

function draw(){
background("black")    
Engine.update(engine)

var rand=Math.round(random(1,4))
if(frameCount%100===0){
    thunder=createSprite(random(75,450),random(50,75),10,10);
    switch(rand){
        case 1:thunder.addImage(thunder1);
        break;
        case 2:thunder.addImage(thunder2);
        break;
        case 3:thunder.addImage(thunder3);
        break;
        case 4:thunder.addImage(thunder4);
        break;
        default:break;

    }
    thunder.scale = Math.random(0.8,0.8)
    thunder.lifetime = 50
}
for(var i=0;i<maxdrops;i++ ){
drops[i].display()
drops[i].update()

}
man.display()
drawSprites()
}   

