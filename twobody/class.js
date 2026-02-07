class Body {
  constructor(x, y, r, mass) {
    this.x = x
    this.y = y
    this.r = r
    this.mass = mass
    this.vel = new Vector()
    this.acc = new Vector(0, 0)
  }
  update() {
    // update code
  }
  draw(c) {
    c.beginPath()
    // c.arcTo(this.x, this.y.this.r, 0, Math.PI*2);
  }
}
