const ingressos = [];


// Função que seleciona os ingressos ai apertar os numeros de 1 a 4 do teclado

function addKeyboardEventListeners () {
    document.addEventListener('keydown', (event) =>  {

    var ingresso1 = document.getElementById("quinta");
    var ingresso2 = document.getElementById("sexta");
    var ingresso3 = document.getElementById("sabado");
    var ingresso4 = document.getElementById("domingo");
    
    var code = event.code;
    if(code == 'Digit1') {
        ingresso1.classList.toggle("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.remove("card-highlight");
    }
    if(code == 'Digit2') {
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.toggle("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.remove("card-highlight");
    }
    if(code == 'Digit3') {
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.toggle("card-highlight");
        ingresso4.classList.remove("card-highlight");
    }
    if(code == 'Digit4') {
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.toggle("card-highlight");
    } 
} , false)
}

addKeyboardEventListeners ()



// Função para selecionar os cards ao clicar com o mouse

selectCard = (selector) => {
    var elements = document.querySelectorAll(selector);
    elements.forEach(function(element) {
        element.classList.toggle("card-selected");
    });
    var index = ingressos.indexOf(selector);
    if (index !== -1) ingressos.splice(index, 1);
    else ingressos.push(selector);
}


// Função de comprar

showSelectCards = () => {
    if (ingressos.length > 0) {
        alert("Ingressos selecionados:" + ingressos);
    }else {
        alert("Selecione os seus ingressos!")
    }
}













