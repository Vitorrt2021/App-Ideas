var anoS = document.getElementById('anoS')
var mesS = document.getElementById('mesS')
var diasS = document.getElementById('diasS')
var horasS = document.getElementById('horasS')
var minutosS = document.getElementById('minutosS')
var segundosS = document.getElementById('segundosS')
var nomeS = document.getElementById('nomeS')

function time()
{
   
    setInterval(mostrar,1000)
}
function valores(i){
    let a = document.getElementById(i).value
    return +a;
}
function mostrar()
{
    let anoF = valores('ano')
    let mesF = valores('mes')
    let diaF = valores('dia')
    let horasF = valores('hora')
    let minutoF = valores('minuto')
    

    var hoje = new Date();
    hoje.setFullYear(2021)
    var fimAno = new Date(anoF, mesF-1, diaF, horasF, minutoF); // Seta dia e mês
    var msPorDia = 24 * 60 * 60 * 1000; // Quantidade de milisegundos por dia
    var diasRestantes = (fimAno.getTime() - hoje.getTime()) / msPorDia;
    
     
    nomeS.innerHTML =   document.getElementById('nome').value
    anoS.innerHTML = 'Anos restantes: ' + contarAnos(hoje.getFullYear(),fimAno.getFullYear()) 
    mesS.innerHTML =  'Meses restantes :' + contarMeses(hoje.getMonth(),fimAno.getMonth())
    diasS.innerHTML =  'Dias restantes :'+ Math.round(diasRestantes) 
    horasS.innerHTML = "Horas restantes: " + contarHoras(fimAno.getTime() - hoje.getTime())
    minutosS.innerHTML = "Minutos restantes: " + contarMinutos(fimAno.getTime() - hoje.getTime()) 
    segundosS.innerHTML = "Segundos restantes: " + contarSegundos(fimAno.getTime() - hoje.getTime())
     
}

function contarAnos(primeiro,ultimo){ 
    if(primeiro <= ultimo){
        return ultimo - primeiro;
    }
}

function contarMeses(primeiro,ultimo){
    if(primeiro <= ultimo){
        return ultimo - primeiro;
    }
    else{
        return (12-primeiro) + ultimo
    }
}

function contarHoras(tempo){
    let msHoras = 60 * 60 * 1000
    return Math.round(tempo/msHoras);
}

function contarMinutos(tempo){
    let msMinutos = 60 * 1000
    return Math.round(tempo/msMinutos);
}
function contarSegundos(tempo){
    let msSegundos = 1000
    return Math.round(tempo/msSegundos);

}
