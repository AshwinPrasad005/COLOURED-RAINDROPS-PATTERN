class Raindrops{
    constructor(x,y,width,height){
       var options={
        isStatic:false,
        density:1.0,
        friction:0.3
       }
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width
       this.height = height
       World.add(world,this.body);
    }
    display(){
        //var angle = this.body.angle;
        pop();
        //translate(this.body.position.x,this.body.position.y);
        //rotate(angle);
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        push();
    }
}