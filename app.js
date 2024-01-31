let listaGenerica = [];
let lenguajesDeProgramacion = ['Javascript','C','C++','Kotlin','Python'];
console.log(lenguajesDeProgramacion);

lenguajesDeProgramacion.push('jAVA','rUBY','gOlANG');
console.log(lenguajesDeProgramacion);

function mostrarArray(array){
    let position = 0;
    while(position<array.length){
        console.log(`[${array[position]}] `);    
        position++;
    }
    return;
}

mostrarArray(lenguajesDeProgramacion);

function mostrarArrayInverso(array){
    let position = array.length-1;
    while(position>=0){
        console.log(`[${array[position]}] `);    
        position--;
    }
    return;
}
mostrarArrayInverso(lenguajesDeProgramacion);


function promedioListaNumeros(lista){
    //iterar para relizar la suma recorriendo la lista
    let suma = 0;
    let contador = 0;
    while(contador<lista.length){
        suma += lista[contador];
        //incrementar un contador en cada iteracion
        contador++;
    }
    //realizar el promedio cuando salga del recorrido
    return suma/contador;
    
}
//lista ejemplo
listaGenerica.push(1,2,3,0,4);
mostrarArray(listaGenerica);
console.log(promedioListaNumeros(listaGenerica));

function mayorMenorListaNumerica(lista){
    let menor = lista[1];
    let mayor = lista[1];
    let position = 0;
    while(position<lista.length){
        if(lista[position]<menor){
            menor = lista[position];
        }
        else if(lista[position]>mayor){
            mayor = lista[position];
        }
        position++;
    }
    console.log(`mayor= ${mayor} y menor=${menor}`);
    return;
}

mayorMenorListaNumerica(listaGenerica);

function devuelvePosicionNumero(lista,numero){
    if(lista.includes(numero)){
        return lista.indexOf(numero);
    }
    else{
        return -1;
    }
}

console.log(devuelvePosicionNumero(listaGenerica,5));
console.log(devuelvePosicionNumero(listaGenerica,3));

function sumaListas(lista1,lista2){
    let position = 0;
    let listaSuma = [];
    while(position<lista1.length){
        listaSuma[position] = lista1[position] + lista2[position];
        position++;
    }
    return console.log(listaSuma);
}

let lista1 = [1,1,1,1,1];
let lista2 = [3,4,5,6,7];

sumaListas(lista1,lista2);


let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();
