# SENAI Fullstack [Education]

## Resolução dos exercícios da Semana 04 - Módulo 02

### M2S04 | Ex 1 - Soma de Elementos

Crie um array de `numeros`. Calcule e imprima a soma de todos os elementos do array. Utilize o **reduce** para realizar a soma.

### M2S04 | Ex 2 - Filtragem de Elementos

Crie um array chamado `pares` que contenha apenas os números pares do array `numeros` criado no exercício anterior. Em seguida, imprima esse novo array no console. Utilize o método **filter** para realizar a operação de filtragem.

### M2S04 | Ex 3 - Mapeamento de Elementos

Utilizando o array `numeros` utilizado nos exercícios anteriores, crie um novo array chamado `quadrados` que contenha o quadrado de cada número do array `numeros`. Imprima o array `quadrados` no console. Use o método **map** para realizar a criação de um novo array.

### M2S04 | Ex 4 - Criando classe Produto

Crie uma classe chamada **Produto** com os seguintes atributos:

- nome
- preço
- quantidade

Crie um construtor para a classe **Produto** que permita receber os valores base para cada um dos parâmetros.

### M2S04 | Ex 5 - Criando método Vender

Crie um método para a classe **Produto** chamado de **Vender()**.

Este método deve receber como parâmetro a **quantidade vendida** e deve reduzir (deduzir) da quantidade do produto. Porém, para ser possível essa venda a **quantidade vendida** não pode ser maior que a **quantidade** disponível.

Caso não haja quantidade suficiente, exiba uma mensagem de “Estoque insuficiente”.

### M2S04 | Ex 6 - Criando método Repor

Crie um método chamado **Repor()** dentro da classe **Produto**.

Este método deve receber como parâmetro a **quantidade reposta** e adicionar o montante à **quantidade** do produto.

### M2S04 | Ex 7 - Criando método MostrarEstoque

Crie um método chamado de **MostrarEstoque()** dentro da classe **Produto**.

Este método deve exibir uma mensagem parecida com a seguinte:

- “O produto CANETA BIC AZUL possui 5 unidades disponíveis”

### M2S04 | Ex 8 - Criando método AtualizarPreco

Crie um método chamada de **AtualizarPreco** dentro da classe **Produto**.

Este método deve receber como parâmetro o **novo valor** do produto e atualizar o preço atual.
