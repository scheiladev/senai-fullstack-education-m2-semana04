// Exercício 01

let numeros = [8, 34, 13, 7, 49, 22];

let soma = numeros.reduce((total, atual) => {
  return (total += atual);
}, 0);

console.log(soma);
