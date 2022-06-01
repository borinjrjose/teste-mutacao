const { isDigit, isLetter } = require('./checkDigitLetter')

const validarIdentificador = (id) => {
  if (id === null) return false
  if (id.length < 1 || id.length > 6) return false
  if (!isLetter(id.charAt(0))) return false

  for (let i = 1; i < id.length; i++) {
    const char = id.charAt(i)
    if (!isLetter(char) && !isDigit(char)) return false
  }

  return true
}

module.exports = validarIdentificador
