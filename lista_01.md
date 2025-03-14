# Instruções

- Faça uma cópia deste arquivo .md para um repositório próprio
- Resolva as 8 questões objetivas assinalando a alternativa correta e **justificando sua resposta.**
- Resolva as 2 questões dissertativas escrevendo no próprio arquivo .md
- Lembre-se de utilizar as estruturas de código como `` esta aqui com `  `` ou

````javascript
//esta aqui com ```
let a = "olá";
let b = 10;
print(a);
````

- Resolva as questões com uso do Visual Studio Code ou ambiente similar.
- Teste seus códigos antes de trazer a resposta para cá.
- Cuidado com o uso de ChatGPT (e similares), pois entregar algo só para ganhar nota não fará você aprender. Não seja dependente da máquina!
- Ao final, publique seu arquivo lista_01.md com as respostas em seu repositório, e envie o link pela Adalove.

# Questões objetivas

**1) Considerando a execução do código abaixo, indique a alternativa correta e justifique sua resposta.**

```javascript
console.log(x);
var x = 5;
console.log(y);
let y = 10;
```

**Alternativa correta: a) A saída será undefined seguido de erro**

**Justificativa:** No código, há o uso das palavras-chave `var` e `let` para a declaração de variáveis. No JavaScript, as variáveis declaradas como `var` são movidas para o topo do escopo antes da execução do código e, por isso, não acontece um erro na primeira linha. Apesar de serem movidas para o topo do escopo, apenas a declaração é içada, e não a atribuição. Isso significa que, no momento da execução de `console.log(x)`, `x` já existe, mas seu valor é `undefined`.

Já as variáveis declaradas com `let`, apesar de também serem içadas, não são inicializadas com `undefined` e ficam em um estado chamado _Temporal Dead Zone_ até que a atribuição ocorra. Ao tentar acessar `y` antes da linha `let y = 10;`, ocorre um erro de referência (_ReferenceError_).

**2) O seguinte código JavaScript tem um erro que impede sua execução correta. Analise e indique a opção que melhor corrige o problema. Justifique sua resposta.**

```javascript
function soma(a, b) {
  if (a || b === 0) {
    return "Erro: número inválido";
  }
  return a + b;
}
console.log(soma(2, 0));
```

**Alternativa correta: d) Remover completamente a verificação if (a || b === 0)**

**Justificativa:** No código atual, existe uma tentativa incorreta de verificar se algum dos parâmetros é igual a zero. No JavaScript, a expressão `b === 0` é verificada primeiro, retornando `true` ou `false`. Em seguida, ocorre a operação lógica `a OU (resultado de b === 0)`. Isso significa que, se `a` for um valor "truthy", a condição será sempre verdadeira, caindo sempre no bloco de código dentro do `if`: `return "Erro: número inválido";`.

As demais alternativas, com exceção da `d)`, tentam corrigir a verificação construída de forma incorreta, tentando verificar corretamente se um dos números é igual a `0` e, se sim, dizer que o número é inválido e não prosseguir com a soma `2 + 0`.

Como o objetivo é apenas somar `a + b`, não faz sentido abortar a soma quando um dos dois for `0`. Por isso, basta remover a verificação.

---

**3) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**

```javascript
function calcularPreco(tipo) {
  let preco;

  switch (tipo) {
    case "eletrônico":
      preco = 1000;
    case "vestuário":
      preco = 200;
      break;
    case "alimento":
      preco = 50;
      break;
    default:
      preco = 0;
  }

  return preco;
}

console.log(calcularPreco("eletrônico"));
```

**Alternativa correta: b) O código imprime 200.**

**Justificativa:** No código atual, a estrutura `switch` não possui um `break` após o primeiro caso (`case "eletrônico":`). No JavaScript, quando um `case` é verdadeiro, a execução continua para os próximos `case`, a menos que haja uma interrupção explícita com `break`.

Ao chamar `calcularPreco("eletrônico")`, o programa entra no `case "eletrônico"` e atribui `1000` à variável `preco`. No entanto, como não há `break`, a execução continua para o `case "vestuário"`, onde `preco` é redefinido para `200`. Somente então o `break` interrompe a execução, retornando `200`.

As demais alternativas estão incorretas, pois `preco` não permanece com o valor `1000`, nem chega ao `case "alimento"`, e o código não gera erro. Para corrigir o problema e garantir que `"eletrônico"` retorne `1000`, basta adicionar um `break` após cada `case`.

---

**4) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**

