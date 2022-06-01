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

// New test cases
test('id limit case 6', () => {
  expect(validarIdentificador('abc123')).toBe(true)
  expect(validarIdentificador('abc12')).toBe(true)
  expect(validarIdentificador('abc1234')).toBe(false)
})

test('id limit case 1', () => {
  expect(validarIdentificador('b')).toBe(true)
  expect(validarIdentificador('bc')).toBe(true)
})
