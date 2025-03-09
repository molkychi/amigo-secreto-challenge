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
let amigoSorteado = 0;
let lista=document.querySelector('#listaAmigos');
let result = document.querySelector('#resultado');

//agregar amigo
function agregarAmigo(){
    let amigo = document.querySelector('#amigo').value;
    //Si la caja está vacía, solicita que ingrese un nombre válido
    if(amigo==""){
        alert('Por favor, inserte un nombre');
        document.querySelector('#amigo').value = '';
    }else{
        listaAmigos.push(amigo);
        actualizarLista();
    }
}

//actualizar lista
function actualizarLista(){
    lista.innerHTML="";
    for(i=0;i<listaAmigos.length;i++){
        let nuevoAmigo = document.createElement("li"); //crea elemento tipo li
        nuevoAmigo.textContent=listaAmigos[i]; //convierte a texto el amigo en lista
        lista.appendChild(nuevoAmigo); //agrega el amigo a la lista visualmente
    }
}

//sortear amigo
function sortearAmigo(){
    numeroMaximo = listaAmigos.length;
    amigoSorteado = Math.floor(Math.random()*numeroMaximo);
    if (numeroMaximo==0){
        alert('Agrega un amigo');
    }else{
        lista.innerHTML="";
        result.innerHTML = 'El amigo secreto es ' + listaAmigos[amigoSorteado];
    }
}