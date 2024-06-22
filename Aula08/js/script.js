let px = 0;
let canto = 0;

function movimentaRed(){

    if(px >= 600){
        px = 600
    }
    else{
        px +=5;
    }
    document.getElementById("um").style.marginLeft=px+"px";
    document.getElementById("um").style.borderRadius=canto+"px";
    canto+=1;

    let r = parseInt(Math.random()*255);
    let g = parseInt(Math.random()*255);
    let b = parseInt(Math.random()*255);

    document.getElementById("um").style.backgroundColor=`rgb(${r},${g},${b})`;
}

function relogio(){
//referencia da biblioteca date
let tempo = new Date();
let hora = tempo.getHours();
let minuto = tempo.getMinutes();
let segundo = tempo.getSeconds();
document.getElementById("dois").innerHTML=`${hora} : ${minuto} : ${segundo}`;
}

// window.setInterval(relogio, 500)
/*let tm = 1;
let estado = "aumentar";

setInterval(()=>{


    if(tm >=3){
        estado = "diminuir";
    }
    if(tm<=1){
        estado = "aumentar";
    }

    if(estado=="aumentar"){
        tm+=0.1;
    }
    else{
        tm -=0.1;
    }


document.getElementById("tres").style.transform=`scale(${tm})`;
},100)*/


let pos = 0;
let direcao = "direita";

setInterval(()=>{

    if(pos >= 1720){
        direcao = "esquerda";
        document.getElementById("quatro").style.backgroundColor="red";
    }

    if(pos <= 1){
        direcao = "direita";
        document.getElementById("quatro").style.backgroundColor="green";
    }

    if(direcao=="direita"){
       pos+=10;
}
else{
    pos -=10;
}
document.getElementById("quatro").style.left=`${pos}px`;
},50)

