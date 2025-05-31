// 1. Variáveis com tipos específicos
let produto: string = 'Mouse';
let preco: number = 59.90;
let disponivel: boolean = true;

console.log(`Produto: ${produto} – Preço: R$${preco} – Disponível: ${disponivel ? 'Sim' : 'Não'}`);

// 2. Array de cidades + função listarCidades
let cidades: string[] = ['São Paulo', 'Rio de Janeiro', 'Curitiba', 'Salvador', 'Belo Horizonte'];

function listarCidades(cidades: string[]): void {
    cidades.forEach(cidade => {
        console.log(cidade);
    });
}

listarCidades(cidades);

// 3. Interface Livro + função exibirLivro
interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

let meuLivro: Livro = {
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    anoPublicacao: 1954
};

function exibirLivro(livro: Livro): void {
    console.log(`Título: ${livro.titulo}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Ano de Publicação: ${livro.anoPublicacao}`);
}

exibirLivro(meuLivro);
