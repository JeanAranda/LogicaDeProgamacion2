let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
console.log(numeroSecreto);

function asignarTexoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto){
        asignarTexoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        //el usuario no acerto
    }else if(numeroDeUsuario > numeroSecreto){
        asignarTexoElemento('p', 'El numero secreto es menor');
    }else {
        asignarTexoElemento('p', 'El numero secreto es mayor')
    }
    intentos++;
    limpiarCaja();
    return;
};

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}

asignarTexoElemento('h1', 'Juego del número secreto!');
asignarTexoElemento('p', 'Indica un número del 1 al 10');