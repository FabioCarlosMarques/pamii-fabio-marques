//Função que retorna tipos
function saudacao(nome: string): string {
     return `Olá, ${nome}!`;  // <- crase aqui

}

console.log(saudacao('Leandro'));

//Interface para objeto Usuário
interface Usuario {
    nome: string;
    idade: number;
    email?: string; // Opcional
}

//Utilizando a interface do usuário fica assim:
function exibirUsuario(usuario: Usuario): void {
    console.log(`Nome: ${usuario.nome}`); // usar crase ( ` )
    console.log(`Idade: ${usuario.idade}`); // usar crase ( ` )
}

exibirUsuario({ nome: 'Marcos', idade: 22 });

//Exemplo de uma função que retorna arrays e tem parametros opcionais
function listarNomes(nomes: string[]): void {
    nomes.forEach(nome => console.log(nome));
}

listarNomes(['Ana', 'Bruno', 'Carlos', 'Marisa']);