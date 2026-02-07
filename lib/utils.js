const utils = {}

utils.lerp = (a, b, t) => {
  return a + (b - a) * t
}
utils.randInt = (min, max) => {
  return Math.floor(utils.lerp(min, max, Math.random()))
}
utils.randomHexColor = () => {
  return "#"+utils.randInt(0,16_777_215).toString(16)
}
