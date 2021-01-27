class Drops{
    constructor(x,y,){
        var options = {
           friction: 0.1
        }
        this.radius = 5;
        this.drop=Bodies.circle(x,y,this.radius,options);
        World.add(world,this.drop);
        
    }
    display(){
        ellipseMode(CENTER);
        var pos;
        pos=this.drop.position;
        fill("white");
        ellipse(pos.x,pos.y,this.radius);
    }
    update(){
        if(this.drop.position.y>height){
            Matter.Body.setPosition(this.drop,{x:(random(0,400)),y:(random(0,400))})
        }
    }
}