var nombre = document.getElementById("nombre");
var email =  document.getElementById("email");
var mensaje = document.getElementById("mensaje");
var error = document.getElementById("error");
//error.style.color = "red";


var form = document.getElementById("form");
    form.addEventListener("submit", function(evt){
        evt.preventDefault();
        var mensajesError = [];

        if(nombre.value === null || nombre.value === ""){
            mensajesError.push("Ingresa tu nombre");
        }

        if(email.value === null || email.value === ""){
            mensajesError.push("Ingresa tu email");
        }

        if(mensaje.value === null || mensaje.value === ""){
            mensajesError.push("Ingresa un mensaje");
        }


        error.innerHTML = mensajesError.join(", ");
});