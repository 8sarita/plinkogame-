class Particle{
    constructor(x,y,r){
    var options={
        restitution:0.4,
    }
    this.r= r ;
    this.body=Bodies.circle(x,y,this.r,options);

    if(this.body.position.x <80 && this.body.position.y < 500){
        score=score+1;
      }
      if(this.body.position.x <140 && this.body.position.y < 500){
        score=score+10;
      }
      if(this.body.position.x <600 && this.body.position.y < 600){
        score=score+4;
      }
      if(this.body.position.x <500 && this.body.position.y < 600){
        score=score+2;
      }
      if(this.body.position.x <420 && this.body.position.y < 600){
        score=score+20;
      }
      if(this.body.position.x <700 && this.body.position.y < 600){
        score=score+5;
      }

    this.color= color(random(0,255),random(0,255),random(0,255));
    World.add(world,this.body);
    

    }
    display(){
        var pos= this.body.position;
        var angle= this.body.angle;

        // push();
        // translate(pos.x,pos.y);
        // rotate(angle);
        
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);

        // pop();
    }
}