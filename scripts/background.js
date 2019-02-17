function Background(x, y, w, h) {
  //Physical properties
  this.x = x; 
  this.y = y; 
  this.w = w; 
  this.h = h; 
}

//Draw call
Background.prototype.draw = function() {
  ctx.drawImage(bg, 0, 0, 480, 320, this.x, this.y, this.w, this.h);
}

//Update Call
Background.prototype.update = function() {
  ctx.clearRect(this.x,this.y, this.w, this.h); 


}