```javascript
let numeros = [1, 2, 3, 4, 5];

let resultado = numeros
  .map((x) => x * 2)
  .filter((x) => x > 5)
  .reduce((a, b) => a + b, 0);

console.log(resultado);
```

**Alternativa correta: d) 24**

**Justificativa:**

1. O método `map((x) => x * 2)` atribui um novo array para a variável `resultado` com os valores da variável `numeros` multiplicados por `2`, resultando em `[2, 4, 6, 8, 10]`.
2. O método `filter((x) => x > 5)` filtra apenas os valores maiores que `5`, resultando em `[6, 8, 10]`.
3. Por fim, o método `reduce((a, b) => a + b, 0)` soma todos esses valores, iniciando em `0` e obtendo `6 + 8 + 10 = 24`.

Portanto, a saída exibida no console é **24**.

---

**5) Qual será o conteúdo do array lista após a execução do código? Indique a alternativa correta e justifique sua resposta.**

```javascript
let lista = ["banana", "maçã", "uva", "laranja"];
lista.splice(1, 2, "abacaxi", "manga");
console.log(lista);
```

**Alternativa correta:** **c) ["banana", "abacaxi", "manga", "laranja"].**

**Justificativa:** O método `splice` modifica o array original removendo e inserindo elementos. No código fornecido, a chamada `lista.splice(1, 2, "abacaxi", "manga")` inicia a alteração a partir do índice `1`, removendo dois elementos (`"maçã"` e `"uva"`) e inserindo `"abacaxi"` e `"manga"` no lugar. Dessa forma, o array final será `["banana", "abacaxi", "manga", "laranja"]`.

---

**6) Abaixo há duas afirmações sobre herança em JavaScript. Indique a alternativa correta e justifique sua resposta**

I. A herança é utilizada para compartilhar métodos e propriedades entre classes em JavaScript, permitindo que uma classe herde os métodos de outra sem a necessidade de repetir código.  
II. Em JavaScript, a herança é implementada através da palavra-chave `extends`.

**Alternativa correta:** **b) As duas afirmações são verdadeiras, mas a segunda não justifica a primeira.**

**Justificativa:** A primeira afirmação está correta ao indicar que a herança permite compartilhar métodos e propriedades entre classes, evitando a repetição de código. A segunda afirmação também é correta ao afirmar que, em JavaScript, a herança é implementada com a palavra-chave `extends`. Contudo, a utilização de `extends` é apenas uma característica sintática da implementação de herança em classes, e não um fundamento que justifique o conceito exposto na primeira afirmação.

---

**7) Dado o seguinte código. Indique a alternativa correta e justifique sua resposta.**

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

class Funcionario extends Pessoa {
  constructor(nome, idade, salario) {
    super(nome, idade);
    this.salario = salario;
  }

  apresentar() {
    super.apresentar();
    console.log(`Meu salário é R$ ${this.salario}.`);
  }
}
```

I) A classe Funcionario herda de Pessoa e pode acessar os atributos nome e idade diretamente.  
II) O método `apresentar()` da classe Funcionario sobrepõe o método `apresentar()` da classe Pessoa, mas chama o método da classe pai usando `super`.  
III) O código não funciona corretamente, pois Funcionario não pode herdar de Pessoa como uma classe, já que o JavaScript não suporta herança de classes.

Quais das seguintes afirmações são verdadeiras sobre o código acima?

**Alternativa correta: a) I e II são verdadeiras.**

**Justificativa:** A classe `Funcionario` estende a classe `Pessoa`, o que garante acesso direto a `nome` e `idade` sem a necessidade de declará-los novamente, validando a primeira afirmação. Além disso, o método `apresentar()` de `Funcionario` sobrepõe o método da classe-pai, mas recorre a `super.apresentar()` para aproveitar a implementação original, confirmando a segunda afirmação. Por fim, o JavaScript dá suporte a herança de classes, o que torna a terceira afirmação falsa.

---

**8) Analise as afirmações a seguir. Indique a alternativa correta e justifique sua resposta.**

**Asserção:** O conceito de polimorfismo em Programação Orientada a Objetos permite que objetos de diferentes tipos respondam à mesma mensagem de maneiras diferentes.  
**Razão:** Em JavaScript, o polimorfismo pode ser implementado utilizando o método de sobrecarga de métodos em uma classe.

**Alternativa correta: b) A asserção é verdadeira e a razão é falsa.**

**Justificativa:** O polimorfismo realmente permite que objetos diferentes respondam à mesma chamada (ou “mensagem”) de maneiras distintas, caracterizando a afirmação como verdadeira. Já a razão está incorreta porque o JavaScript não possui um sistema de **sobrecarga de métodos**. Em JavaScript, a última definição de um método com o mesmo nome simplesmente sobrescreve as anteriores, não havendo suporte nativo para múltiplas assinaturas de métodos na mesma classe.

---

# Questões dissertativas

9. O seguinte código deve retornar a soma do dobro dos números de um array, mas contém erros. Identifique os problema e corrija o código para que funcione corretamente. Adicione comentários ao código explicado sua solução para cada problema.

```javascript
function somaArray(numeros) {
  for (i = 0; i < numeros.size; i++) {
    soma = 2 * numeros[i];
  }
  return soma;
}
console.log(somaArray([1, 2, 3, 4]));
```

```javascript
function somaArray(numeros) {
  // Problema 1: A variável soma não estava sendo inicializada
  // Solução: Inicializar soma com 0 para acumular os valores
  let soma = 0;

  // Problema 2: A variável i não tinha declaração (let/var/const)
  // Problema 3: Arrays em JavaScript usam .length, não .size
  // Solução: Usar let para declarar i e corrigir para .length
  for (let i = 0; i < numeros.length; i++) {
    // Problema 4: A soma estava sendo substituída, não acumulada
    // Solução: Usar += para acumular a soma do dobro de cada número
    soma += 2 * numeros[i];
  }
  return soma;
}

