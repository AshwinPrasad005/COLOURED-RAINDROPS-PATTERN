class BlueRaindrops extends Raindrops{
    constructor(x,y,width,height){
         super(x,y,width,height);
        // fill("blue");
        this.image = loadImage("699840-icon-37-raindrop-512.png");
    }
    display(){
        //super.display();
                var angle = this.body.angle;
                pop();
                translate(this.body.position.x,this.body.position.y);
                rotate(angle);
                if(this.body.position.y > 200){
                    this.visibility = this.visibility - 10;
                    tint(255,this.visibility);
                }
                imageMode(CENTER)
                image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
                push();
    }
};