class Raindrops{
    constructor(x,y,width,height){
       var options={
        restituition:3
       }
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width
       this.height = height
    }
    display(){
        var angle = this.body.angle
        pop();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rectMode(CENTER)
        rect(this.body,this.body.position.x,this.body.position.y,width,height);
        push();
    }
}