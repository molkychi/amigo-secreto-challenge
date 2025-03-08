// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/*
* Amigo Secreto
* 7 de marzo de 2025
* 
* El usuario escribe el nombre de un amigo, generando una lista.
* Esa lista se usará para sortear el nombre de algún amigo.
* Realizado por Alexa Quero 
*/

//variables
let listaAmigos = [];
let numeroMaximo = 0;
//numeroMaximo=listaAmigos.length();

//agregar amigo
function agregarAmigo(){
    let amigo = document.querySelector('#amigo').value;
    //Si la caja está vacía, solicita que ingrese un nombre válido
    if(amigo==""){
        alert('Por favor, inserte un nombre');
        limpiarCaja();
    }else{
        alert('Lista actualizada');
        listaAmigos.push(amigo);
        actualizarLista();
        console.log(listaAmigos);
    }
}

//actualizar lista
function actualizarLista(){

}

//sortear amigo
function sortearAmigo(){
    numeroMaximo = listaAmigos.length;
    let amigoSorteado = Math.floor(Math.random()*numeroMaximo);
    if (numeroMaximo==0){
        alert('Agrega un amigo');
    }else{
        alert('AMIGO SOO');
        alert('AMIGO SORTEADO' +listaAmigos[amigoSorteado]);
    }
}

//asignar texto
function asignarTexto(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//limpiar caja
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
