

function mudar(i){
    let k = document.getElementById('e'+i)
    if(k.style.display !== 'none')
    {
        k.style.display = 'none';
    }else{
        k.style.display = ''
    }
}