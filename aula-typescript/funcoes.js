//Função que retorna tipos
function saudacao(nome) {
    return "Ol\u00E1, ".concat(nome, "!"); // <- crase aqui
}
console.log(saudacao('Leandro'));
//Utilizando a interface do usuário fica assim:
function exibirUsuario(usuario) {
    console.log("Nome: ".concat(usuario.nome)); // usar crase ( ` )
    console.log("Idade: ".concat(usuario.idade)); // usar crase ( ` )
}
exibirUsuario({ nome: 'Marcos', idade: 22 });
//Exemplo de uma função que retorna arrays e tem parametros opcionais
function listarNomes(nomes) {
    nomes.forEach(function (nome) { return console.log(nome); });
}
listarNomes(['Ana', 'Bruno', 'Carlos', 'Marisa']);
