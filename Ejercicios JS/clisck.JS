let contador = 0

const boton = document.getElementById('boton')
const resultado = document.getElementById('resultado')

boton.addEventListener("click",() =>{
    contador++;
    resultado.textContent = `Numero de clicks ${contador}`;

});