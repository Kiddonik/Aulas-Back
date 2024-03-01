const readline = require('readline-sync');
const produtos = []

function listar(){
    produtos.forEach(produto => 
        console.log(produto.nome, '-', produto.preco)
    );
}

function criar() {
    const nome = readline.question("Entre com o nome do produto: ");
    const preco = readline.question("Entre com o preço do produto: ");
    const novo = {nome, preco};
    produtos.push(novo);

}

function buscar(){
    const nome = readline.question("entre com o nome do produto: ");
    const buscou = produtos.find(produto => produto.nome === nome);
    if (buscou) {
        console.log(buscou.nome, '-', buscou.preco)
    } else {
        console.log("Produto não localizado");
    }
}

function menu() {

    console.log("1. Listar")
    console.log("2. Criar")
    console.log("3. Buscar")
    console.log("4. Atualizar")
    console.log("5. Remover")
    console.log("6. Sair")

}

function escolherOpcao(opcao){
 switch(opcao){

  case "1": listar(); 
  break;
  case "2": criar();
  break;
  case "3": buscar()
    break;
  case "4": break;
  case "5": break;
  case "6": process.exit(0);
  default: console.log("Opção invaldida");

 }
}

function main() {
    while(true){
        menu();
        const opcao = readline.question("Entre com uma opção: ");
        escolherOpcao(opcao);

    }
}

main();