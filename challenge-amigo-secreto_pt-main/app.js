let amigos = [];

function adicionarAmigo(){
    let getName = document.querySelector(".input-name"); //Selecionando no HTML qual a tag quero mexer
    if (getName.value == ""){ // Identificando se o input está vazio
        alert("Por favor, insira um nome válido!");
    } else{
        amigos.push(getName.value); // Colocando na lista o input com o getName.value que armazena o que o usuário digitou
        getName.value = ""; // Após o usuário adicionar o input vai ser limpo
        listarAmigos();
    }
}

function listarAmigos(){
    let elementoLista = document.getElementById('listaAmigos');
    elementoLista.innerHTML = "";  // Limpar a lista existente

    for (let i = 0; i < amigos.length; i++){
        let item = document.createElement('li');  // Criar um novo elemento de lista
        item.textContent = amigos[i];  // Definir o texto do elemento de lista
        elementoLista.appendChild(item);  // Adicionar o elemento de lista ao elemento da lista
    }
}
listarAmigos();

function sortearAmigo(){
    if (amigos.length == 0){ //Verificando se a lista está vazia, caso o tamanho(length) da lista for igual a 0, signfica que está vazia.
        alert("A lista está vazia!");
    } else{
        let sorteado = parseInt(Math.random() * amigos.length); // Criando um indice aleatorio baseado na quantidade de pessoas estão na lista (amigos.length)
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = amigos[sorteado];
    }
}
