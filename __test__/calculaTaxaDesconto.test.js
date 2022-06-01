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

//New test cases
test('R$ 500.00 limit test case', () => {
  expect(calculaTaxaDesconto('ouro', 500)).toBe(15)
  expect(calculaTaxaDesconto('ouro', 500.01)).toBe(15)
  expect(calculaTaxaDesconto('ouro', 499.99)).toBe(15)

  expect(calculaTaxaDesconto('prata', 500)).toBe(15)
  expect(calculaTaxaDesconto('prata', 500.01)).toBe(15)
  expect(calculaTaxaDesconto('prata', 499.99)).toBe(10)

  expect(calculaTaxaDesconto('bronze', 500)).toBe(15)
  expect(calculaTaxaDesconto('bronze', 500.01)).toBe(15)
  expect(calculaTaxaDesconto('bronze', 499.99)).toBe(10)

  expect(calculaTaxaDesconto(null, 500)).toBe(15)
  expect(calculaTaxaDesconto(null, 500.01)).toBe(15)
  expect(calculaTaxaDesconto(null, 499.99)).toBe(10)
})

test('R$ 400.00 limit test case', () => {
  expect(calculaTaxaDesconto('ouro', 400)).toBe(15)
  expect(calculaTaxaDesconto('ouro', 400.01)).toBe(15)
  expect(calculaTaxaDesconto('ouro', 399.99)).toBe(15)

  expect(calculaTaxaDesconto('prata', 400)).toBe(10)
  expect(calculaTaxaDesconto('prata', 400.01)).toBe(10)
  expect(calculaTaxaDesconto('prata', 399.99)).toBe(10)

  expect(calculaTaxaDesconto('bronze', 400)).toBe(10)
  expect(calculaTaxaDesconto('bronze', 400.01)).toBe(10)
  expect(calculaTaxaDesconto('bronze', 399.99)).toBe(5)

  expect(calculaTaxaDesconto(null, 400)).toBe(10)
  expect(calculaTaxaDesconto(null, 400.01)).toBe(10)
  expect(calculaTaxaDesconto(null, 399.99)).toBe(5)
})

test('R$ 200.00 limit test case', () => {
  expect(calculaTaxaDesconto('ouro', 200)).toBe(15)
  expect(calculaTaxaDesconto('ouro', 200.01)).toBe(15)
  expect(calculaTaxaDesconto('ouro', 199.99)).toBe(15)

  expect(calculaTaxaDesconto('prata', 200)).toBe(10)
  expect(calculaTaxaDesconto('prata', 200.01)).toBe(10)
  expect(calculaTaxaDesconto('prata', 199.99)).toBe(10)

  expect(calculaTaxaDesconto('bronze', 200)).toBe(5)
  expect(calculaTaxaDesconto('bronze', 200.01)).toBe(5)
  expect(calculaTaxaDesconto('bronze', 199.99)).toBe(5)

  expect(calculaTaxaDesconto(null, 200)).toBe(5)
  expect(calculaTaxaDesconto(null, 200.01)).toBe(5)
  expect(calculaTaxaDesconto(null, 199.99)).toBe(0)
})
