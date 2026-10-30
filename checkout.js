// ===== SEÇÃO 1: CARRINHO (laços de repetição) =====

function calcularSubtotal(itens) {
  // TODO
}

function contarItens(itens) {
  // TODO
}


// ===== SEÇÃO 2: CUPOM (estruturas condicionais) =====

function aplicarCupom(subtotal, codigoCupom) {
  let cupom
  if (codigoCupom === 'DESC10'){
    cupom = subtotal * 0.10
  }else if(codigoCupom === 'DESC20', subtotal <= 200) {
    cupom = subtotal * 0.20
  } else if(codigoCupom === 'FRETEGRATIS') {
    cupom = subtotal - 15
  } else {
    cupom = 0
    console.log('cupom, inválido')
  }
  return cupom 
}


// ===== SEÇÃO 3: CHECKOUT (integração) =====

function finalizarCompra(itens, codigoCupom) {
  let subtotal = calcularSubtotal(itens);
  let desconto = aplicarCupom(subtotal, codigoCupom)
  let total = (subtotal - desconto)
  return { subtotal: subtotal, desconto: desconto, total: total };
}


// ===== SEÇÃO 4: TESTES =====

const itens = [
  { nome: "Camiseta", preco: 50, quantidade: 2 },
  { nome: "Tênis", preco: 150, quantidade: 1 }
];
console.log(finalizarCompra(itens, "DESC10"));