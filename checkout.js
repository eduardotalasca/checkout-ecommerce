// ===== SEÇÃO 1: CARRINHO (laços de repetição) =====

function calcularSubtotal(itens) {
  let subtotal = 0;
  for(let i=0;i < itens.length; i++) {
    subtotal += itens[i].preco * itens[i].quantidade;
  }
  return subtotal;
}

function contarItens(itens) {
  let total = 0 
    for (let i=0; i < itens.length; i++) {
      total += itens.quantidade;
    }
    return total;
}


// ===== SEÇÃO 2: CUPOM (estruturas condicionais) =====

function aplicarCupom(subtotal, codigoCupom) {

}


// ===== SEÇÃO 3: CHECKOUT (integração) =====

function finalizarCompra(itens, codigoCupom) {
  let subtotal = calcularSubtotal(itens);
  return { subtotal: subtotal, desconto: 0, total: 0 }; // TODO: integrar carrinho e cupom
}


// ===== SEÇÃO 4: TESTES =====

const itens = [
  { nome: "Camiseta", preco: 50, quantidade: 2 },
  { nome: "Tênis", preco: 150, quantidade: 1 }
];
console.log(finalizarCompra(itens, "DESC10"));