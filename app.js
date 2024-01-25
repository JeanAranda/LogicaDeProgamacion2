let numeroSecreto = generarNumeroSecreto();

function asignarTexoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    console.log(typeof (numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(typeof (numeroDeUsuario));
    console.log(numeroDeUsuario === numeroSecreto);
    return;
};

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}

asignarTexoElemento('h1', 'Juego del número secreto!');
asignarTexoElemento('p', 'Indica un número del 1 al 10');