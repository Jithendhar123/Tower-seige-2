class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            restitution:0.9,
            friction:0.9,
            density:0.7
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
       
        World.add(world, this.body);
      }
      display(){
        var angle 
        push();
        strokeWeight(5);
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y, this.width, this.height);
        pop();
      }
}
/*class BaseClass{
    constructor(x, y, width, height) {
        var options = {
            restitution:0.8,
          
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
       
        World.add(world, this.body);
      }
      display(){
      
        push();
        strokeWeight(2);
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y, this.width, this.height);
        pop();
      }
}

*/ 