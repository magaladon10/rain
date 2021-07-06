class Drops{
constructor(x,y){
var options ={
'restitution' : 2,
'friction' : 0.2
}
    this.rain = Bodies.circle(x,y,4,options)
    this.radius = 4
    World.add(world,this.rain)
}
display(){
fill("blue")
ellipseMode(CENTER)
ellipse(this.rain.position.x,this.rain.position.y,this.radius)
}
update(){
if(this.rain.position.y>height){
Matter.Body.setPosition(this.rain,{x:random(40,460),y:random(40,460)})

}

}


}