class Vector {
  static dot(v1, v2) {
    return v1.x * v2.x + v1.y * v2.y
  }
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  mag() {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }
  unit() {
    if (this.mag) {
      return new Vector(this.x / this.mag, this.y / this.mag)
    } else return new Vector(0, 0)
  }
  add(v1) {
    return new Vector(this.x + v1.x, this.y + v1.y)
  }
  sub(v1) {
    return new Vector(this.x - v1.x, this.y - v1.y)
  }
  mult(s) {
    return new Vector(this.x * s, this.y * s)
  }
  normal() {
    return new Vector(-this.y, this.x)
  }
  angle() {
    return Math.atan2(this.y, this.x)
  }
}
