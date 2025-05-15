/*
// Tipo de  safra
let safraVinho = prompt(`Qual ano da safra do vinho ? `);

if (safraVinho >= 2020){
    alert("Safra de vinho jovem!");
}
else if (safraVinho >= 2015){
    alert(" Safra de vinho amadurecido!");
}
else{
    alert("Safra de vinho antigo");      
}
alert("A seguir, veja os detalhes do vinho no console.");
console.log(safraVinho);

// Estoque de vinhos
let estoqueVinho = prompt("Qual a quantidade de vinhos no estoque? ");

if (estoqueVinho < 5){
    console.log("ESTOQUE BAIXO");
}
alert("A seguir, veja os detalhes do vinho no console.");
console.log(estoqueVinho);

// informaçoes juntas
console.log(`nome do vinho é ${nomeVinho}, o tipo de vinho é ${tipoVinho}, e a safra de seu vinho é ${safraVinho}, a quantidade é de ${estoqueVinho} vinhos no estoque `);
   */
// Educação do site 
function educacao(){
    const agora = new Date();
    const hora = agora.getHours();
    
   if (hora >= 5 && hora <12){
    alert("Bom Dia " + nome)
   }
   else if (hora >= 12 && hora < 18){
    alert("Boa tarde " + nome)
   }
   else{
    alert("Boa Noite " + nome)
   }
}
// Nome 
var nome = prompt("digite seu nome:");
// Caso do nome vazio (loop )
while (nome == ""){
    alert("Falha, digite algo para continuar");
    nome = prompt("digite seu nome:");
}
educacao()
// idade 
let anoNascimento = prompt("digite seu ano de nascimento: ");
const idade = 2025 - anoNascimento;
// Caso da idade vazio 
while(anoNascimento == ""){
    alert("Falha, digite algo para continuar");
    anoNascimento = prompt("digite seu ano de nascimento: ");
}
// Caso menor de idade 
if (idade >= 18){
    alert(`Entrada Autorizada `);
}
// Fechar o site caso o cara seja menor de idade
else{
    alert(`Você é menor de idade volte em ${18 - idade} anos`)
    window.close()
}
// inicio do cadastro de vinhos 
// função nome do vinho 
function NomeVinho(){
    let nomeVinho = prompt("digite o nome do vinho que você deseja cadastrar: ");
// Caso nome vinho vazio 
    while(nomeVinho == ""){
        alert("Falha, digite algo para cadastrar");
        nomeVinho = prompt("digite o nome do vinho que você deseja cadastrar: ");
    }
}
// função tipo de vinho 
function TipoVinho(){
    let tipoVinho = prompt(`Digite o tipo do seu vinho: \n - Vinho tinto \n - Vinho Rrse  \n - Vinho branco  \n - Vinho espumante `);
// Caso do tipo de vinho vazio 
    while (tipoVinho == ""){
        alert("Falha, digite o tipo de seu vinho ");
        tipoVinho = prompt(`Digite o tipo do seu vinho:\n - Vinho tinto \n - Vinho rose \n - Vinho branco  \n - Vinho espumante `); 
    }
}

// função tipo de  safra
function SafraVinho(){
    let safraVinho = prompt(`Qual ano da safra do vinho ? `);
    while (safraVinho == "" || isNaN(safraVinho)){
        alert("erro");
        safraVinho = prompt(`Qual ano da safra do vinho ? `);
    }
}
// função