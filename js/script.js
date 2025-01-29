const btPlus = document.querySelector(".js-plus");
const colTransport = document.querySelector(".conteneur-transport");

btPlus.addEventListener("click", fouvreFerme);

function fouvreFerme(){
    colTransport.classList.toggle("conteneur-transports-invisible");
}