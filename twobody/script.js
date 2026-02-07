let canvas = document.querySelector("canvas")
let c = canvas.getContext("2d")

let b1 = new Body(300,300,20,1)
let b2 = new Body(400,400,20,1)
c.fillRect(0,0,400,400)
function animate(){
  requestAnimationFrame(animate)
  Body.bodies.forEach(b => b.draw(c))
}

animate()
