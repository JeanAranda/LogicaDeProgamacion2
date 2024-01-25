let numeroSecreto = generarNumeroSecreto();

function asignarTexoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    if (numeroDeUsuario === numeroSecreto){
        asignarTexoElemento('p','Acertaste el numero');
    }else if(numeroDeUsuario > numeroSecreto){
        asignarTexoElemento('p', 'El numero secreto es menor');
    }else {
        asignarTexoElemento('p', 'El numero secreto es mayor')
    }
    return;
};

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}

asignarTexoElemento('h1', 'Juego del número secreto!');
asignarTexoElemento('p', 'Indica un número del 1 al 10');