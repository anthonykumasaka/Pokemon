function Background(x, y, w, h) {
  //Physical properties
  this.x = x; 
  this.y = y; 
  this.w = w; 
  this.h = h; 
}

//Draw call
Background.prototype.draw = function() {
  ctx.drawImage(bg, this.x, this.y, 480, 320, this.x, this.y, 480, 360);
}

//Update Call
Background.prototype.update = function(x, y) {
  ctx.clearRect(this.x,this.y, this.w, this.h); 
  this.x = x; 
  this.y = y; 

}