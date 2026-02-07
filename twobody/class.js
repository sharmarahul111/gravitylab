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
  update() {
    let netForce = new Vector(0,0)
    let b = Body.bodies
    for(let i=0;i<b.length;i++){
      let r = this.pos.sub(b[i].pos)
      let mag = r.mag()
      let res = r.mult(this.mass*b[i].mass/mag**3)
      netForce.add(res)
    }
    this.pos.add(this.vel)
    this.vel.add(this.acc)

  }
  draw(c) {
    c.beginPath()
    c.arc(this.pos.x, this.pos.y,this.r, 0, Math.PI*2);
    c.fillStyle = this.color
    c.fill()
    c.stroke()
  }
}
