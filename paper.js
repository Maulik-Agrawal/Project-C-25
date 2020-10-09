class Paper{
    constructor(x, y, r){
        var options={
            isStatic: false,
            restitution: 0.6,
            friction: 0,
            density: 1.2
        }
        this.image = loadImage("paper.png");
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r/2, options);
        World.add(world,this.body);
    }
    display()
    {
        push()
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill(255,0,255);
        image(this.image,0,0,this.r,this.r);
        //ellipse(0,0,this.r,this.r);
        pop();
    }
}