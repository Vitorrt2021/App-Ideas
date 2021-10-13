
const box = document.querySelector('.objeto');
const senha = document.querySelector('#senha')
const login = document.querySelector('#login')

function mudar(id, value) {
  if(id === 'x'){
    box.style.setProperty(`margin-left`, value + "vw" );
  }else{
    box.style.setProperty(`margin-top`, value + "vh" );      
  }
}
function confirmar(){
    if(
        
    chegarEspaco(document.querySelector('#login').value,'login')
    ||
    chegarEspaco(document.querySelector('#senha').value,'senha')
    ){
        alert("Não coloque espaços")
    }
    else{
        chegarValor()
    }
}
function resetar(){
    
    senha.style.setProperty(`background-color`, "white" );
    login.style.setProperty(`background-color`, "white" );
    document.querySelector("#senha").value = ''
    document.querySelector("#login").value = ''
}

function chegarValor(){
    let certo = true
    if(document.querySelector("#login").value.trim() !== 'login'){
        login.style.setProperty(`background-color`, "red" );
        certo = false
        alert("Login incorreto")
    }
    if(document.querySelector("#senha").value.trim() !== 'senha'){
        senha.style.setProperty(`background-color`, "red" );
        certo = false
        alert("Senha incorreta")
    }
    if(certo){
        senha.style.setProperty(`background-color`, "lawngreen" );
        login.style.setProperty(`background-color`, "lawngreen" );
        console.log('as')
    }    
}
function chegarEspaco(string,onde){
    string = string.trim()
    for(let i=0;i<string.length;i++){
        if(string[i] == ' '){
            if(onde == 'senha'){senha.style.setProperty(`background-color`, "yellow" );}
            else{login.style.setProperty(`background-color`, "yellow" );}            
            return true
        }
    }
    return false
}