# amazingWeb
Amazing Web
https://meyriska.github.io/amazingWeb


https://editor.p5js.org/

let cx = 0;
let cy = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 120, 0); // Оранжевый фон
  fill(255); // Белый цвет круга
  stroke(125, 125, 125);
  line(0, 0, height, width)

}

function draw() {
  ellipse(sin(cx) * 150 + 300, cos(cy) * 150 + 300, 200);
  cx += 1;
  cy += 1;
  
}
