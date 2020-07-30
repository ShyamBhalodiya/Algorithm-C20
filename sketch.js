var Mrect, Frect;

function setup() {
  createCanvas(800, 400);
  Mrect = createSprite(400, 200, 50, 50);
  Frect = createSprite(200, 200, 50, 50);
  Mrect.shapeColor = "red";
  Frect.shapeColor = "red";
}

function draw() {
  background(0);
  Mrect.y = mouseY;
  Mrect.x = mouseX;
  isTouching();

  drawSprites();
}
function isTouching() {
  if (Mrect.x - Frect.x < Mrect.width / 2 + Frect.width / 2
    && Frect.x - Mrect.x < Mrect.width / 2 + Frect.width / 2
    && Mrect.y - Frect.y < Mrect.height / 2 + Frect.height / 2
    && Frect.y - Mrect.y < Mrect.height / 2 + Frect.height / 2) {
    Mrect.shapeColor = "green";
    Frect.shapeColor = "green";
  } else {
    Mrect.shapeColor = "red";
    Frect.shapeColor = "red";
  }
}