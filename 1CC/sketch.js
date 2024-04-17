function setup() {
  createCanvas(600, 400);
  background("rgb(82,224,218)");//função para pintar o fundo
}

function draw() {
  stroke("#5C2CB1");//altera a cor da borda do desenho 
  fill("#E91E63");//altera cor do preenchimento do desenho


if(mouseIsPressed) {
  
  rect(mouseX,mouseY,80,40);
     }
  }