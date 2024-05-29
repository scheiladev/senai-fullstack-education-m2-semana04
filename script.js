// Exercício 01
let numeros = [8, 34, 13, 7, 49, 22];

let soma = numeros.reduce((total, atual) => {
  return (total += atual);
}, 0);

console.log(soma);

// Exercício 02
let pares = numeros.filter((valor) => {
  if (valor % 2 == 0) {
    return true;
  } else {
    return false;
  }
});

console.log(pares);

// Exercício 03
let quadrados = numeros.map((valor) => {
  return valor * 2;
});

console.log(quadrados);

// Exercício 04
class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }
}

const produtoNovo = new Produto("Caneta Bic Azul", 1.5, 5);
