var valorTopLeft = document.getElementById("ValorTopLeft");
var valorTopRigth = document.getElementById("ValorTopRigth");
var valorEndEnd = document.getElementById("ValorEndEnd");
var valorEndStart = document.getElementById("ValorEndStart");
var quadrado = document.getElementById("Quadrado")

function trocar()
{
    quadrado.style.borderTopLeftRadius = valorTopLeft.value + 'px';
    quadrado.style.borderTopRightRadius = valorTopRigth.value + 'px';
    quadrado.style.borderEndEndRadius = valorEndEnd.value + 'px';
    quadrado.style.borderEndStartRadius = valorEndStart.value + 'px';
}