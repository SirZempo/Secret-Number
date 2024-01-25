let numeroSecreto;
//console.log(`El numero Secreto es ${numeroSecreto}`);
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;    
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(`El numero de Usuario es ${numeroDeUsuario}`);
    if(numeroSecreto === numeroDeUsuario){
        asignarTextoElemento('p',`Acertaste!!! tu numero de intentos fue en  ${intentos} ${(intentos === 1) ? 'ves' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        //El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', "El numero secreto es menor");
        }
        else{
            asignarTextoElemento('p', "El numero secreto es mayor");
        } 
        intentos ++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    //Se puede usar querySelector para usarlo con ID
    let valorCaja = document.querySelector('#valorUsuario').value = '';
    return;
}

function generarNumero() {
    let numerGenerado = Math.floor(Math.random()*numeroMaximo + 1); 

    console.log(`numero secreto es: ${numerGenerado}`);
    console.log(`la lista de numeros es: ${listaNumerosSorteados}`)
    console.log(listaNumerosSorteados);
    
    //Ya sorteamos todos los numero?
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', `Ya se asignaron todos los numeros posibles`);
    }
    else{
            //Si el numero generado esta incluido en la lista 
            if(listaNumerosSorteados.includes(numerGenerado)){
                return generarNumero();
            } 
            else {
                listaNumerosSorteados.push(numerGenerado);
                return numerGenerado;
            }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', "Nuevo juego v3");
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumero();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Desabilitar el boton de nuevo juego
    condicionesIniciales();
    //Inicializar en número intentos
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

//Saber el ultimo elemento de una lista

/*
    let numeros = [1, 2, 5];
    console.log(numeros[numeros.length - 1]);
*/