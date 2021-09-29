var resultado = document.getElementById("Resultado");
var historico = document.getElementById("Historico");
var Valor ='';
var Valor1=0;
var Operação=0;


function clickNumero(n){
    Valor+=n;
    resultado.innerHTML = Valor;
}
function clickApagar(){
    Valor = Valor.slice(0, -1);
    resultado.innerHTML = Valor; 
}
function clickSomar(){
    Valor1 = +Valor;
    historico.innerHTML = Valor+' + ';
    Valor = '';
    resultado.innerHTML = Valor;
    Operação = 1;
}
function clickSubtrair(){
    Valor1 = +Valor;
    Valor1 = Valor1;
    historico.innerHTML = Valor+' - ';
    Valor = '';
    resultado.innerHTML = Valor;
    Operação = 2;
}
function clickMultiplicar(){
    Valor1 = +Valor;
    historico.innerHTML = Valor+' x ';
    Valor = '';
    resultado.innerHTML = Valor;
    Operação = 3;
}
function clickDividir(){
    Valor1 = +Valor;
    historico.innerHTML = Valor+' % ';
    Valor = '';
    resultado.innerHTML = Valor;
    Operação = 4;
}
function clickResultado(){
    let resposta = 0;
    Valor2 = +Valor;
    switch (Operação) {
        case 1:
            resposta = Valor1 + Valor2;
            historico.innerHTML = Valor1+' + '+Valor2 +' = '+resposta;  
            break;
        case 2:
            resposta = Valor1 - Valor2;
            historico.innerHTML = Valor1+' - '+Valor2 +' = '+resposta;  
            break;
        case 3:
            resposta = Valor1 * Valor2;
            historico.innerHTML = Valor1+' x '+Valor2 +' = '+resposta;  
            break;
        case 4:
            resposta = Valor1 / Valor2;
            historico.innerHTML = Valor1+' % '+Valor2 +' = '+resposta;  
            break;
    }   
    resultado.innerHTML = resposta;
    Valor1 = resposta;
    Valor = '';
}