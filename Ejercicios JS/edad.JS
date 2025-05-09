const boton = document.getElementById('boton');
const entrada = document.getElementById('entrada');
const texto = document.getElementById('texto');

function CalcularEdad (){
    const añoActual = new Date().getFullYear();
    const año = parseInt(entrada.value)

    if (isNaN(año)|| año>añoActual){
        texto.innerText =`Año invalido`
        return;
    }

    const edad = añoActual-año

    if (edad>115){
        texto.innerText =`Año invalido`
        return;
    };

    texto.innerText =edad
    
};

boton.addEventListener('click',CalcularEdad)