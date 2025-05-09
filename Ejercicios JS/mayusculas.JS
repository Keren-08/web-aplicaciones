const boton = document.getElementById('boton')
const texto = document.getElementById('texto')
const entrada = document.getElementById('entrada')

function MAyusculas (){
    const palabra = entrada.value.toUpperCase();
    texto.innerText = palabra

}

boton.addEventListener('click',MAyusculas)