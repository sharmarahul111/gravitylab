let canvas = document.querySelector("canvas")
let c = canvas.getContext("2d")
canvas.width = innerWidth
canvas.height = innerHeight

let line = 280
let centre = {
  x: canvas.width/2,
  y: canvas.height/2-line*0.75
}
let bottomAngle = Math.PI*.5
let angle = Math.PI*.5
let g = .001
let v = .03

function animate() {
  requestAnimationFrame(animate)
  c.fillStyle = "rgba(50,50,50,1)"
  c.fillRect(0, 0, innerWidth, innerHeight)

  drawCentre(centre,10)
  drawLine()
  
  angle += v
  if(angle < bottomAngle){
    v+= g
  } else {
    v-= g
  }
}
animate()

function drawCentre(centre,r){
  c.beginPath()
  c.arc(centre.x, centre.y, r, 0, Math.PI*2);
  c.fillStyle = "#00ffd1"
  c.fill()
  c.stroke()
}
function drawLine(){
  c.beginPath()
  c.moveTo(centre.x, centre.y)
  let x = centre.x+line*Math.cos(angle)
  let y = centre.x+line*Math.sin(angle)
  c.lineWidth = 8
  c.lineTo(x,y)
  c.strokeStyle = "#00ffd1"
  c.stroke()
  drawCentre({x,y},40)
}
