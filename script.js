const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const lampada = document.getElementById('lampada');
let quebrada = false;

function ligarlamp(){
    if(quebrada == true){
    return(quebrarlamp())
}else{
    return(lampada.setAttribute('src', 'img/ligada.jpg'))
}}

function desligarlamp(){
    if(quebrada == true){
    return(lampada.setAttribute('src', 'img/quebrada.jpg'))
}else{
    return(lampada.setAttribute('src', 'img/desligada.jpg')) 
    }
}
function quebrarlamp(){
    quebrada = true;
    if(quebrada == true){
    return(lampada.setAttribute('src', 'img/quebrada.jpg'))
}else{

}
}

lampada.addEventListener('dblclick', quebrarlamp)
ligar.addEventListener('click', ligarlamp)
desligar.addEventListener('click', desligarlamp)