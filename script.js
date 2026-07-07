const mensagem = "* teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste.";

const texto = document.getElementById("text");

let indice = 0;
let escrevendo = true;

function escrever() {

    if (indice >= mensagem.length) {
        escrevendo = false;
        return;
    }

    texto.textContent += mensagem[indice];
    indice++;

    // velocidade parecida com Undertale
    setTimeout(escrever, 28);

}

window.onload = () => {

    texto.textContent = "";

    escrever();

};
