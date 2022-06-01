const calculaTaxaDesconto = require('../src/calculaTaxaDesconto')

test('ouro discount is 15%', () => {
  expect(calculaTaxaDesconto('ouro', 500.01)).toBe(15)
  expect(calculaTaxaDesconto('ouro', 450.0)).toBe(15)
  expect(calculaTaxaDesconto('ouro', 220.0)).toBe(15)
  expect(calculaTaxaDesconto('ouro', 190.0)).toBe(15)
})

test('prata min discount is 10% and purchases above R$ 500.00 are 15%', () => {
  expect(calculaTaxaDesconto('prata', 550.0)).toBe(15)
  expect(calculaTaxaDesconto('prata', 430.0)).toBe(10)
  expect(calculaTaxaDesconto('prata', 300.0)).toBe(10)
  expect(calculaTaxaDesconto('prata', 5.0)).toBe(10)
})

test('bronze min discount is 5%, purchases above R$ 400.00 are 10% and above R$ 500.00 are 15%', () => {
  expect(calculaTaxaDesconto('bronze', 5000.0)).toBe(15)
  expect(calculaTaxaDesconto('bronze', 499.99)).toBe(10)
  expect(calculaTaxaDesconto('bronze', 300.0)).toBe(5)
  expect(calculaTaxaDesconto('bronze', 10.0)).toBe(5)
})

test('users without a valid type rely on the purchase value for a discount', () => {
  expect(calculaTaxaDesconto(null, 1000.0)).toBe(15)
  expect(calculaTaxaDesconto(null, 450.0)).toBe(10)
  expect(calculaTaxaDesconto(null, 240.0)).toBe(5)
  expect(calculaTaxaDesconto(null, 100.0)).toBe(0)
})
