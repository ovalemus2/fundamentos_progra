const arreglodebotones = document.querySelectorAll("button");
const numerohtml = document.querySelector(".flex h2");

let numeroReal = 0;
numerohtml.innerText = numeroReal;

function sumar(sumando){
    numeroReal = numeroReal + sumando;
    numerohtml.innerText = numeroReal
}

arreglodebotones.forEach((boton)=>{
    boton.addEventListener('click', (evento)=>{
        let numero = Number(evento.target.innerText);
        sumar(numero);
        // console.log(evento.target.innerText);
    })

})
