import readlineSync from "readline-sync";

let entidades = ['Materiais recicláveis', 'Coletores de materiais', 'Pontos de coleta', 'Produtos reciclados', 'Funcionários', 'Clientes'];
let metodos = ['Listagem de todos os registros', 'Listagem de um único registro com base em um parâmetro de rota', 'Inserção de um registro', 'Modificação de um registro', 'Deleção de um registro'];
let indexRota = null;
let rota = '/';
let indexMetodo = null;

function rotaEntidade () {
    indexRota = 0
    indexRota = readlineSync.keyInSelect(entidades, 'Selecione a entidade que quer interagir:');
    if (indexRota === 0) {
        rota += 'material'
    } else if (indexRota === 1) {
        rota += 'coletor'
    } else if (indexRota === 2) {
        rota += 'ponto'
    } else if (indexRota === 3) {
        rota += 'produto'
    } else if (indexRota === 4) {
        rota += 'funcionario'
    } else if (indexRota === 5) {
        rota += 'cliente'
    };
}

function rotaMetodo() {
    indexMetodo = 0
    indexMetodo = readlineSync.keyInSelect(metodos, 'Selecione o método de interação com a entidade:');
    if (indexMetodo === 0) {
        
    } else if (indexMetodo === 1) {

    } else if (indexMetodo === 2) {

    } else if (indexMetodo === 3) {

    } else if (indexMetodo === 4) {

    }
}


rotaEntidade()
console.log(rota)
rotaMetodo()

export default rota;


/* FOR ou while pra repetir o formulário após enviar o registro "perguntar se quer adicionar outro registro" repetir se não encerrar.
deixar estrutura dentro de um while para definir valor padrão para os inputs terminar execução do código
escolher entidade (define o valor rota "/"+"rota") > escolher o método (executa formulario metodo) V
. > formulário metodo (define valor dos inputs) > enviar  

métodos:
1. listagem: selecionar método, retornar listagem
2. filtrar por parametro de rota: ou seja usar rota/:'atributo(valor)' para enviar ao SELECT e retornar tabela-resultado
3. inserção de um registro: creat : post    --> 
4. modificação de um registro: update: put  --> 
5. deleção de um registro: delete: delete   --> 

Função pra tela inicial pra selecionar entidade (keyInSelect)
Função pra tela input de cada entidade

Menu (entidades ou encerrar) >
executar formulário (inputs e botão de retornar ao menu)>
*retornar menu escolha.
*inputs enviados -> perguntar: novo registro ou encerrar. */