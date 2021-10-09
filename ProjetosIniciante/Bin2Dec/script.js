var binario = document.getElementById("Entrada");
var saida = document.getElementById("Saida")

console.log(binario)
console.log(saida)
function inverterString(s){
    let invertido='';
    let tam = s.length
    for(let i=0;i<tam;i++){
        invertido += s[tam-i-1]
    }
    return invertido
}

function testar(s){
    let tam = s.length;
    for(let i=0;i<tam;i++){
        if(s[i] !== '0' && s[i] !== '1'){
            alert("Entre apenas 0 ou 1");
            return false
        }
    }
    return true;
}
function BinarioParaDecimal(s){
    let valor=0;
    let u=0;
    let str = inverterString(s)
    for(let i=0;i<str.length;i++){
        u = +str[i]
        valor+= u*(Math.pow(2,i));
        console.log(valor)
    }
    console.log(valor)
    return valor;
}

function Confirmar(){
    if(testar(binario.value))
    {
        saida.innerHTML = BinarioParaDecimal(binario.value)
    }
}