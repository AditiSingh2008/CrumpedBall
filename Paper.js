class Paper{
  constructor(x,y,r){
      var options={
          restitution:0.8,
         density:3,
         friction:0.5,
         isStatic:false
      }
     
      this.x = x;
      this.y = y;
      this.r = r;
      //this.image = loadImage("")
      this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options);
      World.add(world,this.body);
  } 
  display(){
      var pos=this.body.position;
      push()
        translate(pos.x, pos.y);
        rectMode(CENTER)
        //strokeWeight(4);
        fill("purple")
        ellipseMode(CENTER);
        //image(this.image, 0,0,this.r, this.r)
        ellipse(0,0,this.r, this.r);
        pop()
  }
  }
    