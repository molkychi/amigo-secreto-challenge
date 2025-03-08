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
    let lista=document.querySelector("#listaAmigos");

    for(i=0;i<listaAmigos.length;i++){
        console.log(listaAmigos[i]);
    }
}

//sortear amigo
function sortearAmigo(){
    numeroMaximo = listaAmigos.length;
    let amigoSorteado = Math.floor(Math.random()*numeroMaximo);
    console.log('amigo sorteado: '+amigoSorteado);
    if (numeroMaximo==0){
        alert('Agrega un amigo');
    }else{
        alert('AMIGO SORTEADO' +listaAmigos[amigoSorteado]);
    }
}

//limpiar caja
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
