const DisplayValorAnterior = document.getElementById('.Valor-anterior');
const DisplayValorActual = document.getElementById('.Valor-actual');
const BotonesNumeros = document.querySelectorAll('.Numero');
const BotonesOperadores = document.querySelectorAll('.Operador');

const display = new Display(DisplayValorAnterior, DisplayValorActual);

BotonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
       
})