console.log(somaArray([1, 2, 3, 4])); // Resultado: 20 (2*1 + 2*2 + 2*3 + 2*4)
```

---

10. Crie um exemplo prático no qual você tenha duas classes:

- Uma classe `Produto` com atributos `nome` e `preco`, e um método `calcularDesconto()` que aplica um desconto fixo de 10% no preço do produto.
- Uma classe `Livro` que herda de `Produto` e modifica o método `calcularDesconto()`, aplicando um desconto de 20% no preço dos livros.

Explique como funciona a herança nesse contexto e como você implementaria a modificação do método na classe `Livro`.

```javascript
// Classe base Produto
class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  calcularDesconto() {
    // Aplica desconto fixo de 10%
    return this.preco * 0.1;
  }

  precoComDesconto() {
    return this.preco - this.calcularDesconto();
  }
}

// Classe Livro que herda de Produto
class Livro extends Produto {
  constructor(nome, preco, autor) {
    // Chama o construtor da classe pai
    super(nome, preco);
    // Adiciona propriedades específicas de Livro
    this.autor = autor;
  }

  // Sobrescreve o método calcularDesconto
  calcularDesconto() {
    // Aplica desconto de 20% para livros
    return this.preco * 0.2;
  }
}

// Exemplo de uso
const produto = new Produto("Caderno", 50);
const livro = new Livro("O Senhor dos Anéis", 100, "J.R.R. Tolkien");

console.log(`Produto: ${produto.nome} - Preço: R$${produto.preco}`);
console.log(`Desconto: R$${produto.calcularDesconto()} (10%)`);
console.log(`Preço com desconto: R$${produto.precoComDesconto()}`);

console.log(`\nLivro: ${livro.nome} - Preço: R$${livro.preco}`);
console.log(`Desconto: R$${livro.calcularDesconto()} (20%)`);
console.log(`Preço com desconto: R$${livro.precoComDesconto()}`);
```

**Explicação sobre o código**

A classe `Produto` representa um item genérico, possuindo atributos básicos (`nome` e `preco`) e definindo um método `calcularDesconto()` que aplica uma taxa fixa de 10% sobre o preço. Essa classe ainda oferece o método `precoComDesconto()`, o qual subtrai o valor retornado por `calcularDesconto()` do preço original.

A classe `Livro` é declarada com `extends Produto`, o que significa que herda de `Produto`. Essa herança permite que `Livro` tenha acesso aos atributos e métodos definidos em `Produto`, como `nome`, `preco` e `precoComDesconto()`. Contudo, a classe `Livro` sobrescreve (`override`) o método `calcularDesconto()` para aplicar um desconto diferente, de 20%. Isso é possível graças ao polimorfismo, pois cada tipo de produto pode implementar descontos de forma específica.

Para construir instâncias de `Livro`, chama-se o construtor da superclasse por meio de `super(nome, preco)`, garantindo que os atributos herdados sejam inicializados corretamente. Assim, uma instância de `Livro` possui tanto as características gerais de `Produto` quanto as particularidades de `Livro` (como o autor e o desconto de 20%).
