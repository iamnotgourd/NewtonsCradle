class String{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.4,
            length:300
        }
        this.bodyA = bodyA
        this.pointB = pointB
        this.string = Constraint.create(options)
        World.add(world,this.string)
    }
    display(){
        if(this.string.bodyA){
            var pointA = this.string.bodyA.position;
            var pointB = this.pointB;
          push()
        stroke("black")
        strokeWeight(3)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop()
        }
    }
}