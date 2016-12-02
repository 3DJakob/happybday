window.requestAnimFrame = function () {
  return window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60)
  }
}

var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

var cw = window.innerWidth
var ch = window.innerHeight

var fireworks = []
var particles = []
var hue = 120

var limiterTotal = 5
var limiterTick = 0
var timerTotal = 5
var timerTick = 0

var mouseDown = false
var mx
var my

canvas.width = cw
canvas.height = ch

function random (min, max) {
  return Math.random() * (max - min) + min
}

function calculateDistance (p1x, p1y, p2x, p2y) {
  var xDistance = p1x - p2x
  var yDistance = p1y - p2y
  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
}

function Firework (sx, sy, tx, ty) {
  this.x = sx
  this.y = sy

  //  starting
  this.sx = sx
  this.sy = sy

  //  target
  this.tx = tx
  this.ty = ty

  this.distanceToTarget = calculateDistance(sx, sy, tx, ty)

  //  Calculate trail positions
  this.distanceTraveled = 0
  this.coordinates = []
  this.coordinateCount = 3

  while (this.coordinateCount--) {
    this.coordinates.push([this.x, this.y])
  }
  this.angle = Math.atan2(ty - sy, tx - sx)
  this.speed = 2
  this.acceleration = 1.05
  this.brightness = random(50, 70)

  //  Cicle indicator
  this.targetRadius = 1
}

Firework.prototype.update = function (index) {

}

Firework.prototype.draw = function () {

}
//  create particle
function Particle (x, y) {

}

Particle.prototype.update = function (index) {

}

Particle.prototype.draw = function() {

}

//  create particle explosion
function createParticles (x, y) {

}

function loop() {
  requestAnimFrame(loop)

  //  Draw fireworks
  var i = fireworks.length
  while (i--) {
    particles[i].draw()
    particles[i].update(i)
  }

  //  Launch automatic
  if (timerTick >= timerTotal) {
    if (!mousedown) {
      // TARGETING HERE!
    }
  }
}

canvas.addEventListener('mousemove', function(e){

})

canvas.addEventListener('mousedown', function(e) {

})

canvas.addEventListener('mouseup', function(e) {

})

window.onload = loop
