var fixedRect, movingRect, colorNumber;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  fixedRect.velocityX=6;
  fixedRect.velocityY=5;
  colorNumber=0;
}

function draw() {
  if(colorNumber%2===0){
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  else{
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";   
  }
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(fixedRect,movingRect)) {
    bounceOff(fixedRect);
    colorNumber=colorNumber+1;
  }
  drawSprites();
}
