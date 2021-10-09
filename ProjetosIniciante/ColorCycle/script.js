var body = document.getElementById('body')
var x= confirmar('x')
var y= confirmar('y')
var z= confirmar('z')

function confirmar(y){
    let a = document.getElementById(y)
    a = a.value 
    return a;
}
console.log(x+y+z)
function hex(){
    x.type ='';
    x= confirmar('x')
    y= confirmar('y')
    z= confirmar('z')

    body.style.backgroundColor = '#'+x+y+z
}

function rgb(){
    x= confirmar('x')
    y= confirmar('y')
    z= confirmar('z')
    console.log('rgb('+x+','+y+','+z+');')
    body.style.backgroundColor = 'rgb('+x+','+y+','+z+')'
    console.log('rgb('+x+','+y+','+z+');')
}