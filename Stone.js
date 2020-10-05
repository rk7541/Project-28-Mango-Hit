class Stone {
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restititution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius;
        this.image = loadImage("sprites/stone.png");
        World.add(world, this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        pop();
     }
}