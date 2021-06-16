class WBall{
    constructor(x, y, radius, angle) {
        var options = {
            'restitution':0.8,
            'frictionAir':0.01,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.r = radius;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(76);
        ellipseMode(CENTER);
        ellipse(0, 0, this.r, this.r);
        pop();
      }
}