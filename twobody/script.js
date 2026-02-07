let canvas = document.querySelector("canvas")
let c = canvas.getContext("2d")
canvas.height = innerHeight
canvas.width = innerWidth
console.log("hello")
let b1 = new Body(100,100,25,1)
let b2 = new Body(250,250,25,1)
function animate(){
  requestAnimationFrame(animate)
  b1.draw(c)
  b2.draw(c)
}

animate()
