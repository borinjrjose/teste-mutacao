const validarIdentificador = require('../src/validarIdentificador')

test("doesn't accept null values", () => {
  expect(validarIdentificador(null)).toBe(false)
})

test('length has to be between 1 and 6', () => {
  expect(validarIdentificador('')).toBe(false)
  expect(validarIdentificador('ajkl456')).toBe(false)
})

test("id can't start with digit", () => {
  expect(validarIdentificador('3fg')).toBe(false)
})

test("id can't contain special characters", () => {
  expect(validarIdentificador('jk*9')).toBe(false)
})

test('id can be composed of characters and digits', () => {
  expect(validarIdentificador('d')).toBe(true)
  expect(validarIdentificador('abc')).toBe(true)
  expect(validarIdentificador('j5ae')).toBe(true)
})
