

function contarMoedas(){
    var dinheiro = document.querySelector('#dinheiro').value

    if(dinheiro => 1){
        let a = document.querySelector('#um')
        a.innerHTML =  Math.floor(dinheiro/1)
        dinheiro = dinheiro % 1 
    } 
    if(dinheiro => 0.5){
        let a = document.querySelector('#cinquenta')
        a.innerHTML =  Math.floor(dinheiro/0.5)
        dinheiro = dinheiro % 0.5 
    }
    
    if(dinheiro => 0.25){
        let a = document.querySelector('#vintecinco')
        a.innerHTML =  Math.floor(dinheiro/0.25)
        dinheiro = dinheiro % 0.25 
    } 
    if(dinheiro => 0.10){
        let a = document.querySelector('#dez')
        a.innerHTML =  Math.floor(dinheiro/0.1)
        dinheiro = dinheiro % 0.1
    }
    
    if(dinheiro => 0.05){
        let a = document.querySelector('#cincocentavos')
        a.innerHTML =  Math.floor(dinheiro/0.05)
        dinheiro = dinheiro % 0.05  
    } 
    if(dinheiro => 0.01){
        let a = document.querySelector('#umcentavo')
        a.innerHTML =  Math.floor(dinheiro/0.01)
        dinheiro = dinheiro % 0.01  
    }
}

