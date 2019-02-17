// GLOBALS

//Establish the screen 
var canvas = document.getElementById('canvas'); 
var ctx = canvas.getContext('2d'); 
canvas.width = "480"; 
canvas.height = "320";

//var bg = document.getElementById('bg'); 
//canvasContext.drawImage(bg, 0, 0, 1024, 576)

ctx.font = 'bold 56px Comic Sans MS'; 
ctx.fillStyle = 'white'; 
ctx.textAlign = 'center';
ctx.lineWidth = 2; 
ctx.strokeStyle = 'black'; 

//load sprites into a global variable 
var ash = document.getElementById('ash'); 
let ashH = 256 / 4; 
let ashW = 256 / 4;
let ashX = (canvas.width / 2) - (ashW/2);
let ashY = (canvas.height / 2) - (ashH/2)
//objects 
var player = new Ash(ashX, ashY, ashW, ashH); 

//
var canvasX = 0; 
var canvasY = 0; 
// console.log(player.x)

//Inputs 

//handle keyboard inputs - Based on JS even listener loop
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 39) {
    player.moveRight(); 
    // canvasX -= 5; 
  }
  if (event.keyCode === 37) {
    player.moveLeft(); 
    // canvasX += 5; 
  }
  if (event.keyCode === 38) {
    player.moveUp(); 
    // canvasY += 5; 
  }
  if (event.keyCode === 40) {
    player.moveDown(); 
    // canvasY -= 5; 
  }
})

document.addEventListener('keyup', function(event) {
  player.pressed = false; 
}, false)


//Main Loop 
function gameLoop() {
  //UPDATE CALLS 
  player.update(); 
  
  //DRAW CALLS 
  //Clear sceen first 
  ctx.clearRect(player.x, player.y, player.w, player.h);
  
  //DRAW FOREGROUND 
  player.draw(); 

  // this.canvas.style.backgroundPosition = `${canvasX}px ${canvasY}px`; 
  console.log(player.x, player.y, player.w, player.y)


  //RECURSIVE LOOP -call itself 
  window.requestAnimationFrame(gameLoop); 
}

//Entry Point 
gameLoop(); //Call it once and start the game!