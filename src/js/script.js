// Nome 
var nome = prompt("digite seu nome:");
// Caso do nome vazio 
if (nome == ""){
    alert("Falha, digite algo para continuar");
    var nome = prompt("digite seu nome:");
}
// idade 
var anoNascimento = prompt("digite seu ano de nascimento: ");
const idade = 2025 - anoNascimento;
// Caso da idade vazio 
if(anoNascimento = ""){
    alert("Falha, digite algo para continuar");
    var anoNascimento = prompt("digite seu ano de nascimento: ");
}
// Caso menor de idade 
else if (idade < 18){
    alert(`Você é menor de idade volte em ${18 - idade} anos`);
}

else{
    alert("Cadastro realizado! Veja os detalhes no console.");
    console.log(`Bem vindo ${nome} voce tem ${idade} anos `);
}
// detalhes dos vinhos 

// Nome do vinho 
var nomeVinho = prompt("Qual o nome do seu vinho? ");

// Caso do nome do vinho vazio 
if (nomeVinho == " "){
    alert("Falha, digite o nome de seu vinho ");
    var nomeVinho = prompt(` - Vinho tinto \n - Vinho Rose \n - Vinho Branco `); 
}
alert("A seguir, veja os detalhes do vinho no console.");
console.log(nomeVinho);

// Tipo de vinho
var tipoVinho = prompt(`Digite o tipo do seu vinho: \n - Vinho tinto \n - Vinho Rose  \n - Vinho Branco `);

// Caso do tipo de vinho vazio 
if (tipoVinho == " "){
    alert("Falha, digite o tipo de seu vinho ");
    var tipoVinho = prompt(` - Vinho tinto \n - Vinho Rose \n - Vinho Branco `); 
}
alert("A seguir, veja os detalhes do vinho no console.");
console.log(tipoVinho);

// Tipo de  safra
var safraVinho = prompt(`Qual ano da safra do vinho ? `);

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
var estoqueVinho = prompt("Qual a quantidade de vinhos no estoque? ");

if (estoqueVinho < 5){
    console.log("ESTOQUE BAIXO");
}
alert("A seguir, veja os detalhes do vinho no console.");
console.log(estoqueVinho);

// informaçoes juntas
console.log(`nome do vinho é ${nomeVinho}, o tipo de vinho é ${tipoVinho}, e a safra de seu vinho é ${safraVinho}, a quantidade é de ${estoqueVinho} vinhos no estoque `);
   