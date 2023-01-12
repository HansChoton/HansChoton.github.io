
function iniciar(){
    document.getElementById("txtinicio").style.display = "none";
    document.getElementById("btninicio").style.display = "none";
    document.getElementById("imgoutput").style.display = "none";
    document.getElementById("btncopiar").style.display = "inline";
    document.getElementById("txtoutput1").style.display = "none";
    document.getElementById("txtinput2").style.display= "inline";
}
function encriptar() {
    var texto = document.getElementById("txtinput2").value.toLowerCase();
    var txtinput = texto.replace(/e/ig,"enter");    
    var txtinput = txtinput.replace(/i/ig,"imes");
    var txtinput = txtinput.replace(/o/ig,"ober");
    var txtinput = txtinput.replace(/a/ig,"ai");
    var txtinput = txtinput.replace(/u/ig,"ufat");
    
    document.querySelector("#txtoutput3").value = txtinput;
}

function desencriptar() {
    var texto = document.getElementById("txtinput2").value.toLowerCase();
    var txtinput = texto.replace(/enter/ig,"e");    
    var txtinput = txtinput.replace(/imes/ig,"i");
    var txtinput = txtinput.replace(/ober/ig,"o");
    var txtinput = txtinput.replace(/ai/ig,"a");
    var txtinput = txtinput.replace(/ufat/ig,"u");
    
    document.querySelector("#txtoutput3").value = txtinput;
}

function copiar() {
    var texto = document.querySelector("#txtoutput3");    
    texto.select();
    document.execCommand("copy");
}