function Ash(x, y, w, h) {
  this.x = x; 
  this.y = y; 
  this.w = w; 
  this.h = h; 
  this.frame = 0; 

  //unsure if following variables go below 
  this.left = false; 
  this.right = false;
  this.down = false;
  this.up = false; 
  this.pause = true;  

  this.trackRight = 2; 
  this.trackLeft = 1;
  this.trackDown = 0; 
  this.trackUp = 3; 

  this.pressed = false;

  this.srcX = 0; 
  this.srcY = 0; 

  this.cols = 4; 
  this.rows = 4; 

  //ticks?
  this.tickCount = 0; 
  this.frameIndex = 0; 
  this.ticksPerFrame = 4; 
}

Ash.prototype.draw = function() {
  ctx.drawImage(ash, this.srcX, this.srcY, this.w, this.h, this.x, this.y, this.w, this.h); 
}

Ash.prototype.update = function () {
  ctx.clearRect(this.x,this.y, this.w, this.h); 
  this.tickCount += 1;

  if (this.tickCount > this.ticksPerFrame) {
    this.frame = ++this.frame % this.cols; /// 1 % 4 = 1, 2 % 8 = 2... 8 % 5 = 0
    this.srcX = this.frame * this.w; 
    this.tickCount = 0; 
  }

  //this.frame = ++this.frame % this.cols; /// 1 % 4 = 1, 2 % 8 = 2... 8 % 5 = 0
 // this.srcX = this.frame * this.w; 
  if(this.left && this.pressed === true) {
    this.x -= 2; 
    this.srcY = this.trackLeft * this.h; 
  } else if (this.right && this.pressed === true) {
    this.x += 2;
    this.srcY = this.trackRight * this.h;
  } else if (this.up && this.pressed === true) {
    this.y -= 2;
    this.srcY = this.trackUp * this.h; 
  } else if (this.down && this.pressed === true) {
    this.y += 2; 
    this.srcY = this.trackDown * this.h; 
  } else if (this.pause) { 
    
    this.srcX = 0;  
  }
}

Ash.prototype.moveRight = function () {
 this.pressed = true; 
  this.right = true; 
  this.left = false; 
}

Ash.prototype.moveLeft = function () {
 this.pressed = true; 
  this.left = true; 
  this.right = false; 
}

Ash.prototype.moveDown = function () {
 this.pressed = true; 

  this.down = true; 
  this.up = false; 
  this.right = false; 
  this.left = false; 
}

Ash.prototype.moveUp = function () {
 this.pressed = true; 

  this.down = false; 
  this.up = true; 
  this.right = false; 
  this.left = false; 
}

Ash.prototype.movePause = function () {
  this.pause = false;
  this.right = false; 
  this.left = false; 
  this.down = false; 
  this.up = false;  
}