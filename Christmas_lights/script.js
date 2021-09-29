var frase = "Bom dia!!";
setInterval(trocar, 1000);

function trocar(){
    for(let i=1;i<17;i++){
        let a = sortear();
        let b = sortear();
        let c = sortear();
        document.getElementById(i).style.backgroundColor = 'rgb('+a+','+b+','+c+')';
    }
}

function sortear(){
    let a = Math.floor(Math.random() * 257)
    let b = '';
    b +=a;
    return b;
}