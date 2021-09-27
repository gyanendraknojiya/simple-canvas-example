let canvas = document.getElementById("canvas");
let isDrawing = false;

const ctx = canvas.getContext("2d");

let penColor = "red";
const setPenColor = (color) => {
  penColor = color;
};

canvas.onmousedown = (e) => {
  isDrawing = true;
  ctx.strokeStyle = penColor;
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(e.layerX, e.layerY);
};

canvas.onmousemove = (e) => {
  if (isDrawing) {
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
  }
};

canvas.onmouseup = (e) => {
  isDrawing = false;
};

// resize the canvas to fill browser window dynamically
window.addEventListener("resize", resizeCanvas, false);
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
