class Raindrops{
    constructor(x,y,width,height){
       var options={
        isStatic:false,
        density:1.0,
        friction:0.3
       }

       this.body = Bodies.rectangle(x,y,width,height,options);
       this.image = loadImage("699840-icon-37-raindrop-512.png");
    //    this.width = width
    //    this.height = height
       this.visibility = 255;
       World.add(world,this.body);
    }
    display(){
        //var angle = this.body.angle;
        pop();
        //translate(this.body.position.x,this.body.position.y);
        //rotate(angle);
        this.visibility = this.visibility - 10;
        tint(255,this.visibility);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        push();
    }
}