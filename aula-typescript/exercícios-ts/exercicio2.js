// 1. Variáveis com tipos específicos
var produto = 'Mouse';
var preco = 59.90;
var disponivel = true;
console.log("Produto: ".concat(produto, " \u2013 Pre\u00E7o: R$").concat(preco, " \u2013 Dispon\u00EDvel: ").concat(disponivel ? 'Sim' : 'Não'));
// 2. Array de cidades + função listarCidades
var cidades = ['São Paulo', 'Rio de Janeiro', 'Curitiba', 'Salvador', 'Belo Horizonte'];
function listarCidades(cidades) {
    cidades.forEach(function (cidade) {
        console.log(cidade);
    });
}
listarCidades(cidades);
var meuLivro = {
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    anoPublicacao: 1954
};
function exibirLivro(livro) {
    console.log("T\u00EDtulo: ".concat(livro.titulo));
    console.log("Autor: ".concat(livro.autor));
    console.log("Ano de Publica\u00E7\u00E3o: ".concat(livro.anoPublicacao));
}
exibirLivro(meuLivro);
