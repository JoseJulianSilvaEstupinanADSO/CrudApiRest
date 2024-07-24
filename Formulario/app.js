import validations from "./modulos/validaciones.js";
import validarString from "./modulos/string.js";
import validarNumber from "./modulos/number.js";
import validarCorreo from "./modulos/correo.js";

const $dom = document;

let $nombre = $dom.querySelector(".input__nombre");
let $apellido = $dom.querySelector(".input__apellido")
let $documento = $dom.querySelector(".input__documento")
let $telefono = $dom.querySelector(".input__telefono")
let $correo = $dom.querySelector(".input__correo")
let $check = $dom.querySelector(".input__checkbox")
let $enviar = $dom.querySelector("#enviar")
let $form = $dom.querySelector(".formulario")
let $select = $dom.querySelector(".select")

let $elemets = $dom.querySelectorAll("div.content > input.input")

let check = () => {
    if ($check.checked) {
        $enviar.removeAttribute("disabled")
    }
    else{
        $enviar.setAttribute("disabled","")
    }
}


$check.addEventListener("click", check)

$nombre.addEventListener("keypress", (event) => {
    validarString(event, "string", $nombre)
});
$apellido.addEventListener("keypress", ((event) => {
    validarString(event, "string", $apellido)
}));

$correo.addEventListener("blur", ((event) => {
    validarCorreo(event, "email", $correo)
}))

$documento.addEventListener("keypress", ((event) => {
    validarNumber(event, "number", $documento)
}));

$telefono.addEventListener("keypress", ((event) => {
    validarNumber(event, "number", $telefono)    
}));

$form.addEventListener("submit", ((event) => {
    validations(event, $elemets, $select)
}))
