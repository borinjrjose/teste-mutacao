const calculaTaxaDesconto = (tipoCliente, valorCompra) => {
  let taxa = 0
  if (valorCompra >= 500 || tipoCliente === 'ouro') return 15
  else if (tipoCliente === 'prata' || valorCompra >= 400) taxa = 10
  else if (valorCompra >= 200 || tipoCliente === 'bronze') taxa = 5

  return taxa
}

module.exports = calculaTaxaDesconto
