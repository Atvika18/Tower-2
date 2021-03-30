class Slingshot
{
    constructor (body1, pointB){

        var options= {
bodyA: body1,

pointB:pointB,
length: 100,
stiffness: 0.04,
} 

    
  
this.rope =  Matter.Constraint.create(options) 
        World.add(world,this.rope)
    
}
attach (body)
{
this.rope.bodyA = body;
}

    fly(){
        this.rope.bodyA = null;
    }

display(){

    if(this.rope.bodyA){
    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.pointB;
    strokeWeight(7)


line(pointA.x, pointA.y,pointB.x, pointB.y );
}
}
    }
