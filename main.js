//Não sei onde inserir para o input aceitar virgula no lugar do ponto
toLocaleString('pt-br',{style:'currency',currency:'BRL'})


function calccmv() {
    var precocusto = parseFloat(document.getElementById('custo').value);
    var precovenda = parseFloat(document.getElementById('venda').value);
    var ret = document.getElementById("resultado").value = (precocusto / precovenda)*100;
    
    if (ret < 0) 
    {alert("ERRO: Valor de Venda maior que o valor de Custo")

    document.getElementById('resultado').value =""}
}

function umreal() {
    parseFloat(document.getElementById("custo").value = "1.00");
    var bloq = document.getElementById('custo');
    bloq.disabled = true;
}

function aberto() {
    document.getElementById('custo').value = ""
    var bloq = document.getElementById('custo');
    bloq.disabled = false;
}

function calcmargem() {
    var precocusto = parseFloat(document.getElementById('custo').value);
    var precovenda = parseFloat(document.getElementById('venda').value);
    var alimp = parseFloat(document.getElementById('imposto').value);
    var alcom = parseFloat(document.getElementById('comissao').value);
    var algar = parseFloat(document.getElementById('garcom').value);
    var alcmv = parseFloat(document.getElementById("resultado").value = (precocusto / precovenda)*100);
    
    var totalvariavel = parseFloat(document.getElementById('totalcustovar').value = (alimp + alcom + algar + alcmv));
    var margemcontribuicao = parseFloat(document.getElementById('margemcontribuicao').value = 100 - totalvariavel)

    //Tentando colocar o IF para quando aliquota de comissão e garçom forem vazias ele entender como zero
    //consegui utilizar o if quando for algum número especifico, mas quando vazio da erro
    //if (algar === null){
    //    alert("Aliquota Garçom nulo")
    //}
}