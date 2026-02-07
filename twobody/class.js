class Body {
  static bodies = []
  constructor(x, y, r, mass) {
    this.pos = new Vector(x,y)
    this.r = r
    this.mass = mass
    this.color = utils.randomHexColor()
    this.vel = new Vector(0, 0)
    this.acc = new Vector(0, 0)
    Body.bodies.push(this)
  }
  force(b){
    let G = 8000
    let diffVec = this.pos.sub(b.pos).mult(-1)
    let scalar = G*this.mass*b.mass/(diffVec.mag()**3)
    return diffVec.mult(scalar)
  }
  update() {
    let netForce = new Vector(0,0)
    let b = Body.bodies
    for(let i=0;i<b.length;i++){
      if (b[i] == this) continue
      this.acc = this.acc.add(this.force(b[i]))
    }
    console.log(this.acc)
    this.vel = this.vel.add(this.acc)
    this.pos = this.pos.add(this.vel)
    this.acc = new Vector(0,0)

  }
  draw(c) {
    c.beginPath()
    c.arc(this.pos.x, this.pos.y,this.r, 0, Math.PI*2);
    c.fillStyle = this.color
    c.fill()
    c.stroke()

    // draw acc
    c.beginPath()
    c.moveTo(this.pos.x, this.pos.y)
    c.lineTo(this.pos.x+this.acc.x*20, this.pos.y+this.acc.y*20)
    c.strokeStyle = "red"
    c.stroke()
    c.beginPath()
    c.moveTo(this.pos.x, this.pos.y)
    c.lineTo(this.pos.x+this.vel.x*20, this.pos.y+this.vel.y*20)
    c.strokeStyle = "black"
    c.stroke()

  }
}
