class Bird extends Baseclass{
    constructor(x, y) {
      
      super (x,y,50,50)
      this.image = loadImage ("sprites/bird.png")
      
    };
    display(){
      super.display();
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;

    };
  };
  