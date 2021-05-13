const canvas = document.getElementById("canvas");

// document.addEventListener('keydown', logKey);

function logKey(e) {
  log.innerHTML += `<br>${e.code}`;
}

document.onkeydown = logKey;


// const canvas = document.getElementById("canvas");
let cWidth = canvas.width;
let cHeight = canvas.height;

const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.lineWidth = 1;

const third = (cHeight-20)/3

cWidth-(third*3 + 10)

ctx.moveTo(cWidth-(third*3 + 10)+20, third+10-15);
ctx.lineTo(cWidth-(10+20), third+10-15);

ctx.moveTo(cWidth-(third*3 + 10), third*2+10-20);
ctx.lineTo(cWidth-(10), third*2+10-20);

ctx.moveTo(cWidth-(third*2 + 10)+10, 10);
ctx.lineTo(cWidth-(third*2 + 10)-10, cHeight-10-5);

ctx.moveTo(cWidth-(third + 10)-10, 10);
ctx.lineTo(cWidth-(third + 10)+10, cHeight-10-5);

ctx.closePath();
ctx.stroke();


// xxxxxx okay real work starts here xxxx

function drawWindow() {
  ctx.beginPath();
  ctx.rect(0, 0, third, third);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();

  drawBaddie();
}

function drawBaddie(){
  ctx.beginPath();
  ctx.rect(5, third, third-10, third);
  ctx.fillStyle = "#9900FF";
  ctx.fill();
  ctx.closePath();

}

function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawWindow();
}

setInterval(draw, 10);



var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    
    x += dx;
    y += dy;
}

setInterval(draw, 10);