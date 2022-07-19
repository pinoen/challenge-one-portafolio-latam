//Haz tú validación en javascript acá

let nombre = document.querySelector("#nombre");
let errorNombre = document.querySelector("#errorNombre");

let correo = document.querySelector("#email");
let errorCorreo = document.querySelector("#errorEmail");

let asunto = document.querySelector("#asunto");
let errorAsunto = document.querySelector("#errorAsunto");

let mensaje = document.querySelector("#mensagem");
let errorMensaje = document.querySelector("#errorMensaje");

let enviado = document.querySelector(".enviado");

function chequearCampos() {
  if (nombre.value === "") {
    errorNombre.innerHTML = "Este campo no puede quedar vacio";
  } else if (nombre.value.length > 50) {
    errorNombre.innerHTML = "El nombre debe contener como maximo 50 caracteres";
  } else if (correo.value === "") {
    errorCorreo.innerHTML = "Este campo no puede quedar vacio";
  } else if (!correo.value.includes("@") || !correo.value.includes(".")) {
    errorCorreo.innerHTML =
      "Debe tener formato de email usando simbolo arroba (@) y punto (.)";
  } else if (asunto.value === "") {
    errorAsunto.innerHTML = "Este campo no puede quedar vacio";
  } else if (asunto.value.length > 50) {
    errorAsunto.innerHTML = "El asunto debe contener como maximo 50 caracteres";
  } else if (mensaje.value === "") {
    errorMensaje.innerHTML = "Este campo no puede quedar vacio";
  } else if (mensaje.value.length > 300) {
    errorMensaje.innerHTML =
      "El mensaje debe contener como maximo 300 caracteres";
  } else {
    enviado.innerHTML = `Muchas gracias ${nombre.value}! Tu mensaje fue enviado correctamente. Te estaremos contactando a la brevedad.`;
    errorNombre.innerHTML = "";
    errorCorreo.innerHTML = "";
    errorAsunto.innerHTML = "";
    errorMensaje.innerHTML = "";
  }
}

let boton = document.querySelector(".formcontato__botao");

boton.addEventListener("click", (event) => {
  event.preventDefault();
  chequearCampos();
});
