const menuNavegacion = document.getElementById("navegacion-menu"),
      toggleNavegacion = document.getElementById("navegacion-toggle"),
      menuClose = document.getElementById("navegacion-close"),
      contenido = document.querySelector(".main");

if(toggleNavegacion) {

    toggleNavegacion.addEventListener("click", function() {
        menuNavegacion.classList.add("show");
        menuClose.classList.add("show-close");
        toggleNavegacion.setAttribute("style","z-index: 0");
        contenido.classList.add("blur");

    })
}

if(menuClose) {

    menuClose.addEventListener("click", function() {
    menuNavegacion.classList.remove("show");
    menuClose.classList.remove("show-close");
    contenido.classList.remove("blur");

    })
}

const inputs = document.querySelectorAll(".formulario__input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;

  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

const enlaces = document.querySelectorAll(".navegacion__enlace");

enlaces.forEach(enlace => {
    enlace.addEventListener("click", () => {
        menuNavegacion.classList.remove("show");
        contenido.classList.remove("blur");
    })
});

const formulario = document.querySelector(".contacto__formulario")

const validaciones = {
    nombre: /^[a-zA-ZÁ-ÿ\s]+$/,
    apellido: /^[a-zA-ZÁ-ÿ\s]+$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z\s0-9-]+\.[a-zA-Z\s0-9-.]+/,
    espacios: /^\s*$/,
    mensaje: /(.)/
}

const campos = {
    nombre: false,
    apellido: false,
    email:false,
    mensaje: false
}

const validarFormulario = (event) => {
    switch (event.target.name) {
        case "nombre":
        validarCampos(validaciones.nombre, event.target, 'nombre');
        break;

        case "apellido":
        validarCampos(validaciones.apellido, event.target, 'apellido');
        break;

        case "email":
        validarCampos(validaciones.email, event.target, 'email');
        break;
        
        case "mensaje":
        validarCampos(validaciones.mensaje, event.target, 'mensaje');
        break;
    }
}

inputs.forEach(input => {
    input.addEventListener("keyup", validarFormulario);
})

const validarCampos = (expresion, input, campo) => {
    if(input.value == "" || (validaciones.espacios).test(input.value)) {
        document.querySelector(`.campo-${campo} .formulario__estado-${campo}`).classList.remove("fa-circle-xmark");
        document.querySelector(`.campo-${campo} .formulario__estado-${campo}`).classList.remove("fa-circle-check");
        document.querySelector(`.formulario__${campo}`).classList.remove("activo");
    } else {
        if(expresion.test(input.value)) {
            document.querySelector(`.campo-${campo}`).classList.remove("formulario__campo--incorrecto");
            document.querySelector(`.campo-${campo}`).classList.add("formulario__campo--correcto");
            document.querySelector(`.campo-${campo} .formulario__estado-${campo}`).classList.remove("fa-circle-xmark");
            document.querySelector(`.campo-${campo} .formulario__estado-${campo}`).classList.add("fa-circle-check");
            document.querySelector(`.formulario__${campo}`).classList.remove("activo");
            campos[campo] = true;
        } else {
            document.querySelector(`.campo-${campo}`).classList.remove("formulario__campo--correcto");
            document.querySelector(`.campo-${campo}`).classList.add("formulario__campo--incorrecto");
            document.querySelector(`.campo-${campo} .formulario__estado-${campo}`).classList.remove("fa-circle-check");
            document.querySelector(`.campo-${campo} .formulario__estado-${campo}`).classList.add("fa-circle-xmark");
            document.querySelector(`.formulario__${campo}`).classList.add("activo");
            campos[campo] = false;
        }    
    }
}

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
    if(campos.nombre && campos.apellido && campos.email && campos.mensaje) {
        document.querySelector(".formulario__estado-valido").classList.add("activo");
        setTimeout(() => {document.querySelector(".formulario__estado-valido").classList.remove("activo")},2500);
    
    inputs.forEach(input => {
        input.parentNode.classList.remove("focus");
        input.parentNode.classList.remove("formulario__campo--correcto");
        campos[input.name] = false;
    })

    formulario.reset();

    } else {
        inputs.forEach(input => {
            if(input.value == "" || (validaciones.espacios).test(input.value)) {
                document.querySelector(`.formulario__vacio-${input.name}`).classList.add("activo");
                setTimeout(() => {document.querySelector(`.formulario__vacio-${input.name}`).classList.remove("activo")},2500);
            } else {
                document.querySelector(`.formulario__vacio-${input.name}`).classList.remove("activo");
            }
        })
    }
})

const lista = document.querySelector(".colores__lista");
const colorContenido = document.querySelector(".colores__contenido");
const colorIcono = document.querySelector(".colores__icono");

colorContenido.addEventListener("click", () => {
    lista.classList.toggle("open");
});

const colores = document.querySelectorAll(".colores__item");
document.querySelector(":root").style.setProperty("--principal", "#EB4A4A");

colores.forEach(color => {
    color.addEventListener("click", () => {
        const colorActual = color.dataset.id;
        console.log(colorActual);
        document.querySelector(":root").style.setProperty("--principal", colorActual);
    })
})

window.addEventListener("scroll", () => {
    lista.classList.remove("open");
})