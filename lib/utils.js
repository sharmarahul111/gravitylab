const utils = {}

utils.lerp = (a, b, t) => {
  return a + (b - a) * t
}
utils.randInt = (min, max) => {
  return Math.floor(lerp(min, max, Math.random()))
}
