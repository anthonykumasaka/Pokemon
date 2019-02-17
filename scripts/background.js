function Background(x, y, w, h, speed) {
  //Physical properties
  this.x = x; 
  this.y = y; 
  this.w = w; 
  this.h = h; 
  this.speed = speed; 
}

//Draw call
Background.prototype.draw = function() {
  ctx.drawImage(bg, 0, 0, 480, 320, this.x, this.y, this.w, this.h);
}