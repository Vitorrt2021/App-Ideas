var CSV = document.querySelector("#entradaCSV")
var Json = document.querySelector("#saidaJSON")
var stringCSV = CSV.value;
var numeroLinhas = -1

// Não está funciona  

function Pegarlinhas(CSV){
    let linhas=[];
    let letras='';
    let cont=0;
    let cont2=0;
    for(let i=0;i<CSV.length;i++){

        if(cont==0 && CSV[i] == ' ' && i!==0 && i!==CSV.length){
            if(cont2==0){
                linhas[linhas.length] = ','
                cont2=1;
                numeroLinhas++
            }
        }
        else if(CSV[i] !==','){
            letras +=CSV[i];    
        }
        if(CSV[i] ==='"'){
            cont ++;
        }
        if(cont == 2){
            linhas[linhas.length] = letras;
            letras =''
            cont =0,cont2=0;
        }
    }
    linhas.splice(0, 1);
    return linhas
}

function passarJSON(){
    let linhas = Pegarlinhas(stringCSV)
    let chave=[]
    let i=0
    while(linhas[i] !== ','){
        chave[chave.length]=linhas[i]
        i++
    }    
    let j ='[';
    for(let l=0;l<numeroLinhas-1;l++){
        let valor=[];
        j+='{' 
        if(l===0){
            let h=1;
            do{
                valor[valor.length]=linhas[h+i]
                h++
            }while(linhas[h+i] !== ',')  
        }else{
            let h=0;
            while(linhas[h+(1+i)*(1+l)] !== ','){
                valor[valor.length]=linhas[h+((1+i)*(1+l))]
                h++
            }    
        }
        
        
        for(let k=0;k<i;k++){
            if(k === i-1){
                j+= chave[k]+':'
                j+= valor[k]
            }
            else{
                j+= chave[k]+':'
                j+= valor[k]+','
            }

        }
        if(l == numeroLinhas-2){
            j+='}'
        }
        else{
            j+='},'
        }

            
    }
    j +=']'
    return j;
}
function confirmar()
{
    Json.value = passarJSON()
}
    /*
[{"Id":"1","UserName":"Sam Smith"},
{"Id":"2","UserName":"Fred Frankly"},
{"Id":"1","UserName":"Zachary Zupers"}]

*/