class chain {
    constructor(bodyA,bodyB){
        var Options = {
            stiffness: 0.04,
            length: 10,
           bodyA: bodyA,
           bodyB: bodyB

        }
        this.chain = Constraint.create(Options);
        World.add(world,this.chain);
        
    }
    display(){
 var pointA = this.chain.bodyA.position;
 var pointB = this.chain.bodyB.position;
 strokeWeight(3);
 line(pointA.x,pointA.y,pointB.x,pointB.y);


    }
}
