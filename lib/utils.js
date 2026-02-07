const utils = {}

utils.lerp = (a, b, t) => {
  return a + (b - a) * t
}
utils.randInt = (min, max) => {
  return Math.floor(lerp(min, max, Math.random()))
}
utils.randomHexColor = () => {
  return "#"+randomInt(0,16_777_215).toString(16)
}
