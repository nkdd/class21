var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(200,100,50,70);
  fixedRect = createSprite(200,350,70,50);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
 // movingRect.velocityY = 3;
 // fixedRect.velocityY = -3;
}


function draw() {
  background(255,255,255); 
  movingRect.x = mouseX;
  movingRect.y = mouseY; 
// bounceOff(movingRect,fixedRect);
if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}

  edges = createEdgeSprites();
  movingRect.bounceOff(edges);
  fixedRect.bounceOff(edges);
  drawSprites();
}
