let canvas = document.querySelector("canvas")
let c = canvas.getContext("2d")
canvas.height = innerHeight
canvas.width = innerWidth
console.log("hello")
let b1 = new Body(220,300,25,1)
let b2 = new Body(220,450,25,1)
b1.vel = new Vector(6,0)
b2.vel = new Vector(-6,0)
function animate(){
  requestAnimationFrame(animate)
  c.clearRect(0,0,canvas.width, canvas.height)
  b1.update()
  b2.update()
  b1.draw(c)
  b2.draw(c)
}

animate()
