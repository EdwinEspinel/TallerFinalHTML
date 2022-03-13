function cambioColor() {
    var seleccion = document.getElementsByClassName('alcalinas');
    var seleccion2 = document.getElementsByClassName('dulce');
    var cambio = document.getElementById('cambiar');
    var estado = cambio.dataset.value;
    switch (Number(estado)) {
        case 0:
            for (var i = 0; i < seleccion.length; i++)
            {
                seleccion[i].classList.remove('estilo1');
                seleccion[i].classList.add('estilo2');
            }
            for (var j = 0; j < seleccion2.length; j++)
            {
                seleccion2[j].classList.remove('estilo2');
                seleccion2[j].classList.add('estilo1');
            }
            cambio.dataset.value = '1';
            break;
            
        case 1:
            for (var i = 0; i < seleccion.length; i++)
            {
                seleccion[i].classList.remove('estilo2');
                seleccion[i].classList.add('estilo1');
            }
            for (var j = 0; j < seleccion2.length; j++)
            {
                seleccion2[j].classList.remove('estilo1');
                seleccion2[j].classList.add('estilo2');
            }
            cambio.dataset.value = '0';
            break;
        default:
            break;
    }
}