const colorR=document.querySelector(".luzroja");
const colorA=document.querySelector(".luzambar");
const colorV=document.querySelector(".luzverde");
let bulbA=false;
let bulbR=false;
let bulbV=false;

function Rojo(){

    if(bulbV==true || bulbA==true){
    limpiar();
    }
    colorR.style.background="red";
    colorR.style.transition="all 2s";
    bulbR=true;
    


}


function verde(){
    if(bulbR==true || bulbA==true){
        limpiar();
    }
    colorV.style.background="green";
    colorV.style.transition="all 2s";
    bulbV=true;
}


function amarillo(){
    if(bulbR==true || bulbV==true){
        limpiar();
    }
    colorA.style.background="yellow";
    colorA.style.transition="all 2s";
    bulbA=true;
}




function limpiar(){
    colorA.style.background="black";
    colorR.style.background="black";
    colorV.style.background="black";
} 