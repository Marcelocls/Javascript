//referenciar a div camada

const camada = document.querySelector("#camada");

setTimeout(()=>{
    camada.style.opacity="0.2";
    camada.style.top="-200px"
    camada.style.heigth="0vh"
    camada.style.width="0vw"
}, 5000)