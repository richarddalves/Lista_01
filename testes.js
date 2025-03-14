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
