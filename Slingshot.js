class Slingshot {
constructor(bodyA,pointB){
 var options = {
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.04,
    length:10 
 }   
 this.pointB = pointB
this.Sling = Constraint.create(options)
this.Image1 = loadImage("sprites/sling1.png");
this.Image2 = loadImage("sprites/sling2.png");
this.Image3 = loadImage("sprites/sling3.png");


 World.add(world,this.Sling)
}
fly(){
  this.Sling.bodyA = null 
}
display(){
   image(this.Image1,200,20);
   image(this.Image2,170,20);
   
   if(this.Sling.bodyA){
strokeWeight(7)
var pointA = this.Sling.bodyA.position
var pointB = this.pointB
line (pointA.x,pointA.y,pointB.x-10,pointB.y)
line (pointA.x,pointA.y,pointB.x+30,pointB.y)
image(this.Image3,pointA.x-30,pointA.y-10,15,30)
}
}


}