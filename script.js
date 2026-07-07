const mensagem = "* teste teste teste teste teste teste teste teste teste teste teste teste teste.";

const texto = document.getElementById("text");

let indice = 0;

function escrever(){

    if(indice >= mensagem.length){

        return;

    }

    texto.textContent += mensagem.charAt(indice);

    indice++;

    setTimeout(escrever,30);

}

window.addEventListener("load",()=>{

    texto.textContent="";

    escrever();

});
