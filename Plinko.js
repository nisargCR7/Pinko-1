class Plinko{
    constructor(x,y,radius) {
        var options = {
            isStatic: true 
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world, this.body);
        
      }
      display(){
        fill(0,255,0)
        var pos =this.body.position;
       push();
        translate(pos.x,pos.y)
        ellipse(pos.x, pos.y,this.radius*2);
       pop();
    
      }
    
    }