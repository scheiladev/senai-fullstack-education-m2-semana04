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
