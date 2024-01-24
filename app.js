let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);

function asignarTexoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function intentoDeUsuario(){
    alert('Hiciste click desde la funcion')
    return;
};

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}

asignarTexoElemento('h1', 'Juego del número secreto!');
asignarTexoElemento('p', 'Indica un número del 1 al 10');