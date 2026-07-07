const mensagem = "* Olá.\n* Tudo bem com você?";

const texto = document.getElementById("text");

let indice = 0;

function escrever() {

    if (indice >= mensagem.length)
        return;

    texto.textContent += mensagem[indice];
    indice++;

    setTimeout(escrever, 40);

}

window.onload = escrever;
