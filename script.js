const mensagem = "* teste teste teste teste teste teste teste teste teste teste teste teste teste.";

const texto = document.getElementById("text");

let indice = 0;

function escrever() {

    if (indice >= mensagem.length) {
        return;
    }

    texto.textContent += mensagem[indice];

    indice++;

    setTimeout(escrever, 30);

}

window.onload = () => {

    texto.textContent = "";

    escrever();

};
