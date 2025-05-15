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
while(anoNascimento == "" || isNaN(anoNascimento)){
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
contadorEstoqueVinho = 0

// função nome do vinho 
function Nome_Vinho(){
    let nomeVinho = prompt("digite o nome do vinho que você deseja cadastrar: ");
// Caso nome vinho vazio 
    while(nomeVinho == ""){
        alert("Falha, digite algo para cadastrar");
        nomeVinho = prompt("digite o nome do vinho que você deseja cadastrar: ");
    }
    return nomeVinho
}


// função tipo de vinho 
function Tipo_Vinho(){
    let tipoVinho = prompt(`Digite o tipo do seu vinho: \n - Vinho tinto \n - Vinho Rrse  \n - Vinho branco  \n - Vinho espumante `);
// Caso do tipo de vinho vazio 
    while (tipoVinho == ""){
        alert("Falha, digite o tipo de seu vinho ");
        tipoVinho = prompt(`Digite o tipo do seu vinho:\n - Vinho tinto \n - Vinho rose \n - Vinho branco  \n - Vinho espumante `); 
    }
    return tipoVinho
}


let safra = ""
// função tipo de  safra
function Safra_Vinho(){
    let safraVinho = prompt(`Qual ano da safra do vinho ? `);
    while (safraVinho == "" || isNaN(safraVinho)){
        alert("erro");
        safraVinho = prompt(`Qual ano da safra do vinho ? `);
    }
    if (safraVinho >= 2020){
        safra = "Safra de vinho jovem!";
    }
    else if (safraVinho >= 2015){
        safra = " Safra de vinho amadurecido!";
    }
    else{
        safra = "Safra de vinho antigo";      
    }
    return safraVinho
    return safra
}

// função estoque 
function Estoque_Vinho(){
    let estoqueVinho = prompt("Qual a quantidade de vinhos no estoque? ");

    while (estoqueVinho == "" || isNaN(estoqueVinho)){
        estoqueVinho = prompt("Qual a quantidade de vinhos no estoque? ");
    }

    if (estoqueVinho < 5){
        console.log("ESTOQUE BAIXO");
        contadorEstoqueVinho++
    }
    return estoqueVinho
}

// Função preço vinho 
function Preco_Vinho(){
    let precoVinho = prompt("Qual o preço do vinho reegistrado: ");

    while (precoVinho == "" || isNaN(precoVinho)){
        precoVinho = prompt("Qual o preço do vinho registrado: ");
    }
    return precoVinho
}



function Console_Vinhos(){
    alert("Seus dados foram registrados no console")
    console.log(`${nomeDoVinho} \n ${TipoDeVinho} \n ${SafraDoVinho} \n temos ${EstoqueDeVinho} vinhos no estoque \n R$ ${PrecoDoVinho}`);
}

const nomeDoVinho = Nome_Vinho();
const TipoDeVinho = Tipo_Vinho();
const SafraDoVinho = Safra_Vinho();
const EstoqueDeVinho = Estoque_Vinho();
const PrecoDoVinho = Preco_Vinho();


Console_Vinhos()
let i = 1
let antiga_safra = SafraDoVinho
while (true){
    let cadastrar = prompt("voce deseja cadatrar mais vinhos? s/n")
    while(cadastrar != "s" && cadastrar != "n"){
        alert("erro")
        cadastrar = prompt("voce deseja cadatrar mais vinhos? s/n")
    }
    if (cadastrar == "n"){
        console.log(`${i} vinhos cadastrados, \n ${contadorEstoqueVinho} vinhos com o estoque baixo `)
        break
    }
    i++
    const nomeDoVinho = Nome_Vinho();
    const TipoDeVinho = Tipo_Vinho();
    const SafraDoVinho = Safra_Vinho();
    const EstoqueDeVinho = Estoque_Vinho();
    const PrecoDoVinho = Preco_Vinho();
    if (SafraDoVinho < antiga_safra){
        antiga_safra = SafraDoVinho
    }
        
    console.log(`${nomeDoVinho} \n ${TipoDeVinho} \n ${SafraDoVinho} \n temos ${EstoqueDeVinho} vinhos no estoque \n R$ ${PrecoDoVinho}, Safra Mais antiga: ${antiga_safra}`);
    
}
