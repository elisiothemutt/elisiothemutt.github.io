const dialogo = "* Oi.\n* Tudo bem com você?";

const texto = document.getElementById("text");

let i = 0;

function escrever(){

    if(i < dialogo.length){

        texto.textContent += dialogo[i];

        i++;

        setTimeout(escrever,35);

    }

}

escrever();
