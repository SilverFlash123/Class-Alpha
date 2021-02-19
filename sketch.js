var fixedRect, movingRect,alpha,beta,gama,theta;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 // fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;

  alpha = createSprite(100,100,50,80);
  alpha.shapeColor = "green";

  beta = createSprite(200,100,50,80);
   beta.shapeColor = "green";

  gama = createSprite(300,100,50,80);
   gama.shapeColor = "green";

   theta= createSprite(400,100,50,80);
   theta.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 
  if (isTouching(theta,movingRect)){
    movingRect.shapeColor = "white";
    theta.shapeColor = "white";
  }
  else{
    movingRect.shapeColor = "green";
    theta.shapeColor = "green";
  }


  drawSprites();
}

