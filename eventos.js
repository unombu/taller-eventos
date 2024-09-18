 //use query selector asi solo me retorna uno y no existe la posibilidad que me retorne más como con getElementsByClassName
//y asi dsp me deja usar el addEventListener, sino no me deja
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("div").addEventListener('click', function() {
        alert("Hola! Soy el div");
    });

    document.getElementById("boton").addEventListener("click", function(e) {
        e.stopPropagation();
        alert('Hola!');
    });
})