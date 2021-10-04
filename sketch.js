let numX = 4;
let numY = 7;
let nb;

function setup() {
  createCanvas(400, 400);
  
  
  nb = new ourBall(width/2,height/2,50)
  // for loop
  for (let i=0;i<numX;i=i+1){
  for (let j=0;j<numY;j=j+1){
                //circle(i*width/numX+width/numX/2,j*height/numY+height/numY/2,20);
    }
  }
  
}

function draw() {
  background(220);
  nb.display();
  
  //
}
  //物件導向模式
class ourBall{
  //建構類別需要的參數
  constructor(x,y,s){
    this.x = x;
    this.y = y;
    this.size = s;
    this.dx = 4
    this.dy = -5
  
}
  //能力 method()
  display(){
    this.run();
    this.bounce();
  
    circle(this.x, this.y, this.size);
    
  }
  run(){
    this.x = this.x + this.dx;
    this.y = this.y + this.dy; 
  }
  bounce(){
    if(this.y - this.size/2 < 0){this.dy = -1*this.dy}
    if(this.x - this.size/2 < 0){this.dx = -1*this.dx}
    if(this.y + this.size/2 > height){this.dy = -1*this.dy}
    if(this.x + this.size/2 > width){this.dx = -1*this.dx}
}
}