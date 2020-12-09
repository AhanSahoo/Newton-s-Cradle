class Rope{
    constructor(bodyA,bodyB, pointB){
        var options = {
            bodyA: bodyA,
            bodyB : bodyB,
            pointB: pointB,
            
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    
    display(){
        push()
        stroke("white")
        var anchor1x=this.sling.bodyA.position.x
        var anchor1y=this.sling.bodyA.position.y
        var anchor2x=this.sling.bodyB.position.x+this.sling.pointB.x
        var anchor2y=this.sling.bodyB.position.y+this.sling.pointB.y
        line(anchor1x,anchor1y,anchor2x,anchor2y)
        pop()
        }
    }
    
