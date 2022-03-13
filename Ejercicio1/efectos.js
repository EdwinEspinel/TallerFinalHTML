const main = () => {
    var entradas = document.getElementsByClassName('formulario-entrada');

    for (var i = 0; i < entradas.length; i++) {
        entradas[i].addEventListener('keyup', function () {
            if (this.value.length >= 1) {
                this.nextElementSibling.classList.add('fijar');
            } else {
                this.nextElementSibling.classList.remove('fijar');
            }
        })
    }
}
function captura(){
    var nombre=document.getElementById('entrada-nombre').value;
    var correo=document.getElementById('entrada-correo').value;
    var asunto=document.getElementById('entrada-asunto').value;
    var mensaje=document.getElementById('entrada-mensaje').value;
    if(nombre.length<1){
        alert("Le falta el nombre");
    }
    if(correo.length<1){
        alert("Le falta el correo");
    }
    if(asunto.length<1){
        alert("Le falta el asunto");
    }
    if(mensaje.length<1){
        alert("Le falta el mensaje");
    }
    if(nombre.length>0 & correo.length>0  & asunto.length>0 & mensaje.length>0){
        alert("Su mensaje se ha enviado correctmente");
        console.log("");
        console.log(nombre);
        console.log(correo);
        console.log(asunto);
        console.log(mensaje); 
    }
}
function reset(){
    formulario.reset;
}

