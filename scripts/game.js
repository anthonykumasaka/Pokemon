// GLOBALS

//Establish the screen 
var canvas = document.getElementById('canvas'); 
var ctx = canvas.getContext('2d'); 

//var bg = document.getElementById('bg'); 
//canvasContext.drawImage(bg, 0, 0, 1024, 576)

ctx.font = 'bold 56px Comic Sans MS'; 
ctx.fillStyle = 'white'; 
ctx.textAlign = 'center';
ctx.lineWidth = 2; 
ctx.strokeStyle = 'black'; 

//load sprites into a global variable 
var ash = document.getElementById('ash'); 

//objects 
var player = new Ash(32, 240, 256/4, 256/4); 

//Inputs 

//handle keyboard inputs - Based on JS even listener loop
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 39) {
    player.moveRight(); 
  }
  if (event.keyCode === 37) {
    player.moveLeft(); 
  }
  if (event.keyCode === 38) {
    player.moveUp(); 
  }
  if (event.keyCode === 40) {
    player.moveDown(); 
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
  ctx.clearRect(ash.x, ash.y, ash.w, ash.h);

  //DRAW FOREGROUND 
  player.draw(); 

  //RECURSIVE LOOP -call itself 
  window.requestAnimationFrame(gameLoop); 
}

//Entry Point 
gameLoop(); //Call it once and start the game!