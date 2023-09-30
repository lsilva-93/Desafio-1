precio = 400000
let contador = 0
let totalValor = 0

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

totalSpan = document.querySelector(".valor-total")
cantidadSpan = document.querySelector(".cantidad")
alerta = document.querySelector(".alerta-body")
alerta.style.color = "#f70000"

function aumenta () {
    contador ++;
    cantidadSpan.innerHTML = contador;
    totalValor = contador * precio;
    totalSpan.innerHTML = totalValor
    alerta.innerHTML = ""
}

function disminuye () {
    if (contador <= 0){

    cantidadSpan.innerHTML = contador;
    totalValor = contador * precio;
    totalSpan.innerHTML = totalValor
    alerta.innerHTML = "La cantidad debe ser mayor a 0"
        alerta.st
    } else {

    contador --;
    cantidadSpan.innerHTML = contador;
    totalValor = contador * precio;
    totalSpan.innerHTML = totalValor
    
    }
    
}