const isLetter = (char) => /^([a-z]|[A-Z])$/.test(char)
const isDigit = (char) => /^([0-9])$/.test(char)

module.exports = {
  isLetter,
  isDigit
}
