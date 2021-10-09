var frase = "Bom dia!!";
var fa = setInterval(trocar, 1000);
var kl =  setInterval(brilhar, 1000)
clearInterval(kl)
clearInterval(fa)

function Festa(){
    clearInterval(kl)
    fa = setInterval(trocar, 1000);
}
function Intensidade(){
    clearInterval(fa)
    var kl =  setInterval(brilhar, 1000)
}

function trocar(){
    for(let i=1;i<17;i++){
        let a = sortear();
        let b = sortear();
        let c = sortear();
        document.getElementById(i).style.backgroundColor = 'rgb('+a+','+b+','+c+')';
    }
}
function intensidade(){
    let k = Math.random()
    return k;
}
function brilhar(){
    let a = sortear();
    let b = sortear();
    let c = sortear();
    for(let i=1;i<17;i++){
            
        let k = intensidade()
        console.log(k)
        document.getElementById(i).style.backgroundColor = 'rgb('+a+','+b+','+c+','+k+')';
    }
}

function sortear(){
    let a = Math.floor(Math.random() * 257)
    let b = '';
    b +=a;
    return b;
}